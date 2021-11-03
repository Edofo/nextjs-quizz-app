import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

import Footer from '../components/footer'
import SliderHome from '../components/home/slider'
import Layout from '../components/layout'
import Navbar from '../components/navbar'

import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`${window.location.hostname}/api/quizz/getQuizz`)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            setData(data)
        })
        .catch()
    }, [])

    return (
        <div>

            <Layout />

            <Navbar />

            <main className={styles.container}>
            
                {
                    data.map((x : any, i : number) => {
                        return (
                            <div className={styles.sliderHome} key={i}>
                                <p className={styles.sliderp}>{x[0].cat}</p>
                                <SliderHome data={x}/>
                            </div>
                        )
                    })
                }

            </main>

            <Footer />

        </div>
    )
}

export default Home
