 Lesson 34
============
```javascript

1. 
const users = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg",
         "age": 23
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg",
         "age": 20
     }
];

2.
const products = [
    {
        id: 1,
        name: "Burger Premium",
        price: 6,
        currency: "euro",
        ingredients: ["flour", "beef", "salad", "cheese", "sauce"],
		type: "burger",
		available: true
    },
	{
        id: 2,
        name: "Burger Lite",
        price: 2,3,
        currency: "euro",
        ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
		type: "burger",
		available: true
    },
];



3. 
const getUser = (id, users) => users.find((user) => user.id === id);
```
