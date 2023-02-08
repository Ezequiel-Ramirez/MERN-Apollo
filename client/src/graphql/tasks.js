import { gql } from '@apollo/client'

export const CREATE_TASK = gql`
mutation CreateTask($title: String!, $projectId: ID!) {
  createTask(title: $title, projectId: $projectId) {
    title
    project {
      _id
    }
  }
}
`

export const DELETE_TASK = gql`
mutation DeleteTask($id: ID!) {
  deleteTask(_id: $id) {
  title
  _id  
  }
}
`