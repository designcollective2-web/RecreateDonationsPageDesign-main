import svgPaths from "../imports/CorporatePenSponsorshipRedesign/svg-2r9d6mgr6q"
import imgImage9 from "../imports/CorporatePenSponsorshipRedesign/6c1ddd9de1258d9e75cdb982c26cb5cc82dd9251.png"
import imgStory1 from "../imports/WhatYourSponsorshipFunds/25b99a7df7e05b13284e4c9227b64d9b8bb4b5ac.png"
import imgStory2 from "../imports/WhatYourSponsorshipFunds/fc60033d493e2bf6474b5385d9e9ad8e089767ea.png"
import imgStory3 from "../imports/WhatYourSponsorshipFunds/f0c4baefe8f6c3152a48b3b67a59f2b3d98fc0a0.png"

function Frame28() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[18px] items-start justify-center relative shrink-0 w-full">
      <p className="[text-wrap:balance] font-['Neucha:Regular',sans-serif] leading-[37px] not-italic relative shrink-0 text-[28px] text-black tracking-[2.5px] uppercase w-full">
        Become part of our ongoing support
      </p>
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#333] text-[16px] tracking-[1.5px] w-full">
        Regular monthly support helps us plan food, veterinary care, and shelter
        for the dogs long-term.
      </p>
    </div>
  )
}

function Frame29() {
  return (
    <div
      className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0"
      data-name="Frame"
    >
      <div
        className="h-[15.042px] relative shrink-0 w-[20.72px]"
        data-name="Vector 1 (Stroke)"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="15.0416"
          preserveAspectRatio="none"
          viewBox="0 0 20.7204 15.0416"
          width="20.7204"
        >
          <path d={svgPaths.p2bbe4e00} fill="#5A8B5C" id="Vector 1 (Stroke)" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#333] text-[16px] tracking-[1.5px] whitespace-nowrap">
        Automatic monthly support
      </p>
    </div>
  )
}

function Frame30() {
  return (
    <div
      className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0"
      data-name="Frame"
    >
      <div
        className="h-[15.042px] relative shrink-0 w-[20.72px]"
        data-name="Vector 1 (Stroke)"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="15.0416"
          preserveAspectRatio="none"
          viewBox="0 0 20.7204 15.0416"
          width="20.7204"
        >
          <path d={svgPaths.p2bbe4e00} fill="#5A8B5C" id="Vector 1 (Stroke)" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#333] text-[16px] tracking-[1.5px] whitespace-nowrap">
        Regular shelter updates
      </p>
    </div>
  )
}

function Frame31() {
  return (
    <div
      className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0"
      data-name="Frame"
    >
      <div
        className="h-[15.042px] relative shrink-0 w-[20.72px]"
        data-name="Vector 1 (Stroke)"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="15.0416"
          preserveAspectRatio="none"
          viewBox="0 0 20.7204 15.0416"
          width="20.7204"
        >
          <path d={svgPaths.p2bbe4e00} fill="#5A8B5C" id="Vector 1 (Stroke)" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#333] text-[16px] tracking-[1.5px] whitespace-nowrap">
        Control over your membership
      </p>
    </div>
  )
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-full lg:w-[658px]">
      <div
        className="h-[54px] relative shrink-0 w-[179.053px]"
        data-name="image 9"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgImage9}
        />
      </div>
      <Frame28 />
      <Frame29 />
      <Frame30 />
      <Frame31 />
      <div
        className="bg-[#cb383e] h-[46px] relative rounded-[7px] shrink-0 w-full max-w-[322px] transition-all duration-200 cursor-pointer hover:brightness-95 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
        data-name="Button"
      >
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[25px] py-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Neucha:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[2px] uppercase whitespace-nowrap">
              become a monthly supporter
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function StoryCard({
  badge,
  text,
  img,
}: {
  badge: string
  text: string
  img: string
}) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center gap-[12px] p-[20px] relative rounded-[7px] shadow-sm shrink-0 w-full text-center sm:grid sm:grid-cols-[minmax(0,1fr)_134px] sm:items-center sm:gap-x-[20px] sm:gap-y-[12px] sm:text-left">
      <div
        className="order-1 sm:order-none sm:col-start-1 sm:row-start-1 sm:justify-self-start bg-[#5a8b5c] content-stretch flex items-center px-[20px] py-[5px] relative rounded-[57px] shrink-0"
        data-name="Button"
      >
        <p className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[14px] text-center text-white tracking-[1px] whitespace-nowrap">
          {badge}
        </p>
      </div>
      <div
        className="order-2 sm:order-none sm:col-start-2 sm:row-start-1 sm:row-span-2 sm:self-center h-[170px] w-full sm:h-[90px] sm:w-[134px] overflow-hidden relative rounded-[7px] shrink-0"
        data-name="story image"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={img}
        />
      </div>
      <p className="order-3 sm:order-none sm:col-start-1 sm:row-start-2 [word-break:break-word] font-['Montserrat:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#333] text-[16px] tracking-[1.5px] w-full">
        {text}
      </p>
    </div>
  )
}

function SponsorStory() {
  return (
    <div
      className="relative shrink-0 w-full lg:flex-[1_0_0] lg:min-w-px lg:max-w-[648px]"
      data-name="placeholder"
    >
      <div className="border-2 border-[#d6e4d5] border-solid content-stretch flex flex-col gap-[16px] items-center px-4 sm:px-[24px] pt-[42px] sm:pt-[64px] pb-[40px] relative rounded-[12px] w-full">
        <p className="[word-break:break-word] font-['Neucha:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#6c986e] text-[24px] text-center tracking-[2px] uppercase whitespace-nowrap">
          Little Miss Story
        </p>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <StoryCard
            badge="Day 1 - When she arrived"
            text="Little Miss needed urgent medical care."
            img={imgStory1}
          />
          <StoryCard
            badge="2 Months Later"
            text="Healthy, confident and ready for a home."
            img={imgStory2}
          />
          <StoryCard
            badge="Today"
            text="Safe, loved and home in Manchester."
            img={imgStory3}
          />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#eaf1ea] left-1/2 px-[12px] top-0 w-max max-w-[calc(100vw-24px)]">
        <p className="[word-break:break-word] font-['Neucha:Regular',sans-serif] leading-[1.35] not-italic relative text-[#333] text-[15px] sm:text-[20px] md:text-[28px] text-center tracking-[0.5px] sm:tracking-[1.5px] whitespace-nowrap">
          Made possible by our monthly sponsors
        </p>
      </div>
    </div>
  )
}

export default function MonthlySupport() {
  return (
    <div
      className="bg-[#eaf1ea] content-stretch flex flex-col gap-[48px] items-center px-6 py-16 md:px-16 md:py-20 lg:flex-row lg:gap-[40px] lg:items-center lg:justify-center lg:px-[96px] xl:px-[160px] relative shrink-0 w-full"
      data-name="Monthly Support"
    >
      <Frame27 />
      <SponsorStory />
    </div>
  )
}
