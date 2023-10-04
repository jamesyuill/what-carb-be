const cron = require('node-cron');
const http = require('https');

function cronJob() {
  return cron.schedule('0 */10 * * * *', function () {
    http.get('https://what-carb-be.onrender.com/', (res) => {
      console.log('pinged!');
    });
  });
}

module.exports = cronJob;
