import { Author, AuthorInfo } from '../Author';

export const Query = () => ({
    getAuthorInfoById: (_: any, { id }: { id: string }, { dataSources }: { [key: string]: any }): AuthorInfo =>
        dataSources.authorDataSource.getAuthorInfoById({ authorId: id }),
    findAuthorByName: (_: any, { name }: { name: string }, { dataSources }: { [key: string]: any }): Author =>
        dataSources.authorDataSource.findAuthorByName({ authorName: name }),
});
