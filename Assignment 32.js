function insensitive(arr,pres){
    arr=arr.slice()
    for(let i=0;i<arr.length;i++){
           if(pres.toLowerCase()===arr[i].toLowerCase()){
            return true;

           }
    }
    return false;

}
var current_users = ["Usman", "Arslan", "Adil", "Faizan",];
var new_users = ["Ashfaq", "Usman", "Adeel", "Nafees"];
for(let i=0;i<new_users.length;i++){
if(insensitive(current_users,new_users[i])){
    console.log(`User name ${new_users[i]} is already in use. `)
}
else{
    console.log(`${new_users[i]} Username avalible`)
}


}
