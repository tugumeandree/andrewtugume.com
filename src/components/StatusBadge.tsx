import React from 'react'
import type { Status } from '@/lib/brand'

const styles: Record<Status, string> = {
  'Available Now': 'bg-emerald-50 text-emerald-800 ring-emerald-200',
  'Upcoming': 'bg-sky-50 text-sky-800 ring-sky-200',
  'Join Interest List': 'bg-amber-50 text-amber-900 ring-amber-200',
  'By Invitation': 'bg-violet-50 text-violet-800 ring-violet-200',
  'Enquire': 'bg-gray-100 text-gray-800 ring-gray-200',
}

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={`inline-flex shrink-0 items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ring-1 ring-inset ${styles[status]}`}>
      {status}
    </span>
  )
}
