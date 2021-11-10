let messages = [];

let messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};


function Message(type, user, message) {
    this.type = type;
    this.user = user;
    this.message = message;
}


let data = [
    {
        type: messageType.out,
        user: 'Mike',
        message: 'Hey, you have lunch plans?'
    },
    {
        type: messageType.in,
        user: 'Joe',
        message: 'Hi Mike!, No, how about Taco Bell?'
    },
    {
        type: messageType.out,
        user: 'Mike',
        message: "Ok, let's go!"
    }
];


function createMessageElement(message) {
    let messageText = document.createTextNode(
        message.user + ': ' + message.message
    );

    let messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    messageEl.className = message.type;

    return messageEl;
}

function addMessageHandler(e){
    let user, type;
    let messageInput = document.getElementById('message-input');
    let messagesContainerEL = document.getElementById('message-container');

    switch (e.target.id){
        case 'send-button':
            user = 'Mike';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'Joe';
            type = messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
            break;
    }

    if(messageInput.value !== '') {
        let message = new Message(type, user, messageInput.value);
        messages.push(message);

        var el = createMessageElement(message);
        
        messagesContainerEL.appendChild(el);

        messageInput.value = '';

    }
}

function loadSeedData(){
    for(let i = 0; i < data.length; i++){
        let message = new Message(data[i].type, data[i].user, data[i].message);
        messages.push(message);
    }

    let messagesContainerEL = document.getElementById('message-container');

    for(let i = 0; i < data.length; i++){
        let message = messages[i];
        let el = createMessageElement(message)

        messagesContainerEL.appendChild(el);
    }
}

let init = function() {

    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    loadSeedData();

};

init();