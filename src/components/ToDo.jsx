import { useState } from "react";

function ToDO({ hadlerCheck }) {
  const [todos, setTodos] = useState([
    {
      text: "HTML",
      done: false,
    },
    {
      text: "CSS",
      done: false,
    },
    {
      text: "JS",
      done: false,
    },
    {
      text: "REACT",
      done: false,
    },
  ]);

  const [text, setText] = useState("");

  function handlerChange(e) {
    setText(e.target.value);
  }

  function handlerbtn(done) {
    setTodos([
      {
        text: text,
        done: hadlerCheck !== done ? hadlerCheck : done,
      },
      ...todos,
    ]);
    setText("");
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
