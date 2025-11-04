import resonatorsData from "@/app/data/resonators.json"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
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

  return (
    <>
      <header className="flex items-center gap-6">
        <div>
          <Image
            alt={resonator.attribute}
            src={resonator.attributeUrl}
            width={500}
            height={500}
            className="size-16"
            quality={500}
          />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-4xl">{resonator.name}</h1>
          <p className="text-muted-foreground text-lg">{resonator.attribute} {resonator.weaponType}</p>
        </div>
      </header>

      <main>

      </main>
    </>
  )
}