import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import fetch from 'node-fetch';

const grql = new ApolloClient({
   uri: '',
   fetch,
   headers: { Authorization: 'Bearer ' }
});

export async function get(req, res, next) {

   let {query, ...variables} = req.query;

   try {
      const result = await grql.query({ query: gql(query), variables, errorPolicy: 'ignore'});

      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(result))
   }

   catch(e) {

      next();
   }
}