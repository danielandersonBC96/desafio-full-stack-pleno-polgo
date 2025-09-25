import rateLimit from 'express-rate-limit'

export const limiter = rateLimit({

  windowMs: 60 * 1000, 
  max:5,
  message:{
    error:'Muita requisições,tente novamente mais tarde'
    
  },
  standardHeaders: true,
  legacyHeaders: false
})