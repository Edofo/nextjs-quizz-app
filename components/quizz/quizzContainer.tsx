import { useEffect, useState } from "react"
import Link from "next/link"
import styles from '../../styles/QuizzContainer.module.scss'

const QuizzContainer = (props: any) => {

    const [error, setError] = useState(0)
    const [questions, setQuestions] : any= useState({})
    const [finish, setFinish] = useState(false)

    let tab = props.data

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


    const checkResponse = (value : string) => {


        if(value !== questions.réponse) {
            setError(error + 1)
        }

        generateQuestion()

    }


    return (
        <div className={styles.quizzContainer}>
            
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
                                            <p onClick={() => checkResponse(x)} key={i}>{x}</p>
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