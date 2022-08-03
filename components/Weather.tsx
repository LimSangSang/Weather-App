import Image from 'next/image'
import React from 'react'
import styles from '../styles/Weather.module.css'

interface Props {
    children: React.ReactNode
}

interface StringProps {
    value: string,
}

interface InputProps extends StringProps {
    onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
}

interface ClickProps extends Props {
    onClick: React.MouseEventHandler
}

const Weather = ({children}: Props) => {
  return (
    <article className={styles.temp_layout}>{children}</article>
  )
}

Weather.Info = ({ children }: Props) => {
    return (
        <section className={styles.flexColumn}>
            {children}
        </section>
    )
}

Weather.Text = ({ children }: Props) => {
    return (
        <span>{children}</span>
    )
}

Weather.Image = ({value}: StringProps) => {
    return <Image src={`http://openweathermap.org/img/wn/${value}@2x.png`} width={100} height={100} />
}

Weather.Input = ({value, onChange}: InputProps) => {
    return <input type='text' value={value} onChange={onChange} />
}

Weather.Search = ({ children }: Props) => {
    return <section className={styles.flexColumn} >{children}</section>
}

Weather.Result = ({ children, onClick }: ClickProps) => {
    return <div className={styles.result_layout} onClick={onClick}>{children}</div>
}

export default Weather