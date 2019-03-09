let guid = parseInt(Date.now() + Math.random() * 1000) // unikatowy identyfikator
let icon = guid % 5 // numer obrazka

//elementy chatu
let chatNick, chatContent, chatMessages, chatForm

//ws = new WebSocket("ws://91.121.6.192:8010")
ws = new WebSocket("ws://77.55.222.58:443")

function initMap()
// });
marker = new google.maps.Marker({ position: uluru, map: map, icon: iconString(icon) });

initChat()
}

// funckja inicjujca elementy chatu
function initChat() {
    chatNick = document.querySelector('#nick')
    chatContent = document.querySelector('#content')
    chatMessages = document.querySelector('#messages')
    chatForm = document.querySelector('#form')
    chatForm.addEventListener('submit', function (e) {
        e.preventDefault()
        sendChatMessage()
    })
}

function getLocalization()
function receiveMessage(msg) {
    msg = msg.substring(socketKey.length)
    msg = JSON.parse(msg)
    console.log(msg)

    if (msg.id != guid) {
        if (msg.action == 'new')
            function receiveMessage(msg) {
                players[msg.id].setMap(null)
            }
        if (msg.action == 'chat') {
            showMessage(msg)
        }
    }
}

window.onbeforeunload = function (e) {
    function iconString(number) {
        return `icon/${number}.png`
    }

    function sendChatMessage() {
        let msg = {
            id: -1,
            nick: chatNick.value,
            content: chatContent.value,
            time: new Date(),
            action: 'chat'
        }

        if (msg.nick.length > 0 && msg.content.length > 0) {
            chatContent.value = ''
            sendMessage(msg)
        }
    }

    function showMessage(msg) {
        let messageDOMObject =
            `<div class="message">
        <div class="message__header">
            <div class="message__nick">${msg.nick}</div>
            <div class="message__time">(${msg.time})</div>
        </div>
        <div class="message__content">${msg.content}</div>
    </div>`
        chatMessages.innerHTML = messageDOMObject + chatMessages.innerHTML
    }
}