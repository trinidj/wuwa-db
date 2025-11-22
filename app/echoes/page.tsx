import Image from "next/image"
import { getAllSonatas } from "@/app/lib/sonatas"
import { renderSonataDescription } from "@/app/lib/sonata-descriptions"
import { ScrollArea } from "@/components/ui/scroll-area"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {
  Item,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Scroll } from "lucide-react"

interface SonataAccordionProps {
  sonata: {
    name: string
    icon: string
    description: string
  }
}

function SonataAccordion({ sonata }: SonataAccordionProps) {
  return (
    <AccordionItem value={sonata.name}>
      <AccordionTrigger>
        <Item variant="muted" className="w-full">
          <ItemMedia>
            <Image 
              alt={`${sonata.name} Icon`}
              src={sonata.icon}
              width={64}
              height={64}
              className="object-contain"
            />
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="text-base sm:text-lg">{sonata.name}</ItemTitle>
          </ItemContent>
        </Item>
      </AccordionTrigger>
      <AccordionContent>
        <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
          {renderSonataDescription(sonata.description)}
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}

export default async function EchoesPage() {
  const sonatas = await getAllSonatas()

  return (
    <div className="flex flex-col gap-4">
      <header className="flex flex-col gap-4 sm:gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">Echoes</h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">Browse all Sonata effects in Wuthering Waves with their set bonuses and specifications.</p>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ScrollArea className="max-h-[570px]">
          {sonatas.map((sonata) => (
            <div key={sonata.id} className="flex flex-col">
              <Accordion type="single" collapsible>
                <SonataAccordion sonata={sonata} />
              </Accordion>
            </div>
          ))}
        </ScrollArea>

        <div>

        </div>
      </main>
    </div>
  )
}