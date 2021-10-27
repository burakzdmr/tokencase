import React, { useEffect ,useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Marketplace from '../components/market/Marketplace'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.base}>
        <Marketplace/>
      </div>
    </div>
  )
}
