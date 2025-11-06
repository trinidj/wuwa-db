import { AscensionPhase } from "@/app/types/resonator"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface AscensionSectionProps {
  ascension?: AscensionPhase[]
  resonatorName: string
}

export default function AscensionSection({ ascension, resonatorName }: AscensionSectionProps) {
  if (!ascension || ascension.length === 0) {
    return (
      <section id="ascension">
        <h2 className="text-2xl font-bold mb-4">Ascension</h2>
        <p className="text-muted-foreground">Ascension data not yet available for {resonatorName}.</p>
      </section>
    )
  }

  return (
    <section id="ascension">
      <h2 className="text-2xl font-bold mb-6">Ascension Materials</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ascension.map((phase, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{phase.level}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {phase.materials.map((material, matIndex) => (
                  <div key={matIndex} className="flex flex-col items-center gap-2">
                    {material.icon && (
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-muted">
                        <Image
                          src={material.icon}
                          alt={material.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="text-center">
                      <p className="text-xs font-medium line-clamp-2">{material.name}</p>
                      <p className="text-sm font-bold text-primary">×{material.amount}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
