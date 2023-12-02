# Create a YouTube Clone

## Set up Node.js and MongoDB

1. Install Node.js from the official website.
2. Install MongoDB (Homebrew is already installed).

```
brew tap mongodb/brew
brew update
xcode-select --install
brew install mongodb-community@7.0
```

3. Create and Navigate to Project Directory: `cd /Users/hblake/my-demos/yt`
4. Initialize Node.js Backend (this creates a `package.json` file).

```
npm init -y
```

```
// package.json
{
  "name": "yt",
  "version": "1.0.0",
  "description": "A Node.js application with server.js as the entry point",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "test": "echo "Error: no test specified" && exit 1",
    "start": "node server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@types/express": "^4.17.21",
    "express": "^4.18.2",
    "mongoose": "^8.0.2",
    "typescript": "^5.3.2"
  }
}
```

5. Create `server.js` in the Project Directory
6. Install Express and Mongoose: `npm install express mongoose`
7. Create the Data DB Directory for MongoDB: `mkdir /Users/hblake/my-demos/data/db`
8. Run MongoDB: `mongod --dbpath /Users/hblake/my-demos/data/db`

### To Do

1. User Authentication
2. Database Models
3. API Endpoints
4. Secure API Endpoints
5. Frontend Integration
6. Testing and Debugging
7. Deployment
8. Security
9. Monitoring and Scaling

---

# Google Cloud

1. Create a New Project in Google Cloud Console: `demo-yt`
2. Add YouTube Data API (v3) and Create Public Data Credentials

- Restrict the API key to IP addresses.
- Restrict the API key to use YouTube Data API v3 only.

3. Set up an environment variable to store the API key.

---

# Create the Backend App

1. Install some packages:

- `npm install -g typescript`
- `npm install --save @types/express`
- `npm install axios`
- `npm install dotenv`

2. Create `app.ts`

```
const express = require('express') // Import express
const app = express()
const port = process.env.PORT || 3000 // Use environment variable or port 3000 as default

// Define a route
app.get('/', (req: any, res: { send: (arg0: string) => void }) => {
res.send('Hello, Express!')
})

// Start the server
app.listen(port, () => {
console.log(`Server is running on port ${port}`)
})
```

3. Initialize TypeScript (this will transpile an `app.js` file): `tsc --init`
4. Start the App: `node app.js`
5. Access the app in the browser at `http://localhost:3000/`

---
