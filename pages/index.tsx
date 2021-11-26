import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

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

    const [load, setLoad] = useState(false)
    
    useEffect(() => {
        setTimeout(() => setLoad(true), 1000)
    }, [])

    useEffect(() => {
        fetch(`${window.location.origin}/api/quizz/getQuizz`, {
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

            <div style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>

                <Navbar />

                <main className={styles.container}>

                    {
                        modalVisible && <ModalQuizz visible={setModalVisible} data={modalData} />
                    }

                
                    {   
                        data.map((x : any, i : number) => {
                            return (
                                <div className={styles.sliderHome} key={i}>
                                    <p className={styles.sliderp}>{ load ? x.cat : <Skeleton />}</p>
                                    <SliderHome modal={updateModal} data={x.quizz}/>
                                </div>
                            )
                        })
                    }

                </main>

                <Footer />

            </div>


        </div>
    )
}

export default Home
