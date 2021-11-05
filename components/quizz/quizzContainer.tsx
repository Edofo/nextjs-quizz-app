import { useEffect, useState } from "react"

const QuizzContainer = (props: any) => {

    const [error, setError] = useState(0)
    const [questions, setQuestions] = useState({})

    let tab = props.data

    useEffect(() => {
        generateQuestion()
    }, [])

    const generateQuestion = () => {
        let tabList = JSON.parse(tab)

        if(tabList.length === 1) {
            return setQuestions(tabList)
        }

        let randomIndex = Math.floor(Math.random() * tabList.length);
        setQuestions(tabList[randomIndex]);
        tabList.splice(tabList.indexOf(tabList[randomIndex]), 1)
        tab = tabList
    }

    const addError = () => {
        setError(error + 1)
    }

    return (
        <div>
            <p>SALUT</p>

            <div>
                <img src={props.data2[0].img} />
                <p>{questions.question}</p>
            </div>

        </div>
    )

}

export default QuizzContainer