import { info } from 'loggerjs_jaimesanfelix';

export const log = (req, res, next) => {
  console.log('Esto es un middleware');
  next();
};
export const info_log = (req, res, next) => {
  //const date = new Date().toLocaleDateString('es-ES');
  let start = Date.now();
  res.on('finish', () => {
    let finish = Date.now() - start;
    finish;
    info(req.method);
  });
  next();
};
