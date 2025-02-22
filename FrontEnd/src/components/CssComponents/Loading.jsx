import React from 'react'
import { DNA } from "react-loader-spinner";

// loading spinner 
function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      {/* Spinning Loader */}
      <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>

      {/* Bouncing Dots */}
      <div className="flex space-x-2 mt-4">
        <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce delay-150"></div>
        <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce delay-300"></div>
      </div>

      <p className="text-gray-600 text-sm mt-2">Loading...</p>
    </div>
    )
}

export default Loading