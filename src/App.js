// ======================================================================
// 创建和嵌套组件。

// function MyButton() {
//   return (
//     <button>
//       I'm a button.
//     </button>
//   );
// }
//
// export default function MyApp() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton />
//     </div>
//   );
// }

// ======================================================================
// JSX。

// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };
//
// export default function profile() {
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         className='avatar'
//         src={user.imageUrl}
//         alt={'Photo of' + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize
//         }}
//       />
//     </>
//   );
// }

// ======================================================================
// 条件渲染-渲染列表。

// const products = [
//   { title: 'Cabbage', isFruit: false, id: 1 },
//   { title: 'Garlic', isFruit: false, id: 2},
//   { title: 'Apple', isFruit: true, id: 3},
// ];
//
// export default function shoppingList() {
//   const listItems = products.map(product =>
//     <li
//       key={product.id}
//       style={{
//         color: product.isFruit ? 'magenta' : 'darkgreen'
//       }}
//     >
//       {product.title}
//     </li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

// ======================================================================
// 响应事件。

// import { useState } from 'react';
//
// function MyButton() {
//   const [count, setCount] = useState(0);
//
//   function handleClick() {
//     alert('You clicked me!');
//     setCount(count + 1)
//   }
//
//   return (
//     <button onClick={handleClick}>
//       Click {count} times
//     </button>
//   );
// }
//
// export default function MyApp() {
//   return (
//     <div>
//       <h1>Counter that update separately</h1>
//       <MyButton />
//       <MyButton />
//     </div>
//   );
// }

// ======================================================================
// 组件间共享数据。

// import {useState} from 'react';
//
// function MyButton({ count, onClick }) {
//   return (
//     <button onClick={onClick}>
//       Clicked {count} times
//     </button>
//   );
// }
//
// export default function MyApp() {
//   const [count, setCount] = useState(0);
//
//   function handleClick() {
//     setCount(count + 1);
//   }
//
//   return (
//     <div>
//       <h1>Counters that update separately</h1>
//       <MyButton count={count} onClick={handleClick} />
//       <MyButton count={count} onClick={handleClick} />
//     </div>
//   );
// }

// ======================================================================
// 井字棋游戏。

import { useState } from 'react';

function Square({ value, onSquareClick }) {
  // 状态提升，去除子组件的 state。
  //const [value, setValue] = useState(null);

  // function handleClick() {
  //   console.log('clicked!');
  //   //setValue('X');
  // }

  return (
    <button
      className='square'
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

// export 表示此函数可以在该文件之外访问。default 表示它是文件中的主要函数（只能有一个主要函数）。
// JSX 元素是 JavaScript 代码和 HTML 标签的组合（button 就是一个 JSX 元素）。
export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  // 状态提升，应该在父组件中定义 state 而不是在各个子组件中定义。由父组件告诉子组件应该显示什么。
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

