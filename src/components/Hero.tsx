import { useState, useRef, useEffect } from "react"
import { useCheckout } from "../checkout"
import svgPaths from "../imports/CorporatePenSponsorshipRedesign/svg-2r9d6mgr6q"
import imgWhoYouHelp from "../imports/image.png"
import imgRectangle13 from "../imports/CorporatePenSponsorshipRedesign/b82a77daba3a5ed53e251afbff1552663a0d8f60.png"
import imgRectangle14 from "../imports/CorporatePenSponsorshipRedesign/64b83c84bd53a44194a0ee822a5bb6a3cf201dd7.png"
import imgRectangle15 from "../imports/CorporatePenSponsorshipRedesign/509269edea1e9a2122755a27059ddfd3467a74a0.png"
import imgHarley3 from "../imports/Harley3.jpg"

const PRESETS = [5, 25, 50]

function PayPalMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-bold italic tracking-tight ${className}`}
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      <span style={{ color: "#003087" }}>Pay</span>
      <span style={{ color: "#009cde" }}>Pal</span>
    </span>
  )
}

function Frame4() {
  return (
    <div
      className="content-stretch flex gap-[6px] items-center overflow-clip relative rounded-[5px] shrink-0"
      data-name="Frame"
    >
      <div
        className="h-[12px] relative shrink-0 w-[16.53px]"
        data-name="Vector 1 (Stroke)"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="12"
          preserveAspectRatio="none"
          viewBox="0 0 16.5305 12"
          width="16.5305"
        >
          <path d={svgPaths.p1b238f00} fill="#D6E4D5" id="Vector 1 (Stroke)" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[12px] text-white tracking-[1.5px] whitespace-nowrap">
        OFFICIAL NGO
      </p>
    </div>
  )
}

function Frame5() {
  return (
    <div
      className="content-stretch flex gap-[6px] h-[52px] items-center overflow-clip relative rounded-[5px] shrink-0"
      data-name="Frame"
    >
      <div
        className="h-[12px] relative shrink-0 w-[16.53px]"
        data-name="Vector 1 (Stroke)"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="12"
          preserveAspectRatio="none"
          viewBox="0 0 16.5305 12"
          width="16.5305"
        >
          <path d={svgPaths.p1b238f00} fill="#D6E4D5" id="Vector 1 (Stroke)" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[12px] text-white tracking-[1.5px] whitespace-nowrap">
        TAX DEDUCTIBLE
      </p>
    </div>
  )
}

function Frame3() {
  return (
    <div
      className="border border-[#95b996] border-solid content-stretch flex gap-[20px] h-[52px] items-center overflow-clip px-[14px] py-[10px] relative rounded-[5px] shrink-0"
      data-name="Frame"
    >
      <Frame4 />
      <div className="bg-[#95b996] h-full relative shrink-0 w-px" />
      <Frame5 />
    </div>
  )
}

function HelpUs() {
  return (
    <div className="-mt-[16px] relative shrink-0" data-name="Help Us">
      <img
        src={imgWhoYouHelp}
        alt="Who you help"
        className="block h-auto w-[215px] max-w-none"
      />
    </div>
  )
}

function HeroContent() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative"
      data-name="Hero content"
    >
      <p className="[word-break:break-word] font-['Neucha:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#f3f7f3] text-[32px] md:text-[38px] tracking-[2px] uppercase w-full">
        Every donation helps save a life
      </p>
      <p className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#f3f7f3] text-[16px] tracking-[1.5px] w-full">
        Street Hearts Bulgaria has been treating, neutering and finding homes
        for stray dogs. Your donation, large or small, directly supports
        veterinary care, food and shelter.
      </p>
      <Frame3 />
      <HelpUs />
    </div>
  )
}

const CAROUSEL_CARDS = [
  { name: "Harley", img: imgRectangle14 },
  { name: "Maggie", img: imgRectangle13 },
  { name: "Liam", img: imgRectangle15 },
  { name: "Sophia", img: imgHarley3 },
  { name: "Noah", img: imgRectangle13 },
  { name: "Olivia", img: imgRectangle15 },
  { name: "Ethan", img: imgRectangle14 },
  { name: "Ava", img: imgRectangle13 },
  { name: "Mason", img: imgRectangle15 },
  { name: "Isabella", img: imgRectangle14 },
]

function DogCard({
  name,
  img,
  tilt,
}: {
  name: string
  img: string
  tilt: number
}) {
  return (
    <div
      className="hero-card relative shrink-0 w-[132.127px]"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div className="relative h-[159.358px] w-[132.127px] rounded-[5px] border-[5px] border-white border-solid overflow-hidden">
        <img
          alt={name}
          className="absolute inset-0 max-w-none object-cover size-full"
          src={img}
        />
      </div>
      <div className="absolute bg-white bottom-[12px] left-[10px] flex items-center justify-center px-[12px] rounded-br-[5px] rounded-tl-[5px]">
        <p className="[word-break:break-word] font-['Neucha:Regular',sans-serif] leading-[37px] not-italic relative shrink-0 text-[#555] text-[16px] text-center tracking-[2.5px] uppercase whitespace-nowrap">
          {name}
        </p>
      </div>
    </div>
  )
}

function CarouselGroup() {
  return (
    <div
      className="flex gap-[30px] items-center pr-[30px] shrink-0"
      aria-hidden
    >
      {CAROUSEL_CARDS.map((c, i) => (
        <DogCard
          key={c.name}
          name={c.name}
          img={c.img}
          tilt={i % 2 === 0 ? 3 : -3}
        />
      ))}
    </div>
  )
}

function HeroCarousel() {
  return (
    <div
      className="hero-marquee border-[#95b996] border-solid border-t overflow-hidden py-[35px] relative w-full"
      data-name="Carousel"
    >
      <div className="hero-marquee-track flex items-center w-max">
        <CarouselGroup />
        <CarouselGroup />
      </div>
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 pointer-events-none w-[8%] max-w-[193px] bg-gradient-to-r from-[#5a8b5c] to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 pointer-events-none w-[8%] max-w-[193px] bg-gradient-to-l from-[#5a8b5c] to-transparent"
      />
    </div>
  )
}

function Frame6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#555] text-[12px] text-center tracking-[1.5px] w-full max-w-[335.988px] whitespace-pre-wrap">{`    Payment is processed securely via PayPal. No PayPal account required to pay by card.`}</p>
      <div
        className="absolute left-0 overflow-clip size-[16px] top-0"
        data-name="Shield"
      >
        <div className="absolute inset-[8.33%_16.67%]" data-name="Icon">
          <div className="absolute inset-[-6%_-7.5%]">
            <svg
              className="block size-full"
              fill="none"
              height="14.9333"
              preserveAspectRatio="none"
              viewBox="0 0 12.2667 14.9333"
              width="12.2667"
            >
              <path
                d={svgPaths.p26f63400}
                id="Icon"
                stroke="#5A8B5C"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.6"
              />
            </svg>
          </div>
        </div>
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute h-[3.543px] left-1/2 top-1/2 w-[5.191px]"
          data-name="Icon"
        >
          <div className="absolute inset-[-22.58%_-15.41%]">
            <svg
              className="block size-full"
              fill="none"
              height="5.1435"
              preserveAspectRatio="none"
              viewBox="0 0 6.79067 5.1435"
              width="6.79067"
            >
              <path
                d={svgPaths.p2a6e2c20}
                id="Icon"
                stroke="#5A8B5C"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.6"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

function Frame15() {
  const { selected, setSelected, custom, setCustom, amount, setView } =
    useCheckout()
  const [touched, setTouched] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const isOther = selected === "other"

  useEffect(() => {
    if (isOther) inputRef.current?.focus()
  }, [isOther])

  const customNum = parseFloat(custom)
  const customValid = custom.trim() !== "" && !isNaN(customNum) && customNum > 0
  const disabled = amount == null
  const showError = isOther && touched && !customValid

  const pillBase =
    "flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center min-w-px overflow-clip px-[20px] py-[10px] relative rounded-[7px] cursor-pointer transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#5a8b5c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#eaf1ea] active:scale-[0.97]"
  const pillClass = (active: boolean) =>
    `${pillBase} ${
      active
        ? "bg-[#5a8b5c]"
        : "bg-[#f5f5f5] border border-[#bdbdbd] border-solid hover:border-[#5a8b5c] hover:bg-white"
    }`

  const checkout = (target: "card" | "paypal") => {
    if (disabled) return
    setView(target)
  }

  return (
    <div className="bg-[#eaf1ea] content-stretch flex flex-col gap-[24px] items-center p-6 sm:p-[40px] rounded-[7px] w-full max-w-[520px] lg:max-w-none">
      <p className="[word-break:break-word] font-['Neucha:Regular',sans-serif] leading-[37px] min-w-full not-italic relative shrink-0 text-[28px] text-black text-center tracking-[2.5px] uppercase w-[min-content]">
        Donate now
      </p>
      <div
        className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full"
        data-name="Amount Options"
      >
        {PRESETS.map((v) => {
          const active = !isOther && selected === v
          return (
            <button
              key={v}
              type="button"
              aria-pressed={active}
              onClick={() => {
                setSelected(v)
                setTouched(false)
              }}
              className={pillClass(active)}
            >
              <p
                className={`[word-break:break-word] font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] whitespace-nowrap ${
                  active ? "text-white" : "text-black"
                }`}
              >{`£${v}`}</p>
            </button>
          )
        })}
        <button
          type="button"
          aria-pressed={isOther}
          onClick={() => setSelected("other")}
          className={pillClass(isOther)}
        >
          <p
            className={`[word-break:break-word] font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] whitespace-nowrap ${
              isOther ? "text-white" : "text-black"
            }`}
          >
            Other
          </p>
        </button>
      </div>
      <div
        className={`grid transition-all duration-300 ease-out w-full ${
          isOther ? "mb-0" : "-mb-[24px]"
        }`}
        style={{
          gridTemplateRows: isOther ? "1fr" : "0fr",
          opacity: isOther ? 1 : 0,
        }}
        aria-hidden={!isOther}
      >
        <div className="overflow-hidden min-h-0 w-full">
          <div className="flex flex-col gap-[6px] w-full pt-[2px]">
            <div className="flex items-center gap-[10px] bg-white border border-[#bdbdbd] border-solid rounded-[7px] px-[16px] py-[12px] transition-colors focus-within:border-[#5a8b5c]">
              <span className="font-['Montserrat:Medium',sans-serif] font-medium text-[16px] text-[#555]">
                £
              </span>
              <input
                ref={inputRef}
                type="number"
                min="1"
                step="1"
                inputMode="decimal"
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                onBlur={() => setTouched(true)}
                placeholder="Enter amount"
                aria-label="Custom donation amount in GBP"
                aria-invalid={showError}
                className="flex-1 min-w-0 bg-transparent outline-none font-['Montserrat:Medium',sans-serif] font-medium text-[16px] text-black placeholder:text-[#aaa]"
              />
            </div>
            {showError && (
              <p className="font-['Montserrat:Medium',sans-serif] font-medium text-[12px] text-[#cb383e] tracking-[0.5px] px-[4px]">
                Please enter a valid amount greater than £0.
              </p>
            )}
          </div>
        </div>
      </div>
      <button
        type="button"
        disabled={disabled}
        onClick={() => checkout("card")}
        className="bg-[#cb383e] h-[54px] relative rounded-[7px] shrink-0 w-full transition-all duration-200 enabled:cursor-pointer enabled:hover:brightness-95 enabled:hover:-translate-y-0.5 enabled:hover:shadow-lg enabled:active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed outline-none focus-visible:ring-2 focus-visible:ring-[#cb383e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#eaf1ea]"
        data-name="Button"
      >
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center px-[40px] py-[15px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Neucha:Regular',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[2px] uppercase whitespace-nowrap">
              <p className="leading-[1.3]">Pay by Card</p>
            </div>
            <div
              className="overflow-clip relative shrink-0 size-[24px]"
              data-name="Credit card"
            >
              <div className="absolute inset-[16.67%_4.17%]" data-name="Icon">
                <div className="absolute inset-[-7.81%_-5.68%]">
                  <svg
                    className="block size-full"
                    fill="none"
                    height="18.5"
                    preserveAspectRatio="none"
                    viewBox="0 0 24.5 18.5"
                    width="24.5"
                  >
                    <path
                      d={svgPaths.p358b1e00}
                      id="Icon"
                      stroke="#F3F7F3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
      <button
        type="button"
        disabled={disabled}
        onClick={() => checkout("paypal")}
        className="bg-white h-[54px] relative rounded-[7px] shrink-0 w-full transition-all duration-200 enabled:cursor-pointer enabled:hover:-translate-y-0.5 enabled:hover:shadow-md enabled:active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed outline-none focus-visible:ring-2 focus-visible:ring-[#5a8b5c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#eaf1ea]"
        data-name="Button"
      >
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-baseline justify-center px-[25px] py-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Neucha:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[18px] text-black tracking-[2px] uppercase whitespace-nowrap">
              Continue with
            </p>
            <PayPalMark className="text-[20px]" />
          </div>
        </div>
      </button>
      <Frame6 />
    </div>
  )
}

export default function Hero() {
  return (
    <div className="bg-[#5a8b5c] relative shrink-0 w-full" data-name="Hero">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[48px] px-6 pt-[40px] pb-[48px] md:px-12 lg:flex-row lg:items-center lg:gap-16 lg:px-16">
        <HeroContent />
        <div className="flex w-full min-w-px justify-center lg:flex-[1_0_0] lg:justify-end">
          <Frame15 />
        </div>
      </div>
      <HeroCarousel />
    </div>
  )
}
