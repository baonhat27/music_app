/* eslint-disable react/display-name */
import React from 'react'
import PlayingBar from '../components/Playing'

const withBottomBar = (WrappedComponnent) => (props) => {
  return (
    <>
      <div className="w-full h-full flex flex-col pb-[80px]">
        <WrappedComponnent {...props} />
      </div>
      <PlayingBar />
    </>
  )
}

export default withBottomBar