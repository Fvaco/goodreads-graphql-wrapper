export const resolvers = {
    Query: {
        bookData: (_: any, { id }: Record<string, any>, { dataSources }: Record<string, any>) => {
            console.log(dataSources);
            return dataSources.bookDataSource.getInfoForBook({ bookId: id });
        },
    },
};
