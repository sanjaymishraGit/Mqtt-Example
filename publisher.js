var mqtt= require("mqtt");
var client = mqtt.connect('mqtt://192.168.0.18:2999');
console.log("Publisher starting !!");
client.on('connect', function(){
    console.log("Publisher starting connect!!");
    setInterval(function(){
        client.publish('mytopic','Hello From Publisher');
        console.log("Publisher has send message !!");
    },5000);
});