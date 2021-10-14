import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import Routes from "./routes";
import {User} from "./entity/User";

createConnection().then(async connection => {
    const app = express();
    app.use(bodyParser.json());
    const PORT=process.env.PORT||3000
    app.use('/',Routes)
    app.listen(PORT);
    console.log(`DB connected and server has started on port ${PORT}`);

}).catch(error => console.log(error));
