import { useState } from "react"

const FAQ_ITEMS = [
  {
    q: "How does invoicing work?",
    a: "Once you confirm your sponsorship we issue a formal invoice for the full amount, payable by bank transfer. A donation receipt for your records follows as soon as payment is received.",
  },
  {
    q: "What happens at renewal after 12 months?",
    a: "We contact you ahead of the renewal date with an update on the pen and its dogs. Renewing is entirely optional — there is no automatic charge, and you are free to continue, adjust, or step away.",
  },
  {
    q: "Can one company sponsor multiple pens?",
    a: "Yes. Many partners choose to sponsor several pens. We will tailor the recognition and updates to reflect the level of support you provide.",
  },
  {
    q: "What happens if the pen is damaged during the year?",
    a: "Routine maintenance and repairs are fully covered by Street Hearts Bulgaria at no additional cost to you — your sponsorship keeps the dogs safe and cared for throughout the year.",
  },
]

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white border border-[#bdbdbd] border-solid overflow-hidden relative rounded-[7px] shrink-0 w-full transition-colors hover:border-[#5a8b5c]">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between w-full px-[20px] py-[16px] text-left cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#5a8b5c] focus-visible:ring-inset"
      >
        <span className="leading-[1.5] relative shrink-0 text-[14px] tracking-[1px]">
          {q}
        </span>
        <span
          className={`leading-[normal] relative shrink-0 text-[20px] transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden min-h-0">
          <p className="px-[20px] pb-[16px] leading-[1.6] text-[13px] tracking-[0.5px] text-[#555] whitespace-normal max-w-[760px]">
            {a}
          </p>
        </div>
      </div>
    </div>
  )
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col font-['Montserrat:Medium',sans-serif] font-medium gap-[16px] items-stretch max-w-[800px] relative shrink-0 text-[#555] w-full">
      {FAQ_ITEMS.map((f) => (
        <AccordionItem key={f.q} q={f.q} a={f.a} />
      ))}
    </div>
  )
}

export default function Faq() {
  return (
    <div
      className="[word-break:break-word] bg-[#f3f7f3] content-stretch flex flex-col gap-[40px] items-center overflow-clip px-6 md:px-16 py-16 md:py-20 relative shrink-0 w-full"
      data-name="FAQ"
    >
      <p className="font-['Neucha:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-center tracking-[2.5px] uppercase">
        FREQUENTLY ASKED QUESTIONS
      </p>
      <Frame47 />
    </div>
  )
}
