import { useQuery } from '@tanstack/react-query'
import axios from "axios";

const fetchWeather = async (keyword: string) => {
    const apikey=process.env.REACT_APP_API_KEY
    const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${keyword}&appid=fa8002f7ed04d60e6dec428711ef73c2`)
    return data.data
}
  
const useWeather = (keyword: string) => {
    return useQuery(['posts', keyword], () => fetchWeather(keyword), {
        enabled: !!keyword,
        retry: 0,
      })
}

const useKeywords = (keyword: string) => {
    return useQuery(['keyword', keyword], () => fetchWeather(keyword), {
        enabled: !!keyword,
        retry: 0,
    })
}
  
export { useWeather, fetchWeather, useKeywords }