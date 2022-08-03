import React from 'react'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import type { NextPage } from 'next'
import Pages from '../components/Pages'
import { fetchWeather } from '../hooks'

const Home: NextPage = () => {
  return (
    <Pages />   
  )
}

export async function getStaticProps() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
      }
    }
  })

  await queryClient.prefetchQuery(['posts'], () => fetchWeather('Seoul'))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Home
