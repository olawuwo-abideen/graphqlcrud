import express from "express"
import {ruruHTML} from 'ruru/server'
import { createYoga } from 'graphql-yoga'
import {schema} from './src/graphql/index.js'

const app = express();



const yoga = createYoga({
schema
})

app.all('/graphql' , yoga);

app.get('/' , (_req, res) => {
    res.type('html')
    res.end(ruruHTML({endpoint: '/graphql'}))
})

app.listen(3000)
console.log(`
App listening on port 3000
Test: http://localhost:3000/graphql?query={hello, age}

`)