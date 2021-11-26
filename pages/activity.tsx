import type { NextPage } from 'next'

import Footer from '../components/footer'
import Layout from '../components/layout'
import Navbar from '../components/navbar'

import styles from '../styles/Home.module.scss'

const Activity: NextPage = () => {

    return (
        <div>

            <Layout />

            <div style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>

                <Navbar />

                <main className={styles.container}>

                </main>

                <Footer />

            </div>


        </div>
    )
}

export default Activity
