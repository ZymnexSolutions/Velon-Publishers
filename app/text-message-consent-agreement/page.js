import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TextMessageConsentAgreementPage() {
  return (
    <main className="font-sans text-gray-900">
      <section className="relative w-full overflow-hidden bg-[#182A42]">
        <Navbar />
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-32 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D8BE96]">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
            Text Message (SMS) Consent Agreement
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-white/80 md:text-base">
            Velon Book Publishing
          </p>
        </div>
      </section>

      <section className="bg-[#F7F4EF]">
        <div className="privacy-policy mx-auto max-w-6xl px-6 py-14">
          <p>
            By providing your phone number and opting in, you agree to receive
            text messages (SMS) from Velon Book Publishing for the purposes
            listed below.
          </p>

          <h2>1. Types of SMS Communications</h2>
          <p>You may receive text messages related to:</p>

          <h3>1.1 Order Updates</h3>
          <ul>
            <li>Order confirmations</li>
            <li>Project progress updates</li>
            <li>Publishing status notifications</li>
            <li>Delivery confirmations</li>
          </ul>

          <h3>1.2 Customer Support</h3>
          <ul>
            <li>Responses to your inquiries</li>
            <li>Assistance regarding your services</li>
            <li>Issue resolution related to your project</li>
          </ul>

          <h3>1.3 Event Notifications</h3>
          <ul>
            <li>Information about webinars</li>
            <li>Virtual consultations</li>
            <li>Publishing-related events</li>
          </ul>

          <h3>1.4 Account Alerts</h3>
          <ul>
            <li>Security notifications</li>
            <li>Account updates</li>
            <li>Important service-related announcements</li>
          </ul>

          <h3>1.5 Marketing Communications</h3>
          <ul>
            <li>Promotional messages</li>
            <li>Special offers</li>
            <li>Service updates</li>
            <li>New product announcements</li>
          </ul>

          <h2>2. Message Frequency and Charges</h2>
          <ul>
            <li>
              Message frequency may vary depending on your services and
              engagement.
            </li>
            <li>
              Standard message and data rates may apply according to your
              mobile carrier&apos;s plan.
            </li>
          </ul>

          <h2>3. How to Withdraw Your Consent</h2>
          <p>
            You may opt out of receiving SMS messages from Velon Book
            Publishing at any time using any of the following methods:
          </p>

          <h3>3.1 Reply &quot;STOP&quot;</h3>
          <p>
            Reply &quot;STOP&quot; to any message you receive to automatically
            unsubscribe from future SMS communications.
          </p>

          <h3>3.2 Contact Customer Support</h3>
          <p>
            Send a request to:{" "}
            <a
              href="mailto:support@velonbookpublishing.com"
              className="text-[#144d52] underline"
            >
              support@velonbookpublishing.com
            </a>
          </p>

          <h3>3.3 Update Your Preferences</h3>
          <p>
            Log into your account on our website and update your communication
            preferences.
          </p>

          <p>
            Please note: Even if you opt out of promotional messages, you may
            still receive essential transactional or service-related messages
            regarding your active orders or account.
          </p>

          <h2>4. Consent Confirmation</h2>
          <p>By opting in, you confirm that:</p>
          <ul>
            <li>
              You are the owner or authorized user of the phone number
              provided.
            </li>
            <li>
              You consent to receive SMS communications from Velon Book
              Publishing as outlined above.
            </li>
            <li>You understand that consent is not a condition of purchase.</li>
          </ul>

          <p>
            If you have any questions regarding this SMS Consent Agreement,
            please contact:{" "}
            <a
              href="mailto:info@velonbookpublishing.com"
              className="text-[#144d52] underline"
            >
              info@velonbookpublishing.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

