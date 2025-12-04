"use client"

import Image from "next/image"
import { useState } from "react"
import { renderSonataDescription } from "@/app/lib/sonata-descriptions"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

type Sonata = {
  id: string
  name: string
  icon: string
  description?: string
}

type Echo = {
  id: string
  name: string
  sonataIds: string[]
  icon?: string
  rarity?: string
}

type EchoCostKey = "cost_4" | "cost_3" | "cost_1"

const echoSections: { key: EchoCostKey; label: string; padded?: boolean }[] = [
  { key: "cost_4", label: "4-Cost", padded: true },
  { key: "cost_3", label: "3-Cost" },
  { key: "cost_1", label: "1-Cost" },
]

function getEchoIcon(echo: Echo) {
  return echo.icon ?? `/assets/echoes/${echo.id}.png`
}

export default function EchoesExplorer({
  sonatas,
  echoes,
}: {
  sonatas: Sonata[]
  echoes: Echo[]
}) {
  const [selected, setSelected] = useState<string>(sonatas?.[0]?.id ?? "")

  if (!sonatas?.length) {
    return <p className="text-muted-foreground">No sonatas available.</p>
  }

  const activeValue = selected || sonatas[0]?.id

  return (
    <div className="flex flex-col gap-4">
      <Tabs value={activeValue} onValueChange={setSelected} className="space-y-4">
        <TabsList className="w-fit bg-none  justify-start gap-2">
          {sonatas.map((sonata) => (
            <Tooltip key={sonata.id}>
              <TooltipTrigger asChild>
                <TabsTrigger
                  value={sonata.id}
                  className="flex-row p-0 cursor-pointer transition-all duration-150 hover:border-2 hover:border-rarity-5/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative size-10 overflow-hidden rounded-md border bg-card">
                      <Image
                        src={sonata.icon}
                        alt={sonata.name}
                        fill
                        sizes="40px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                {sonata.name}
              </TooltipContent>
            </Tooltip>
          ))}
        </TabsList>

        {sonatas.map((sonata) => {
          const sonataEchoes = echoes.filter((echo) => echo.sonataIds.includes(sonata.id))
          const echoesByRarity: Record<EchoCostKey, Echo[]> = {
            cost_4: sonataEchoes.filter((echo) => echo.rarity === "cost_4"),
            cost_3: sonataEchoes.filter((echo) => echo.rarity === "cost_3"),
            cost_1: sonataEchoes.filter((echo) => echo.rarity === "cost_1"),
          }

          return (
            <TabsContent key={sonata.id} value={sonata.id} className="space-y-4">
              <div className="rounded-xl border bg-card p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-md border bg-background">
                    <Image
                      src={sonata.icon}
                      alt={sonata.name}
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold leading-tight">{sonata.name}</p>
                    <p className="text-sm text-muted-foreground">Sonata effect</p>
                  </div>
                </div>

                <div className="mt-3 space-y-1">
                  {renderSonataDescription(sonata.description)}
                </div>
              </div>

              <div className="space-y-3">
                {echoSections.map(({ key, label, padded }) => {
                  const list = echoesByRarity[key]
                  const gridCols = padded ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-3 lg:grid-cols-4"

                  return (
                    <div key={key} className="rounded-xl border bg-muted/30">
                      <div className="flex items-center justify-between border-b px-4 py-3">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold">{label}</span>
                          <span className="text-xs text-muted-foreground">{list.length} echoes</span>
                        </div>
                      </div>

                      <div className={`grid gap-3 p-4 ${gridCols}`}>
                        {list.length > 0 ? (
                          list.map((echo) => (
                            <div
                              key={echo.id}
                              className="flex items-center gap-3 rounded-lg border bg-background/80 p-3 shadow-sm"
                            >
                              <div className="relative h-12 w-12 overflow-hidden rounded-md border bg-card">
                                <Image
                                  src={getEchoIcon(echo)}
                                  alt={echo.name}
                                  fill
                                  sizes="48px"
                                  className="object-contain"
                                />
                              </div>

                              <span className="text-sm font-semibold leading-tight">{echo.name}</span>
                            </div>
                          ))
                        ) : (
                          <p className="col-span-full text-sm text-muted-foreground">
                            No echoes found for this cost.
                          </p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </TabsContent>
          )
        })}
      </Tabs>
    </div>
  )
}
