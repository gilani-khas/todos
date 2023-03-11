import { useState } from "react";

function Checkbox() {
  const [check, setCheck] = useState(true);

  function hadlerCheck() {
    setCheck(!check);
  }

  return (
    <div hadlerCheck={hadlerCheck}>
      <input
        type='checkbox'
        checked={check}
        onChange={hadlerCheck}
        className='check'
      />
    </div>
  );
}

export default Checkbox;
