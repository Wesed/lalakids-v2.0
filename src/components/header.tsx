import Image from 'next/image'
import Link from 'next/link'
import { SearchBar } from './search-bar'

export function Header() {
  return (
    <header className="flex gap-5 px-5 mt-6">
      <Link href="/">
        <Image src="/logo.png" alt="Logo image" width={60} height={50} />
      </Link>
      <SearchBar />
    </header>
  )
}
