import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CancellationPolicyPage() {
  return (
    <main className="font-sans text-gray-900">
      <section className="relative w-full overflow-hidden bg-[#182A42]">
        <Navbar />
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-32 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D8BE96]">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
            Cancellation Policy
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-white/80 md:text-base">
            Velon Technologies Inc. (operating as Velon Book Publishing)
            <br />
            Last Updated: December 10th, 2025
          </p>
        </div>
      </section>

      <section className="bg-[#F7F4EF]">
        <div className="privacy-policy mx-auto max-w-6xl px-6 py-14">
          <p>
            This Cancellation Policy (&quot;Policy&quot;) governs cancellations
            for services offered under the brand Velon Book Publishing. This
            Policy forms part of our Terms and Conditions.
          </p>

          <h2>1. Contact Information</h2>
          <p>You may contact us through:</p>
          <ul>
            <li>Website: www.velonbookpublishing.com</li>
            <li>Email: support@velonbookpublishing.com</li>
          </ul>

          <h2>2. Payments and Plans</h2>
          <h3>2.1 Payment Requirement</h3>
          <p>
            All Production Plans, Add-ons, Upgrades, Membership Subscriptions,
            and Marketing Services must be paid according to the selected
            pricing structure unless otherwise agreed in writing.
          </p>
          <h3>2.2 Automatic Renewal</h3>
          <p>
            Certain Membership Subscription Plans and Monthly Services renew
            automatically unless canceled before the next billing cycle.
          </p>
          <h3>2.3 Unpaid Fees</h3>
          <p>Velon Book Publishing reserves the right to:</p>
          <ul>
            <li>Suspend or terminate services due to unpaid balances</li>
            <li>Withhold deliverables until full payment is received</li>
            <li>
              Take necessary collection action for outstanding amounts
            </li>
          </ul>

          <h2>3. Cancellation Terms</h2>
          <p>
            You may cancel any of the following at any time by submitting a
            written request to support@velonbookpublishing.com:
          </p>
          <ul>
            <li>Production Plan</li>
            <li>Add-on</li>
            <li>Upgrade</li>
            <li>Membership Subscription</li>
            <li>Monthly Marketing Service</li>
          </ul>
          <p>
            However, all payments made are non-refundable, except where
            required by applicable law.
          </p>

          <h2>4. Effects of Cancellation</h2>
          <h3>4.1 Production Plans</h3>
          <ul>
            <li>Work will immediately stop upon cancellation.</li>
            <li>Any outstanding balance becomes immediately due.</li>
            <li>
              No files, drafts, or deliverables will be released unless the
              full Production Plan fee has been paid.
            </li>
          </ul>

          <h3>4.2 Membership Subscriptions</h3>
          <ul>
            <li>
              No refunds will be issued for previously paid subscription fees.
            </li>
            <li>
              Access will remain active until the end of the current paid
              billing cycle.
            </li>
            <li>
              Any unpaid Production Plan, Add-on, or Upgrade fees remain
              payable.
            </li>
          </ul>

          <h3>4.3 Monthly Marketing Services</h3>
          <ul>
            <li>No refunds will be issued for payments already processed.</li>
            <li>
              Access will continue through the end of the paid billing period.
            </li>
            <li>The service will not renew for the next billing cycle.</li>
          </ul>

          <h2>5. Ownership and Deliverables</h2>
          <p>Clients always retain full ownership of their book rights.</p>
          <p>
            All project files and deliverables will only be released after full
            payment of all applicable fees.
          </p>
          <p>
            If payments are incomplete, Velon Book Publishing reserves the
            right to withhold all materials.
          </p>

          <h2>6. No Partial Refunds</h2>
          <p>Once work has commenced:</p>
          <ul>
            <li>Fees are considered earned for time, labor, and resources.</li>
            <li>No partial refunds will be issued.</li>
            <li>
              No refunds will be provided for completed project phases.
            </li>
          </ul>

          <h2>7. Policy Updates</h2>
          <p>
            Velon Book Publishing reserves the right to update this
            Cancellation Policy at any time. Updates will be posted on our
            website with the revised effective date.
          </p>
          <p>
            Continued use of our services constitutes acceptance of the updated
            policy.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
