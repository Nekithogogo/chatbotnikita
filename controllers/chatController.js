// Пример логики в контроллере
const getBotResponse = (userMessage) => {
  const msg = userMessage.toLowerCase();
  if (msg.includes('привет') || msg.includes('здравствуй')) {
    return "Привет! Как я могу вам помочь?";
  } else if (msg.includes('пока') || msg.includes('до свидания')) {
    return "Пока! Хорошего дня!";
  } else if (msg.includes('помощь')) {
    return "Я могу ответить на приветствие или прощание.";
  }
  return "Я не понимаю. Попробуйте сказать 'привет' или 'пока'.";
};

exports.handleMessage = (req, res) => {
  const { message } = req.body; // Ожидаем тело запроса с полем 'message'
  if (!message) {
    return res.status(400).json({ error: 'Поле "message" обязательно.' });
  }

  const response = getBotResponse(message);
  res.json({ response });
};