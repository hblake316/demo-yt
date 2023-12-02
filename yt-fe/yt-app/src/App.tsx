import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

interface VideoData {
  kind: string
  etag: string
  id: {
    kind: string
    videoId: string
  }
  snippet: {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: {
      default: Thumbnail
      medium: Thumbnail
      high: Thumbnail
    }
    channelTitle: string
    liveBroadcastContent: string
    publishTime: string
  }
}

interface Thumbnail {
  url: string
  width: number
  height: number
}

function App() {
  const [data, setData] = useState<VideoData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      {
        try {
          const response = await fetch('http://localhost:3000/api/videos')
          const data = await response.json()
          setData(data)
        } catch {
          console.log('error')
        }
      }
    }
    fetchData()
  }, [])

  return (
    <div className='App'>
      <h1>demo</h1>
      <div className='card'>
        {data.map((video, idx) => (
          <div key={idx}>
            <p>{video.snippet.channelTitle}</p>
            <p>{video.snippet.title}</p>
            <p>{video.snippet.description}</p>
            <p>{video.snippet.publishTime}</p>
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
