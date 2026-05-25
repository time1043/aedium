- Users can sign up and login to the system
- Corresponding features:
  - Storage user info
  - Provide APIs to register a new account
  - Provide APIs to login as a user
  - Provide APIs to retrieve the profile of the current user

- User login to create/update/delete their own articles, save articles as drafts, and publish or unpublish articles
- Corresponding features:
  - Storage article data and the author relationship
  - Provide APIs to create articles for the current user
  - Provide APIs to update and delete the articles of the current user
  - Provide APIs to save an article as a draft
  - Provide APIs to publish and unpublish an article of current user
  - Provide APIs to retrieve all articles of the current user

- Users can view the list of published articles, view article details, and view comments on published articles
- Corresponding features:
  - Storage article data and comment data
  - Provide APIs to retrieve the list and details of published articles
  - Provide APIs to retrieve comments of a published article

- User login to filter their own articles by keyword, status, pagination, and sort order
- Corresponding features:
  - Provide query APIs for the article list with pagination
  - Provide query APIs to filter articles by status
  - Provide query APIs to search articles by keyword
  - Provide query APIs to sort articles by created time or updated time

- User login to comment on a published article and delete their own comments
- Corresponding features:
  - Storage comment data and the relationship between comment, article, and author
  - Provide APIs to create comments for a published article
  - Provide APIs to retrieve comments of a published article
  - Provide APIs to delete comments of the current user
