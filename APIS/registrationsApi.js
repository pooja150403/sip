const exp = require("express");
const registrationsApp = exp.Router();
const expressAsyncHandler = require("express-async-handler");

registrationsApp.use(exp.json());

registrationsApp.get(
    "/get",
    expressAsyncHandler(async (request, response) => {
        let registrationsCollectionObject = request.app.get("registrationsCollectionObject");
        const data = await registrationsCollectionObject.find().toArray();
        response.send(data);
    })
);

registrationsApp.get(
    "/get-cities",
    expressAsyncHandler(async (request, response) => {
        let registrationsCollectionObject = request.app.get("registrationsCollectionObject");
        const data = await registrationsCollectionObject.distinct("city")
        response.send(data);
    })
);

registrationsApp.get(
    "/get-hospitals/:city",
    expressAsyncHandler(async (request, response) => {
        const city=request.params.city
        let registrationsCollectionObject = request.app.get("registrationsCollectionObject");
        const data = await registrationsCollectionObject.distinct("name", { city : city })
        // db.inventory.distinct( "item.sku", { dept: "A" } )
        response.send(data);
    })
);

registrationsApp.get(
    "/get-hospital/:city/:hospital",
    expressAsyncHandler(async (request, response) => {
        const city=request.params.city
        const hospital=request.params.hospital
        let registrationsCollectionObject = request.app.get("registrationsCollectionObject");
        const data = await registrationsCollectionObject.find({$and: [ {name:hospital} , {city:city} ] }).toArray()
        response.send(data);
    })
);

registrationsApp.post(
    "/register",
    expressAsyncHandler(async (request, response) => {
        let registrationsCollectionObject = request.app.get("registrationsCollectionObject");
        let newRegistrationsObj = request.body;
        await registrationsCollectionObject.insertOne(newRegistrationsObj);
        response.send({ message: "Registration completed!" });
    })
);

module.exports = registrationsApp;
