const {graphql, buildSchema} = require("graphql")
const express = require("express")
const {createHandler}  = require('graphql-http/lib/use/express')
var {ruruHTML} = require('ruru/server')

const schema = buildSchema(
    ` type Query {
        hello(name: String!): String
        age: Int
        year: Int
        ysd : Float!
        present: Boolean
        Hobbies: [String!]!
    }   
`)

const rootValue = {
    hello:({name}) => {
        return "Hello " + name
    },
    age:() => {
        return 25;
    },
    year:() => {
        return 1997;
    },
    ysd: 19.97,
    present:true,
    Hobbies:() => {
        return ["eating", "swimming"]
    },
}


const app = express();

app.all('/graphql' , createHandler({schema, rootValue}));

app.get('/' , (_req, res) => {
    res.type('html')
    res.end(ruruHTML({endpoint: '/graphql'}))
})


app.listen(3000)
console.log(`
App listening on port 3000
Test: http://localhost:3000/graphql?query={hello, age}

`)