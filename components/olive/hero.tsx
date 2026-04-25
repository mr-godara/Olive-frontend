import Image from "next/image"
import Link from "next/link"
import { Apple, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PhoneMockup } from "./phone-mockup"

const avatars = [
  { src: "/images/avatar-1.jpg", alt: "Happy Olive user" },
  { src: "/images/avatar-2.jpg", alt: "Happy Olive user" },
  { src: "/images/avatar-3.jpg", alt: "Happy Olive user" },
  { src: "/images/avatar-4.jpg", alt: "Happy Olive user" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-20 md:pt-16">
        {/* Trust badge */}
        <div className="mx-auto flex w-fit items-center gap-3 rounded-full">
          <div className="flex items-center -space-x-2">
            <span className="relative z-10 inline-flex h-7 items-center justify-center rounded-full bg-primary px-2 text-[11px] font-semibold text-primary-foreground ring-2 ring-background">
              3k+
            </span>
            {avatars.map((a, i) => (
              <span
                key={i}
                className="relative inline-block h-7 w-7 overflow-hidden rounded-full ring-2 ring-background"
              >
                <Image
                  src={a.src}
                  alt={a.alt}
                  fill
                  sizes="28px"
                  className="object-cover"
                />
              </span>
            ))}
          </div>
          <p className="text-sm text-foreground/70">
            Trusted by thousands of healthy families
          </p>
        </div>

        {/* Heading */}
        <h1 className="mx-auto mt-8 max-w-4xl text-center font-serif text-5xl leading-[1.05] tracking-tight text-primary text-balance md:text-7xl lg:text-[5.5rem]">
          The Safest Way to Shop for Groceries
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-6 max-w-xl text-center text-base leading-relaxed text-foreground/70 text-pretty md:text-lg">
          Use the Olive Food Scanner App to Instantly Eliminate Harmful
          Ingredients from Your Family&apos;s Diet and Get Expert-Backed Food
          Insights
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90"
          >
            <Link href="#">
              <Apple className="mr-1 h-5 w-5 fill-current" aria-hidden="true" />
              Download for iOS
            </Link>
          </Button>
          <Link
            href="#"
            className="group flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Join the Olive Community
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Phone mockup */}
        <div className="relative mt-16">
          <PhoneMockup />
        </div>
      </div>
    </section>
  )
}
