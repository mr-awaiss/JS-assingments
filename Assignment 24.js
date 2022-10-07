var home = 44;

console.log(home == 55);

//---------------------------

var name = "kaliya"

console.log( name == "kaliya");

//--------------------------

var age = 29;

 if (age <= 20 ) {
    
    console.log(true);
 }
else{
    console.log(false);
}

//---------------------------

var vc={age:23, gender:"male"};

  if(vc.age>18 && vc.gender==="female"){

    console.log("Offer is for boys only.");
  }

  else{
    console.log("Sorry! You can't join.")
  }

//---------------------------------

   let empl={ designation:"manager", name:"Ali", age:23, designation:"supervisor",}

   if(empl.designation="manager" && empl.name==="Ali"){

    console.log("Welcome!");

   }else{
    console.log("Ali is available.");
   }