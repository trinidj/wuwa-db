"use client"

import { useState } from "react"
import { Search } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

export default function WeaponsPage() {
    const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-4 sm:gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">Weapons</h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">Browse all Weapons in Wuthering Waves</p>
        </div>

        <div className="flex gap-2 sm:flex-row">
          <InputGroup>
            <InputGroupInput
              placeholder="Search Weapon..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
          </InputGroup>
        </div>
      </header>

      <main className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
        
      </main>
    </div>
  )
}