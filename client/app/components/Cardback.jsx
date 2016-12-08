import React from 'react'
import ReactDOM from 'react-dom'

const Card = (props) => {
  return (
    <div>
      <p>Back of card</p>
    </div>
  )
}

Card.propTypes = {
  cardInfo: PropTypes.object.isRequired,
};
