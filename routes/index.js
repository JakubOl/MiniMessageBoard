const express = require("express");
const router = express.Router();
const formatDistanceToNow = require("date-fns/formatDistanceToNow");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
    formatTime: formatDistanceToNow,
  });
});

router.post("/new", function (req, res, nest) {
  const { message_author, message_text } = req.body;
  messages.push({
    text: message_text,
    user: message_author,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
