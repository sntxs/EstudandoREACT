import styles from './Frase.module.css'

function Frase(){
    return (
        <div className={styles.fraseContainer}>
            <p> Esse é um componete com uma frase !</p>
            <p> Esse é um componete!</p>
            <div className={styles.fraseContent}>
            <p> Esse é um componete com uma frase !</p>
            <p> Esse é um componete!</p>
            </div>
        </div>
    )
}

export default Frase