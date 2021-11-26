
import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from '../../styles/slider.module.scss'


const SlideHome = (props : any) => {

    const [load, setLoad] = useState(false)
    
    useEffect(() => {
        setTimeout(() => setLoad(true), 1000)
    }, [])

    return (
        <div className={styles.slide} onClick={() => props.modal(props)}>
            {
                load ?
                    <>
                        <img src={props.data.img} alt={props.data.thème} />
                        <div>
                            <p>{props.data.thème}</p>
                            <span>Difficulté: {props.data.difficulté}</span>
                        </div>
                    </>
                :
                    <Skeleton />
            }
        </div>
    )
}

export default SlideHome
