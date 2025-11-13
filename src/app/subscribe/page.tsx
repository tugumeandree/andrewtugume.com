import React from 'react'

export default function Subscribe() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Subscribe</h2>
      <p className="mt-3 text-gray-700">Join the newsletter for weekly practical teaching—direct to your inbox.</p>
      <form className="mt-4 max-w-md">
        <label className="block">
          <span className="sr-only">Email</span>
          <input aria-label="Email" placeholder="Your email" className="mt-1 block w-full rounded-md border-gray-200 shadow-sm" />
        </label>
        <div className="mt-3">
          <button className="bg-primary text-white px-4 py-2 rounded">Join the Newsletter</button>
        </div>
      </form>
    </section>
  )
}
