function make_album(artist_name, title, no_tracks=null){

    if (no_tracks!==null){

       return {"artist name":artist_name,"album title":title,"No of tracks":no_tracks};

    }
       
    else{

       return {"artist name":artist_name,"album title":title};

    }

   }
   
   console.log(make_album("Arijit singh","Slamat"))
   console.log(make_album("Armaan Malik","Kuch to hai"))
   



   function make_album1(artist_name1, title1, no_tracks1) {

    return {"artist name":artist_name1,"album title":title1,"No of tracks":no_tracks1};

   }
   console.log(make_album("Quratulain Baloch","Wo Hamsafar tha", 9))