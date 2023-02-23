import React from 'react'

const MyParagraph = (props) => {
    console.log('MyPara RUNNING');
  return (
    <div>
      <p>{props.children}</p>
    </div>
  )
}

export default MyParagraph
