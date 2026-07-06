"use client";

export default function SmsConsentCheckbox({
  checked,
  onChange,
  name = "smsConsent",
  id = "sms-consent",
  required = true,
  className = "",
  textClassName = "text-[11px] text-slate-500",
}) {
  return (
    <label className={`flex items-start gap-2 ${className}`}>
      <input
        id={id}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        required={required}
        className="mt-0.5 h-4 w-4 rounded border-slate-300"
      />
      <span className={textClassName}>
        I agree to receive SMS messages from Velon Book Publishing regarding
        services and project updates. Message frequency varies. Message &amp;
        data rates may apply. Reply STOP to opt out or HELP for help. View our{" "}
        <a
          href="https://velonbookpublishing.com/privacy-policy/"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Privacy policy
        </a>
        {" "}and{" "}
        <a
          href="https://velonbookpublishing.com/terms-and-conditions/"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Terms &amp; Condition
        </a>
        .
      </span>
    </label>
  );
}
