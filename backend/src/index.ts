require("module-alias").addAlias("@", __dirname);
import "dotenv/config";
import express from "express";
import createDatabaseConnection from "@/database/createConnection";
import createExampleAnnouncements from '@/database/createBlobData';
const app = express();
const port = 5003; // default port to listen

const establishDatabaseConnection = async (): Promise<void> => {
    try {
      await createDatabaseConnection();
    } catch (error) {
      console.log(error);
    }
  };

// define a route handler for the default home page
app.get( "/", ( _, res ) => {
    res.send( "Hello sdf!" );
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );

const bootstrap = async (): Promise<void> => {
  
    await establishDatabaseConnection();
    
    await createExampleAnnouncements();
  };
  
  bootstrap();