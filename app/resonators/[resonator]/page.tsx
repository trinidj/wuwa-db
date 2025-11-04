import resonatorsData from "@/app/data/resonators.json"
import Link from "next/link"

import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent
} from "@/components/ui/card"
import Image from "next/image"

export default async function ResonatorDetails({
  params,
}: {
  params: Promise<{ resonator: string }>
}) {
  const resonatorName = (await params).resonator
  const resonator = resonatorsData.resonators.find(
    (r) => r.name === resonatorName
  )

  if (!resonator) {
    return <div>Resonator not found</div>
  }

  const resonatorsProfileLinks = [
    { title: 'Profile' },
    { title: 'Ascension' }
  ]

  return (
    <>
      <section className="flex justify-between gap-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Image
              alt={resonator.attribute}
              src={resonator.attributeUrl}
              width={500}
              height={500}
              className="size-16"
            />

            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-4xl">{resonator.name}</h1>
              <p className="text-muted-foreground text-lg">{resonator.attribute} {resonator.weaponType}</p>
            </div>
          </div>

          <Card className="w-sm h-fit p-1">
            <CardContent className="flex flex-col gap-1 p-1">
              {resonatorsProfileLinks.map((link) => (
                <Button 
                  key={link.title} 
                  variant="ghost"
                  className="cursor-pointer justify-start"
                >
                  <Link href="" className="group">
                    {link.title}
                  </Link>
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between">
          <div className="flex justify-center">
            <img
              alt="Sprite"
              src={resonator.spriteUrl}
              className="w-9/12"
            />
          </div>
        </div>
      </section>
    </>
  )
}