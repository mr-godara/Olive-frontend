import Image from "next/image"
import { Heart, Share2 } from "lucide-react"

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      {/* Phone frame */}
      <div className="relative rounded-[2.75rem] border-[10px] border-foreground/90 bg-card shadow-2xl shadow-primary/10">
        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-foreground/90" />

        {/* Screen */}
        <div className="overflow-hidden rounded-[2.25rem] bg-card">
          {/* Top scan area */}
          <div className="relative h-44 bg-muted">
            <Image
              src="/images/fig-olive-crackers.jpg"
              alt="Fig and Olive Crackers product"
              fill
              sizes="320px"
              className="object-cover"
            />
            {/* Scan corners */}
            <ScanCorners />
          </div>

          {/* Product details */}
          <div className="px-5 pt-4 pb-3">
            <div className="flex items-start gap-3">
              <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-md bg-muted">
                <Image
                  src="/images/fig-olive-crackers.jpg"
                  alt=""
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-[13px] font-semibold leading-tight text-foreground text-pretty">
                  Fig and Olive Crackers, Fig and Olive
                </h3>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  Lesley Stowe
                </p>
              </div>
            </div>

            {/* Score */}
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="h-2.5 w-2.5 rounded-full bg-destructive"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-bold leading-none text-foreground">
                    46<span className="text-xs font-medium text-muted-foreground">/100</span>
                  </p>
                  <p className="text-[10px] font-medium uppercase tracking-wide text-destructive">
                    Avoid
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Save"
                  className="text-muted-foreground"
                >
                  <Heart className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Share"
                  className="text-muted-foreground"
                >
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mx-5 border-t border-border" />

          {/* Oliver Says */}
          <div className="px-5 py-4">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent">
                <span className="text-[10px]" aria-hidden="true">
                  {"🫒"}
                </span>
              </div>
              <p className="text-xs font-semibold text-foreground">
                Oliver Says:
              </p>
            </div>
            <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
              {
                "\u201CThis product\u2019s low score mainly comes from the processed sugars, like honey and brown sugar, which can impact your family\u2019s health when consumed frequently, especially for kids who are still developing. Additionally, there are several additives that aren\u2019t ideal for your goal of avoiding processed foods, making this a choice to consider more carefully.\u201D"
              }
            </p>
          </div>

          {/* Breakdown header peek */}
          <div className="border-t border-border px-5 py-3">
            <p className="text-xs font-semibold text-foreground">Breakdown</p>
          </div>
        </div>
      </div>

      {/* Floating side cards */}
      <div className="pointer-events-none absolute -left-16 top-32 hidden h-24 w-24 rounded-2xl bg-card/50 shadow-lg backdrop-blur-sm md:block" />
      <div className="pointer-events-none absolute -right-16 top-32 hidden h-24 w-24 rounded-2xl bg-card/50 shadow-lg backdrop-blur-sm md:block" />
    </div>
  )
}

function ScanCorners() {
  const cornerBase =
    "absolute h-5 w-5 border-card"
  return (
    <>
      <span
        aria-hidden="true"
        className={`${cornerBase} left-3 top-3 border-l-[3px] border-t-[3px] rounded-tl-md`}
      />
      <span
        aria-hidden="true"
        className={`${cornerBase} right-3 top-3 border-r-[3px] border-t-[3px] rounded-tr-md`}
      />
      <span
        aria-hidden="true"
        className={`${cornerBase} left-3 bottom-3 border-l-[3px] border-b-[3px] rounded-bl-md`}
      />
      <span
        aria-hidden="true"
        className={`${cornerBase} right-3 bottom-3 border-r-[3px] border-b-[3px] rounded-br-md`}
      />
    </>
  )
}
