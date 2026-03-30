export default function AirCopsWebsite() {


  const services = [
    "No cooling and no heat diagnostics",
    "Capacitors, blower motors, thermostats, and repairs",
    "Compressor and major-system repair coordination",
    "Emergency HVAC dispatch support",
    "Warranty work order management",
    "Multi-state contractor network coverage",
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            {/* LOGO */}
            <img src="/air-cops-logo.png" alt="Air Cops Logo" width="70" height="70" className="h-[70px] w-[70px] object-contain" />

            <div>
              <div className="text-2xl font-black">AIR COPS</div>
              <div className="text-xs tracking-widest text-gray-500">
                HVAC WARRANTY DISPATCH NETWORK
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden md:inline-block border px-4 py-2 rounded-xl font-semibold">
              Contact
            </a>
            <a href="/portal" className="hidden md:inline-block bg-black text-white px-4 py-2 rounded-xl font-semibold">
              Contractor Login
            </a>
            <div className="font-semibold text-lg">
              1-800-AIR-COPS
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-5xl font-black leading-tight">
            HVAC Warranty Dispatch Network
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Air Cops provides multi‑state HVAC dispatch services connecting
            warranty companies, contractors, and homeowners through a
            structured work order system.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold">
              Become Contractor
            </button>

            <button className="border px-6 py-3 rounded-xl font-semibold">
              Warranty Partners
            </button>

            <a href="/portal" className="border px-6 py-3 rounded-xl font-semibold">
              Dispatch Portal
            </a>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h3 className="font-bold text-xl mb-4">Dispatch Workflow</h3>

          <div className="space-y-3">
            {[
              "Work Order Received",
              "Contractor Assigned",
              "Diagnosis Submitted",
              "Approval Requested",
              "Repair Completed",
              "Invoice Sent",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 p-3 rounded-xl font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-10">
            What Air Cops Handles
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service}
                className="border rounded-2xl p-6 bg-slate-50"
              >
                <div className="font-bold">{service}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTRACTORS */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-black">
              Join the Air Cops Contractor Network
            </h2>

            <p className="mt-4 text-gray-300">
              Licensed HVAC contractors receive steady warranty dispatch
              work orders with organized approvals and fast scheduling.
            </p>
          </div>

          <div className="bg-white text-black rounded-2xl p-8">
            <h3 className="font-bold text-xl mb-4">
              Contractor Benefits
            </h3>

            <ul className="space-y-2">
              <li>Steady warranty call volume</li>
              <li>Fast dispatch</li>
              <li>Approval management</li>
              <li>Weekly payouts</li>
              <li>Multi-state coverage</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-10">Service Areas</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Texas",
              "Florida",
              "Georgia",
              "Arizona",
              "North Carolina",
              "Tennessee",
              "Nevada",
              "Oklahoma",
              "Kansas",
              "Missouri",
            ].map((state) => (
              <div key={state} className="bg-white border rounded-2xl p-4 font-semibold text-center shadow-sm">
                {state}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <div className="border rounded-3xl p-8 shadow-sm bg-slate-50">
            <h2 className="text-3xl font-black mb-2">Contractor Sign Up</h2>
            <p className="text-gray-600 mb-6">Join the Air Cops network for warranty-driven HVAC work orders.</p>
            <div className="grid gap-3">
              <input className="w-full border p-3 rounded-lg" placeholder="Full Name" />
              <input className="w-full border p-3 rounded-lg" placeholder="Business Name" />
              <input className="w-full border p-3 rounded-lg" placeholder="Phone Number" />
              <input className="w-full border p-3 rounded-lg" placeholder="Email Address" />
              <input className="w-full border p-3 rounded-lg" placeholder="Primary Service Area" />
              <input className="w-full border p-3 rounded-lg" placeholder="License Number (if required)" />
              <textarea className="w-full border p-3 rounded-lg min-h-[120px]" placeholder="Tell us about your HVAC experience and coverage area" />
              <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold">Apply as Contractor</button>
            </div>
          </div>

          <div className="border rounded-3xl p-8 shadow-sm bg-slate-50">
            <h2 className="text-3xl font-black mb-2">Warranty Partner Inquiry</h2>
            <p className="text-gray-600 mb-6">Request coverage support and dispatch partnership information.</p>
            <div className="grid gap-3">
              <input className="w-full border p-3 rounded-lg" placeholder="Company Name" />
              <input className="w-full border p-3 rounded-lg" placeholder="Contact Name" />
              <input className="w-full border p-3 rounded-lg" placeholder="Phone Number" />
              <input className="w-full border p-3 rounded-lg" placeholder="Email Address" />
              <input className="w-full border p-3 rounded-lg" placeholder="States Needing Coverage" />
              <textarea className="w-full border p-3 rounded-lg min-h-[120px]" placeholder="Tell us about your dispatch needs, call volume, and service areas" />
              <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold">Request Partnership Info</button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-black">
              Contact Air Cops
            </h2>

            <p className="mt-4 text-gray-600">
              Partner with Air Cops for HVAC warranty dispatch coverage.
            </p>

            <div className="mt-6 font-semibold">
              1-800-AIR-COPS
            </div>
          </div>

          <div className="border rounded-2xl p-6">
            <input
              className="w-full border p-3 rounded-lg mb-3"
              placeholder="Full Name"
            />
            <input
              className="w-full border p-3 rounded-lg mb-3"
              placeholder="Company"
            />
            <input
              className="w-full border p-3 rounded-lg mb-3"
              placeholder="Phone"
            />
            <textarea
              className="w-full border p-3 rounded-lg mb-3"
              placeholder="Message"
            />
            <button className="bg-black text-white px-6 py-3 rounded-xl w-full">
              Submit
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-100 py-8 text-center">
        <img src="/air-cops-logo.png" alt="Air Cops" width="60" height="60" className="mx-auto mb-3 h-[60px] w-[60px] object-contain" />

        <div className="font-bold">Air Cops Solutions</div>
        <div>1-800-AIR-COPS</div>
      </footer>
    </main>
  );
}
