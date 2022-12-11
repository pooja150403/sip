const exp = require("express");
const app = exp();
const mclient=require("mongodb").MongoClient;
const path=require('path');
const cors=require("cors")

app.use(cors())
app.use(exp.static(path.join(__dirname,'./build')))

const DBurl="mongodb+srv://rinku:Rinku%402002@cluster0.u9rsl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mclient.connect(DBurl)
.then((client)=>{
  let dbObj=client.db("SIP_POOJA");

  let registrationsCollectionObject=dbObj.collection("registrations");
  let ratingsCollectionObject=dbObj.collection("ratings");

  app.set("registrationsCollectionObject",registrationsCollectionObject);
  app.set("ratingsCollectionObject",ratingsCollectionObject);

  console.log("DB connection success")
})
.catch(err=>console.log('Error in DB connection ',err))

const registrationsApp = require("./APIS/registrationsApi");
const ratingsApp = require("./APIS/ratingsApi");


app.use("/registrations-api", registrationsApp);
app.use("/ratings-api", ratingsApp);

app.use('*', (request, response)=>{
  response.sendFile(path.join(__dirname, './build/index.html'))
})

app.use((request, response, next) => {
  response.send({ message: `path ${request.url} is invalid` });
});

app.use((error, request, response, next) => {
  response.send({ message: "Error occurred", reason: `${error.message}` });
});

app.listen(4000, () => console.log("server listening on port 4000.."));
