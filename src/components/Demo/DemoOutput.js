import React from 'react'
import MyParagraph from './MyPara';

const DemoOutput = (props) => {
    console.log('DemoOutput Running');
  return (
    <div>
      <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>
    </div>
  )
}

export default React.memo(DemoOutput);
