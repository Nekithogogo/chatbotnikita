const express = require('express');
const logMiddleware = require('./middleware/logMiddleware');
const chatRoutes = require('./routes/chatRoutes');

const app = express();

// Middleware для парсинга JSON
app.use(express.json());

// Твоё пользовательское middleware
app.use(logMiddleware);

// Middleware для раздачи статических файлов из папки 'public'
app.use(express.static('public'));

// Подключение маршрутов
app.use('/api/chat', chatRoutes); // Все маршруты из chatRoutes будут по префиксу /api/chat

module.exports = app; // Экспортируем app