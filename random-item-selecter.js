// choces random item in arry 

var names =["hasitha", "dhanjaya","jone","puba"];

function whosPaying(names){

    var numberOfPeople = names.length;
    var randamPersonIndex = Math.floor(Math.random()* numberOfPeople);
    var randomPerson = names[randamPersonIndex];

    return (randomPerson);
    //console.log(randomPerson);


}
    
whosPaying(names);
