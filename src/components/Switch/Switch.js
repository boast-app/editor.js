/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"
import "./switch.css"

const Switch = (props) => {
  const { onToggle, isToggle } = props
  return(
    <div>
      <label className="switch">
        <input type="checkbox" onChange={onToggle} checked={isToggle} />
        <span className="slider" />
      </label>
    </div>
  )
}

export default Switch