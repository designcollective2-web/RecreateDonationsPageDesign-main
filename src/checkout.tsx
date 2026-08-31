import {
  createContext,
  useContext,
  useState,
  useRef,
  type ReactNode,
  type InputHTMLAttributes,
} from "react";

/* ------------------------------------------------------------------ */
/* Shared checkout state                                              */
/* ------------------------------------------------------------------ */

export type CheckoutView = "page" | "paypal" | "card";
type Selection = number | "other";

interface CheckoutValue {
  view: CheckoutView;
  setView: (v: CheckoutView) => void;
  selected: Selection;
  setSelected: (s: Selection) => void;
  custom: string;
  setCustom: (s: string) => void;
  /** Persisted PayPal email so switching flows keeps entered data. */
  ppEmail: string;
  setPpEmail: (s: string) => void;
  amount: number | null;
  amountLabel: string;
}

const CheckoutContext = createContext<CheckoutValue | null>(null);

export function useCheckout() {
  const ctx = useContext(CheckoutContext);
  if (!ctx) throw new Error("useCheckout must be used within CheckoutProvider");
  return ctx;
}

export function formatAmount(amount: number | null): string {
  if (amount == null) return "";
  return Number.isInteger(amount) ? `£${amount}` : `£${amount.toFixed(2)}`;
}

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<CheckoutView>("page");
  const [selected, setSelected] = useState<Selection>(25);
  const [custom, setCustom] = useState("");
  const [ppEmail, setPpEmail] = useState("");

  const customNum = parseFloat(custom);
  const customValid = custom.trim() !== "" && !isNaN(customNum) && customNum > 0;
  const amount = selected === "other" ? (customValid ? customNum : null) : selected;
  const amountLabel = formatAmount(amount);

  return (
    <CheckoutContext.Provider
      value={{
        view,
        setView,
        selected,
        setSelected,
        custom,
        setCustom,
        ppEmail,
        setPpEmail,
        amount,
        amountLabel,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

/* ------------------------------------------------------------------ */
/* Small helpers / shared UI                                          */
/* ------------------------------------------------------------------ */

const PP_FONT = '"Helvetica Neue", Helvetica, Arial, sans-serif';

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^[0-9]{6,15}$/;

function PayPalWordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-bold italic tracking-tight ${className}`}
      style={{ fontFamily: PP_FONT }}
    >
      <span style={{ color: "#003087" }}>Pay</span>
      <span style={{ color: "#009cde" }}>Pal</span>
    </span>
  );
}

function PawLogo() {
  return (
    <div className="flex size-[44px] items-center justify-center rounded-full bg-[#5a8b5c]">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden>
        <ellipse cx="12" cy="16" rx="5.4" ry="4.2" />
        <circle cx="5.6" cy="10.5" r="2.1" />
        <circle cx="9.6" cy="6.8" r="2.2" />
        <circle cx="14.4" cy="6.8" r="2.2" />
        <circle cx="18.4" cy="10.5" r="2.1" />
      </svg>
    </div>
  );
}

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  error?: string;
}

function Field({ label, value, error, id, ...rest }: FieldProps) {
  const [focused, setFocused] = useState(false);
  const filled = focused || (typeof value === "string" && value.length > 0);
  return (
    <div className="w-full">
      <div
        className={`relative rounded-[8px] border bg-white transition-colors ${
          error
            ? "border-[#c02b0a]"
            : focused
              ? "border-[#0070ba] shadow-[0_0_0_1px_#0070ba]"
              : "border-[#6c7378] hover:border-[#2c2e2f]"
        }`}
      >
        <input
          {...rest}
          id={id}
          value={value}
          placeholder=" "
          aria-label={label}
          aria-invalid={!!error}
          onFocus={(e) => {
            setFocused(true);
            rest.onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            rest.onBlur?.(e);
          }}
          className="peer w-full bg-transparent px-[12px] pb-[6px] pt-[20px] text-[15px] text-[#2c2e2f] outline-none"
          style={{ fontFamily: PP_FONT }}
        />
        <label
          htmlFor={id}
          className={`pointer-events-none absolute left-[12px] transition-all ${
            filled ? "top-[7px] text-[11px]" : "top-[15px] text-[15px]"
          } text-[#6c7378]`}
          style={{ fontFamily: PP_FONT }}
        >
          {label}
        </label>
      </div>
      {error && (
        <p
          className="mt-[4px] flex items-center gap-[4px] text-[12px] text-[#c02b0a]"
          style={{ fontFamily: PP_FONT }}
        >
          <span className="flex size-[14px] items-center justify-center rounded-full bg-[#c02b0a] text-[9px] font-bold text-white">
            !
          </span>
          {error}
        </p>
      )}
    </div>
  );
}

interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}

function SelectField({ label, value, onChange, options }: SelectFieldProps) {
  return (
    <div className="relative w-full rounded-[8px] border border-[#6c7378] bg-white transition-colors hover:border-[#2c2e2f] focus-within:border-[#0070ba] focus-within:shadow-[0_0_0_1px_#0070ba]">
      <span
        className="pointer-events-none absolute left-[12px] top-[7px] text-[11px] text-[#6c7378]"
        style={{ fontFamily: PP_FONT }}
      >
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
        className="w-full cursor-pointer appearance-none bg-transparent px-[12px] pb-[6px] pt-[22px] text-[15px] text-[#2c2e2f] outline-none"
        style={{ fontFamily: PP_FONT }}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute right-[12px] top-1/2 -translate-y-1/2"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        aria-hidden
      >
        <path d="M2 4l4 4 4-4" stroke="#2c2e2f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function BlueButton({
  children,
  onClick,
  disabled,
  type = "button",
}: {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{ fontFamily: PP_FONT }}
      className="w-full rounded-full bg-[#0070ba] px-[24px] py-[13px] text-[16px] font-medium text-white transition-all duration-150 enabled:cursor-pointer enabled:hover:bg-[#005ea6] enabled:active:bg-[#004b84] enabled:active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-[#0070ba] focus-visible:ring-offset-2"
    >
      {children}
    </button>
  );
}

