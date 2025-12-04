import { Card, CardContent, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const sections = [
    {
      title: "Resonators",
      href: "/resonators",
      icon: "/assets/resonators_icon.png",
      alt: "Resonators Icon",
    },
    {
      title: "Weapons",
      href: "/weapons",
      icon: "/assets/weapons_icon.png",
      alt: "Weapons Icon",
    },
    {
      title: "Echoes",
      href: "/echoes",
      icon: "/assets/echoes_icon.png",
      alt: "Echoes Icon",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-16 px-4 py-12 text-center sm:px-6 lg:px-10">
        <header className="flex flex-col items-center gap-6">
          <div className="rounded-full bg-muted/60 p-3 shadow-sm">
            <Image
              src="/assets/site_icon.png"
              alt="Phrolova Project"
              width={128}
              height={128}
              sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
              className="h-24 w-24 object-contain sm:h-28 sm:w-28 md:h-32 md:w-32"
            />
          </div>

          <div className="flex flex-col items-center gap-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Phrolova Project
            </h1>
            <p className="max-w-3xl text-base text-muted-foreground sm:text-lg md:text-xl">
              Phrolova is an unofficial Wuthering Waves database and tools site,
              offering clear stats, builds, and resources to help you optimize
              your resonators and teams.
            </p>
          </div>
        </header>

        <main className="grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Card className="flex h-full min-h-[10rem] items-center justify-center p-6 text-center transition hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="flex flex-col items-center gap-4 p-0">
                  <Image
                    src={section.icon}
                    alt={section.alt}
                    width={64}
                    height={64}
                    className="h-16 w-16 object-contain sm:h-20 sm:w-20"
                  />
                  <CardTitle className="text-lg font-semibold sm:text-xl">
                    {section.title}
                  </CardTitle>
                </CardContent>
              </Card>
            </Link>
          ))}
        </main>
      </div>
    </div>
  )
}
