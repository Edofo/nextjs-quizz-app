import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

import Footer from '../components/footer'
import ModalQuizz from '../components/home/modalQuizz'
import SliderHome from '../components/home/slider'
import Layout from '../components/layout'
import Navbar from '../components/navbar'

import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {

    const [data, setData] = useState([])

    const [modalData, setModalData] = useState([])
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        fetch(`https://nextjs-quizz-app.vercel.app/api/quizz/getQuizz`, {
            'method': 'get',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json',

            }
        })
        .then(response => response.json())
        .then((data) => {
            setData(data)
        })
        .catch()
    }, [])

    const updateModal = (info : any) => {
        if(info) {
            setModalData(info.data)
        }
        setModalVisible(!modalVisible)
    }

    return (
        <div>

            <Layout />

            <Navbar />

            <main className={styles.container}>

                {
                    modalVisible && <ModalQuizz visible={setModalVisible} data={modalData} />
                }

            
                {
                    data.map((x : any, i : number) => {
                        return (
                            <div className={styles.sliderHome} key={i}>
                                <p className={styles.sliderp}>{x.cat}</p>
                                <SliderHome modal={updateModal} data={x.quizz}/>
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
