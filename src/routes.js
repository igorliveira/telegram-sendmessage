const { Router } = require('express');

const sendMessage = require('./controller/telegramController');

const router = Router();

router.get('/:chatId/:mensagem', (request, response) => {
    sendMessage(request.params.chatId, request.params.mensagem);
    response.send('Mensagem Enviada!')
});

module.exports = router;