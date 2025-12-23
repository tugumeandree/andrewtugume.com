export function escapeXml(str?: string) {
  if (!str) return ''
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')
}

export function siteBase() {
  return 'https://andrewtugume.com'
}
