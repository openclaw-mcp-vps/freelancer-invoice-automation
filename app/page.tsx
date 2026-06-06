export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase">
          Freelancer Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-generate invoices from{' '}
          <span className="text-[#58a6ff]">time tracking</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect Toggl or Harvest and instantly create branded PDF invoices with tax calculations and payment links — no manual data entry ever again.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Free Trial — $15/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-medium text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            ['Toggl & Harvest', 'Native integrations'],
            ['PDF Invoices', 'Branded & professional'],
            ['Auto Tax Calc', 'VAT / GST ready'],
          ].map(([title, sub]) => (
            <div key={title} className="text-center">
              <div className="text-white font-semibold text-sm">{title}</div>
              <div className="text-[#8b949e] text-xs mt-1">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <div className="text-[#58a6ff] text-xs font-bold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited invoices',
              'Toggl + Harvest sync',
              'Branded PDF generation',
              'Stripe & PayPal payment links',
              'Automatic tax calculations',
              'Email delivery to clients',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
          <p className="text-[#8b949e] text-xs mt-3">14-day free trial · No credit card required</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            [
              'Which time trackers are supported?',
              'InvoiceFlow connects natively to Toggl Track and Harvest. Simply paste your API key and your time entries sync automatically.',
            ],
            [
              'How does tax calculation work?',
              'You set your tax rate (VAT, GST, or sales tax) once in settings. Every invoice line item is calculated automatically — no spreadsheets needed.',
            ],
            [
              'How do clients pay the invoices?',
              'Each generated invoice includes a Stripe or PayPal payment link. Clients click and pay in seconds; you get notified instantly.',
            ],
          ].map(([q, a]) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <div className="text-white font-semibold mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-[#8b949e] text-xs">
        © {new Date().getFullYear()} InvoiceFlow. Built for freelancers.
      </footer>
    </main>
  )
}
