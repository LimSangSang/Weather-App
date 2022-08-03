import React, { useState, useCallback, useEffect } from 'react'
import Weather from '../components/Weather'
import Layout from '../components/Layout'
import WeatherSearch from './WeatherSearch';
import WeatherInfo from './WeatherInfo';

const Pages = () => {
  const [searchValue, setSearchValue]=useState('seoul')
  
  return (
    <Layout>
      <Weather>
        <WeatherSearch setSearchValue={setSearchValue} />
        <WeatherInfo searchValue={searchValue} />
      </Weather>
    </Layout>
    
  )
}

export default Pages
