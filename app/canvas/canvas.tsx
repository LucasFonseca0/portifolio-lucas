import React, { useRef, useEffect } from 'react';

interface Point {
  x: number;
  y: number;
}

const drawSquare = (ctx: CanvasRenderingContext2D, x: number, y: number, color: string, squareSize: number) => {
  ctx.fillStyle = color;
  ctx.fillRect(x * squareSize, y * squareSize, squareSize, squareSize);
};

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const snakeRef = useRef<Point[]>([{ x: 11, y: 11 }]);
  const appleRef = useRef<Point>({ x: 10, y: 10 });
  const moveStep = 1; // Passo de movimento

  // Definindo a função draw antes de ser usada
  const draw = (ctx: CanvasRenderingContext2D, squareSize: number) => {
    // Limpa o canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Desenha a cobra
    snakeRef.current.forEach((part) => {
      drawSquare(ctx, part.x, part.y, '#000000', squareSize);
    });

    // Desenha a maçã
    drawSquare(ctx, appleRef.current.x, appleRef.current.y, '#FF0000', squareSize);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const squareSize = window.innerWidth / 24;
      draw(context, squareSize); // Redesenha o canvas após atualizar o tamanho
    };

    // Função para atualizar o tamanho do canvas

    // Definindo a largura e a altura do canvas
    updateCanvasSize();

    // Adicionando um ouvinte de evento de redimensionamento para atualizar o tamanho do canvas
    window.addEventListener('resize', updateCanvasSize);

    const moveSnake = (squareSize: number) => {
      const head = { ...snakeRef.current[0] }; // Cabeça da cobra
      const newSnake = [...snakeRef.current];

      // Movimento da cobra em direção à maçã
      if (head.x < appleRef.current.x) head.x += moveStep;
      else if (head.x > appleRef.current.x) head.x -= moveStep;
      else if (head.y < appleRef.current.y) head.y += moveStep;
      else if (head.y > appleRef.current.y) head.y -= moveStep;

      newSnake.unshift(head);

      // Se a cobra comeu a maçã, reposiciona a maçã
      if (head.x === appleRef.current.x && head.y === appleRef.current.y) {
        appleRef.current = {
          x: Math.floor(Math.random() * (canvasRef.current?.width! / squareSize)), // Posição aleatória para x
          y: Math.floor(Math.random() * (canvasRef.current?.height! / squareSize)), // Posição aleatória para y
        };
      } else {
        newSnake.pop(); // Remove a cauda da cobra
      }

      snakeRef.current = newSnake;
    };

    // Primeiro desenho
    draw(context, window.innerWidth / 24);

    const intervalId = setInterval(() => {
      moveSnake(window.innerWidth / 24);
      draw(context, window.innerWidth / 24);
    }, 200);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', updateCanvasSize); // Remover o ouvinte de evento de redimensionamento ao desmontar o componente
    };
  }, []); // Apenas executa no carregamento inicial

  return <canvas ref={canvasRef} className='fixed top-0 left-0 -z-10' />;
};

export default Canvas;
