import { useState } from 'react'
import useCodeMirror from './use-codemirror'
import Uploader from '../Uploader/Uploader'

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

  const handleOnClick = (url) => {
    editorView.dispatch({
      changes: {from: line, insert: `![](${url})`}
    })
  }

  return(
    <div> 
      <div className='editor-wrapper' ref={refContainer}></div>
      <Uploader onClick={(url) => handleOnClick(url)} />
    </div>
  )
}

export default Editor