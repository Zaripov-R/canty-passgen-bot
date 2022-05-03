require('dotenv').config();
const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply(`Welcome, ${ctx.message.from.first_name}`));
bot.hears('hort', ctx => {
    const num = Math.floor(Math.random() * 2);
    ctx.reply(num === 0 ? 'Head' : 'Tail');
})

bot.hears('pass', ctx => {
    let pass = '';
    const symbs = '1234567890!@#$%^&*()_+-=qwertyuiop[]\';lkjhgfdsazxcvbnm,,./QWERTYUIOP{}|":LKJHGFDSAZXCVBNM<>?';
    for (let i = 0; i < 10; i++)
        pass += symbs[Math.floor(Math.random() * symbs.length)];
    ctx.reply(pass);
})

bot.launch();
