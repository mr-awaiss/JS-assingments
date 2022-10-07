function show_magician(mgs){

    for(let i=0; i<mgs.length; i++){

     console.log(mgs[i]);
  
  
    }
  
  
  }
  function make_great(mgs){

    for(let i=0; i<mgs.length; i++){

        mgs[i]=`Great ${mgs[i]}`;
     
     
       }

  }

  var mgs=["Moro", "Pop", "Lily"]
  make_great(mgs);
  show_magician(mgs);