"use client"
import React from "react"

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[375px] p-3 md:p-0 md:w-[600px] min-h-96 border border-black rounded-md">
        <div className="grid gap-4 py-4">
          <h2 className="text-4xl font-mono ml-16">Pick a username</h2>
          <div className="flex flex-col gap-6 justify-center md:px-16 w-full">
            <input
              id="Name"
              className="w-full border border-black p-3 rounded-md"
              placeholder="Pick a username"
            />
            <div className="h-5">{/* UI Feedback will go here */}</div>
          </div>
        </div>
        <div>
          <div className="md:mx-16 py-8 flex flex-col">
            <button
              className="py-2 px-5 bg-purple-900 self-end text-purple-100 font-mono rounded-md disabled:bg-purple-400"
              onClick={() => console.log("clicked")}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
