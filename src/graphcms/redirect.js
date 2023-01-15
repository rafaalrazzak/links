import { gql } from "@apollo/client";

const REDIRECT = gql`
  {
    redirects(orderBy: publishedAt_DESC) {
      name
      url
      id
    }
  }
`;

const SINGLE = gql`
  query single($name: String!) {
    redirects(where: {name: $name}, first:1){
      name
      url
      id
    }
  }
`;

export {SINGLE}

export default REDIRECT;
