const cron = require('node-cron');

const cronJob = cron.schedule('0 */10 * * * *', function () {
  console.log(`ping!`);
});
