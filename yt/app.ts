require('dotenv').config() // Load environment variables from .env file
const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()
const port = process.env.PORT || 3000
app.use(cors())

// Define a route
app.get('/', (req: any, res: { send: (arg0: string) => void }) => {
  res.send('Hello, Express!')
})

// Define a route to fetch videos
app.get(
  '/api/videos',
  async (
    req: any,
    res: {
      json: (arg0: any) => void
      status: (arg0: number) => {
        (): any
        new (): any
        send: { (arg0: string): void; new (): any }
      }
    }
  ) => {
    try {
      const response = await axios.get(
        'https://www.googleapis.com/youtube/v3/search',
        {
          params: {
            part: 'snippet',
            maxResults: 10,
            q: 'astrology 2024', // Example search query
            key: process.env.YOUTUBE_API_KEY,
          },
        }
      )

      res.json(response.data.items)
    } catch (error) {
      console.error('Error fetching videos:', error)
      res.status(500).send('Error fetching videos')
    }
  }
)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
