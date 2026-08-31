import { useState } from "react"
import svgPaths from "../imports/CorporatePenSponsorshipRedesign/svg-2r9d6mgr6q"

function Frame33() {
  return (
    <div className="bg-[#95b996] content-stretch flex items-center justify-center p-[12px] relative rounded-[999px] shrink-0 size-[50px]">
      <div
        className="aspect-[24/24] flex-[1_0_0] min-w-px overflow-clip relative"
        data-name="Credit card"
      >
        <div className="absolute inset-[16.67%_4.17%]" data-name="Icon">
          <div className="absolute inset-[-5.77%_-4.2%]">
            <svg
              className="block size-full"
              fill="none"
              height="19.3333"
              preserveAspectRatio="none"
              viewBox="0 0 25.8333 19.3333"
              width="25.8333"
            >
              <path
                d={svgPaths.p20386880}
                id="Icon"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0">
      <Frame33 />
      <p className="[word-break:break-word] [text-wrap:balance] font-['Neucha:Regular',sans-serif] leading-[37px] not-italic relative shrink-0 text-[28px] text-center text-white tracking-[2.5px] uppercase">
        Prefer a direct bank transfer?
      </p>
    </div>
  )
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-black text-center tracking-[1.5px]">
        View and easily copy our bank details.
      </p>
    </div>
  )
}

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value.trim())
    } catch {
      /* clipboard unavailable in this context */
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }
  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${label}`}
      className="bg-[#e95158] content-stretch flex flex-row gap-[12px] sm:gap-[16px] items-start overflow-clip p-4 md:p-[24px] relative rounded-[5px] shrink-0 w-full text-left transition-all duration-200 cursor-pointer hover:brightness-105 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset"
      data-name="Frame"
    >
      <div className="flex flex-1 min-w-0 flex-col gap-[2px] sm:flex-row sm:items-baseline sm:justify-between sm:gap-[16px]">
        <p className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#eaf1ea] text-[16px] tracking-[1.5px] whitespace-nowrap">
          {label}
        </p>
        <p className="[word-break:break-word] break-words font-['Montserrat:Bold',sans-serif] font-bold leading-[1.4] min-w-0 relative text-[16px] text-left sm:text-right text-white">
          {value}
        </p>
      </div>
      <div
        className="opacity-50 overflow-clip relative shrink-0 mt-[2px] size-[24px]"
        data-name="Copy"
      >
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-5%]">
            <svg
              className="block size-full"
              fill="none"
              height="22"
              preserveAspectRatio="none"
              viewBox="0 0 22 22"
              width="22"
            >
              <path
                d={svgPaths.p2a007e70}
                id="Icon"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>
      <span
        aria-hidden={!copied}
        className={`absolute right-[24px] top-1/2 -translate-y-1/2 bg-white text-[#cb383e] font-['Montserrat:Bold',sans-serif] font-bold text-[11px] tracking-[1px] px-[8px] py-[3px] rounded-[4px] shadow transition-opacity duration-200 ${
          copied ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        Copied
      </span>
    </button>
  )
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <CopyRow
        label="Account holder"
        value="Street Hearts Bulgaria Foundation"
      />
      <CopyRow
        label="IBAN"
        value="Companies, foundations, teams, CSR BG.. .... .... .... "
      />
      <CopyRow label="Bank" value="[Bank name]" />
    </div>
  )
}

function PricingCard() {
  return (
    <div
      className="bg-white content-stretch flex flex-col gap-[20px] items-center overflow-clip p-6 md:p-[40px] relative rounded-[12px] shrink-0 w-full max-w-[698px]"
      data-name="Pricing Card"
    >
      <Frame34 />
      <Frame35 />
    </div>
  )
}

