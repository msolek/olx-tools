import express from "express";
const app = express();
const port = 5003; // default port to listen

// define a route handler for the default home page
app.get( "/", ( _, res ) => {
    res.send( "Hello sdf!" );
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );

