import cron from 'node-cron';

cron.schedule('* * * * *', () => {
  console.log('Buenos días! Son las 08:00');
});