export default function BankTransfer() {
  return (
    <div
      className="bg-[#5a8b5c] content-stretch flex flex-col gap-[24px] items-center overflow-clip px-6 md:px-16 lg:px-[120px] py-16 md:py-20 relative shrink-0 w-full"
      data-name="Bank Transfer"
    >
      <Frame32 />
      <PricingCard />
      <div
        aria-hidden
        className="pointer-events-none hidden lg:flex absolute h-[440.944px] items-center justify-center left-[-109.77px] top-[30.09px] w-[442.625px]"
      >
        <div className="-rotate-165 -scale-y-100 flex-none">
          <div
            className="h-[359.528px] relative w-[361.904px]"
            data-name="Vector"
          >
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              height="359.528"
              preserveAspectRatio="none"
              viewBox="0 0 361.904 359.528"
              width="361.904"
            >
              <g id="Vector" opacity="0.5">
                <path d={svgPaths.p1d8fe600} fill="#95B996" />
                <path d={svgPaths.p396af180} fill="#95B996" />
                <path d={svgPaths.p1fc6bf00} fill="#95B996" />
                <path d={svgPaths.pd24aa00} fill="#95B996" />
                <path d={svgPaths.p1a6f6700} fill="#95B996" />
                <path d={svgPaths.p19347d80} fill="#95B996" />
                <path d={svgPaths.p38e31600} fill="#95B996" />
                <path d={svgPaths.p1b7af780} fill="#95B996" />
                <path d={svgPaths.p8d08680} fill="#95B996" />
                <path d={svgPaths.p1f57aff0} fill="#95B996" />
                <path d={svgPaths.p12589200} fill="#95B996" />
                <path d={svgPaths.p630d000} fill="#95B996" />
                <path d={svgPaths.p282b1a00} fill="#95B996" />
                <path d={svgPaths.p2ae5fd40} fill="#95B996" />
                <path d={svgPaths.p1ef9e300} fill="#95B996" />
                <path d={svgPaths.p14e8b6b0} fill="#95B996" />
                <path d={svgPaths.p2a86dc00} fill="#95B996" />
                <path d={svgPaths.pfee9800} fill="#95B996" />
                <path d={svgPaths.p2cc6b180} fill="#95B996" />
                <path d={svgPaths.p3f88ca00} fill="#95B996" />
                <path d={svgPaths.p13ef300} fill="#95B996" />
                <path d={svgPaths.p2b294d00} fill="#95B996" />
                <path d={svgPaths.p35004100} fill="#95B996" />
                <path d={svgPaths.p89df180} fill="#95B996" />
                <path d={svgPaths.p276b0a00} fill="#95B996" />
                <path d={svgPaths.p9fd4740} fill="#95B996" />
                <path d={svgPaths.p3222d870} fill="#95B996" />
                <path d={svgPaths.p2573a780} fill="#95B996" />
                <path d={svgPaths.p126f6400} fill="#95B996" />
                <path d={svgPaths.p28e49480} fill="#95B996" />
                <path d={svgPaths.p196ac00} fill="#95B996" />
                <path d={svgPaths.p365c3800} fill="#95B996" />
                <path d={svgPaths.p764bb00} fill="#95B996" />
                <path d={svgPaths.pc8f2b80} fill="#95B996" />
                <path d={svgPaths.pe564ff0} fill="#95B996" />
                <path d={svgPaths.p366bdd00} fill="#95B996" />
                <path d={svgPaths.p3f381080} fill="#95B996" />
                <path d={svgPaths.p25427900} fill="#95B996" />
                <path d={svgPaths.p3963ab00} fill="#95B996" />
                <path d={svgPaths.p39806380} fill="#95B996" />
                <path d={svgPaths.p306fc500} fill="#95B996" />
                <path d={svgPaths.p12052580} fill="#95B996" />
                <path d={svgPaths.p306e6272} fill="#95B996" />
                <path d={svgPaths.p3e097600} fill="#95B996" />
                <path d={svgPaths.p12086380} fill="#95B996" />
                <path d={svgPaths.p15d38820} fill="#95B996" />
                <path d={svgPaths.p177b8e00} fill="#95B996" />
                <path d={svgPaths.p14c6c00} fill="#95B996" />
                <path d={svgPaths.p21ce7972} fill="#95B996" />
                <path d={svgPaths.p3d60f4c0} fill="#95B996" />
                <path d={svgPaths.p1029bf80} fill="#95B996" />
                <path d={svgPaths.p3c40e800} fill="#95B996" />
                <path d={svgPaths.p1346db80} fill="#95B996" />
                <path d={svgPaths.p52e8b00} fill="#95B996" />
                <path d={svgPaths.p2f00f00} fill="#95B996" />
                <path d={svgPaths.p992db80} fill="#95B996" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none hidden lg:flex absolute bottom-[-65.74px] h-[397.252px] items-center justify-center right-[-103.5px] w-[398.766px]"
      >
        <div className="-rotate-15 flex-none">
          <div
            className="h-[323.903px] relative w-[326.043px]"
            data-name="Vector"
          >
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              height="323.903"
              preserveAspectRatio="none"
              viewBox="0 0 326.043 323.903"
              width="326.043"
            >
              <g id="Vector" opacity="0.5">
                <path d={svgPaths.p1e3f0400} fill="#95B996" />
                <path d={svgPaths.p1984a9c0} fill="#95B996" />
                <path d={svgPaths.p2c1b4f50} fill="#95B996" />
                <path d={svgPaths.p93be5a0} fill="#95B996" />
                <path d={svgPaths.p3717a800} fill="#95B996" />
                <path d={svgPaths.p2beae080} fill="#95B996" />
                <path d={svgPaths.p349c7c80} fill="#95B996" />
                <path d={svgPaths.p400b870} fill="#95B996" />
                <path d={svgPaths.p1d78d400} fill="#95B996" />
                <path d={svgPaths.p1f947400} fill="#95B996" />
                <path d={svgPaths.p145b9600} fill="#95B996" />
                <path d={svgPaths.p3decec20} fill="#95B996" />
                <path d={svgPaths.p3218dc00} fill="#95B996" />
                <path d={svgPaths.p327f1080} fill="#95B996" />
                <path d={svgPaths.pb778a00} fill="#95B996" />
                <path d={svgPaths.p37715e60} fill="#95B996" />
                <path d={svgPaths.p11962b00} fill="#95B996" />
                <path d={svgPaths.p3d206400} fill="#95B996" />
                <path d={svgPaths.p365c4d00} fill="#95B996" />
                <path d={svgPaths.pb39d180} fill="#95B996" />
                <path d={svgPaths.p391abb80} fill="#95B996" />
                <path d={svgPaths.p25ae9c00} fill="#95B996" />
                <path d={svgPaths.p241aed72} fill="#95B996" />
                <path d={svgPaths.p21efbf00} fill="#95B996" />
                <path d={svgPaths.pdcf6200} fill="#95B996" />
                <path d={svgPaths.pfb4cf00} fill="#95B996" />
                <path d={svgPaths.p2f9c700} fill="#95B996" />
                <path d={svgPaths.p2a0c38c0} fill="#95B996" />
                <path d={svgPaths.p1cbee580} fill="#95B996" />
                <path d={svgPaths.p2aab7680} fill="#95B996" />
                <path d={svgPaths.p1d38e500} fill="#95B996" />
                <path d={svgPaths.p1f39600} fill="#95B996" />
                <path d={svgPaths.p32ccce00} fill="#95B996" />
                <path d={svgPaths.p2d4a0480} fill="#95B996" />
                <path d={svgPaths.pbe31100} fill="#95B996" />
                <path d={svgPaths.p325f5200} fill="#95B996" />
                <path d={svgPaths.p37a61900} fill="#95B996" />
                <path d={svgPaths.p3ea3eb80} fill="#95B996" />
                <path d={svgPaths.p192d7c80} fill="#95B996" />
                <path d={svgPaths.p3af8dac0} fill="#95B996" />
                <path d={svgPaths.p193e76f0} fill="#95B996" />
                <path d={svgPaths.p1d92f900} fill="#95B996" />
                <path d={svgPaths.p14dffa80} fill="#95B996" />
                <path d={svgPaths.p1debdac0} fill="#95B996" />
                <path d={svgPaths.p8fda880} fill="#95B996" />
                <path d={svgPaths.p15453010} fill="#95B996" />
                <path d={svgPaths.p1f1b580} fill="#95B996" />
                <path d={svgPaths.p22162900} fill="#95B996" />
                <path d={svgPaths.p3ced4000} fill="#95B996" />
                <path d={svgPaths.p2aa7eb00} fill="#95B996" />
                <path d={svgPaths.p55f3c80} fill="#95B996" />
                <path d={svgPaths.p17a7c700} fill="#95B996" />
                <path d={svgPaths.p21e4cf00} fill="#95B996" />
                <path d={svgPaths.p3b276a00} fill="#95B996" />
                <path d={svgPaths.p1df07030} fill="#95B996" />
                <path d={svgPaths.p35449600} fill="#95B996" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
