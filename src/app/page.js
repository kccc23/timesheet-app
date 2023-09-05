import Image from 'next/image'
import styles from './page.module.css'
import Entries from '@/components/Entries'

export default async function Home() {

  return (
    <main className={styles.main}>
      <Entries />
    </main>
  )
}
