import { gql } from "@apollo/client";

const REDIRECT = gql`
  {
    redirects {
      name
      url
      id
    }
  }
`;

export default REDIRECT;
