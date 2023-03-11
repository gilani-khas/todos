import { useState } from "react";
import Checkbox from "./Checkbox";

function ToDO() {
  const [todos, setTodos] = useState([
    {
      text: "HTML",
    },
    {
      text: "CSS",
    },
    {
      text: "JS",
    },
    {
      text: "REACT",
    },
  ]);

  const [text, setText] = useState("");
  function handlerChange(e) {
    setText(e.target.value);
  }
  const [check, setCheck] = useState(false);
  function handlerChanges() {
    setCheck(!check);
  }

  function handlerbtn() {
    setTodos([
      {
        text: text,
        done: check,
      },
      ...todos,
    ]);
    setText("");
    setCheck(false);
  }

  return (
    <div className='Todo'>
      <div className='input'>
        <input
          type='text'
          placeholder='Введите текст'
          value={text}
          onChange={handlerChange}
        />
        <button onClick={handlerbtn} className='btn'>
          add
        </button>
        <Checkbox check={check} handlerChanges={handlerChanges} />
      </div>

      {todos.map((item, idx) => {
        return (
          <div className='text'>
            <li key={idx} className='text-li'>
              {item.text}
            </li>
            <input type='checkbox' checked={item.done} />
          </div>
        );
      })}
    </div>
  );
}

export default ToDO;
