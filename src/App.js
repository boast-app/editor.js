/** @jsxImportSource @emotion/react */

import { useState } from 'react'
import Editor from './components/editor/editor'
import { css } from "@emotion/react"

const App = () => {
  const [doc, setDoc] = useState('# Hello, World!\n')

  const handleDocChange = (doc) => {
    setDoc(doc)
  }

  return(
    <Editor onChange={handleDocChange} initialDoc={doc} />
  )
}

export default App

//dangerouslySetInnerHTML={{ __html: html }}
// .doc.text.join("\n")