# blogApp

A [medium](https://medium.com) and dev.to inspired blogging app

## Data Model

### Collections

- **users (`users/{uid}`) Public user profile**. The id of a user document is auto generated. Each user document has the following fields and embeded/sub collections
  - userName
  - photoUrl
  - displayName
  - **post collection (`users/{uid}/posts/{slug}`) User can have many posts**. Each post document has the following fields. The id of a post document is same as the slug. It also has a hearts subcollection.
    - tile
    - uid (Matches the id of the user document)
    - createdAt
    - updatedAt
    - content
    - slug
    - published
    - heartCount
    - username
    - **hearts collection (`users/{uid}/posts/{slug}/hearts/{uid}`) many-to-many relationship between users and posts via hearts**. The id of a heart document is auto generated. Each heart document has the following field.
      - uid (Matches the uid of the user who hearted the post)

- **usernames (`usernames/{username}`) Username uniqueness tracking**. The id of a username document matches the username field of a user. Each username document has the following field
  - uid (value is same as id for the user document)

## Deployment

Deployed using [Vercel](https://vercel.com/)
