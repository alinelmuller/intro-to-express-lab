const express = require('express')

const app = express()
const PORT = process.env.PORT || 3001
// Your Code Here


//http://localhost:3001/greetings/Aline
app.get('/greetings/:username', (req, res) => {
    const name = req.params.username
    res.send(`Nice to see you here, ${name}!`)
})

//http://localhost:3001/roll/2
app.get('/roll/:number', (req, res) => {
  const number = req.params.number
  const maxNumber = parseInt(number, 10)
  const rolledNumber = Math.floor(Math.random() * (maxNumber + 1))
  
  if (isNaN(number)) {
    res.send(`You must specify a number.`)
  }else{ 
    res.send(`You rolled a, ${rolledNumber}!`)
  }
})

const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

//http://localhost:3001/collectibles/2
app.get('/collectibles/:id', (req, res) => {
  const id = req.params.id
  const item = collectibles[id];

  if (collectibles[id]){
    res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`)
  }else{
    res.send('This item is not yet in stock. Check back soon!')
  }
})

const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

//http://localhost:3001/shoes
//http://localhost:3001/shoes?min-price=100
//http://localhost:3001/shoes?max-price=50
//http://localhost:3001/shoes?type=sneaker
//http://localhost:3001/shoes?min-price=50&max-price=500&type=sneaker
app.get('/shoes', (req, res) => {
  const { 'min-price': minPrice, 'max-price': maxPrice, type } = req.query
  const filterShoes = shoes.filter(shoe => 
    (!minPrice || shoe.price >= Number(minPrice)) &&
    (!maxPrice || shoe.price <= Number(maxPrice)) &&
    (!type || shoe.type === type)
  )
  res.json(filterShoes)
})


// Your Code Ends Here
app.get(`/*`, (req, res) => {
  res.send(`404-page-not-found`)
})

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})