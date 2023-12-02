"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
require('dotenv').config(); // Load environment variables from .env file
const express = require('express'); // Import express
const axios = require('axios'); // Import axios
const app = express();
const port = process.env.PORT || 3000; // Use environment variable or port 3000 as default
// Define a route
// app.get('/', (req: any, res: { send: (arg0: string) => void }) => {
//   res.send('Hello, Express!')
// })
// Define a route to fetch videos
app.get('/videos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                maxResults: 10,
                q: 'coding tutorials', // Example search query
                key: process.env.YOUTUBE_API_KEY,
            },
        });
        res.json(response.data.items);
    }
    catch (error) {
        console.error('Error fetching videos:', error);
        res.status(500).send('Error fetching videos');
    }
}));
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
