import React from 'react'
import Link from 'next/link'

export default function Give() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Give Financially</h1>
      <p className="text-gray-700 mb-8">Your generosity equips workers, strengthens believers, and develops leaders across the nations.</p>

      {/* Giving Form */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6">Make Your Gift</h2>
        
        {/* Amount Selection */}
        <div className="mb-6">
          <label className="block font-semibold mb-3">Select Amount</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {[25, 50, 100, 250].map((amount) => (
              <button key={amount} className="px-4 py-3 border-2 border-gray-300 rounded hover:border-primary hover:bg-blue-50 transition font-semibold">
                ${amount}
              </button>
            ))}
          </div>
          <input 
            type="number" 
            placeholder="Other amount" 
            className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-primary focus:outline-none"
          />
        </div>

        {/* Frequency */}
        <div className="mb-6">
          <label className="block font-semibold mb-3">Frequency</label>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-primary text-white rounded font-semibold">Monthly</button>
            <button className="px-6 py-3 bg-gray-200 rounded hover:bg-gray-300">One-Time</button>
          </div>
          <p className="text-sm text-gray-600 mt-2">💡 Monthly partners provide sustainable support for ongoing programs</p>
        </div>

        {/* Designation */}
        <div className="mb-6">
          <label className="block font-semibold mb-3">Designate Your Gift (Optional)</label>
          <select className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-primary focus:outline-none">
            <option>Where Most Needed</option>
            <option>Student Scholarships</option>
            <option>Qraft Academy</option>
            <option>Nations Bible School</option>
            <option>Chariot Leadership Institute</option>
            <option>Content Creation & Translation</option>
            <option>Technology & Platform</option>
          </select>
        </div>

        {/* Donor Information */}
        <div className="mb-6">
          <h3 className="font-semibold mb-4">Your Information</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="px-4 py-3 border border-gray-300 rounded focus:border-primary focus:outline-none" />
            <input type="text" placeholder="Last Name" className="px-4 py-3 border border-gray-300 rounded focus:border-primary focus:outline-none" />
            <input type="email" placeholder="Email Address" className="px-4 py-3 border border-gray-300 rounded focus:border-primary focus:outline-none md:col-span-2" />
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <h3 className="font-semibold mb-4">Payment Method</h3>
          <div className="bg-gray-100 rounded p-6 text-center">
            <div className="text-gray-500 mb-2">[Stripe Payment Form Placeholder]</div>
            <div className="text-sm text-gray-600">Secure payment processing powered by Stripe</div>
          </div>
        </div>

        {/* Corporate Matching */}
        <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded p-4">
          <label className="flex items-start">
            <input type="checkbox" className="mt-1 mr-3" />
            <div>
              <div className="font-semibold">My employer matches donations</div>
              <div className="text-sm text-gray-600">We'll send you instructions to double your impact</div>
            </div>
          </label>
        </div>

        {/* Submit */}
        <button className="w-full bg-primary text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-blue-900 transition">
          Complete My Gift
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          🔒 Your information is secure and will never be shared. Tax receipts provided for all donations.
        </p>
      </div>

      {/* Impact Statement */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 border border-green-200">
        <h3 className="text-xl font-bold mb-4">Your Impact</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">$25/mo</div>
            <div className="text-sm text-gray-700">Provides course materials for 1 student</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">$100/mo</div>
            <div className="text-sm text-gray-700">Sponsors 1 full scholarship</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">$250/mo</div>
            <div className="text-sm text-gray-700">Funds translation into 1 new language</div>
          </div>
        </div>
      </div>

      {/* Other Ways to Give */}
      <div className="mt-8 text-center">
        <p className="text-gray-700 mb-4">Prefer to give by check, wire transfer, or crypto?</p>
        <Link href="/contact" className="text-primary font-semibold">View Alternative Giving Methods →</Link>
      </div>
    </div>
  )
}
