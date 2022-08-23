# UI Assessment - Pokédex (Mid)
This is a small application that will leverage various frontend technologies to assess your aptitude. This is a take home assignment and can be done at your own pace. Your recruiter will communicate with you when you should turn this assessment in.

## Requirements

### Leveraging Open API GraphQL 
In this assessment you will utilize a Pokémon open API (GraphQL). This will help show knowledge and aptitude with graphql which ReliaQuest heavy leverages.

[API Docs](https://wayfair.github.io/dociql/)

Apollo Client Config - `src/app/client.ts`

---
### App-wide requirements
1. Should use jss for all styling - no css files. `<PokemonList />` (`src/components/PokemonList/PokemonList.tsx`) already does this. Feel free to use this component as an example of how to implement jss. _All styling contexts are already provided and implemented for you_
1. Must use TypeScript for all files

---
### List Page
In this assessment you will expand the existing list page with the following. You will need to retrieve more data from the useGetPokemons (src/hooks/useGetPokemons.ts) hook where the graphql query is defined.

1. Create list items that display the name, number, and types of each Pokémon
1. Each list item should also include a picture of the Pokémon (available through the api)
1. Each list item should have some hover effect

---
### Searching on List Page
In order for a user to be able to find a Pokémon quickly, they should be able to search on the Pokémon list page and see filtered results based on their search.

1. Implement a search box that filters the list of Pokémon
1. Should be case insensitive
1. List should only show Pokémon that match the search
1. **Searching will be client side only and NOT server side** -- The api does not support search

---

## Useful Tools
- [Apollo Docs](https://www.apollographql.com/docs/react/)
- [React Docs](https://reactjs.org/docs/getting-started.html)
- [React Router Docs](https://reactrouter.com/docs/en/v6)
- [MUI component library (optional)](https://mui.com/getting-started/usage/)
