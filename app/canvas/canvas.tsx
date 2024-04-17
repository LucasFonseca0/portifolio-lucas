"use client"

import React, { useRef, useEffect } from 'react'

const Canvas = (props:any) => {
  
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  
  const snake = [{ top: 50, left: 100 }]
  let apple = { top: 70, left: 200 }
  
  const draw = (ctx:any) => {
    // Limpa o canvas
    ctx.fillStyle = '#FFFFFF'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    
    // Desenha a cobra
    ctx.fillStyle = '#000000'
    snake.forEach(part => {
      ctx.fillRect(part.left, part.top, 20, 20)
    })
    
    // Desenha a maçã
    ctx.fillStyle = '#FF0000'
    ctx.fillRect(apple.left, apple.top, 20, 20)
  }
  
  const moveSnake = () => {
    const head = Object.assign({}, snake[0]) // copia a cabeça da cobra
    if (head.left < apple.left) {
      head.left += 20
    } else if (head.left > apple.left) {
      head.left -= 20
    } else if (head.top < apple.top) {
      head.top += 20
    } else if (head.top > apple.top) {
      head.top -= 20
    }
    snake.unshift(head)
    if (head.left === apple.left && head.top === apple.top) { // a cobra comeu a maçã
      apple = { top: Math.random() * 400, left: Math.random() * 400 } // nova posição da maçã
    } else {
      snake.pop() // remove a cauda da cobra
    }
  }
  
  useEffect(() => {
    const canvas = canvasRef.current
    if(canvas == null) return
    const context = canvas.getContext('2d')
    if(context == null) return
    //Our first draw
    draw(context)
    setInterval(() => {
      moveSnake()
      draw(context)
    }, 200)
  }, [draw])
  
  return <canvas ref={canvasRef} {...props}/>
}

export default Canvas
