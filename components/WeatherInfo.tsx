import React, { useState, useCallback, useEffect } from 'react'
import Weather from '../components/Weather'
import { useWeather } from '../hooks'

interface Props {
    searchValue: string
}

const WeatherInfo = ({searchValue}: Props) => {
  const { data } = useWeather(searchValue)
  
  return (
    <Weather.Info>
        <Weather.Text>{data?.name}</Weather.Text>
        <Weather.Text><span>{data?.weather[0].description}</span></Weather.Text>
        <Weather.Text>{data?.main.temp}</Weather.Text>
        {data && <Weather.Image value={data?.weather[0].icon}/>}
    </Weather.Info>
  )
}

export default WeatherInfo
