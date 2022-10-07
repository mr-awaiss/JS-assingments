var guest=["Ahmad","Afzaal","Ansar"];

 var b = guest.map(invite);
  
 function invite(x){

    console.log(x +"! you are invited for dinner.");

  }
  console.log(guest[0] + " is not coming.")
  guest[0] = "Ali";

  var c = guest.map(newinvite);
  
 function newinvite(y){

    console.log(y +"! you are invited for dinner.");

  }