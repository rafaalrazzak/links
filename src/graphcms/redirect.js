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

export default REDIRECT;
