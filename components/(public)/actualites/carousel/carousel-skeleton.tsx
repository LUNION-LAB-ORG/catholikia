import React from 'react'

export default function CarouselSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden py-5">
      <div className="bg-white p-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <div className="h-8 w-48 bg-gray-300 rounded animate-pulse"></div>
          <div className="flex justify-start sm:justify-end overflow-hidden space-x-2 mt-2 sm:mt-0">
            <button className="w-6 h-6 rounded-full bg-gray-300 animate-pulse"></button>
            <button className="w-6 h-6 rounded-full bg-gray-300 animate-pulse"></button>
            <button className="w-6 h-6 rounded-full bg-gray-300 animate-pulse"></button>
          </div>
        </div>
      </div>
    </div>
  )
}
