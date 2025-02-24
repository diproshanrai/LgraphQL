import User from "../models/user";

const resolvers = {
  Query: {
    users: async () => await User.findAll(),
    user: async (_: any, { id }: { id: string }) => await User.findByPk(id),
  },
  Mutation: {
    createUser: async (
      _: any,
      { name, email }: { name: string; email: string }
    ) => {
      return await User.create({ name, email });
    },
  },
};

export default resolvers;
