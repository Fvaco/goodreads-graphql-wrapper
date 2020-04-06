export const Query = () => ({
    getAuthorById: (_: any, { id }: Record<string, any>, { dataSources }: Record<string, any>) =>
        dataSources.authorDataSource.getAuthorData({ authorId: id }),
});
