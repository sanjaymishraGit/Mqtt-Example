var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://192.168.0.18:2999')

client.on('connect', function () {
    client.subscribe('mytopic')
}) 

client.on('message', function (topic, message){
    context = message.toString();
    console.log("Hey I am receiver and I received message La:-)")

    console.log(context)


})