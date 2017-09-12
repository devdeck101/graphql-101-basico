var makeExecutableSchema = require('graphql-tools').makeExecutableSchema;
var resolvers = require('./resolvers');

const typeDefs = `

    type Group {
        id: ID!
        name: String
        messages: [Message]
    }

    type Message {
        id: ID!
        text: String
    }

    type Query {
        groups: [Group]
        group(id: ID!): Group
    }

    type Mutation {
        sendMessage(message: String, groupId: ID!): Message
        addGroup(name: String): Group
    }

`;

const schema = makeExecutableSchema({ typeDefs, resolvers});
module.exports = schema;
