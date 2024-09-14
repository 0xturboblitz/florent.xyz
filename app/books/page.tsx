import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function BooksPage() {
  const base64Content = process.env.BOOKS

  if (!base64Content) {
    return <div>Content not found</div>
  }

  const content = Buffer.from(base64Content, 'base64').toString('utf-8')

  return (
    <div>
      <MDXRemote source={content} />
    </div>
  )
}