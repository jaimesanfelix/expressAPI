import mongoose from 'mongoose';

export const dbConnection = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://jaimesanfelix7_db_user:P3LLh47RfBrYMS4G@cluster0.aj6ok54.mongodb.net/',
    );
  } catch (error) {
    throw new Error('Error al conectar a la base de datos: ' + error.message, {
      cause: error,
    });
  }
};
