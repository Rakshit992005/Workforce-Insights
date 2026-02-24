import React from 'react'

const ListItems = (props) => {
  return (
    <div>
        <ul>
            <li>{props.item[0]}</li>
            <li>{props.item[1]}</li>
            <li>{props.item[2]}</li>
            <li>{props.item[3]}</li>
            <li>{props.item[4]}</li>
        </ul>
    </div>
  )
}

export default ListItems