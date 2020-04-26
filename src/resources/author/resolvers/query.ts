export const Query = () => ({
    getAuthorInfoById: (_: any, { id }: { id: string }, { dataSources }: { [key: string]: any }) =>
        dataSources.authorDataSource.getAuthorInfoById({ authorId: id }),
});
