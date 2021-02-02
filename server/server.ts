import * as express from 'express';
import * as path from 'path';
import * as compression from 'compression';
import * as cors from 'cors';
import { Request, Response } from 'express';

const users = require('../../users.json');

class App {
	private PORT: string | number;
	private express: express.Application = express();
	constructor(port: string | number) {
		this.PORT = port;
		this.middleware();
		this.routes();
		this.listen();
	}

	middleware() {
		this.express.use(express.static('./dist/recruiter'));
		this.express.use(compression());
		this.express.use(cors());
	}

	routes() {
		this.express.get('/users', (req: Request, res: Response) => {
			res.send(users);
		});
		this.express.get('*', (req: Request, res: Response) => {
			res.sendFile(path.join(__dirname, '../recruiter/index.html'));
		});
	}

	listen() {
		this.express.listen(this.PORT, () => {
			console.log(`TennisONE fully operational on ${this.PORT}`);
		});
	}
}

const PORT: string | number = process.env.PORT || 8080;
const server = new App(PORT);
