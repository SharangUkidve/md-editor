import { useState } from 'react';
import MDEditor from './MDEditor';
import MDPreview from './MDPreview';
import './App.scss';
import Header from './Header';

function App() {
  const [text, setText] = useState(`# Heading 1
## Heading 2
### Heading 3

---

## Code

\`<div> Hello World </div>\`

\`\`\`
// code block

function sum(num1, num2) {
  return num1 + num2;
}
\`\`\`

---

## Text Formatting
**bold**, _italic_, **_bold and italic_**, ~~strike~~

---

## Links
[FreeCodeCamp](https://www.freecodecamp.com)
[DuckDuckGo](https://www.duckduckgo.com)
[GitHub](https://github.com "GitHub")

<https://developer.mozilla.org/en-US/>

---

## Block Quotes
> Avian carriers can provide high delay, low throughput, and low altitude service. The connection topology is limited to a single point-to-point path for each carrier, used with standard carriers, but many carriers can be used without significant interference with each other, outside of early spring.
>> This is because of the 3D ether space available to the carriers, in contrast to the 1D ether used by IEEE802.3. The carriers have an intrinsic collision avoidance system, which increases availability.

---

## Tables

### Rating for The Dark Knight

Site | Rating 
------------ | ------------- 
IMDb | 9.0
Rotten Tomatoes | 94%
MetaCritic | 84

---

## Horizontal Separator

---

## Lists

- Unordered Lists
  - Nested
     - Nested x2
     - Nested x2
  - Nested


1. Ordered Lists
    1. Nesting
        1. Nested x2
2. Ordered

---

## Images

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)
`);

  const updateText = value => {
    setText(value);
  };

  const saveFile = () => {
    const data = new Blob([text], { type: 'text/plain' });
    const url = window.URL.createObjectURL(data);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'markdown.md';
    a.click();
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
    }, 1000 * 2 * 60);
  };

  return (
    <>
      <Header disableSave={!text.length} onSave={saveFile} />
      <main className='md'>
        <MDEditor
          disableSave={!text.length}
          text={text}
          onChange={updateText}
          onSave={saveFile}
        />
        <MDPreview text={text} />
      </main>
    </>
  );
}

export default App;
