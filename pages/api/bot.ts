import type { NextApiRequest, NextApiResponse } from 'next'
const TelegramBot = require('node-telegram-bot-api');


// replace the value below with the Telegram token you receive from @BotFather
const token = '5977669021:AAHmaK49_o1tOQrU0uEO3aBmmOq0KYV9tBo';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });


bot.onText(/\/s (.+)/,(msg:string,match:string)=>{
    console.log(msg,match)
})  

type Data = {
    name: string
  }

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    res.status(200).json({ name: 'John Doe' })
  }