import styles from '../../styles/slider.module.scss'

const SlideHome = (props : any) => {

    return (
        <div className={styles.slide} onClick={() => props.modal(props)}>
            <img src={props.data.img} alt={props.data.thème} />
            <div>
                <p>{props.data.thème}</p>
                <span>Difficulté: {props.data.difficulté}</span>
            </div>
        </div>
    )
}

export default SlideHome
