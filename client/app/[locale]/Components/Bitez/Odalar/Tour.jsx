import React from 'react'

const Tour = ({ iframeUrl }) => {
  return (
    <div className="flex -my-60 justify-center items-center w-full min-h-screen">
      <div className="w-[1150px] h-[500px]">
        <iframe
          src={iframeUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="w-full h-full rounded-lg"
        />
      </div>
    </div>
  )
}

export default Tour