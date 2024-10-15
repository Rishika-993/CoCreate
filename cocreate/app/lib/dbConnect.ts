import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number;
}

const connection: ConnectionObject = {};

async function dbConnect() : Promise<void> {
    if(connection.isConnected) {
        console.log("Already connected to the database");
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {})

        //passing options
        // const db = await mongoose.connect(process.env.MONGODB_URI, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     useFindAndModify: false,
        //     useCreateIndex: true
        // });

        connection.isConnected = db.connections[0].readyState;     //do console log db and db.connections[0] to see the structure
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error connecting to the database", error);
        process.exit(1);
    }

    
}

export default dbConnect;