export const Query = () => ({
    getAuthorDataById: (_: any, { id }: Record<string, any>, { dataSources }: Record<string, any>) =>
        dataSources.authorDataSource.getAuthorDataById({ authorId: id }),
});
