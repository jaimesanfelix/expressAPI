import cron from 'node-cron';

cron.schedule('10 * * * *', () => {
  console.log('Buenos días! Son las 08:00');
});
