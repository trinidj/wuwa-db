"use client"

import resonatorsData from "@/app/data/resonators/index.json"
import { Resonator } from "@/app/types/resonator";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { SearchDialogContent } from "@/components/search-dialog-content";
import { Search } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const components: { title: string; url: string; icon: string; }[] = [
  {
    title: "Home",
    url: "/",
    icon: "/assets/home_icon.png"
  },
  {
    title: "Resonators",
    url: "/resonators",
    icon: "/assets/resonators_icon.png"
  },
  {
    title: "Weapons",
    url: "/weapons",
    icon: "/assets/weapons_icon.png"
  },
  {
    title: "Echoes",
    url: "/echoes",
    icon: "/assets/echoes_icon.png"
  }
]

export default function NavBar() {
  const isMobile = useIsMobile()

  return (
    <nav className="flex w-full items-center justify-between gap-6">
      <div className="shrink-0">
        <Image 
          src="/assets/site_icon.png"
          alt="Site Icon"
          width={48}
          height={48}
          quality={100}
        />
      </div>

      <div className="flex-1 flex justify-center">
        <NavigationMenu viewport={isMobile}>
          <NavigationMenuList className="gap-3">
            {components.map((component) => (
              <NavigationMenuItem key={component.title}>
                <NavigationMenuLink asChild>
                  <div className="flex flex-row items-center gap-2">
                    <Image 
                      src={component.icon}
                      alt={`${component.title} Icon`}
                      width={24}
                      height={24}
                      quality={100}
                    />

                    <Link href={component.url}>
                      <span className="font-medium">{component.title}</span>
                    </Link>
                  </div>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="shrink-0">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon">
              <Search />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Search Resonators</DialogTitle>
            </DialogHeader>
            <SearchDialogContent resonators={resonatorsData.resonators as Resonator[]} />
          </DialogContent>
        </Dialog>
      </div>
    </nav>
  )
}