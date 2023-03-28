/* eslint-disable react/display-name */
import React from 'react'
import PlayingBar from '../components/Playing'

const withBottomBar = (WrappedComponnent: any) => (props: any) => {
  return (
    <>
      <div className="w-full h-full flex flex-col">
        <WrappedComponnent {...props} />
      </div>
      <PlayingBar />
    </>
  )
}

export default withBottomBar
