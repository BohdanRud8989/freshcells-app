import { gql } from "@apollo/client";

export const GetUserQuery = gql`
  query user($userId: ID!) {
    user(id: $userId) {
      firstName
      lastName
    }
  }
`;

export const UserLoginMutation = gql`
  mutation login($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
    }
  }
`;
