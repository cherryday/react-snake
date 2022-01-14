import { HeaderBoard } from './components/HeaderBoard/HeaderBoard'
import { GameBoard } from './components/GameBoard/GameBoard'
import styles from './App.module.css'

export const App = () => {
  return (
    <div className={styles.app}>
      <div>
        <HeaderBoard/>
        <main>
          <GameBoard/>
        </main>
      </div>
    </div>
  )
}
