// FAQ Schema Helper Component
import { generateFAQSchema } from '@/lib/seo/schema'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSchemaProps {
  items: FAQItem[]
}

export default function FAQSchema({ items }: FAQSchemaProps) {
  if (!items || items.length === 0) return null

  const schema = generateFAQSchema(items)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}

// Example usage:
// 
// const faqs: FAQItem[] = [
//   {
//     question: 'What is WorkMasters?',
//     answer: 'WorkMasters is a career and business coaching program...'
//   },
//   {
//     question: 'How long is the program?',
//     answer: 'The program runs for 4 weeks with weekly coaching...'
//   }
// ]
//
// <FAQSchema items={faqs} />
