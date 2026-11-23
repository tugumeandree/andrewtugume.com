# Publishing a FaithMasters lesson

1. Create `content/bible-study/<series>/<lesson>.mdx`. Use lowercase letters, numbers and hyphens in both names.
2. Add the details below, then write the teaching underneath. Use `##` for headings.
3. Commit and deploy. The lesson appears at `/faithmasters/<series>/<lesson>`, in the library, on its track and in the sitemap.

```mdx
---
title: "Lesson title"
scripture: "Book 1:1–10"        # optional
summary: "One short sentence."  # shown on the card and in search results
track: "work-leadership"        # work-leadership | business-finance | stewardship | relationships
date: "2027-01-15"
order: 1                        # optional: numbers the lessons in a series and adds a "Next lesson" link
featured: true                  # optional: puts it at the top of the library
audio: "/audio/lesson.mp3"      # optional: a file in public/, or an https:// address → Listen
youtubeId: "XXXXXXXXXXX"        # optional: the 11-character YouTube ID → Watch
guide: "/guides/lesson.pdf"     # optional: a file in public/ → download button
guideLabel: "Download the study guide"
draft: true                     # optional: keeps it off the site
---

The written teaching goes here → Read
```

Only the formats you supply are shown. If an audio or guide file is missing from `public/`, its control stays hidden and the build log says so.
