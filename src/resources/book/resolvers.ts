export const resolvers = {
    Query: {
        getBookByID: (_: any, { id }: Record<string, any>, { dataSources }: Record<string, any>) =>
            dataSources.bookDataSource.getInfoForBook({ bookId: id }),
    },
};
