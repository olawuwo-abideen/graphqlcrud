const 
{ graphql, 
buildSchema, 
GraphQLSchema,
GraphQLObjectType,
GraphQLString,
GraphQLInt
} = require("graphql")
const express = require("express")
const {createHandler}  = require('graphql-http/lib/use/express')
var {ruruHTML} = require('ruru/server')





const app = express();

app.all('/graphql' , createHandler({schema}));

app.get('/' , (_req, res) => {
    res.type('html')
    res.end(ruruHTML({endpoint: '/graphql'}))
})


app.listen(3000)
console.log(`
App listening on port 3000
Test: http://localhost:3000/graphql?query={hello, age}

`)