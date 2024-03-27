import { createSchema, createYoga } from 'graphql-yoga'

 
const queries = /* GraphQL */ `
        type Query {
          hello: String
        }
`;
const   userTypeDef  = /* GraphQL */`
        type Query {
          user: User
        }
        type User{
            id: Int
            name: String
            age: Int
        }
        
      `;

export const schema = createSchema({
    typeDefs: [queries, userTypeDef],
    resolvers: {
        Query: {
            hello: () => 'Hello from Yoga',
            user: () => {
                return {
                    id: 1,
                    name: 'wale',
                    age: null
                }
              
            }
        }
    }
})
     