const express = require('express');
require('dotenv').config();
const app = express();
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema');
const connectDB = require('./config/db')

const PORT = process.env.PORT || 5000;

//connect to database
connectDB();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
        // process.env.NODE_ENV === 'development',
}))

app.listen(PORT, () => {
    console.log('listening on port:', PORT)
})