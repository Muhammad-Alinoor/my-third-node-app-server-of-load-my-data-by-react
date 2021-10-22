// require the express
const express = require("express");
// require the cors to open it
const cors = require("cors");

// create express app
const app = express();
// call the cors in app.use as miidle wire
app.use(cors());
app.use(express.json());
// create your app port
const port = process.env.PORT || 4000;
// call the handler as call backfunction from app.get after slash string
app.get("/", (req, res) => {
    res.send("Hello from my third node server app. Hi node citizen ! sorry boss this exclamatory was missing");
});
const users = [
    { id: 1, name: "Abul", email: "abul@gmail.com", phone: "01944544444" },
    { id: 2, name: "BAbul", email: "babul@gmail.com", phone: "01944544444" },
    { id: 3, name: "KAbul", email: "kabul@gmail.com", phone: "01944544444" },
    { id: 4, name: "DAbul", email: "dabul@gmail.com", phone: "01944544444" },
    { id: 5, name: "SAbul", email: "sabul@gmail.com", phone: "01944544444" },
    { id: 6, name: "JAbul", email: "jabul@gmail.com", phone: "01944544444" },
    { id: 7, name: "RAbul", email: "rabul@gmail.com", phone: "01944544444" },
    { id: 8, name: "LAbul", email: "labul@gmail.com", phone: "01944544444" },
    { id: 9, name: "NAbul", email: "nabul@gmail.com", phone: "01944544444" },

];
// for the users path
app.get("/users", (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
});
// app.Method
app.post("/users", (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log("hitting", req.body)
    res.send(JSON.stringify(newUser))
});
// for the dynamic query parameter

// for the individual dynamic api path
app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
});
const fruits = [
    { name: 'dragons' },
    { name: 'grapes' },
    { name: 'guabas' },
    { name: 'papays' },
    { name: 'banaans' },
    { name: 'jackfruits' },
    { name: 'apples' },
    { name: 'oranges' }
]

app.get('/fruits', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = fruits.filter(fruit => fruit.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(fruits)
    }
})

// long path
app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send("Yummy Yummy tok fazli")
})


// listen the app response from the created port
app.listen(port, () => {
    console.log("Listen to port ", port);
});