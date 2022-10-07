var name = "My name is Zia."

console.log("Upper: " + name.toUpperCase());
console.log("Lower: " + name.toLowerCase());

var capitalized = function (message) {

    var sentence = message.split(" ");

    for ( var i = 0; i < sentence.length; i++){

        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].substring(1);

    }
    return sentence.join(" ");
}
console.log("Title: "+ capitalized(name));


