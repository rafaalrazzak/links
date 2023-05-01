import { gql } from "@apollo/client";

const QUERY = gql`
  {
    urls {
      id
      title
      description
      url
      icon
    }
  }
`;

export default QUERY;
