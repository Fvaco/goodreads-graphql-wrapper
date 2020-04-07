export const Query = () => ({
    getAuthorInfoById: (_: any, { id }: Record<string, any>, { dataSources }: Record<string, any>) =>
        dataSources.authorDataSource.getAuthorInfoById({ authorId: id }),
});
