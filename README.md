# React Instagram Clone

A minimal Instagram-like social app built with React.

## Features

- User authentication (login/register, JWT-based)
- Feed and profile pages
- Post creation with image upload
- Like count (UI only, backend support required)
- Modern React (hooks, context, router)

## Quick Start

```bash
# Install dependencies
npm install

# Start the app
npm start
```

> Backend endpoints expected at `http://localhost:5000/api`  
> You can implement your own backend or request a sample Express/Mongo backend from Copilot!

## Folder Structure

```
src/
  api/           # Axios config
  components/    # Main UI components
  context/       # Auth context
  App.js         # Main app
  index.js       # Entry point
public/
  index.html
```

## Backend

- Auth: `POST /auth/login`, `POST /auth/register`
- Posts: `GET /posts`, `POST /posts`
- Expects JWT token in `Authorization` header

**Need a backend template? Just ask Copilot!**