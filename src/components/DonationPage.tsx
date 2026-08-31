import imgHeaderScreenshot from "../imports/CorporatePenSponsorshipRedesign/e0411d3c0b702eed9211a3148beeb443e46737a3.png"
import { Reveal } from "./motion"
import Hero from "./Hero"
import TrustStrip from "./TrustStrip"
import ActiveCampaigns from "./ActiveCampaigns"
import MonthlySupport from "./MonthlySupport"
import BankTransfer from "./BankTransfer"
import SupportOurWork from "./SupportOurWork"
import Faq from "./Faq"
import CorporateCrossPromo from "./CorporateCrossPromo"
import Footer from "./Footer"

function Frame() {
  return (
    <div
      className="bg-[#f5f5f5] content-stretch flex items-start overflow-clip px-[12px] py-[6px] relative rounded-[3px] shrink-0 transition-colors cursor-pointer hover:bg-white"
      data-name="Frame"
    >
      <p className="[word-break:break-word] font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[11px] text-black tracking-[2px] uppercase whitespace-nowrap">
        HOME
      </p>
    </div>
  )
}

function Frame1() {
  return (
    <div
      className="bg-[#f5f5f5] content-stretch flex items-start overflow-clip px-[12px] py-[6px] relative rounded-[3px] shrink-0 transition-colors cursor-pointer hover:bg-white"
      data-name="Frame"
    >
      <p className="[word-break:break-word] font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[11px] text-black tracking-[2px] uppercase whitespace-nowrap">
        SUPPORT US
      </p>
    </div>
  )
}

function Frame2() {
  return (
    <div
      className="bg-[#5a8b5c] content-stretch flex items-start overflow-clip px-[12px] py-[6px] relative rounded-[3px] shrink-0 transition-all cursor-pointer hover:brightness-95 hover:-translate-y-0.5"
      data-name="Frame"
    >
      <p className="[word-break:break-word] font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[11px] text-white tracking-[2px] uppercase whitespace-nowrap">
        donate
      </p>
    </div>
  )
}

function Breadcrumb() {
  return (
    <div
      className="bg-[#5a8b5c] border-[#95b996] border-b border-solid content-stretch flex gap-[8px] items-center overflow-clip px-6 md:px-[50px] py-[16px] relative shrink-0 w-full"
      data-name="Breadcrumb"
    >
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  )
}

function SiteHeader() {
  return (
    <div
      className="aspect-[1429.7939453125/174.95327758789062] relative shrink-0 w-full"
      data-name="Header"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          alt="Street Hearts Bulgaria"
          className="absolute h-full left-[-0.36%] max-w-none top-0 w-[100.71%]"
          src={imgHeaderScreenshot}
        />
      </div>
    </div>
  )
}

export default function DonationPage() {
  return (
    <div
      className="bg-white content-stretch flex flex-col items-center relative w-full"
      data-name="Donation page"
    >
      <SiteHeader />
      <Breadcrumb />
      <Hero />
      <Reveal className="flex flex-col items-center w-full shrink-0">
        <TrustStrip />
      </Reveal>
      <Reveal className="flex flex-col items-center w-full shrink-0">
        <ActiveCampaigns />
      </Reveal>
      <Reveal className="flex flex-col items-center w-full shrink-0">
        <MonthlySupport />
      </Reveal>
      <Reveal className="flex flex-col items-center w-full shrink-0">
        <BankTransfer />
      </Reveal>
      <Reveal className="flex flex-col items-center w-full shrink-0">
        <SupportOurWork />
      </Reveal>
      <Reveal className="flex flex-col items-center w-full shrink-0">
        <Faq />
      </Reveal>
      <Reveal className="flex flex-col items-center w-full shrink-0">
        <CorporateCrossPromo />
      </Reveal>
      <Footer />
    </div>
  )
}
