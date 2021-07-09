const userResolvers = {
  Query: {
    users: (root, args, { dataSources }) => dataSources.usersAPI.getUsers(),
    user:(root,{id},{dataSources}) => dataSources.usersAPI.getUserById(id)
  },
  Mutation:{
    postUser: async (root, user, { dataSources }) => dataSources.usersAPI.postUser(user),
    updateUser: async (root, newData, { dataSources}) => dataSources.usersAPI.updateUser(newData),
    deleteUser: async (root,{id},{dataSources}) => dataSources.usersAPI.deleteUser(id)
  }
};

module.exports = userResolvers;
