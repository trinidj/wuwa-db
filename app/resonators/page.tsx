"use client"

import { Button } from "@/components/ui/button"
import { Filter, Search } from "lucide-react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

import {
  Card,
  CardTitle,
} from "@/components/ui/card"

import { FieldGroup, FieldSet, Field, FieldLabel } from "@/components/ui/field"
import Link from "next/link"
import resonatorsData from "@/app/data/resonators.json"

import Image from "next/image"

export default function ResonatorsPage() {
  const getRarityGradient = (rarity: number) => {
    if (rarity === 5) {
      return 'bg-gradient-to-t from-rarity-5'
    }
    return 'bg-gradient-to-br from-rarity-4/20 to-rarity-4/5'
  }

  return (
    <div className="flex flex-col gap-4">
      <header className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-4xl">Resonators</h1>
          <p className="text-muted-foreground text-lg">Browse all playable characters in Wuthering Waves with their stats, abilities, and element types.</p>
        </div>

        <div className="flex gap-2">
          <InputGroup>
            <InputGroupInput placeholder="Search Resonator..." />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
          </InputGroup>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="icon" className="cursor-pointer">
                <Filter />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Filter</DialogTitle>
                <DialogDescription>
                  Filter resonators by attribute, rarity, or weapon type
                </DialogDescription>
              </DialogHeader>

              <form>
                <FieldSet>
                  <FieldGroup>
                    <Field>
                      <FieldLabel>Rarity</FieldLabel>
      
                    </Field>

                    <Field>
                      <FieldLabel>Attribute</FieldLabel>
                      <ToggleGroup type="multiple" variant="outline" className="cursor-pointer">
                        <ToggleGroupItem
                          value="aero"
                        >
                          <img 
                            alt="Aero"
                            src="/assets/attributes/Aero.png" 
                            width={32}
                          />
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="electro"
                        >
                          <img 
                            alt="Electro"
                            src="/assets/attributes/Electro.png"
                            width={32}
                          />
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="fusion"
                        >
                          <img 
                            alt="Fusion"
                            src="/assets/attributes/Fusion.png"
                            width={32}
                          />
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="glacio"
                        >
                          <img 
                            alt="Glacio"
                            src="/assets/attributes/Glacio.png"
                            width={32}
                          />
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="havoc"
                        >
                          <img 
                            alt="Havoc"
                            src="/assets/attributes/Havoc.png"
                            width={32}
                          />
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="spectro"
                        >
                          <img 
                            alt="Spectro"
                            src="/assets/attributes/Spectro.png"
                            width={32}
                          />
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </Field>

                    <Field>
                      <FieldLabel>Weapon Type</FieldLabel>

                    </Field>
                  </FieldGroup> 
                </FieldSet>
              </form>

              <DialogFooter>

              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <main className="grid grid-cols-8 gap-4">
        {resonatorsData.resonators.map((resonator) => (
          <Link
            href={`/resonators/${resonator.name}`} key={resonator.id}
          >
            <Card
              className={
                `transition-transform rounded-lg duration-200 hover:scale-105 will-change-transform p-0 gap-0 border-0 overflow-hidden ${getRarityGradient(resonator.rarity)}`
              }
            >
              <div className="absolute right-1 top-1 z-10">
                <Image
                  alt="Attribute"
                  width={32}
                  height={32}
                  src={resonator.attributeUrl}
                />
              </div>
              <img
                alt="Resonator"
                src={resonator.imageUrl}
                className="object-contain w-full h-full transition-transform duration-200 hover:scale-110"
              />
              <div className="bg-sidebar/73 px-4 rounded-xl absolute bottom-2 left-1/2 -translate-x-1/2">
                <CardTitle className="text-sm">{resonator.name}</CardTitle>
              </div>
            </Card>
          </Link>
        ))}
      </main>
    </div>
  )
}