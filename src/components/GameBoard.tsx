import { useEffect, useRef } from 'react'
import styles from './GameBoard.module.css'

const CELL_SIZE = 30
const COL_LENGTH = 15
const ROW_LENGTH = 17

export const GameBoard = (): JSX.Element=> {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasWidth = ROW_LENGTH * CELL_SIZE
  const canvasHeight = COL_LENGTH * CELL_SIZE

  useEffect(() => {
    const context = canvasRef.current!.getContext('2d')!
    drawBoard(context)
  }, [])

  const drawBoard = (ctx: CanvasRenderingContext2D) => {
    const colorLight = '#AAD752'
    const colorDark = '#A2D14A'

    for (let y = 0; y < COL_LENGTH; y++) {
      for (let x = 0; x < ROW_LENGTH; x++) {
        if ((x + y) % 2 === 0) {
          ctx.fillStyle = colorLight
        } else {
          ctx.fillStyle = colorDark
        }
        ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE)
      }
    }
  }

  const drawSnake = (ctx: CanvasRenderingContext2D) => {}

  return (
    <canvas
      ref={canvasRef}
      width={canvasWidth}
      height={canvasHeight}
      className={styles.board}
    ></canvas>
  )
}