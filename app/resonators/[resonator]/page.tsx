import resonatorsData from "@/app/data/resonators.json"
import { Resonator } from "@/app/types/resonator"
import { Separator } from "@/components/ui/separator"
import ProfileSection from "./ProfileSection"
import AscensionSection from "./AscensionSection"
import TalentsSection from "./TalentsSection"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

export default async function ResonatorDetails({
  params,
}: {
  params: Promise<{ resonator: string }>
}) {
  const resonatorName = (await params).resonator
  const resonator = resonatorsData.resonators.find(
    (r) => r.name === resonatorName
  ) as Resonator | undefined

  if (!resonator) {
    return <div>Resonator not found</div>
  }

  return (
    <div className="flex flex-col gap-20">
      <ProfileSection resonator={resonator} />
      <Separator />
      <TalentsSection talents={resonator.talents} resonatorName={resonator.name} />
      <Separator />
      <AscensionSection ascension={resonator.ascension} resonatorName={resonator.name} />

      <NavigationMenu className="hidden xl:block fixed top-1/5 right-10 -translate-y-1/2">
        <NavigationMenuItem className="flex flex-col gap-2 list-none text-right">
          <NavigationMenuLink asChild className="text-sm font-semibold">
            <Link href="#profile">Profile</Link>
          </NavigationMenuLink>

          <NavigationMenuLink asChild className="text-sm font-semibold">
            <Link href="#skills">Skills</Link>
          </NavigationMenuLink>

          <NavigationMenuLink asChild className="text-sm font-semibold">
            <Link href="#ascension">Ascension</Link>
          </NavigationMenuLink>

          <NavigationMenuLink asChild className="text-sm font-semibold">
            <Link href="#resonance-chain">Resonance Chain</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenu>
    </div>
  )
}