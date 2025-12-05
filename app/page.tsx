import Image from "next/image"

export default function Home() {
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

          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-bold text-center sm:text-4xl md:text-5xl">
              Phrolova Project
            </h1>
            <p className="max-w-3xl text-base text-muted-foreground sm:text-lg md:text-xl">
              Phrolova is an unofficial Wuthering Waves database and tools site,
              offering clear stats, builds, and resources to help you optimize
              your resonators and teams.
            </p>
          </div>
        </header>

      </div>
    </div>
  )
}
