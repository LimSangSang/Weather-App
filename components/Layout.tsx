import { Main } from 'next/document'
import React from 'react'
import styles from '../styles/Weather.module.css'

interface Props {
    children: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <main className={styles.container}>{children}</main>
  )
}

export default Layout