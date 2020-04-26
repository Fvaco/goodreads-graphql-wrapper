![cover](https://repository-images.githubusercontent.com/253045772/551eb980-7799-11ea-9a07-1ff582443ed2)
# Goodreads API GraphQL Wrapper

A GraphQL wrapper for the Goodreads REST API.

For now it's just in an early development stage. My plan is to cover all features in the orginal [Goodreads API](https://www.goodreads.com/api/index).

Feel free to contribute, report issues, request new features. Read the [CONTRIBUTING.md](https://github.com/Fvaco/goodreads-graphql-wrapper/blob/develop/CONTRIBUTING.md) to know more.

## Get started
1. Copy the repository (`develop` branch)
```
git clone https://github.com/Fvaco/goodreads-graphql-wrapper.git
```
2. Install dependencies using `yarn` or `npm install`
3. Create the `.env` file with your [Goodreads developer API key](https://www.goodreads.com/api/keys). Check the `.env.sample` file to know the format.
4. Create the `dist` directory with `yarn build` or `npm run build`
    - You can use `yarn dev` or `npm run dev` for _watch_ mode
5. Run it in local server using
```
yarn nodemon dist/server.js
```
or

```
npm run nodemon dist/server.js
```
6. Open you'll be able to see the GraphQL Playgrond on
```
http://localhost:4000
```

## Credit
Inspired and originally forked from Mac McCarthy `good_wrap` repository, [check his work on Github](https://github.com/mcshakes).
