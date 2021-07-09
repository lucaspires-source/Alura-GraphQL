const { GraphQLScalarType } = require("graphql");

const userResolvers = {
  RolesType: {
    ESTUDANTE: "ESTUDANTE",
    DOCENTE: "DOCENTE",
    COORDENACAO: "COORDENACAO",
  },
  DateTime: new GraphQLScalarType({
    name: "DateTime",
    description: "string of date and time on the USO-8601 format ",
    serialize: (value) => value.toISOString(),
    parseValue: (value) => new Date(value),
    parseLiteral: (ast) => new Date(ast.value),
  }),

  Query: {
    users: (root, args, { dataSources }) => dataSources.usersAPI.getUsers(),
    user: (root, { id }, { dataSources }) =>
      dataSources.usersAPI.getUserById(id),
  },
  Mutation: {
    postUser: async (root, {user}, { dataSources }) =>
      dataSources.usersAPI.postUser(user),
    updateUser: async (root, newData, { dataSources }) =>
      dataSources.usersAPI.updateUser(newData),
    deleteUser: async (root, { id }, { dataSources }) =>
      dataSources.usersAPI.deleteUser(id),
  },
};

module.exports = userResolvers;
