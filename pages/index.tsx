import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CardComponent from './api/components/CardComponent'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <CardComponent />      
    </div>
  )
}

export default Home
