import 'dotenv/config';
import express from 'express';
import 'express-async-errors';

import Router from './Router';
import Database from './Database';
import Auth from './Auth';
import cors from 'cors'
class App {
    constructor() {
        this.server   = express();
        this.database = new Database();
        this.auth     = new Auth(this.database);
        this.router   = new Router(this.database, this.auth)

        this.middlewares();
        this.routes();
        this.exceptionHandler();
    }

    middlewares() {
        this.server.use(cors())
        this.server.use(express.json());
        this.server.use(function(req, res, next) {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Credentials", "true");
            res.setHeader(
                "Access-Control-Allow-Methods",
                "GET,HEAD,OPTIONS,POST,PUT,DELETE"
            );
            res.setHeader(
                "Access-Control-Allow-Headers",
                "Origin,Cache-Control,Accept,X-Access-Token ,X-Requested-With, Content-Type, Access-Control-Request-Method"
            );
            if (req.method === "OPTIONS") {
                return res.status(200).end();
            }
            next();
        });
    }

    routes() {
        this.server.use(this.router.routes);
        this.server.use(this.database.getMappedRoutes());
    }

    exceptionHandler() {
        this.server.use(async (err, req, res, next) => {
            console.log(err);
            return res.status(500).json({ error: 'Internal server error' });
        });
    }
}

export default new App().server;
