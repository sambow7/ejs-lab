//server.js

const ejs = require('ejs');
const express = require('express');
const app = express();
const PORT = 3000;

//middleware

app.use(express.static('public'));


//data
const RESTAURANT = {
  name: 'The Green Byte Bistro',
  isOpen: true,
  address: '742 Evergreen Rd, Mapleview, OS 45502',
  phone: '555-321-9876',
  menu: [
    { 
      id: 1,
      name: 'Quantum Quinoa Mushroom Burger',
      price: 13.00,
      rating: 4,
      category: 'mains',
      details: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
    },
    { 
      id: 2,
      name: 'Binary Berry Cheesecake',
      price: 10.11,
      rating: 3,
      category: 'desserts',
      details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
    },
    { 
      id: 3,
      name: 'Recursive Rigatoni',
      price: 17.00,
      rating: 5,
      category: 'mains',
      details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
    },
    { 
      id: 4,
      name: 'Pumpkin Pi Squared',
      price: 3.14,
      rating: 5,
      category: 'desserts',
      details: 'A delightful pumpkin dessert, squared and spiced to perfection.'
    },
    { 
      id: 5,
      name: 'Fibonacci String Bean Fries',
      price: 11.23,
      rating: 5,
      category: 'sides',
      details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
    }
  ]
};

//index
app.get('/', (req, res) => {
  res.render('home.ejs', {
    msg: "Here is the restraunt data",
    name: RESTAURANT.name,
    address: RESTAURANT.address,
    phone: RESTAURANT.phone, 
  RESTAURANT: RESTAURANT,
  });
});

app.get('/menu', (req, res) => {
  let categories = RESTAURANT.menu.map(item => item.category);
  categories = [...new Set(categories)];
  const response = {
    categories: categories,
    section: 'Full Menu',
    menu: RESTAURANT.menu
  };    
  res.render('menu.ejs', response);
});

app.get('/menu/:category', (req, res) => {
  const category = req.params.category;
  const menu = RESTAURANT.menu.filter(item => item.category === category);
  const response = {
    categories: [category],
    section: category,
    menu: menu
  };    
  res.render('category.ejs', response);
});


//listener
app.listen(PORT, () => {
  console.log('🎧 Server listening to 3000')
});
