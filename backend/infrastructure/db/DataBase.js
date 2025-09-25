import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI =  process.env.MONGODB_URI;

export async function connectDB(){
  if(!MONGODB_URI){
    console.error(' Mongo DB não definida no arquivo .env');
    process.exit(1);
  }

  try{
    await mongoose.connect(MONGODB_URI);
    console.log('Mongo DB conectado realizada com sucesso ')
  }catch(erro){
    console.error('Erro ao conectar ao Mongo DB ')
  }

}