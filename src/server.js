import express from 'express';

const app = express();
const port = 3322;

app.get('/', (req, res) => {
	res.send('mernbasic API')
});

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});