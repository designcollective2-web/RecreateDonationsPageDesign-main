/**
 * Trust strip — headline stats under the hero.
 *
 * NOTE: every figure below is a PLACEHOLDER. The client will supply the real
 * numbers. The two "rescued" / "success stories" values were identical
 * (1500+ / 1500+) in the Figma Make export — that was a copy-paste slip, not an
 * intentional match, so they are now two distinct placeholder values.
 */

const STATS: { value: string; label: string }[] = [
  { value: "2015", label: "year of foundation" },
  { value: "100%", label: "donation TRANSPARENCY" },
  { value: "1500+", label: "dogs was rescued" }, // placeholder
  { value: "1200+", label: "Success Stories" }, // placeholder
]

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-center overflow-clip px-6 py-8 md:px-[48px] md:py-[32px] relative"
      data-name="Frame"
    >
      <p className="font-['Montserrat:Medium',sans-serif] font-medium relative shrink-0 text-[26px] md:text-[32px]">
        {value}
      </p>
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold opacity-75 relative shrink-0 text-center text-[10px] tracking-[2px] uppercase">
        {label}
      </p>
    </div>
  )
}

export default function TrustStrip() {
  return (
    <div
      className="bg-[#95b996] flex justify-center relative shrink-0 w-full"
      data-name="Trust Strip"
    >
      <div className="[word-break:break-word] grid grid-cols-2 md:grid-cols-4 items-start leading-[normal] gap-x-4 md:gap-0 overflow-clip px-6 md:px-[50px] py-6 md:py-0 relative text-white w-full max-w-[1440px]">
        {STATS.map((s) => (
          <Stat key={s.label} value={s.value} label={s.label} />
        ))}
      </div>
    </div>
  )
}
