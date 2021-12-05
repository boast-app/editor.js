import React, { useState } from 'react'
import Editor from './components/editor/editor'

const App = () => {
  const [doc, setDoc] = useState('# Hello, World!\n')
  const [line, setLine] = useState()

  const handleDocChange = (doc, line) => {
    setDoc(doc)
    setLine(line)
    console.log(line)
  }

  return  <Editor onChange={handleDocChange} initialDoc={doc} />
}

export default App

//dangerouslySetInnerHTML={{ __html: html }}
// .doc.text.join("\n")