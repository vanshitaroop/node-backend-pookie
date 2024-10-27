import mongoose from "mongoose";
const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MONGODB connected successfully");
        // const collections = await mongoose.connection.db.listCollections().toArray();
        // const collectionNames = collections.map(collection => collection.name);
        // console.log("collectionNames",collectionNames)
    } catch (error) {
        console.log("MongoDb connection failed",error);
        process.exit(1);    
    }
}
export default connectDB