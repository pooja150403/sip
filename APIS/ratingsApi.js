const exp = require("express");
const ratingsApp = exp.Router();
const expressAsyncHandler = require("express-async-handler");

ratingsApp.use(exp.json());

ratingsApp.get(
    "/get-rating/:city/:hospital",
    expressAsyncHandler(async (request, response) => {
        const city=request.params.city
        const hospital=request.params.hospital
        let ratingsCollectionObject = request.app.get("ratingsCollectionObject");
        let data = await ratingsCollectionObject.findOne({$and: [ {name:hospital} , {city:city} ] });
        if(data===null){
            data = await ratingsCollectionObject.insertOne({
                name: hospital,
                city: city,
                doctors:0,
                infra:0,
                equip:0,
                medication:0,
                services:0,
                count:0
            })
            data = await ratingsCollectionObject.findOne({$and: [ {name:hospital} , {city:city} ] });
        }

        response.send(data);
    })
);


ratingsApp.post(
    "/post-rating/:city/:hospital",
    expressAsyncHandler(async (request, response) => {
        const city=request.params.city
        const hospital=request.params.hospital
        
        const userObj=request.body

        let ratingsCollectionObject = request.app.get("ratingsCollectionObject");

        let data = await ratingsCollectionObject.findOne({$and: [ {name:hospital} , {city:city} ] });
        if(data===null){
            data = await ratingsCollectionObject.insertOne({
                name: hospital,
                city: city,
                doctors:0,
                infra:0,
                equip:0,
                medication:0,
                services:0,
                count:0
            })
            data = await ratingsCollectionObject.findOne({$and: [ {name:hospital} , {city:city} ] });
        }


        let newObj={
            ...data
        }

        newObj.doctors=(newObj.doctors*newObj.count+userObj.doctors)/(newObj.count+1)
        newObj.infra=(newObj.infra*newObj.count+userObj.infra)/(newObj.count+1)
        newObj.equip=(newObj.equip*newObj.count+userObj.equip)/(newObj.count+1)
        newObj.medication=(newObj.medication*newObj.count+userObj.medication)/(newObj.count+1)
        newObj.services=(newObj.services*newObj.count+userObj.services)/(newObj.count+1)
        
        newObj.count++

        await ratingsCollectionObject.deleteOne( { _id : newObj._id} )
        delete newObj._id
        
        data = await ratingsCollectionObject.insertOne(newObj)

        response.send(data);
    })
);

module.exports = ratingsApp;
