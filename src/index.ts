import express from 'express';

const app = express();

app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
  res.send('Hello Node!');
});

app.listen(4000, () => {
  console.log('server running on port 4000');
});
