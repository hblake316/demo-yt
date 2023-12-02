# demo-yt

YouTube clone demo project using Node.js, Express.js, MongoDB, TypeScript, and React.

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
- `npm install cors`
- `npm install -g nodemon`

2. Create `app.ts` in the Project Directory.
3. Initialize TypeScript (this will transpile an `app.js` file): `tsc --init`
4. Start the App: `node app.js`
5. Access the app in the browser at `http://localhost:3000/`

---

## Set up React + TypeScript Project

1. Install some packages:

- `npm install -g create-vite`
- `npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion`

1. Create a React + TypeScript Project: `create-vite yt-app --template react-ts`

```
cd yt-app
npm install
npm run dev
```

3. Configure Vite for the Environment by updating vite.config.ts.
4. Set up the ChakraProvider.
5.
