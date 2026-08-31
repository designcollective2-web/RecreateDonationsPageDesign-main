function Frame62() {
  return (
    <div
      className="content-stretch flex flex-col gap-[12px] items-center text-center sm:items-start sm:text-left overflow-clip relative shrink-0 text-white"
      data-name="Frame"
    >
      <p className="font-['Neucha:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] tracking-[2px] uppercase">
        STREET HEARTS BULGARIA
      </p>
      <div className="font-['Montserrat:Medium',sans-serif] font-medium leading-[0] opacity-70 relative shrink-0 text-[12px]">
        <p className="leading-[24px] mb-0">
          Street Hearts is a UK registered charity
        </p>
        <p className="leading-[24px]">helping stray dogs in Bulgaria.</p>
      </div>
    </div>
  )
}

function Frame63() {
  return (
    <div
      className="content-stretch flex flex-col gap-[12px] items-center text-center sm:items-start sm:text-left overflow-clip relative shrink-0"
      data-name="Frame"
    >
      <p className="font-['Neucha:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#df575c] text-[18px] tracking-[2px] uppercase">
        QUICK LINKS
      </p>
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] opacity-70 relative shrink-0 text-[12px] text-white">
        Adopt a Dog
      </p>
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] opacity-70 relative shrink-0 text-[12px] text-white">
        Donate
      </p>
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] opacity-70 relative shrink-0 text-[12px] text-white">
        Volunteer
      </p>
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] opacity-70 relative shrink-0 text-[12px] text-white">
        Our Shop
      </p>
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] opacity-70 relative shrink-0 text-[12px] text-white">
        Contact
      </p>
    </div>
  )
}

function Frame64() {
  return (
    <div
      className="content-stretch flex flex-col gap-[12px] items-center text-center sm:items-start sm:text-left overflow-clip relative shrink-0"
      data-name="Frame"
    >
      <p className="font-['Neucha:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#df575c] text-[18px] tracking-[2px] uppercase">
        FOLLOW US
      </p>
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] opacity-70 relative shrink-0 text-[12px] text-white">
        Facebook
      </p>
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] opacity-70 relative shrink-0 text-[12px] text-white">
        Instagram
      </p>
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] opacity-70 relative shrink-0 text-[12px] text-white">
        Twitter
      </p>
    </div>
  )
}

function Frame61() {
  return (
    <div
      className="content-stretch flex flex-col items-center gap-10 text-center sm:flex-row sm:flex-wrap sm:items-start sm:justify-center sm:gap-16 sm:text-left relative shrink-0 w-full"
      data-name="Frame"
    >
      <Frame62 />
      <Frame63 />
      <Frame64 />
    </div>
  )
}

export default function Footer() {
  return (
    <div
      className="[word-break:break-word] bg-[#262626] content-stretch flex flex-col gap-[32px] items-center overflow-clip pb-[60px] pt-[80px] px-6 md:px-20 relative shrink-0 w-full"
      data-name="Footer"
    >
      <Frame61 />
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[28px] max-w-[600px] opacity-50 relative shrink-0 text-[12px] text-center text-white tracking-[1.5px]">
        © 2024 Street Hearts Bulgaria. Registered Charity No. 177108875. All
        rights reserved. Privacy Policy.
      </p>
    </div>
  )
}
