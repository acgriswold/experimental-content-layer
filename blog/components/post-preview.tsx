import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import { type Author } from 'contentlayer/generated'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  full_slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  full_slug,
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage full_slug={full_slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        {full_slug ? (
          <Link href={full_slug}
            className="hover:underline">
            {title}
          </Link>
        ) : (
          title
        )}
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}

export default PostPreview
