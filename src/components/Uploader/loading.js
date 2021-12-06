/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"

const wrapper = css`
  width: 120px;
  height: 26px;
  padding: 5px;
  display: flex;
  background-color: #333;
  border-radius: 4px;
`

const svg = css`
  width: 26px;
  height: 26px;
  fill: #7dd7fd;
`

const circle = css`
  fill: #dff4fd;
`

const text = css`
  font-size: 14px;
  color: #dddddd;
  height: 12px;
  margin: 0 auto;
  margin-top: 4px;
  margin-bottom: 6px;
`

const Loading = (props) => {
  const { progress } = props

  if (progress === 100) {
    return(
      <div css={wrapper}>
        <p css={text}>Sucsess!</p>
      </div>
    )
  } else if(progress === 101) {
    return(
      <div />
    )
  } else {
    return(
      <div css={wrapper}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" css={svg}>
          <path css={circle} d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"></path>
            <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
            <animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite"></animateTransform>
          </path>
        </svg>    
      <p css={text}>Uploading...</p>
      </div>
    )
  }
}

export default Loading