import { useState, useEffect, type ReactNode } from "react"
import svgPaths from "../imports/CorporatePenSponsorshipRedesign/svg-2r9d6mgr6q"
import imgDonazeBlueBigSize1 from "../imports/CorporatePenSponsorshipRedesign/6923476c9a38a10af3116b1903e52cf9d58522cf.png"
import { Reveal, useReveal, useCountUp, prefersReducedMotion } from "./motion"

/**
 * NOTE: still hard-coded to two campaigns. Making this data-driven
 * (1 / 2 / 0 cards without layout changes, per the brief) is a separate task.
 */

function CampaignChart({
  percent,
  delay = 0,
}: {
  percent: number
  delay?: number
}) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const [run, setRun] = useState(false)
  useEffect(() => {
    if (!visible) return
    if (delay <= 0 || prefersReducedMotion()) {
      setRun(true)
      return
    }
    const t = window.setTimeout(() => setRun(true), delay)
    return () => window.clearTimeout(t)
  }, [visible, delay])
  const v = useCountUp(percent, run, 1000)
  const radius = 44
  const circumference = 2 * Math.PI * radius
  const dashOffset = circumference * (1 - Math.min(100, Math.max(0, v)) / 100)
  return (
    <div ref={ref} className="relative shrink-0 size-[62px] sm:size-[100px]">
      <svg
        className="absolute inset-0 block size-full -rotate-90"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r={radius} stroke="#D6E4D5" strokeWidth="10" />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#5A8B5C"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center font-['Montserrat:Medium',sans-serif] font-medium text-[11px] sm:text-[16px] text-black tracking-[1px] sm:tracking-[1.5px]">
        <span>{Math.round(v)}%</span>
      </div>
    </div>
  )
}

function DonateNowButton() {
  return (
    <div
      className="bg-[#cb383e] h-[46px] relative rounded-[7px] shrink-0 w-full transition-all duration-200 cursor-pointer hover:brightness-95 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[25px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Neucha:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[2px] uppercase">
            Donate now
          </p>
        </div>
      </div>
    </div>
  )
}

function CampaignCard({
  logo,
  percent,
  chartDelay = 0,
  title,
  body,
}: {
  logo: ReactNode
  percent: number
  chartDelay?: number
  title: string
  body: string
}) {
  return (
    <div className="bg-[#f3f7f3] content-stretch flex flex-1 flex-col gap-[24px] items-start min-w-px p-6 md:p-[40px] relative rounded-[5px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="content-stretch flex flex-col gap-[16px] sm:flex-row sm:gap-[24px] sm:items-center relative shrink-0 w-full">
        <div className="content-stretch flex flex-row items-center justify-between w-full gap-3 sm:w-auto sm:flex-col sm:items-start sm:justify-start sm:gap-[20px] shrink-0">
          <div className="flex h-[42px] items-center shrink-0">{logo}</div>
          <CampaignChart percent={percent} delay={chartDelay} />
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-1 flex-col gap-[12px] items-start justify-center min-w-px relative">
          <p className="[text-wrap:balance] font-['Neucha:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[24px] text-black tracking-[2px] uppercase w-full">
            {title}
          </p>
          <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#555] text-[14px] tracking-[1.5px] w-full">
            {body}
          </p>
        </div>
      </div>
      <DonateNowButton />
    </div>
  )
}

function DonazeLogo() {
  return (
    <div
      className="aspect-[276/56] relative w-[150px]"
      data-name="donaze_blue_big_size 1"
    >
      <img
        alt="Donaze"
        className="absolute inset-0 max-w-none object-contain pointer-events-none size-full"
        src={imgDonazeBlueBigSize1}
      />
    </div>
  )
}

function GoFundMeLogo() {
  return (
    <div
      className="h-[37.931px] relative shrink-0 w-[100px]"
      data-name="GoFundMe 1"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="37.931"
        preserveAspectRatio="none"
        viewBox="0 0 100 37.931"
        width="100"
      >
        <g clipPath="url(#clip0_0_51)" id="GoFundMe 1">
          <path
            clipRule="evenodd"
            d={svgPaths.p9af7200}
            fill="#11A85C"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_0_51">
            <rect fill="white" height="37.931" width="100" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default function ActiveCampaigns() {
  return (
    <div
      className="bg-white content-stretch flex flex-col gap-[42px] items-center overflow-clip px-6 md:px-16 lg:px-[120px] py-16 md:py-20 relative shrink-0 w-full"
      data-name="Active Campaigns"
    >
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center max-w-[856px] relative shrink-0 text-center w-full">
        <p className="[text-wrap:balance] font-['Neucha:Regular',sans-serif] leading-[37px] not-italic relative shrink-0 text-[28px] text-black tracking-[2.5px] uppercase w-full">
          Active campaigns
        </p>
        <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#555] text-[14px] tracking-[1.5px] w-full">
          Support a specific current shelter need through one of our active
          campaigns.
        </p>
      </div>
      <div className="content-stretch flex flex-col lg:flex-row gap-[20px] items-stretch max-w-[1340px] relative shrink-0 w-full">
        <Reveal delay={0} className="flex flex-1 min-w-px">
          <CampaignCard
            logo={<DonazeLogo />}
            percent={1}
            title="Donate with peace of mind to verified causes"
            body="Donaze is a transparent platform for verified causes and donors who want to give with peace of mind."
          />
        </Reveal>
        <Reveal delay={130} className="flex flex-1 min-w-px">
          <CampaignCard
            logo={<GoFundMeLogo />}
            percent={62}
            chartDelay={220}
            title="Help secure our shelter's future"
            body="Urgent campaign to cover rising costs of food, electricity, and veterinary care while the shelter works toward a more sustainable future."
          />
        </Reveal>
      </div>
    </div>
  )
}
