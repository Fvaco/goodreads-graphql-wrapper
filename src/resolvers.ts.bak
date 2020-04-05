export const resolvers = {
    Query: {
        author: (_: any, { name }: Record<string, any>, { dataSources }: Record<string, any>) =>
            dataSources.goodreadsAPI.getAuthor({ name }),

        authorData: (_: any, { id }: Record<string, any>, { dataSources }: Record<string, any>) =>
            dataSources.goodreadsAPI.getAuthorData({ authorId: id }),

        bookData: (_: any, { id }: Record<string, any>, { dataSources }: Record<string, any>) =>
            dataSources.goodreadsAPI.getInfoForBook({ bookId: id }),
    },
};
