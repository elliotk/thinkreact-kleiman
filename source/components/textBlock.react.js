import React from 'react';
import Row from 'react-bootstrap/lib/Row'

const style = {
  fontStyle:'italic'
}

const textBlock = (date, text, user) => (

    <div>
       <span>{date}</span>
       <span style = {style}>{text}</span>
       <span>{user}</span>
    </div>

)

export default textBlock;
