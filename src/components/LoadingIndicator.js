import React from 'react'
import { useSelector } from 'react-redux'

export const LoadingIndicator = () => {
  const isLoading = useSelector((state) => state.ui.isLoading)

  return (
    <div className='styling-loader'>
      {isLoading && <div className="loader"></div>}
    </div>
  )
}