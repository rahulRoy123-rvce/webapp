import React from 'react'

const VideoAbout = () => {
  return (
    <div className="bg-white p-6 rounded-lg max-w-6xl mx-auto my-10">
<div className="flex flex-col md:flex-row items-center md:items-start">
  <div className="md:flex-1 md:pr-10">
    <h1 className="text-3xl font-bold text-green-600 mb-4">
      Know More About Us And Our Journey
    </h1>
    <p className="text-gray-700 mb-4">
      At Decarbonn, we envision a world where every business, regardless of its size, plays a part in creating a sustainable future.
    </p>
    <p className="text-gray-700 mb-4">
      We are here to guide and support this transition, one carbon credit at a time.
    </p>
    <p className="text-gray-700 mb-6">
      Join us in our journey towards a sustainable future. Together, we can make a difference.
    </p>
    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
      About Us
    </button>
  </div>
  <div className="md:flex-1 mt-6 md:mt-0">
    <div className="bg-gray-200 w-full h-96 flex items-center justify-center rounded-lg">
      {/* Placeholder for video or image */}
      <span className="text-gray-500">video</span>
    </div>
  </div>
</div>
</div>
  )
}

export default VideoAbout
