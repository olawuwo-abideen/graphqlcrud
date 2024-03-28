export const typeDef  = /* GraphQL */`
        type Query {
          user: User
        }
        type Mutation {
            createUser:(user:NewUserInput!): User
        }
        type User{
            id: Int
            name: String
            age: Int
        } 
        input NewUserInputUser{
            name: String!
            age: int!
        } 
      `;

export  const resolvers = {
    Query:{
     user:  () => {
         return {
             id: 1,
             name: 'wale',
     };
 },
 },
 Mutation: {
    createUser: (obj) => {
        console.log("creating a user")
    }
 }, 
 
 User: {
     name: (obj) => {
         return obj.name.toUpperCase()
     }
 }
     
 }