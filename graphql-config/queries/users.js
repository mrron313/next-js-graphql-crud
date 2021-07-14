import { gql } from "@apollo/client";

export const FETCH_USERS_QUERY = gql`
query {
  getTests {
    id
    name
  }
}`;