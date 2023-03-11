function Checkbox(props) {
  return (
    <div>
      <label htmlFor='check'></label>
      <input
        name='check'
        type='checkbox'
        checked={props.check}
        onChange={props.handlerChanges}
        className='check'
      />
    </div>
  );
}

export default Checkbox;
