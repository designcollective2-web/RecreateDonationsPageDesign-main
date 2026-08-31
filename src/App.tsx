import DonationPage from "./components/DonationPage"
import {
  CheckoutProvider,
  useCheckout,
  PayPalCheckout,
  CardCheckout,
} from "./checkout"

function Root() {
  const { view } = useCheckout()
  if (view === "paypal") return <PayPalCheckout />
  if (view === "card") return <CardCheckout />
  return <DonationPage />
}

export default function App() {
  return (
    <CheckoutProvider>
      <Root />
    </CheckoutProvider>
  )
}
