const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')

const app = express();
const PORT = 4000;
const userRoutes = express.Router();

let User = require('./models/user');
let Pdt = require('./models/pdt');

app.use(cors());
app.use(bodyParser.json());

// Connection to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/users', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established succesfully.");
})

// API endpoints

// Getting all the users
userRoutes.route('/').get(function(req, res) {
    User.find(function(err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
});

// Adding a new user
userRoutes.route('/add').post(function(req, res) {
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'User': 'User added successfully'});
        })
        .catch(err => {
            res.status(400).send('Error');
        });
});

// Login in for user
userRoutes.route('/login').post(function(req, res) {
    User.find({username: req.body.username, password : req.body.password})
        .then(user => {
            if(!user){
                res.status(400).send('Error'); 
            } else {
                // res.status(200).json({'User': 'User Found'});
                return res.json(user);
            }
        }) 
        // .catch(err => { 
        // });
});

// Adding a new product
userRoutes.route('/vendor/add_pdt').post(function(req, res) {
    let pdt = new Pdt(req.body);
    console.log(pdt);
    pdt.save()
        .then(pdt => {
            res.status(200).json({'Pdt': 'Pdt added successfully'});
        })
        .catch(err => {
            res.status(400).send('Error');
        });
});

// Getting all the pdts
userRoutes.route('/vendor_disppdt').get(function(req, res) {
    Pdt.find(function(err, pdts) {
        if (err) {
            console.log(err);
        } else {
            res.json(pdts);
        }
    });
});



// Getting a user by id
userRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    console.log()
    User.findById(id, function(err, user) {
        res.json(user);
    });
});

app.use('/', userRoutes);

app.listen(PORT, function() {
    console.log("Server is running on port: " + PORT);
});
