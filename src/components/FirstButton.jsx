import { useState } from "react"

let release = `react-sentry-github@1.0.0`

const FirstButton = () => {

const [isHover, setIsHover] = useState(false);

class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = `ERROR: "${message}" from ${release}`
    }
}

function handleClick(message) {
    throw new ValidationError(message);
}
function handleHover(message) {
    throw new ValidationError(message)
}
  return (
    <div>
        <button style={{
            borderRadius: '4px',
            background: 'cyan',
            color: '#7f8088',
            fontWeight: '600',
            padding: '4px 6px',
            width: '100px',
            border: 'none',
            outline: 'none',
            transition:'ease-in',
            transitionDuration: '200ms',
            transform: isHover ? 'scale(1.2)' : 'scale(1)'
        }} 
        onClick={() => {
            handleClick('this is an error in first button')
        }}
        onMouseOver={() => {
            setIsHover(true)
            handleHover('this error means user mouse in hover')
        }}
        onMouseOut={() => {
            setIsHover(false)
        }}
        >
            Click
        </button>
    </div>
  )
}

export default FirstButton