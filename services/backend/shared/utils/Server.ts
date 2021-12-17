import express, { Application } from "express";
import trucksRouter from "../../trucks/router/trucks";
import userRouter from "../../users/router/users";

import db from "../db/DataBase";
import cors from "cors";

export class Server {
	private app: Application;
	private port: string;
	private apiPath = {
		truks: "/api/truks",
		users: "/api/users"
	};
	constructor() {
		this.app = express();
		this.port = process.env.PORT ?? "3000";

		this.middlewares();
		this.routes();
	}

	connectDb() {
		setTimeout(function () {
			db.connect((e, client, done) => {
				if (e) {
					console.log("Ocurrio un error al intentar conectarse a la BD");
					console.log(e);
				} else {
					console.log("Se conecto a la base de dato con exito");
				}
			});
		}, 20 * 1000);
	}

	middlewares() {
		this.app.use(cors());
		this.app.use(express.json());
		this.app.use(express.static("public"));
	}

	routes() {
		this.app.use(this.apiPath.truks, trucksRouter);
		this.app.use(this.apiPath.users, userRouter);
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`Servidor to listen for port: ${this.port}`);
		});
	}
}
