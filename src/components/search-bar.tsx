import { Search } from 'lucide-react'
import { Input } from './ui/input'

export function SearchBar() {
  return (
    <div className="w-full relative flex">
      <Search className="top-2 right-2 absolute size-5 stroke-zinc-400" />
      <Input className="flex-1 bg-zinc-500/10" placeholder="O que procura?" />
    </div>
  )
}
