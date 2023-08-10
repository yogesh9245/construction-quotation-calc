const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://yogeshmanghrani9245:yog92458242@cluster0.c3crwud.mongodb.net/CqcProject?retryWrites=true&w=majority"

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
      
      const fetchedData = await mongoose.connection.db.collection("Quotations").find({}).toArray();
      // console.log(fetchedData)
      global.quotations = fetchedData

      const HouseCategory = await mongoose.connection.db.collection("HouseCategory").find({}).toArray();
      // console.log(global.quotations)
      global.HouseCategory = HouseCategory
      const Services = await mongoose.connection.db.collection("Services").find({}).toArray();
      global.Services = Services;
      // console.log(Services)
      
      const Contractors = await mongoose.connection.db.collection("Contractors").find({}).toArray();
      global.Contractors = Contractors;

      // const Costs = await mongoose.connection.db.collection("Costs").find({}).toArray();
      // global.Contractors = Contractors;
      // console.log(Costs)
      // console.log(Contractors)
      
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }
  

module.exports = connectDB();