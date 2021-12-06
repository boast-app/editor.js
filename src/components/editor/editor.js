/** @jsxImportSource @emotion/react */

import { useState } from 'react'
import useCodeMirror from './use-codemirror'
import Uploader from '../Uploader/Uploader'
import Switch from "../Switch/Switch"
import { css } from "@emotion/react"

const editorWrapper = css`
  display: flex;
  min-height: 500px;
  max-width: 750px;
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
`

const codemirrorStyle = css`
  color: #444;
  line-height: 1.8;
  font-size: 15px;
  box-shadow: 0 10px 20px #4b57a91a;
  border-radius: 8px;
  padding: 10px;
  background-color: #FFFFFF;
  margin-right: 30px;
  width: 100%;
`

const Editor = (props) => {
  const [line, setLine] = useState()
  const { onChange, initialDoc } = props
  const [isToggle, setIsToggle] = useState(false)
  
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
    <div css={editorWrapper}> 

      <div css={codemirrorStyle} style={{ display: isToggle ? "block" : "none" }} />
      <div css={codemirrorStyle} style={{ display: isToggle ? "none" : "block" }} ref={refContainer} />

      <div>
        <Switch onToggle={() => setIsToggle(!isToggle)} isToggle={isToggle} />
        <Uploader onClick={(url) => handleOnClick(url)} />
      </div>
    </div>
  )
}

export default Editor