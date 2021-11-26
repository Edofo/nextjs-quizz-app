import { useEffect, useState } from "react"
import Link from "next/link"
import styles from '../../styles/quizzContainer.module.scss'

const QuizzContainer = (props: any) => {

    const [error, setError] = useState(0)
    const [good, setGood] = useState(true)

    const [questions, setQuestions] : any= useState({})
    const [finish, setFinish] = useState(false)

    const [modal, setModal] = useState(false)

    let tab: any = [];
    tab = tab.concat(props.data)

    useEffect(() => {
        generateQuestion()
    }, [])

    const generateQuestion = () => {

        if(tab.length === 0) {
            return setFinish(true)
        }

        let randomIndex = Math.floor(Math.random() * tab.length);
        setQuestions(tab[randomIndex]);
        tab.splice(tab.indexOf(tab[randomIndex]), 1)
    }


    const checkResponse = () => {

        setModal(false)
        generateQuestion()

    }

    const displayModal = (value : string) => {
        setGood(true)
        if(value !== questions.réponse) {
            setError(error + 1)
            setGood(false)
        }
        setModal(true)
    }


    return (
        <div className={styles.quizzContainer}>

            <div>
                {
                    props.data.map((x: any, i: number) => {
                        console.log(props.data[i + 1])
                        return (
                            <>
                                <p>{ i + 1 }</p>
                                {
                                    props.data[i + 1] === undefined ?
                                        null
                                    :
                                        <hr />
                                }
                            </>
                        )
                    })
                }
            </div>

            {
                modal &&
                    <div className={styles.modal}>
                        {
                            good ? <h1>Bonne réponse !</h1> : <h1>Mauvaise réponse !</h1>
                        }
                        <p>La bonne réponse était: <strong>{questions.réponse}</strong></p>
                        <br />
                        <p><strong>Anecdote:</strong> {questions.anecdote}</p>
                        <p className={styles.button} onClick={() => checkResponse()}>Suivant</p>
                    </div>
            }
            
            {
                finish === true ?
                    <div className={styles.head2}>
                        <img src={props.data2[0].img} />
                        <div>
                            <p>Bravo !! Vous avez {error} erreur(s)</p>
                            <Link href="/">
                                <a>Retourner à l&apos;accueil</a>
                            </Link>
                        </div>
                    </div>
                :
                    questions.propositions !== undefined &&
                        <>
                            <div className={styles.head}>
                                <img src={props.data2[0].img} />
                                <p>{questions.question}</p>
                            </div>

                            <div className={styles.response}>
                                {
                                    questions.propositions.map((x : string, i : number) => {
                                        return (
                                            <p onClick={() => displayModal(x)} key={i}>{x}</p>
                                        )
                                    })
                                }
                            </div>
                        </>
            
            }

        </div>
    )

}

export default QuizzContainer