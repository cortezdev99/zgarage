import React from 'react'

const Loading = (props) => {
  const {
    small
  } = props;
  return (
    <div className={`loader ${small ? "loader-small" : ""}`} />
  )
}

export default Loading;