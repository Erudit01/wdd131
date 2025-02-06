const myApples = 4;
const friendApples = 2;
let total = myApples + friendApples;

document.getElementById("myAppleElement").textContent = myApples;
document.getElementById("friendAppleElement").textContent = friendApples;
document.getElementById("totalApplesElement").textContent = total;

/* The document variable is obviously the entire html doc therefore, we don't have to decalre it, as it already exists.
Now, the .getElementById() is a method that comes with that class... I think "document" is a class. Afterwards, I put
the "id" in the method as strings because geuss what... the id is assigned a value with strings. Now, I use another method 
called.textContent however, I need no parentheses... for some reason. Finaly, I use the = operator to... you know, put what's in
the variable into the content section of that container which is span */