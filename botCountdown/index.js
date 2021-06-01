// Dependencies
const { text } = require("express");
const express = require("express");
const app = express();
const port = 8080;
const { Telegraf } = require("telegraf");

// const bot = new Telegraf(process.env.BOT_TOKEN)
const bot = new Telegraf("1839890184:AAEipUjUkBRkX-rUG6w0mxmLntqQcV1F1Hk");

// My variables
const sec = 1000;
const min = sec * 60;
const hr = min * 60;
const day = hr * 24;
var d = "Sep 9, 2021";
var status = "";
// END my variables

// Begin Functions

const cntdwn = (input) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(d).getTime();
  const now = new Date().getTime();
  const gap = date - now;

  // Calculation
  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hr);
  const minutes = Math.floor((gap % hr) / min);
  const seconds = Math.floor((gap % min) / sec);

  var result = [];
  result.push(days);
  result.push(hours);
  result.push(minutes);
  result.push(seconds);

  return result;
};

bot.command("countdown", (ctx) => {
  var res = cntdwn();
  ctx.reply(
    res[0] +
      " Days " +
      res[1] +
      " Hours " +
      res[2] +
      " Minutes " +
      res[3] +
      " Seconds Left for GRADUATION"
  );
  setInterval(() => {
    res = cntdwn();
    ctx.reply(
      res[0] +
        " Days " +
        res[1] +
        " Hours " +
        res[2] +
        " Minutes " +
        res[3] +
        " Seconds Left for GRADUATION"
    );
  }, 1000);
});

bot.launch();

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
