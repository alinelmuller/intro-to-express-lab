# Express Lab Exercise

Exercises to create Express routes that handle specific requests at different URLs.

## Getting Started

1. **Clone the repository**.
2. **Install dependencies**: Run `npm install`.
3. **Start the server**: Use `node index.js`.
4. **Access routes**: Visit `http://localhost:3001` and test the endpoints.

## Objectives

1. **Greeting Route**: Responds with a greeting message.  
   Example: `http://localhost:3001/greetings/Aline`
   
2. **Dice Rolling**: Simulates rolling a die with the number of sides specified in the URL.  
   Example: `http://localhost:3001/roll/8`
   
3. **Collectibles Route**: Fetches an item from a collectibles list based on the index.  
   Example: `http://localhost:3001/collectibles/2`

4. **Shoe Filtering**: Filters shoes based on `min-price`, `max-price`, and `type`.  
   Examples:
   - `http://localhost:3001/shoes`
   - `http://localhost:3001/shoes?min-price=100`
   - `http://localhost:3001/shoes?max-price=50`
   - `http://localhost:3001/shoes?type=sneaker`
   - `http://localhost:3001/shoes?min-price=50&max-price=500&type=sneaker`

## Technologies Used

- Node.js
- Express.js