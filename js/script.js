//Question 1

var product = {
	name: "Chicken feet",
	price: 149.99,
};

console.log(product.price);


//Question 2
console.log("");

var animals = [
	{
		type: "cat",
		colour: "black",
	},
	{
		type: "elephant",
		colour: "grey",
	},
	{
		type: "dog",
		colour: "brown",
	},
	{
		type: "zebra",
		colour: "black and white",
	},
];


animals.forEach(function (animal){
    console.log(animal.colour)
});



//Question 3 
console.log("");

var dinnerOptions = [
	{ name: "Fish and Dips", price: 11.95, onSpecial: true },
	{ name: "Bacon and Frogs", price: 12.99, onSpecial: false },
	{ name: "Mince Flies", price: 19.0, onSpecial: true },
];

 dinnerOptions.forEach(function (dish) {
    if (dish.onSpecial === true) {
        console.log(dish.name)
    }
}); 


//Question 4
console.log("");

var people = [
	{
		firstName: "Burt",
		lastName: "Smacharach",
		age: 35,
	},
	{
		firstName: "Elvis",
		lastName: "Deadly",
		age: 55,
	},
	{
		firstName: "Susan",
		lastName: "Sarongson",
		age: 42,
	},
	{
		firstName: "Big",
		lastName: "Gabe",
		age: 20,
	},
];


var maxAge = 50
var minAge = 20

people.forEach(function(person){
    if (person.age <= maxAge && person.age >= minAge) {
        console.log(person.firstName + " " + person.lastName)
    }
});


//Question 5 
console.log("");


var products = [
	{
		name: "Elephant eggs",
		price: "45.00",
	},
	{
		name: "Bucket of water",
		price: 459.99,
	},
	{
		name: "4 cabbages",
		price: 500.95,
	},
];

var productList = document.querySelector("ul");

products.forEach(function (section){

    productList.innerHTML += "<li>" + section.name + " - " + section.price + "</li>";
}) 

