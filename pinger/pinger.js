const cron = require('node-cron');

const cronJob = cron.schedule('0 */14 * * * *', function () {
  console.log(`ping!`);
});
