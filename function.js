function displayName_Age(name, year_ofBirth){
    let curr_year=new Date().getFullYear();
    let age= curr_year-year_ofBirth;

    message="Hello" +name + "You are" +age +"Years Old"; 
    console.log(message)
}

// functions that print my name and age as well as four other people
displayName_Age("Josephine", 18)
displayName_Age("Savina", 25)
displayName_Age("Davis", 22)
displayName_Age("Angel", 15)
displayName_Age("Sheila", 20)


//arrow function having two variables concatenated together
let add= (x, y) => x+y;
console.log (add(4,6))


//Loop 
for(ug=1;ug<20;ug+=1){
    console.log("I love Uganda");
} 