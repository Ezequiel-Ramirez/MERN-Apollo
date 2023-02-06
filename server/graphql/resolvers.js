import Projects from '../models/Project.js';


export const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },

    Mutation: {
        createProject: async (_, { name, description }) => {
            const project = new Projects({ name, description });
            const newProject = await project.save();
            return newProject;
        },
    },
};