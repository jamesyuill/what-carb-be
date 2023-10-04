const app = require('./app.js');
const cronJob = require('./pinger/pinger.js');
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

if (process.env.NODE_ENV === 'production') {
  cronJob().start();
}
