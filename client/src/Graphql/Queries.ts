import { gql } from "@apollo/client";

export const CREATEUSER = gql`
  mutation createUser($name: String!, $username: String!, $password: String!) {
    createUser(name: $name, username: $username, password: $password) {
      id
      name
      username
    }
  }
`;