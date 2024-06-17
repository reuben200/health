import React from 'react'
import MyQuotes from './MyQuotes'
import AppDownload from './AppDownload'

const QuotesSection = () => {
  return (
    <div className='flex flex-col items-center lg:justify-between space-y-5 lg:flex-row space-x-5 w-full rounded-md p-5 lg:py-5'>
        <MyQuotes />
        <AppDownload />
    </div>
  )
}

export default QuotesSection