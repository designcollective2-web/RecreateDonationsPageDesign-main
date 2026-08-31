import svgPaths from "./svg-vrzdatwctz"
import imgRectangle14 from "./64b83c84bd53a44194a0ee822a5bb6a3cf201dd7.png"
import imgRectangle13 from "./b82a77daba3a5ed53e251afbff1552663a0d8f60.png"
import imgRectangle15 from "./509269edea1e9a2122755a27059ddfd3467a74a0.png"
import imgRectangle16 from "./48428b98f46f759f0e3f13b83a3c84df369973a0.png"

function Frame1() {
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

function Frame2() {
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

function Frame() {
  return (
    <div
      className="border border-[#95b996] border-solid content-stretch flex gap-[20px] h-[52px] items-center overflow-clip px-[14px] py-[10px] relative rounded-[5px] shrink-0"
      data-name="Frame"
    >
      <Frame1 />
      <div className="bg-[#95b996] h-full relative shrink-0 w-px" />
      <Frame2 />
    </div>
  )
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[12px] items-end pt-[40px] relative shrink-0">
      <div className="flex h-[44.193px] items-center justify-center relative shrink-0 w-[70.717px]">
        <div className="flex-none rotate-[-17.05deg]">
          <p className="[word-break:break-word] font-['Neucha:Regular',sans-serif] h-[25.981px] leading-[37px] not-italic relative text-[16px] text-center text-white tracking-[2.5px] uppercase w-[66px]">
            help us
          </p>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[82.72px] size-[68.286px] top-[38px]">
        <div className="flex-none rotate-45">
          <div className="h-[29.781px] relative w-[66.79px]">
            <div className="absolute inset-[-24.79%_-1.5%_-3.36%_-1.5%]">
              <svg
                className="block size-full"
                fill="none"
                height="38.163"
                preserveAspectRatio="none"
                viewBox="0 0 68.7902 38.163"
                width="68.7902"
              >
                <path
                  d={svgPaths.p2d76bf80}
                  fill="white"
                  id="Vector 3"
                  opacity="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Hero1() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px pt-[64px] relative"
      data-name="Hero"
    >
      <p className="[word-break:break-word] font-['Neucha:Regular',sans-serif] leading-[50px] min-w-full not-italic relative shrink-0 text-[#f3f7f3] text-[38px] tracking-[2px] uppercase w-[min-content]">
        Every donation helps save a life
      </p>
      <p className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] font-medium leading-[1.5] min-w-full relative shrink-0 text-[#f3f7f3] text-[16px] tracking-[1.5px] w-[min-content]">
        Street Hearts Bulgaria has been treating, neutering and finding homes
        for stray dogs. Your donation, large or small, directly supports
        veterinary care, food and shelter.
      </p>
      <Frame />
      <Frame16 />
    </div>
  )
}

function Component1() {
  return (
    <div
      className="bg-[#f5f5f5] border border-[#bdbdbd] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center min-w-px overflow-clip px-[20px] py-[10px] relative rounded-[7px]"
      data-name="£5"
    >
      <p className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap">
        £5
      </p>
    </div>
  )
}

function Component2() {
  return (
    <div
      className="bg-[#5a8b5c] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center min-w-px overflow-clip px-[20px] py-[10px] relative rounded-[7px]"
      data-name="£5"
    >
      <p className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        £25
      </p>
    </div>
  )
}

function Component3() {
  return (
    <div
      className="bg-[#f5f5f5] border border-[#bdbdbd] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center min-w-px overflow-clip px-[20px] py-[10px] relative rounded-[7px]"
      data-name="£5"
    >
      <p className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap">
        £50
      </p>
    </div>
  )
}

function Component4() {
  return (
    <div
      className="bg-[#f5f5f5] border border-[#bdbdbd] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center min-w-px overflow-clip px-[20px] py-[10px] relative rounded-[7px]"
      data-name="£5"
    >
      <p className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap">
        Other
      </p>
    </div>
  )
}

function AmountOptions() {
  return (
    <div
      className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full"
      data-name="Amount Options"
    >
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
    </div>
  )
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#555] text-[12px] text-center tracking-[1.5px] w-[335.988px] whitespace-pre-wrap">{`    Payment is processed securely via PayPal. No PayPal account required to pay by card.`}</p>
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

function Frame11() {
  return (
    <div className="bg-[#eaf1ea] content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-w-px p-[40px] relative rounded-[7px]">
      <p className="[word-break:break-word] font-['Neucha:Regular',sans-serif] leading-[37px] min-w-full not-italic relative shrink-0 text-[28px] text-black text-center tracking-[2.5px] uppercase w-[min-content]">
        Donate now
      </p>
      <AmountOptions />
      <div
        className="bg-[#cb383e] relative rounded-[7px] shrink-0 w-full"
        data-name="Button"
      >
        <div className="flex flex-row items-end justify-center size-full">
          <div className="content-stretch flex gap-[12px] items-end justify-center px-[40px] py-[15px] relative size-full">
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
            <div className="[word-break:break-word] flex flex-col font-['Neucha:Regular',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[2px] uppercase whitespace-nowrap">
              <p className="leading-[1.3]">Pay by Card</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-white relative rounded-[7px] shrink-0 w-full"
        data-name="Button"
      >
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center px-[25px] py-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Neucha:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[18px] text-black tracking-[2px] uppercase whitespace-nowrap">
              Continue with paypal
            </p>
          </div>
        </div>
      </div>
      <Frame3 />
    </div>
  )
}

function Component() {
  return (
    <div
      className="content-stretch flex gap-[120px] items-center px-[193px] py-[40px] relative shrink-0 w-[1728px]"
      data-name="3"
    >
      <Hero1 />
      <Frame11 />
    </div>
  )
}

function Frame5() {
  return (
    <div className="bg-white col-1 content-stretch flex items-center justify-center ml-[23.42px] mt-[127.93px] px-[12px] relative rounded-br-[5px] rounded-tl-[5px] row-1">
      <p className="[word-break:break-word] font-['Neucha:Regular',sans-serif] h-[32.34px] leading-[37px] not-italic relative shrink-0 text-[#555] text-[16px] text-center tracking-[2.5px] uppercase w-[85.709px]">
        Harley
      </p>
    </div>
  )
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 h-[159.358px] ml-0 mt-0 pointer-events-none relative rounded-[5px] row-1 w-[132.127px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover rounded-[5px] size-full"
          src={imgRectangle14}
        />
        <div
          aria-hidden
          className="absolute border-5 border-solid border-white inset-[-5px] rounded-[10px]"
        />
      </div>
      <Frame5 />
    </div>
  )
}

function Frame6() {
  return (
    <div className="bg-white col-1 content-stretch flex items-center justify-center ml-[49.57px] mt-[126.86px] px-[12px] relative rounded-br-[5px] rounded-tl-[5px] row-1">
      <p className="[word-break:break-word] font-['Neucha:Regular',sans-serif] leading-[37px] not-italic relative shrink-0 text-[#555] text-[16px] text-center tracking-[2.5px] uppercase whitespace-nowrap">
        Maggie
      </p>
    </div>
  )
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 h-[159.358px] ml-0 mt-0 pointer-events-none relative rounded-[5px] row-1 w-[132.127px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover rounded-[5px] size-full"
          src={imgRectangle13}
        />
        <div
          aria-hidden
          className="absolute border-5 border-solid border-white inset-[-5px] rounded-[10px]"
        />
      </div>
      <Frame6 />
    </div>
  )
}

function Frame7() {
  return (
    <div className="bg-white col-1 content-stretch flex items-center justify-center ml-[23.42px] mt-[127.93px] px-[12px] relative rounded-br-[5px] rounded-tl-[5px] row-1">
      <p className="[word-break:break-word] font-['Neucha:Regular',sans-serif] h-[32.34px] leading-[37px] not-italic relative shrink-0 text-[#555] text-[16px] text-center tracking-[2.5px] uppercase w-[85.709px]">
        Liam
      </p>
    </div>
  )
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 h-[159.358px] ml-0 mt-0 pointer-events-none relative rounded-[5px] row-1 w-[132.127px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover rounded-[5px] size-full"
          src={imgRectangle15}
        />
        <div
          aria-hidden
          className="absolute border-5 border-solid border-white inset-[-5px] rounded-[10px]"
        />
      </div>
      <Frame7 />
    </div>
  )
}

function Frame8() {
  return (
    <div className="bg-white col-1 content-stretch flex items-center justify-center ml-[23.42px] mt-[127.93px] px-[12px] relative rounded-br-[5px] rounded-tl-[5px] row-1">
      <p className="[word-break:break-word] font-['Neucha:Regular',sans-serif] h-[32.34px] leading-[37px] not-italic relative shrink-0 text-[#555] text-[16px] text-center tracking-[2.5px] uppercase w-[85.709px]">
        Sophia
      </p>
    </div>
  )
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 h-[159.358px] ml-0 mt-0 pointer-events-none relative rounded-[5px] row-1 w-[132.127px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover rounded-[5px] size-full"
          src={imgRectangle14}
        />
        <div
          aria-hidden
          className="absolute border-5 border-solid border-white inset-[-5px] rounded-[10px]"
        />
      </div>
      <Frame8 />
    </div>
  )
}

function Frame9() {
  return (
    <div className="bg-white col-1 content-stretch flex items-center justify-center ml-[49.57px] mt-[126.86px] px-[12px] relative rounded-br-[5px] rounded-tl-[5px] row-1">
      <p className="[word-break:break-word] font-['Neucha:Regular',sans-serif] leading-[37px] not-italic relative shrink-0 text-[#555] text-[16px] text-center tracking-[2.5px] uppercase whitespace-nowrap">
        Noah
      </p>
    </div>
  )
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 h-[159.358px] ml-0 mt-0 pointer-events-none relative rounded-[5px] row-1 w-[132.127px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover rounded-[5px] size-full"
          src={imgRectangle13}
        />
        <div
          aria-hidden
          className="absolute border-5 border-solid border-white inset-[-5px] rounded-[10px]"
        />
      </div>
      <Frame9 />
    </div>
  )
}

function Frame10() {
  return (
    <div className="bg-white col-1 content-stretch flex items-center justify-center ml-[23.42px] mt-[127.93px] px-[12px] relative rounded-br-[5px] rounded-tl-[5px] row-1">
      <p className="[word-break:break-word] font-['Neucha:Regular',sans-serif] h-[32.34px] leading-[37px] not-italic relative shrink-0 text-[#555] text-[16px] text-center tracking-[2.5px] uppercase w-[85.709px]">
        Olivia
      </p>
    </div>
  )
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 h-[159.358px] ml-0 mt-0 pointer-events-none relative rounded-[5px] row-1 w-[132.127px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover rounded-[5px] size-full"
          src={imgRectangle15}
        />
        <div
          aria-hidden
          className="absolute border-5 border-solid border-white inset-[-5px] rounded-[10px]"
        />
      </div>
      <Frame10 />
    </div>
  )
}

function Frame12() {
  return (
    <div className="bg-white col-1 content-stretch flex items-center justify-center ml-[23.42px] mt-[127.93px] px-[12px] relative rounded-br-[5px] rounded-tl-[5px] row-1">
      <p className="[word-break:break-word] font-['Neucha:Regular',sans-serif] h-[32.34px] leading-[37px] not-italic relative shrink-0 text-[#555] text-[16px] text-center tracking-[2.5px] uppercase w-[85.709px]">
        Ethan
      </p>
    </div>
  )
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 h-[159.358px] ml-0 mt-0 pointer-events-none relative rounded-[5px] row-1 w-[132.127px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover rounded-[5px] size-full"
          src={imgRectangle14}
        />
        <div
          aria-hidden
          className="absolute border-5 border-solid border-white inset-[-5px] rounded-[10px]"
        />
      </div>
      <Frame12 />
    </div>
  )
}

function Frame13() {
  return (
    <div className="bg-white col-1 content-stretch flex items-center justify-center ml-[49.57px] mt-[126.86px] px-[12px] relative rounded-br-[5px] rounded-tl-[5px] row-1">
      <p className="[word-break:break-word] font-['Neucha:Regular',sans-serif] leading-[37px] not-italic relative shrink-0 text-[#555] text-[16px] text-center tracking-[2.5px] uppercase whitespace-nowrap">
        Ava
      </p>
    </div>
  )
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 h-[159.358px] ml-0 mt-0 pointer-events-none relative rounded-[5px] row-1 w-[132.127px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover rounded-[5px] size-full"
          src={imgRectangle13}
        />
        <div
          aria-hidden
          className="absolute border-5 border-solid border-white inset-[-5px] rounded-[10px]"
        />
      </div>
      <Frame13 />
    </div>
  )
}

function Frame14() {
  return (
    <div className="bg-white col-1 content-stretch flex items-center justify-center ml-[23.42px] mt-[127.93px] px-[12px] relative rounded-br-[5px] rounded-tl-[5px] row-1">
      <p className="[word-break:break-word] font-['Neucha:Regular',sans-serif] h-[32.34px] leading-[37px] not-italic relative shrink-0 text-[#555] text-[16px] text-center tracking-[2.5px] uppercase w-[85.709px]">
        Mason
      </p>
    </div>
  )
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 h-[159.358px] ml-0 mt-0 pointer-events-none relative rounded-[5px] row-1 w-[132.127px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover rounded-[5px] size-full"
          src={imgRectangle15}
        />
        <div
          aria-hidden
          className="absolute border-5 border-solid border-white inset-[-5px] rounded-[10px]"
        />
      </div>
      <Frame14 />
    </div>
  )
}

function Frame15() {
  return (
    <div className="bg-white col-1 content-stretch flex items-center justify-center ml-[23.42px] mt-[127.93px] px-[12px] relative rounded-br-[5px] rounded-tl-[5px] row-1">
      <p className="[word-break:break-word] font-['Neucha:Regular',sans-serif] h-[32.34px] leading-[37px] not-italic relative shrink-0 text-[#555] text-[16px] text-center tracking-[2.5px] uppercase w-[85.709px]">
        Isabella
      </p>
    </div>
  )
}

function Group9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 h-[159.358px] ml-0 mt-0 pointer-events-none relative rounded-[5px] row-1 w-[132.127px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover rounded-[5px] size-full"
          src={imgRectangle14}
        />
        <div
          aria-hidden
          className="absolute border-5 border-solid border-white inset-[-5px] rounded-[10px]"
        />
      </div>
      <Frame15 />
    </div>
  )
}

function Frame4() {
  return (
    <div className="bg-[#5a8b5c] border-[#95b996] border-solid border-t content-stretch flex gap-[30px] h-[229px] items-center justify-center leading-[0] overflow-clip relative shrink-0 w-full">
      <Group />
      <Group2 />
      <Group1 />
      <Group3 />
      <Group4 />
      <Group5 />
      <Group6 />
      <Group7 />
      <Group8 />
      <Group9 />
    </div>
  )
}

export default function Hero() {
  return (
    <div
      className="bg-[#5a8b5c] content-stretch flex flex-col items-center relative size-full"
      data-name="Hero"
    >
      <Component />
      <Frame4 />
      <div className="absolute h-[229px] right-0 top-[508px] w-[193px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgRectangle16}
        />
      </div>
      <div className="absolute flex h-[229px] items-center justify-center left-0 top-[508px] w-[193px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[229px] relative w-[193px]">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgRectangle16}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
