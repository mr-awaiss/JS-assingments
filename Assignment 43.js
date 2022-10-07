function show_magician(magician){

    for(let i=0; i<magician.length; i++){

     console.log(magician[i]);
  
  
    }
  
  }

  function make_great(magician){

    for(let i=0; i<magician.length; i++){

        magician[i]=`Great ${magician[i]}`;
     
    }
    return magician;
       }
  var magicians=["Moro", "Pop", "Lily"];

  var new_magician=make_great(magicians.slice());
  show_magician(magicians);
  show_magician(new_magician);