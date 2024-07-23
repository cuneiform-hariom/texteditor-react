import { useEffect, useState } from "react";

export default function App() {
  const [linkUrl, setLinkUrl] = useState('');

  const formatDoc = (cmd, value) => {
    document.execCommand(cmd, false, value || null);
  };

  const addLink = () => {
    const url = prompt('Insert url');
    if (url) {
      setLinkUrl(url);
      formatDoc('createLink', url);
    }
  };

  useEffect(() => {
    formatDoc('formatBlock', 'p');
  }, []);


  return (
    <div>
      <div className="container">
        <div className="toolbar">
          <div className="format-btns">
            <button onClick={() => formatDoc("undo")}><i className='bx bx-undo'></i></button>
            <button onClick={() => formatDoc("redo")}><i className='bx bx-redo'></i></button>
            <select defaultValue={"p"} onChange={(e) => formatDoc('formatBlock', e.target.value)}>
              <option value="h1">Heading 1</option>
              <option value="h2">Heading 2</option>
              <option value="h3">Heading 3</option>
              <option value="h4">Heading 4</option>
              <option value="h5">Heading 5</option>
              <option value="h6">Heading 6</option>
              <option value="p">Paragraph</option>
            </select>
            <button onClick={() => formatDoc("justifyLeft")}><i className='bx bx-align-left'></i></button>
            <button onClick={() => formatDoc("justifyCenter")}><i className='bx bx-align-middle'></i></button>
            <button onClick={() => formatDoc("justifyRight")}><i className='bx bx-align-right'></i></button>
            <button onClick={() => formatDoc("justifyFull")}><i className='bx bx-align-justify'></i></button>
            <div className="color">
              <input type="color" onInput={(e) => formatDoc('foreColor', e.target.value)} />
            </div>
            <button onClick={() => formatDoc("bold")}><i className='bx bx-bold'></i></button>
            <button onClick={() => formatDoc("underline")}><i className='bx bx-underline'></i></button>
            <button onClick={() => formatDoc("italic")}><i className='bx bx-italic'></i></button>
            <button onClick={() => formatDoc("strikeThrough")}><i className='bx bx-strikethrough'></i></button>
            <button onClick={() => formatDoc("insertUnorderedList")}><i className='bx bx-list-ul'></i></button>
            <button onClick={() => formatDoc("insertOrderedList")}><i className='bx bx-list-ol'></i></button>
            <button onClick={addLink}><i className='bx bx-link'></i></button>
            <button onClick={() => formatDoc("unlink")}><i className='bx bx-unlink'></i></button>
            <button onClick={() => formatDoc("insertHorizontalRule")}>-</button>
          </div>
        </div>
        <div id="content" contentEditable="true" spellCheck="false"></div>
      </div>
    </div>
  );
}
