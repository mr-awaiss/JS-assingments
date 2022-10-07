function sandwich(...args){

    console.log("The sandwhich  should contain :");

    for(let i=0; i<args.length; i++){

   console.log(args[i]);

    }
}
sandwich("Cheese");

sandwich("Cheese","cucumber");

sandwich("cheese","patty","cucumber");