import { gql } from "@apollo/client";
const REDIRECT = gql`
  mutation CREATE_REDIRECT($name: String!, $url: String!) {
    createRedirect(data: { name: $name, url: $url }) {
      id
      name
      url
    }
    publishRedirect(where: { name: $name }, to: PUBLISHED) {
      id
    }
  }
`;

export default REDIRECT;
