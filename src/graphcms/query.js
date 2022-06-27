import { gql } from "@apollo/client";

const QUERY = gql`{
  urls {
    id
    title
    description
    url
    thumbnail {
      url
      width
      height
    }
  }
}
`

export default QUERY