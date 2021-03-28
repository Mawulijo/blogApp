import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href={{
        pathname: '/[username]',
        query: {username : 'Mawulijo'},

      }}>
        <a>Mawuli's profile</a></Link>
    </div>
  )
}
