# Easy Speak API

Node.js + Express + MongoDB REST API for user auth, profiles, and posts.

## Prerequisites
- Node.js 18+ and npm
- MongoDB connection string

## Setup
1) Install dependencies:
   npm install

2) Create your environment file:
   # macOS/Linux
   cp .env.example .env
   # Windows (PowerShell)
   Copy-Item .env.example .env
   # Windows (CMD)
   copy .env.example .env

3) Edit .env and set:
   - MONGO_URI: MongoDB connection string
   - JWT_SECRET: random long secret for JWT signing
   - GITHUB_TOKEN (optional): personal access token to increase GitHub API rate limits
   - PORT (optional): server port (default 5000)

4) Run the API (dev):
   npm run dev

Health check:
- GET / → "API running"

## Scripts
- npm run dev: start with nodemon
- npm run server: same as dev
- npm start: start with node

## Environment variables
- MONGO_URI: e.g. mongodb+srv://user:pass@cluster/db
- JWT_SECRET: e.g. a long random string
- GITHUB_TOKEN (optional): used by /api/profile/github/:username
- PORT (optional): default 5000

## API overview
Authentication
- POST /api/auth → login with { email, password }, returns { token }
- GET  /api/auth → get current user (private; Authorization: Bearer <token>)

Users
- POST /api/users → register { name, email, password }

Profiles (private unless noted)
- GET    /api/profile/me → current user profile
- POST   /api/profile     → create/update profile (status, skills, etc.)
- GET    /api/profile     → all profiles (public)
- GET    /api/profile/user/:user_id → by user id (public)
- DELETE /api/profile     → delete profile, user, and posts
- PUT    /api/profile/experience → add experience
- DELETE /api/profile/experience/:exp_id → remove experience
- PUT    /api/profile/education → add education
- DELETE /api/profile/education/:edu_id → remove education
- GET    /api/profile/github/:username → public repos from GitHub

Posts (private)
- POST   /api/posts → create post { text }
- GET    /api/posts → list posts (newest first)
- GET    /api/posts/:id → single post
- DELETE /api/posts/:id → delete own post
- PUT    /api/posts/like/:id → like post
- PUT    /api/posts/unlike/:id → unlike post
- POST   /api/posts/comment/:id → add comment { text }
- DELETE /api/posts/comment/:id/:comment_id → delete own comment

Auth header
- Use Authorization: Bearer <JWT>

## Notes
- Secrets are loaded from .env via dotenv; do not commit .env.
- request dependency was replaced by axios in the GitHub route.

## License
MIT