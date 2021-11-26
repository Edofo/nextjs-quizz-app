import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

import Footer from '../components/footer'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import QuizzContainer from '../components/quizz/quizzContainer'

const Quizz: NextPage = () => {

    const [data, setData] = useState([])
    const [data2, setData2] = useState([])

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
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const cat = urlParams.get('cat');
            const id : any = urlParams.get('id');
            const lvl : any = urlParams.get('lvl');

            const categorie = data.filter((c : any) => c.cat === cat)
            const quizz = categorie[0].quizz.filter((q : any) => JSON.parse(q.id) === JSON.parse(id))
            const level = quizz[0].quizz.fr[lvl]

            if(cat === null || id === null || lvl === null) {
                return
            }

            setData2(quizz)
            setData(level)
        })
        .catch()
    }, [])


    return (
        <div>

            <Layout />

            {
                data.length >= 1 && data2.length >= 1 ?
                    <div style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
                        <Navbar />

                        <main>

                            <QuizzContainer data2={data2} data={data} />

                        </main>

                        <Footer />
                    </div>
                :
                    <p>Chargement</p>
            }

            

        </div>
    )
}

export default Quizz
