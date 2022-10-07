
 function make_shirt( size, number){

    console.log(`${size} is the size of the shirt ${number} is number to print on the shirt.`);
    if (size == "L") {
        console.log("I love JavaSript.");
    }
    else if(size == "M"){
        console.log("This is medium shirt.")
    }
    else if(size == "S"){
        console.log("This is small shirt.")
    }
 }
 make_shirt(prompt("Write size of your shirt i.e. S,M,L"), prompt("Write number of the shirt."));