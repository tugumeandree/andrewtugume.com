import React from 'react'
import Link from 'next/link'

export default function Products() {
  const products = [
    {
      id: 1,
      category: 'Tech eBook',
      title: 'Christian Creator\'s Tech Stack',
      description: 'Complete guide to essential tools for digital ministry and business',
      price: 39,
      image: '/assets/product-tech-stack.jpg',
      slug: 'tech-stack-ebook',
      pillar: 'tech'
    },
    {
      id: 2,
      category: 'Digital Template',
      title: 'Ministry in a Box (WordPress Theme)',
      description: 'Professional church/ministry website template - ready to launch',
      price: 97,
      image: '/assets/product-ministry-box.jpg',
      slug: 'ministry-in-box',
      pillar: 'tech'
    },
    {
      id: 3,
      category: 'Video Course',
      title: 'Automate Your Ministry',
      description: '6-week course on workflow automation with Zapier, Notion, and more',
      price: 147,
      image: '/assets/product-automate-ministry.jpg',
      slug: 'automate-ministry',
      pillar: 'tech'
    },
    {
      id: 4,
      category: 'Digital Product',
      title: 'Biblical Leadership Workbook',
      description: '12-week guide to Christ-centered leadership development',
      price: 29,
      image: '/assets/product-leadership-workbook.jpg',
      slug: 'leadership-workbook',
      pillar: 'leadership'
    },
    {
      id: 5,
      category: 'Digital Product',
      title: 'TechMasters Toolkit',
      description: 'Templates and resources for freelance success',
      price: 49,
      image: '/assets/product-tech-toolkit.jpg',
      slug: 'tech-toolkit',
      pillar: 'workmasters'
    },
    {
      id: 6,
      category: 'Physical Product',
      title: 'Romans Study Guide (Print)',
      description: 'Comprehensive guide to Romans with reflection questions',
      price: 24,
      image: '/assets/product-romans-guide.jpg',
      slug: 'romans-study-guide',
      pillar: 'bible'
    },
    {
      id: 7,
      category: 'Video Course',
      title: 'Faith & Entrepreneurship Masterclass',
      description: '8-module course on biblical business principles',
      price: 147,
      image: '/assets/product-entrepreneur-course.jpg',
      slug: 'entrepreneur-masterclass',
      pillar: 'workmasters'
    },
    {
      id: 8,
      category: 'Digital Product',
      title: 'Hermeneutics Handbook',
      description: 'Learn to interpret Scripture accurately',
      price: 39,
      image: '/assets/product-hermeneutics.jpg',
      slug: 'hermeneutics-handbook',
      pillar: 'bible'
    },
    {
      id: 9,
      category: 'Bundle',
      title: 'Complete Leadership Bundle',
      description: 'Workbook + Video Course + Coaching Session',
      price: 297,
      originalPrice: 450,
      image: '/assets/product-leadership-bundle.jpg',
      slug: 'leadership-bundle',
      pillar: 'leadership'
    }
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <p className="text-gray-700 mb-8">Practical resources designed to support your growth in work, faith, and leadership.</p>

      {/* Filter Options */}
      <div className="mb-8 flex gap-4 flex-wrap">
        <button className="px-4 py-2 bg-primary text-white rounded">All Products</button>
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">WorkMasters</button>
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Bible Study</button>
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Leadership</button>
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="text-xs text-primary font-semibold mb-2">{product.category}</div>
              <h3 className="font-bold text-lg mb-2">{product.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <div>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through mr-2">${product.originalPrice}</span>
                  )}
                  <span className="text-2xl font-bold text-primary">${product.price}</span>
                </div>
                <Link href={`/store/products/${product.slug}`} className="bg-primary text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-900">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Value Proposition */}
      <div className="bg-gray-100 rounded-lg p-8 text-center">
        <h3 className="text-xl font-bold mb-4">Every Purchase Supports the Mission</h3>
        <p className="text-gray-700 max-w-2xl mx-auto">100% of product profits fund scholarships for students who can't afford our schools. Your purchase creates transformation for others.</p>
      </div>
    </div>
  )
}
