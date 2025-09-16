## 🚀 Backend (NestJS)

Tech stack

NestJS

Swagger for API docs

Class-validator for DTO validation

Mock JSON file as database (no real DB)

## Installation

cd backend
npm install

## Development

npm run start:dev

## Production build

npm run build
node dist/main.js

Endpoints

GET /comments → list all comments

GET /comments/:id → get single comment

POST /comments → create new comment

PUT /comments/:id → update comment (e.g. mark as replied)

POST /comments/:id/rate → rate one of the suggestions (1–5)

DELETE /comments/:id → remove a comment

Swagger

Docs available at:
👉 http://localhost:3000/api

Notes

Mock data is stored in src/data/Mock_Comments_With_Posts.json.

On build, the file is copied into dist/data.
