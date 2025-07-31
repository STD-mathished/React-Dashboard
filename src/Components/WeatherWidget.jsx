import { useEffect, useState } from "react";

export default function WeatherWidget() {
    const key = import.meta.env.VITE_WEATHER_API_KEY
    const url = 'http://api.weatherapi.com/v1';

    const [temp, setTemp] = useState(0)
    const [location, setLocation] = useState(0)
    const [date, setDate] = useState('')
    const [humidity, setHumidity] = useState(0)
    const [feel, setFeel] = useState('')
    const defaultCity = 'paris'

    
    useEffect(() => {
        fetch(`${url}/current.json?key=${key}&q=${defaultCity}`)
        .then((response) => response.json())
        .then((data) => {
            setTemp(`${data.current.temp_c}°C`)
            setLocation(data.location.name)
            setDate(data.location.localtime)
            setHumidity(data.current.humidity)
            setFeel(data.current.feelslike_c)
        })
        .catch((error) => {
            console.error("API ERROR", error);
        });
  }, []); 

  return (
    <div className="rounded-2xl shadow p-4 bg-white">
      <h2 className="text-lg font-bold mb-2">Weather</h2>
      <div className="text-4xl font-semibold">{temp}</div>
      <div className="text-sm text-gray-500">{location}</div>
      <div className="text-xs text-gray-400">{date}</div>
      <div className="mt-2 text-sm">
        <p>Humidity: {humidity} %</p>
        <p>Feels like: {feel}°C</p>
      </div>
    </div>
  );
};

