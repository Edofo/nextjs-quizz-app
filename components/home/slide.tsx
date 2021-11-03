import styles from '../../styles/slider.module.scss'

const SlideHome = (props : any) => {
    return (
        <div className={styles.slide}>
            <img src={props.data.img} alt={props.data.thème} />
            <p>{props.data.thème}</p>
        </div>
    )
}

export default SlideHome
