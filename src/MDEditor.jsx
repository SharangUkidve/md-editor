const MDEditor = ({ text, onChange, onSave, disableSave }) => {
  /**
   * @param {KeyboardEvent} e
   */
  const handleSave = e => {
    if (e.keyCode === 83 && (e.metaKey || e.ctrlKey) && !disableSave) {
      e.preventDefault();
      onSave();
    }
  };
  return (
    <textarea
      className='md-editor'
      name='editor'
      id='editor'
      cols='100'
      rows='10'
      value={text}
      onKeyDown={handleSave}
      placeholder='Write some MD'
      onInput={e => onChange(e.target.value)}
    ></textarea>
  );
};

export default MDEditor;
