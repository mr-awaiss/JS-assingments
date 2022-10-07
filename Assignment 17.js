var guest=["Ahmad","Afzaal","Ansar"];

 var a = guest.map(invite);
  
 function invite(x){

    console.log(x +"! you are invited for dinner.");

  }
  console.log( guest[0] + " is not coming.")
  guest[0] = "Ali";

  var b = guest.map(newinvite);
  
 function newinvite(y){

    console.log(y +"! you are invited for dinner.");

  }

  console.log("Wohoo! I found a bigger table.")

  guest.unshift("Kamal");
  guest.splice(3,0,"Hassan");
  guest.push("Usman");

  var c = guest.map(newerinvite);
  
  function newerinvite(z){
 
     console.log(z +"! you are invited for dinner.");
 
   }
   console.log("Oh! I can invite only 2.");

  guest.splice(2,4);

  var d = guest.map(twoinvite);
  
  function twoinvite(zz){
 
     console.log(zz +"! you are still invited for dinner.");
 
   }
   guest.splice(0,2);

   console.log(guest);

