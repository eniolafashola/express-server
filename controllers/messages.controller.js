const path = require('path');

function getMessages(req, res) {
    res.render('messages', {
        title: 'Messages to my friends',
        friend: 'Jesus'
    })
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'woo.png'));
}

function postMessage(req, res) {
    console.log('updating messages..');
}

module.exports = {
    getMessages,
    postMessage
};