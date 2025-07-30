import React from 'react'

const Tour = ({ iframeUrl }) => {
  return (
    <div className="flex -my-40 sm:-my-50 lg:-my-60 justify-center items-center w-full min-h-screen px-4">
      <div className="w-full max-w-[350px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1150px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
        <iframe
          src={iframeUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="w-full h-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
}

export default Tour