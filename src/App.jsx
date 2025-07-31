import { useState } from 'react'
import './App.css'
import WeatherWidget from './Components/WeatherWidget'
import NewsWidget from './Components/NewsWidget'
import QuickNotes from './Components/QuickNote'

function App() {
  const [name, setName] = useState('')
  const [fname, setFname] = useState('')
  
  return (
    <div className="min-h-screen bg-gray-100 p-6 grid gap-4 md:grid-cols-2">
      <WeatherWidget />
      <NewsWidget />
      <div className="md:col-span-2">
        <QuickNotes />
      </div>
    </div>
  )
}

export default App
