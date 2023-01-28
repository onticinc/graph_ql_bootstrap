const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql') ;
const schema = require('./schema/schema');
const port = process.env.PORT || 5000;

const app = express();

app.use('/graphiql'. graphqlHTTP({
    schema, 
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log(`Serving the sauce on port ${port}`));

