const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Color {
        id: ID!
        color: String!
    }

    type Query {
        getAllColors: [Color]!
        getColor(id: ID!): Color!
    }
`);

module.exports = schema;
