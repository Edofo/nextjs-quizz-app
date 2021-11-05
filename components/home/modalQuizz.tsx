import { useState } from 'react'
import styles from '../../styles/modalQuizz.module.scss'

const ModalQuizz = (props : any) => {

    const [difficulte, setDifficulte] = useState('')

    const styleSelect = { transform: 'scale(1.05)', boxShadow: '5px 5px 10px #28282850' }

    const generateQuizz = () => {
        // const questions = props.data.quizz.fr[difficulte]
        // sessionStorage.setItem('Quizz', JSON.stringify(questions))
        window.location.replace(`/quizz?cat=${props.data.cat}&id=${props.data.id}&lvl=${difficulte}`)
    }

    return (
        <div className={styles.modalQuizz}>

                <span onClick={() => props.visible(false)} className={styles.cross}></span>
                <img src={props.data.img} alt={props.data.thème} />

                <div className={styles.info}>
                    <p className={styles.title}>{props.data.thème}</p>
                    <hr />

                    <div className={styles.question}>
                        <span>Difficulté: {props.data.difficulté}</span>
                        <br/>
                        <br/>
                        <span>Nombre de questions débutant: {props.data.quizz.fr.débutant.length}</span>
                        <br/>
                        <span>Nombre de questions confirmé: {props.data.quizz.fr.confirmé.length}</span>
                        <br/>
                        <span>Nombre de questions expert: {props.data.quizz.fr.expert.length}</span>
                    </div>

                    <hr />                    

                    <div className={styles.select}>
                        <p>Choissisez votre difficuclté :</p>
                        <br />
                        <div className={styles.difficulte}>
                            <p className={styles.debutant} style={difficulte === 'débutant' ? styleSelect : {}} onClick={() => setDifficulte('débutant')}>Débutant</p>
                            <p className={styles.confirme} style={difficulte === 'confirmé' ? styleSelect : {}} onClick={() => setDifficulte('confirmé')}>Confirmé</p>
                            <p className={styles.expert} style={difficulte === 'expert' ? styleSelect : {}} onClick={() => setDifficulte('expert')}>Expert</p>
                        </div>
                    </div>

                    {
                        difficulte !== '' && <hr />
                    }

                    {
                        difficulte !== '' && <p onClick={() => generateQuizz()} className={styles.start}>Commencer</p>
                    }


                </div>

        </div>
    )
}

export default ModalQuizz
