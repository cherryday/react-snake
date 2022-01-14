import foodImg from '../../assets/images/food.png'
import recordImg from '../../assets/images/record.png'
import soundUpImg from '../../assets/images/sound-up.png'
import closeImg from '../../assets/images/close.png'
import styles from './HeaderBoard.module.css'

export const HeaderBoard = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.stat}>
        <div className={styles.food}>
          <img
            src={foodImg}
            alt="food"
            className={styles.image}
          />
          <div className={styles.count}>0</div>
        </div>
        <div className={styles.record}>
          <img
            src={recordImg}
            alt="record"
            className={styles.image}
          />
          <div className={styles.count}>0</div>
        </div>
      </div>
      <div className={styles.actions}>
        <button className={styles.btn}>
          <img
            src={soundUpImg}
            alt="sound"
          />
        </button>
        <button className={styles.btn}>
          <img
            src={closeImg}
            alt="close"
          />
        </button>
      </div>
    </header>
  )
}
