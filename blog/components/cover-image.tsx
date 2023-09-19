import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  src: string
  full_slug?: string
}

const CoverImage = ({ title, src, full_slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm w-full', {
        'hover:shadow-lg transition-shadow duration-200': full_slug,
      })}
      width={1300}
      height={630}
    />
  )
  return (
    <div className="sm:mx-0">
      {full_slug ? (
        <Link href={full_slug} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
