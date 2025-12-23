import React from 'react'
import Link from 'next/link'

export default function TechResources() {
  const toolCategories = [
    {
      category: 'Bible Study & Discipleship',
      tools: [
        { name: 'Logos Bible Software', description: 'Professional Bible study suite with commentaries and original languages', price: 'From $99', link: 'https://logos.com', rating: 5 },
        { name: 'YouVersion Bible App', description: 'Free Bible reading plans and community features', price: 'Free', link: 'https://youversion.com', rating: 5 },
        { name: 'Accordance', description: 'Powerful Bible study for Mac users', price: 'From $49', link: 'https://accordancebible.com', rating: 4.5 },
        { name: 'Bible Gateway', description: 'Multiple translations, reading plans, devotionals', price: 'Free', link: 'https://biblegateway.com', rating: 4 }
      ]
    },
    {
      category: 'Productivity & Project Management',
      tools: [
        { name: 'Notion', description: 'All-in-one workspace for notes, tasks, wikis, and databases', price: 'Free plan available', link: 'https://notion.so', rating: 5 },
        { name: 'Airtable', description: 'Spreadsheet-database hybrid for organizing anything', price: 'Free plan available', link: 'https://airtable.com', rating: 5 },
        { name: 'Todoist', description: 'Simple, powerful task management', price: 'Free plan available', link: 'https://todoist.com', rating: 4.5 },
        { name: 'Trello', description: 'Visual project boards for teams', price: 'Free plan available', link: 'https://trello.com', rating: 4 }
      ]
    },
    {
      category: 'Website Building (No-Code)',
      tools: [
        { name: 'WordPress', description: 'Most popular CMS - powers 43% of the web', price: 'Free (hosting required)', link: 'https://wordpress.org', rating: 5 },
        { name: 'Webflow', description: 'Professional websites without code', price: 'From $14/mo', link: 'https://webflow.com', rating: 5 },
        { name: 'Squarespace', description: 'Beautiful templates, easy setup', price: 'From $16/mo', link: 'https://squarespace.com', rating: 4.5 },
        { name: 'Wix', description: 'Drag-and-drop website builder', price: 'Free plan available', link: 'https://wix.com', rating: 4 }
      ]
    },
    {
      category: 'AI & Automation',
      tools: [
        { name: 'ChatGPT', description: 'AI assistant for writing, brainstorming, and problem-solving', price: 'Free + $20/mo Pro', link: 'https://chat.openai.com', rating: 5 },
        { name: 'Zapier', description: 'Connect apps and automate workflows', price: 'Free plan available', link: 'https://zapier.com', rating: 5 },
        { name: 'Midjourney', description: 'AI image generation for graphics and visuals', price: 'From $10/mo', link: 'https://midjourney.com', rating: 4.5 },
        { name: 'Grammarly', description: 'AI writing assistant for grammar and clarity', price: 'Free + Premium', link: 'https://grammarly.com', rating: 4.5 }
      ]
    },
    {
      category: 'Email & Marketing',
      tools: [
        { name: 'ConvertKit', description: 'Email marketing for creators and ministries', price: 'Free plan available', link: 'https://convertkit.com', rating: 5 },
        { name: 'Mailchimp', description: 'Popular email platform with automation', price: 'Free plan available', link: 'https://mailchimp.com', rating: 4 },
        { name: 'Canva', description: 'Design graphics, social media posts, presentations', price: 'Free + Pro', link: 'https://canva.com', rating: 5 },
        { name: 'Buffer', description: 'Schedule social media posts across platforms', price: 'Free plan available', link: 'https://buffer.com', rating: 4 }
      ]
    },
    {
      category: 'Video & Content Creation',
      tools: [
        { name: 'Descript', description: 'Edit video and podcasts by editing text', price: 'Free plan available', link: 'https://descript.com', rating: 5 },
        { name: 'Loom', description: 'Quick screen recording and video messages', price: 'Free plan available', link: 'https://loom.com', rating: 5 },
        { name: 'CapCut', description: 'Free video editing for social media', price: 'Free', link: 'https://capcut.com', rating: 4.5 },
        { name: 'Riverside.fm', description: 'High-quality podcast and video recording', price: 'From $19/mo', link: 'https://riverside.fm', rating: 4.5 }
      ]
    }
  ]

  const templates = [
    { name: 'Ministry Dashboard (Notion)', description: 'Track sermon series, volunteers, and events', category: 'Notion' },
    { name: 'Content Calendar (Airtable)', description: 'Plan blog posts, videos, and social media', category: 'Airtable' },
    { name: 'Small Group Tracker (Notion)', description: 'Manage small groups, attendance, and prayer requests', category: 'Notion' },
    { name: 'Bible Study Planner (Notion)', description: 'Organize your personal study and notes', category: 'Notion' },
    { name: 'Freelance Client CRM (Airtable)', description: 'Track clients, projects, and invoices', category: 'Airtable' }
  ]

  const glossary = [
    { term: 'API', definition: 'Application Programming Interface - allows different software to communicate with each other' },
    { term: 'AI (Artificial Intelligence)', definition: 'Computer systems that can perform tasks normally requiring human intelligence, like understanding language or recognizing images' },
    { term: 'CMS', definition: 'Content Management System - software for creating and managing digital content (e.g., WordPress)' },
    { term: 'SEO', definition: 'Search Engine Optimization - improving your website to rank higher in Google search results' },
    { term: 'CRM', definition: 'Customer Relationship Management - system for managing interactions with people (donors, members, clients)' },
    { term: 'Automation', definition: 'Using technology to perform tasks automatically without manual work' },
    { term: 'No-Code', definition: 'Building apps, websites, or workflows without writing programming code' },
    { term: 'SaaS', definition: 'Software as a Service - software you access online via subscription (like Gmail, Notion, Canva)' }
  ]

  const guides = [
    { title: 'How to Start a Podcast in 7 Days', link: '#', category: 'Content Creation' },
    { title: 'Build Your First Website (No Code Required)', link: '#', category: 'Website' },
    { title: 'Automate Your Email List with ConvertKit', link: '#', category: 'Marketing' },
    { title: 'Use ChatGPT for Sermon Prep (Ethically)', link: '#', category: 'AI' },
    { title: 'Set Up a Notion Dashboard for Ministry', link: '#', category: 'Productivity' },
    { title: 'Social Media Strategy for Churches', link: '#', category: 'Marketing' }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Digital Resources Hub</h1>
          <p className="text-xl mb-8">Curated tools, templates, and tutorials to help you use technology for Kingdom impact.</p>
          <div className="flex gap-4 justify-center">
            <Link href="#tools" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Browse Tools
            </Link>
            <Link href="#templates" className="bg-white/20 backdrop-blur border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30">
              Free Templates
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Digital Skills Content */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Latest Digital Skills for Workers Content</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Fresh insights and practical tutorials to enhance your digital skills and productivity.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Productivity with AI: Using ChatGPT Ethically', category: 'AI & Ethics', date: 'Nov 10, 2025' },
              { title: 'Building Your Freelance Tech Stack in 2025', category: 'Productivity', date: 'Nov 5, 2025' },
              { title: 'Digital Marketing for Entrepreneurs', category: 'Marketing', date: 'Oct 28, 2025' },
              { title: 'Cybersecurity Basics Every Freelancer Needs', category: 'Security', date: 'Oct 20, 2025' }
            ].map((post, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition">
                <div className="text-xs text-indigo-600 font-semibold mb-2">{post.category}</div>
                <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                <div className="text-sm text-gray-600 mb-3">{post.date}</div>
                <Link href="#" className="text-indigo-600 font-semibold text-sm hover:underline">
                  Read Article →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Reviews */}
      <section className="py-16 bg-white" id="tools">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Recommended Tools & Software</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Every tool reviewed through the lens of biblical stewardship, ethical use, and Kingdom effectiveness.
          </p>

          <div className="space-y-12">
            {toolCategories.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold mb-6 text-indigo-600">{category.category}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.tools.map((tool, tidx) => (
                    <div key={tidx} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-xl">{tool.name}</h4>
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i} className={i < Math.floor(tool.rating) ? 'text-yellow-500' : 'text-gray-300'}>★</span>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3 text-sm">{tool.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-gray-600">{tool.price}</span>
                        <a href={tool.link} target="_blank" rel="noopener" className="text-indigo-600 font-semibold text-sm hover:underline">
                          Learn More →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Templates */}
      <section className="py-16 bg-gray-50" id="templates">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Free Templates & Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {templates.map((template, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <div className="text-xs font-semibold text-indigo-600 mb-2">{template.category}</div>
                <h4 className="font-bold text-lg mb-2">{template.name}</h4>
                <p className="text-sm text-gray-700 mb-4">{template.description}</p>
                <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded font-semibold hover:bg-indigo-700">
                  Download Free
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How-To Guides */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Step-by-Step Guides</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((guide, idx) => (
              <Link key={idx} href={guide.link} className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg hover:shadow-md transition">
                <div className="text-3xl">📘</div>
                <div>
                  <div className="text-xs text-gray-600 mb-1">{guide.category}</div>
                  <h4 className="font-bold text-lg text-indigo-600 hover:underline">{guide.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Glossary */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Tech Terms Demystified</h2>
          <p className="text-center text-gray-600 mb-12">No more confusion. Here is what these terms actually mean.</p>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-6">
              {glossary.map((item, idx) => (
                <div key={idx} className={`pb-6 ${idx !== glossary.length - 1 ? 'border-b' : ''}`}>
                  <h4 className="font-bold text-lg mb-2 text-indigo-600">{item.term}</h4>
                  <p className="text-gray-700">{item.definition}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA to School */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Master These Tools?</h2>
          <p className="text-xl mb-8">Join Tabernacle Tech Institute for hands-on, project-based training in the tools you need.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/schools/tabernacle-tech" className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100">
              Explore Tech Courses
            </Link>
            <Link href="/community" className="bg-white/20 backdrop-blur border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/30">
              Join Community
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Get Weekly Tech Tips</h3>
          <p className="text-gray-700 mb-6">Practical tutorials, tool recommendations, and biblical wisdom for using technology well.</p>
          <form className="flex gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 border border-gray-300 rounded focus:border-indigo-600 focus:outline-none"
            />
            <button className="bg-indigo-600 text-white px-6 py-3 rounded font-semibold hover:bg-indigo-700">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
