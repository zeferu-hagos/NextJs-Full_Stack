
import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
const Footer = () => {
  return (
    <div className={styles.container}>
          <div>2023 zeferu-media all right reserved</div>
      <div className={styles.social}>
        <Image src="/2.png" height={15} width={15}className={styles.icon} alt='facebook account'></Image>
        <Image src="/3.png" height={15} width={15}className={styles.icon} alt='facebook account'></Image>
        <Image src="/1.png" height={15} width={15}className={styles.icon} alt='facebook account'></Image>
        <Image src="/4.png" height={15} width={15}className={styles.icon} alt='facebook account'></Image>
          </div>
    </div>
  )
}

export default Footer
