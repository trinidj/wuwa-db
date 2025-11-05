import resonatorsData from "@/app/data/resonators.json"
import Image from "next/image"
import LevelSlider from "./LevelSlider"

import {
  Card,
  CardContent
} from "@/components/ui/card"

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

  return (
    <>
      <section className="flex justify-between">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Image
                alt={resonator.attribute}
                src={resonator.attributeUrl}
                width={500}
                height={500}
                className="size-16"
              />

              <div className="flex flex-col gap-1">
                <h1 className="font-bold text-3xl">{resonator.name}</h1>
                <p className="text-electro font-medium">{resonator.attribute}</p>
              </div>
            </div>

            <div className="w-40 flex items-center">
              <img
                alt={`${resonator.rarity}-star`}
                src={`/assets/rarity/${resonator.rarity}_star.png`}
              />
            </div>
          </div>

          <Card className="w-lg h-fit">
            <CardContent className="flex flex-col gap-1">
              <LevelSlider resonator={resonator} />
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