const COUNTRIES = [
  { value: "GB", label: "United Kingdom" },
  { value: "BG", label: "Bulgaria" },
  { value: "IE", label: "Ireland" },
  { value: "US", label: "United States" },
  { value: "DE", label: "Germany" },
  { value: "FR", label: "France" },
];

const CALLING_CODES = [
  { value: "+44", label: "United Kingdom (+44)" },
  { value: "+359", label: "Bulgaria (+359)" },
  { value: "+353", label: "Ireland (+353)" },
  { value: "+1", label: "United States (+1)" },
  { value: "+49", label: "Germany (+49)" },
  { value: "+33", label: "France (+33)" },
];

/* ------------------------------------------------------------------ */
/* PayPal email / login screen                                        */
/* ------------------------------------------------------------------ */

export function PayPalCheckout() {
  const { setView, amountLabel, ppEmail, setPpEmail } = useCheckout();
  const [error, setError] = useState("");
  const [advanced, setAdvanced] = useState(false);

  const next = () => {
    const v = ppEmail.trim();
    if (!v) {
      setError("Enter an email address or mobile number.");
      return;
    }
    if (!emailRe.test(v) && !phoneRe.test(v.replace(/[\s()-]/g, ""))) {
      setError("Enter a valid email address or mobile number.");
      return;
    }
    setError("");
    setAdvanced(true);
  };

  return (
    <div
      className="min-h-screen w-full bg-white px-[16px] py-[24px]"
      style={{ fontFamily: PP_FONT }}
    >
      <div className="mx-auto flex max-w-[460px] flex-col items-center">
        <button
          type="button"
          onClick={() => setView("page")}
          className="mb-[24px] self-start text-[13px] text-[#0070ba] transition-colors hover:text-[#005ea6] hover:underline"
        >
          ← Back to Street Hearts Bulgaria
        </button>

        <PayPalWordmark className="mb-[28px] text-[38px]" />

        <div className="w-full rounded-[16px] border border-[#eaeced] px-[24px] py-[36px] shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
          {advanced ? (
            <div className="flex flex-col items-center gap-[16px] text-center">
              <div className="flex size-[56px] items-center justify-center rounded-full bg-[#eef7ee]">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M4 12.5l5 5 11-11" stroke="#2a8a3e" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h1 className="text-[20px] font-semibold text-[#2c2e2f]">Simulated login</h1>
              <p className="text-[14px] leading-[1.5] text-[#6c7378]">
                This is a prototype — no real PayPal account is used. Continue to complete your{" "}
                {amountLabel || "donation"} with a card instead.
              </p>
              <BlueButton onClick={() => setView("card")}>Continue to card payment</BlueButton>
              <button
                type="button"
                onClick={() => setAdvanced(false)}
                className="text-[13px] text-[#0070ba] transition-colors hover:underline"
              >
                Use a different email
              </button>
            </div>
          ) : (
            <>
              <h1 className="mb-[6px] text-center text-[22px] font-semibold text-[#2c2e2f]">
                Donate with PayPal
              </h1>
              <p className="mb-[24px] text-center text-[14px] text-[#6c7378]">
                Enter your email address to get started.
              </p>

              <Field
                id="pp-email"
                label="Email or mobile number"
                type="text"
                inputMode="email"
                value={ppEmail}
                error={error}
                onChange={(e) => {
                  setPpEmail(e.target.value);
                  if (error) setError("");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") next();
                }}
              />

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="mt-[14px] mb-[22px] inline-block text-[14px] font-medium text-[#0070ba] transition-colors hover:text-[#005ea6] hover:underline"
              >
                Forgot email?
              </a>

              <BlueButton onClick={next}>Next</BlueButton>

              <div className="my-[22px] flex items-center gap-[12px]">
                <span className="h-px flex-1 bg-[#cbd2d6]" />
                <span className="text-[13px] text-[#6c7378]">or</span>
                <span className="h-px flex-1 bg-[#cbd2d6]" />
              </div>

              <button
                type="button"
                onClick={() => setView("card")}
                className="w-full rounded-full border border-[#0070ba] px-[24px] py-[12px] text-[16px] font-medium text-[#0070ba] transition-all duration-150 hover:bg-[#f2f9fd] active:scale-[0.99] outline-none focus-visible:ring-2 focus-visible:ring-[#0070ba] focus-visible:ring-offset-2"
              >
                Donate with Credit Card
              </button>
            </>
          )}
        </div>

        <div className="mt-[28px] flex items-center gap-[10px] text-[12px] text-[#6c7378]">
          <select
            aria-label="Language"
            defaultValue="en"
            className="cursor-pointer rounded-[4px] border border-[#cbd2d6] bg-white px-[8px] py-[4px] text-[12px] text-[#2c2e2f] outline-none transition-colors hover:border-[#6c7378]"
          >
            <option value="en">English</option>
            <option value="bg">Български</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
          </select>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:underline">Contact Us</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:underline">Privacy</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:underline">Legal</a>
        </div>
        <p className="mt-[10px] text-[11px] text-[#9da3a6]">Prototype — simulated PayPal checkout.</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Card payment screen                                                */
/* ------------------------------------------------------------------ */

interface CardForm {
  country: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  postcode: string;
  city: string;
  callingCode: string;
  phone: string;
  email: string;
  save: boolean;
}

const initialCard: CardForm = {
  country: "GB",
  cardNumber: "",
  expiry: "",
  cvv: "",
  firstName: "",
  lastName: "",
  address1: "",
  address2: "",
  postcode: "",
  city: "",
  callingCode: "+44",
  phone: "",
  email: "",
  save: false,
};

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-[14px] mt-[28px] text-[13px] font-semibold uppercase tracking-[0.8px] text-[#6c7378]">
      {children}
    </h2>
  );
}

export function CardCheckout() {
  const { setView, amountLabel, ppEmail } = useCheckout();
  const [form, setForm] = useState<CardForm>({ ...initialCard, email: ppEmail });
  const [errors, setErrors] = useState<Partial<Record<keyof CardForm, string>>>({});
  const [success, setSuccess] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const set = <K extends keyof CardForm>(k: K, v: CardForm[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onCardNumber = (raw: string) => {
    const digits = raw.replace(/\D/g, "").slice(0, 16);
    set("cardNumber", digits.replace(/(.{4})/g, "$1 ").trim());
  };

  const onExpiry = (raw: string) => {
    const d = raw.replace(/\D/g, "").slice(0, 4);
    set("expiry", d.length >= 3 ? `${d.slice(0, 2)}/${d.slice(2)}` : d);
  };

  const validate = (): boolean => {
    const e: Partial<Record<keyof CardForm, string>> = {};
    const digits = form.cardNumber.replace(/\s/g, "");
    if (digits.length < 13) e.cardNumber = "Enter a valid card number.";
    if (!/^\d{2}\/\d{2}$/.test(form.expiry)) {
      e.expiry = "Enter a valid expiry (MM/YY).";
    } else {
      const mm = parseInt(form.expiry.slice(0, 2), 10);
      if (mm < 1 || mm > 12) e.expiry = "Enter a valid month.";
    }
    if (!/^\d{3,4}$/.test(form.cvv)) e.cvv = "Enter the security code.";
    if (!form.firstName.trim()) e.firstName = "Enter your first name.";
    if (!form.lastName.trim()) e.lastName = "Enter your last name.";
    if (!form.address1.trim()) e.address1 = "Enter your address.";
    if (!form.postcode.trim()) e.postcode = "Enter your postcode.";
    if (!form.city.trim()) e.city = "Enter your city.";
    if (!phoneRe.test(form.phone.replace(/[\s()-]/g, ""))) e.phone = "Enter a valid phone number.";
    if (!emailRe.test(form.email.trim())) e.email = "Enter a valid email address.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = () => {
    if (validate()) {
      setSuccess(true);
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      ref={topRef}
      className="min-h-screen w-full bg-white px-[16px] py-[24px]"
      style={{ fontFamily: PP_FONT }}
    >
      <div className="mx-auto flex max-w-[520px] flex-col">
        <div className="mb-[20px] flex items-center justify-between">
          <button
            type="button"
            onClick={() => setView("page")}
            className="text-[13px] text-[#0070ba] transition-colors hover:text-[#005ea6] hover:underline"
          >
            ← Back to Street Hearts Bulgaria
          </button>
          <PayPalWordmark className="text-[22px]" />
        </div>

        {success ? (
          <div className="rounded-[16px] border border-[#eaeced] px-[28px] py-[48px] text-center shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
            <div className="mx-auto mb-[20px] flex size-[64px] items-center justify-center rounded-full bg-[#eef7ee]">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 12.5l5 5 11-11" stroke="#2a8a3e" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h1 className="mb-[8px] text-[24px] font-semibold text-[#2c2e2f]">Thank you!</h1>
            <p className="mb-[6px] text-[16px] text-[#2c2e2f]">
              Your {amountLabel} donation to Street Hearts BG is confirmed.
            </p>
            <p className="mb-[28px] text-[13px] text-[#9da3a6]">
              Prototype only — no payment was processed and no card details were stored.
            </p>
            <BlueButton onClick={() => setView("page")}>Return to donation page</BlueButton>
          </div>
        ) : (
          <div className="rounded-[16px] border border-[#eaeced] px-[24px] py-[32px] shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
            {/* Merchant + amount */}
            <div className="mb-[10px] flex flex-col items-center text-center">
              <PawLogo />
              <p className="mt-[12px] text-[13px] text-[#6c7378]">Donate to</p>
              <p className="text-[16px] font-semibold text-[#001435]">Street Hearts BG</p>
              <p className="mt-[16px] text-[40px] font-bold leading-none text-[#001435]">
                {amountLabel || "£0"}
              </p>
              <p className="mt-[4px] text-[14px] text-[#6c7378]">GBP</p>
            </div>

            <h1 className="mb-[4px] mt-[24px] text-center text-[18px] font-semibold text-[#001435]">
              Donate with a debit or credit card
            </h1>

            <SectionTitle>Card details</SectionTitle>
            <div className="flex flex-col gap-[12px]">
              <SelectField
                label="Country/Region"
                value={form.country}
                onChange={(v) => set("country", v)}
                options={COUNTRIES}
              />
              <Field
                id="card-number"
                label="Card number"
                inputMode="numeric"
                autoComplete="cc-number"
                value={form.cardNumber}
                error={errors.cardNumber}
                onChange={(e) => onCardNumber(e.target.value)}
              />
              <div className="grid grid-cols-1 gap-[12px] sm:grid-cols-2">
                <Field
                  id="card-expiry"
                  label="Expiry date (MM/YY)"
                  inputMode="numeric"
                  autoComplete="cc-exp"
                  value={form.expiry}
                  error={errors.expiry}
                  onChange={(e) => onExpiry(e.target.value)}
                />
                <Field
                  id="card-cvv"
                  label="Security code"
                  inputMode="numeric"
                  autoComplete="cc-csc"
                  value={form.cvv}
                  error={errors.cvv}
                  onChange={(e) => set("cvv", e.target.value.replace(/\D/g, "").slice(0, 4))}
                />
              </div>
              <div className="grid grid-cols-1 gap-[12px] sm:grid-cols-2">
                <Field
                  id="first-name"
                  label="First name"
                  autoComplete="given-name"
                  value={form.firstName}
                  error={errors.firstName}
                  onChange={(e) => set("firstName", e.target.value)}
                />
                <Field
                  id="last-name"
                  label="Last name"
                  autoComplete="family-name"
                  value={form.lastName}
                  error={errors.lastName}
                  onChange={(e) => set("lastName", e.target.value)}
                />
              </div>
            </div>

            <SectionTitle>Billing address</SectionTitle>
            <div className="flex flex-col gap-[12px]">
              <Field
                id="address1"
                label="Address line 1"
                autoComplete="address-line1"
                value={form.address1}
                error={errors.address1}
                onChange={(e) => set("address1", e.target.value)}
              />
              <Field
                id="address2"
                label="Address line 2 (optional)"
                autoComplete="address-line2"
                value={form.address2}
                onChange={(e) => set("address2", e.target.value)}
              />
              <div className="grid grid-cols-1 gap-[12px] sm:grid-cols-2">
                <Field
                  id="postcode"
                  label="Postcode"
                  autoComplete="postal-code"
                  value={form.postcode}
                  error={errors.postcode}
                  onChange={(e) => set("postcode", e.target.value)}
                />
                <Field
                  id="city"
                  label="City"
                  autoComplete="address-level2"
                  value={form.city}
                  error={errors.city}
                  onChange={(e) => set("city", e.target.value)}
                />
              </div>
            </div>

            <SectionTitle>Contact information</SectionTitle>
            <div className="flex flex-col gap-[12px]">
              <div className="grid grid-cols-1 gap-[12px] sm:grid-cols-2">
                <SelectField
                  label="Country code"
                  value={form.callingCode}
                  onChange={(v) => set("callingCode", v)}
                  options={CALLING_CODES}
                />
                <Field
                  id="phone"
                  label="Phone number"
                  inputMode="tel"
                  autoComplete="tel"
                  value={form.phone}
                  error={errors.phone}
                  onChange={(e) => set("phone", e.target.value)}
                />
              </div>
              <Field
                id="email"
                label="Email address"
                inputMode="email"
                autoComplete="email"
                value={form.email}
                error={errors.email}
                onChange={(e) => set("email", e.target.value)}
              />
            </div>

            {/* Final confirmation */}
            <label className="mt-[28px] flex cursor-pointer items-start gap-[10px]">
              <input
                type="checkbox"
                checked={form.save}
                onChange={(e) => set("save", e.target.checked)}
                className="mt-[2px] size-[18px] cursor-pointer accent-[#0070ba]"
              />
              <span className="text-[14px] text-[#2c2e2f]">Save this information for next time</span>
            </label>

            <p className="mt-[18px] text-[12px] leading-[1.6] text-[#6c7378]">
              By continuing, you agree to Street Hearts BG&apos;s and PayPal&apos;s{" "}
              <a href="#" onClick={(e) => e.preventDefault()} className="text-[#0070ba] hover:underline">
                terms of service
              </a>{" "}
              and acknowledge the{" "}
              <a href="#" onClick={(e) => e.preventDefault()} className="text-[#0070ba] hover:underline">
                privacy statement
              </a>
              .
            </p>
            <p className="mb-[20px] mt-[6px] text-[12px] text-[#6c7378]">No PayPal account required.</p>

            <BlueButton onClick={submit}>Agree &amp; Donate Now</BlueButton>

            <p className="mt-[16px] text-center text-[11px] text-[#9da3a6]">
              Prototype — simulated checkout. Do not enter real card details.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
