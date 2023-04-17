import fs from 'fs';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
const port = 3322;

app.get('/', (req, res) => {
	res.send('mernbasic API')
});

app.get('/employees', (req, res) => {
	const rawEmployees = fs.readFileSync('./src/data/employees.json','utf8');
	const employees = JSON.parse(rawEmployees);
	res.send(employees)
});

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});