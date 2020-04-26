export const Query = () => ({
    getBookById: (_: any, { id }: { id: string }, { dataSources }: { [key: string]: any }) =>
        dataSources.bookDataSource.getInfoForBook({ bookId: id }),
});
