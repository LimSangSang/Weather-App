import React, { useState, useCallback, Dispatch, SetStateAction } from 'react'
import Weather from '../components/Weather'
import Layout from '../components/Layout'
import { useKeywords } from '../hooks'
import { debounce } from "lodash";

interface SetStateProps {
  setSearchValue: Dispatch<SetStateAction<string>>
}

const WeatherSearch = ({ setSearchValue }: SetStateProps) => {
  const [inputValue, setInputValue]=useState('')
  const { data } = useKeywords(inputValue)

  const debouncingQuery = debounce((searchingText: string) => setInputValue(searchingText), 500); 

  const onHandleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {  
      const text = e.target.value;  
      debouncingQuery(text);
  }, [inputValue]);

  const onClick = (value: string) => {
    setSearchValue(value)
    setInputValue('')
  }


  return (
    <Weather.Search>
        <Weather.Input value={inputValue} onChange={onHandleChange} />
        <Weather.Result onClick={()=>onClick(inputValue)}>
            <Weather.Text>{data?.name}</Weather.Text>
            <Weather.Text><span>{data?.weather[0].description}</span></Weather.Text>
            <Weather.Text>{data?.main.temp}</Weather.Text>
        </Weather.Result>
    </Weather.Search>
  )
}

export default WeatherSearch
