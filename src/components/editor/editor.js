import { useState } from 'react'
import useCodeMirror from './use-codemirror'


const Editor = (props) => {
  const [line, setLine] = useState()
  const { onChange, initialDoc } = props
  const handleChange = (doc, line) => {
    onChange(doc)
    setLine(line)
  }
  const [refContainer, editorView] = useCodeMirror({
    initialDoc: initialDoc,
    onChange: handleChange
  })

  const handleOnClick = () => {
    editorView.dispatch({
      changes: {from: line, insert: "![](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)"}
    })
  }

  return(
    <div> 
      <div className='editor-wrapper' ref={refContainer}></div>
      <button onClick={handleOnClick}>Add</button>
    </div>
  )
}

export default Editor