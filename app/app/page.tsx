export default function Home() {
  const services = [
    "No cooling and no heat diagnostics",
    "Capacitors, blower motors, thermostats, and repairs",
    "Compressor and major-system repair coordination",
    "Emergency HVAC dispatch support",
    "Warranty work order management",
    "Multi-state contractor network coverage",
  ];

  const states = [
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
  ];

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #cbd5e1",
    marginBottom: "12px",
    fontSize: "14px",
    boxSizing: "border-box",
  };

  const cardStyle: React.CSSProperties = {
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "20px",
    padding: "24px",
    boxShadow: "0 8px 24px rgba(15, 23, 42, 0.06)",
  };

  return (
    <main>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <img
              src="/air-cops-logo.png"
              alt="Air Cops Logo"
              style={{ width: "72px", height: "72px", objectFit: "contain" }}
            />
            <div>
              <div style={{ fontSize: "28px", fontWeight: 900 }}>AIR COPS</div>
              <div style={{ fontSize: "12px", letterSpacing: "2px", color: "#64748b" }}>
                HVAC WARRANTY DISPATCH NETWORK
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="#contact"
              style={{
                textDecoration: "none",
                color: "#0f172a",
                border: "1px solid #cbd5e1",
                padding: "10px 16px",
                borderRadius: "12px",
                fontWeight: 700,
              }}
            >
              Contact
            </a>
            <a
              href="/portal"
              style={{
                textDecoration: "none",
                color: "#ffffff",
                background: "#0f172a",
                padding: "10px 16px",
                borderRadius: "12px",
                fontWeight: 700,
              }}
            >
              Contractor Login
            </a>
            <div style={{ fontSize: "20px", fontWeight: 800 }}>1-800-AIR-COPS</div>
          </div>
        </div>
      </header>

      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "72px 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px",
            alignItems: "center",
          }}
        >
          <div>
            <h1 style={{ fontSize: "52px", lineHeight: 1.05, margin: 0, fontWeight: 900 }}>
              HVAC Warranty Dispatch Network
            </h1>

            <p style={{ marginTop: "24px", fontSize: "18px", lineHeight: 1.7, color: "#475569" }}>
              Air Cops provides multi-state HVAC dispatch services connecting warranty
              companies, contractors, and homeowners through a structured work order system.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "28px" }}>
              <a
                href="#contractor-form"
                style={{
                  textDecoration: "none",
                  background: "#0f172a",
                  color: "#ffffff",
                  padding: "14px 20px",
                  borderRadius: "14px",
                  fontWeight: 700,
                }}
              >
                Become Contractor
              </a>

              <a
                href="#warranty-form"
                style={{
                  textDecoration: "none",
                  border: "1px solid #cbd5e1",
                  color: "#0f172a",
                  padding: "14px 20px",
                  borderRadius: "14px",
                  fontWeight: 700,
                  background: "#ffffff",
                }}
              >
                Warranty Partners
              </a>

              <a
                href="/portal"
                style={{
                  textDecoration: "none",
                  border: "1px solid #cbd5e1",
                  color: "#0f172a",
                  padding: "14px 20px",
                  borderRadius: "14px",
                  fontWeight: 700,
                  background: "#ffffff",
                }}
              >
                Dispatch Portal
              </a>
            </div>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>Dispatch Workflow</h3>
            <div style={{ display: "grid", gap: "12px" }}>
              {[
                "Work Order Received",
                "Contractor Assigned",
                "Diagnosis Submitted",
                "Approval Requested",
                "Repair Completed",
                "Invoice Sent",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    background: "#f8fafc",
                    padding: "14px",
                    borderRadius: "12px",
                    fontWeight: 700,
                    border: "1px solid #e2e8f0",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "72px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "42px", marginTop: 0, fontWeight: 900 }}>What Air Cops Handles</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
              marginTop: "28px",
            }}
          >
            {services.map((service) => (
              <div
                key={service}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "18px",
                  padding: "22px",
                  fontWeight: 700,
                }}
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#0f172a", color: "#ffffff", padding: "72px 24px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px",
          }}
        >
          <div>
            <h2 style={{ fontSize: "42px", marginTop: 0, fontWeight: 900 }}>
              Join the Air Cops Contractor Network
            </h2>
            <p style={{ color: "#cbd5e1", fontSize: "18px", lineHeight: 1.7 }}>
              Licensed HVAC contractors receive steady warranty dispatch work orders
              with organized approvals and fast scheduling.
            </p>
          </div>

          <div
            style={{
              background: "#ffffff",
              color: "#0f172a",
              borderRadius: "20px",
              padding: "28px",
            }}
          >
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>Contractor Benefits</h3>
            <ul style={{ paddingLeft: "20px", lineHeight: 2 }}>
              <li>Steady warranty call volume</li>
              <li>Fast dispatch</li>
              <li>Approval management</li>
              <li>Weekly payouts</li>
              <li>Multi-state coverage</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 24px", background: "#f8fafc" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "42px", marginTop: 0, fontWeight: 900 }}>Service Areas</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "14px",
              marginTop: "28px",
            }}
          >
            {states.map((state) => (
              <div
                key={state}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "16px",
                  padding: "18px",
                  textAlign: "center",
                  fontWeight: 700,
                }}
              >
                {state}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "72px 24px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
          }}
        >
          <div id="contractor-form" style={{ ...cardStyle, background: "#f8fafc" }}>
            <h2 style={{ fontSize: "34px", marginTop: 0, marginBottom: "8px", fontWeight: 900 }}>
              Contractor Sign Up
            </h2>
            <p style={{ color: "#475569", marginBottom: "20px" }}>
              Join the Air Cops network for warranty-driven HVAC work orders.
            </p>

            <input style={inputStyle} placeholder="Full Name" />
            <input style={inputStyle} placeholder="Business Name" />
            <input style={inputStyle} placeholder="Phone Number" />
            <input style={inputStyle} placeholder="Email Address" />
            <input style={inputStyle} placeholder="Primary Service Area" />
            <input style={inputStyle} placeholder="License Number (if required)" />
            <textarea
              style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }}
              placeholder="Tell us about your HVAC experience and coverage area"
            />
            <button
              style={{
                width: "100%",
                background: "#0f172a",
                color: "#ffffff",
                border: "none",
                padding: "14px",
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "15px",
                cursor: "pointer",
              }}
            >
              Apply as Contractor
            </button>
          </div>

          <div id="warranty-form" style={{ ...cardStyle, background: "#f8fafc" }}>
            <h2 style={{ fontSize: "34px", marginTop: 0, marginBottom: "8px", fontWeight: 900 }}>
              Warranty Partner Inquiry
            </h2>
            <p style={{ color: "#475569", marginBottom: "20px" }}>
              Request coverage support and dispatch partnership information.
            </p>

            <input style={inputStyle} placeholder="Company Name" />
            <input style={inputStyle} placeholder="Contact Name" />
            <input style={inputStyle} placeholder="Phone Number" />
            <input style={inputStyle} placeholder="Email Address" />
            <input style={inputStyle} placeholder="States Needing Coverage" />
            <textarea
              style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }}
              placeholder="Tell us about your dispatch needs, call volume, and service areas"
            />
            <button
              style={{
                width: "100%",
                background: "#0f172a",
                color: "#ffffff",
                border: "none",
                padding: "14px",
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "15px",
                cursor: "pointer",
              }}
            >
              Request Partnership Info
            </button>
          </div>
        </div>
      </section>

      <section id="contact" style={{ padding: "72px 24px", background: "#ffffff" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
          }}
        >
          <div>
            <h2 style={{ fontSize: "42px", marginTop: 0, fontWeight: 900 }}>Contact Air Cops</h2>
            <p style={{ color: "#475569", fontSize: "18px", lineHeight: 1.7 }}>
              Partner with Air Cops for HVAC warranty dispatch coverage.
            </p>
            <div style={{ marginTop: "24px", fontWeight: 800, fontSize: "22px" }}>
              1-800-AIR-COPS
            </div>
            <div style={{ marginTop: "8px", color: "#475569" }}>dispatch@aircopssolutions.com</div>
          </div>

          <div style={cardStyle}>
            <input style={inputStyle} placeholder="Full Name" />
            <input style={inputStyle} placeholder="Company" />
            <input style={inputStyle} placeholder="Phone" />
            <textarea
              style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }}
              placeholder="Message"
            />
            <button
              style={{
                width: "100%",
                background: "#0f172a",
                color: "#ffffff",
                border: "none",
                padding: "14px",
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "15px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </section>

      <footer style={{ background: "#e2e8f0", padding: "32px 24px", textAlign: "center" }}>
        <img
          src="/air-cops-logo.png"
          alt="Air Cops"
          style={{ width: "60px", height: "60px", objectFit: "contain", marginBottom: "12px" }}
        />
        <div style={{ fontWeight: 800 }}>Air Cops Solutions</div>
        <div style={{ marginTop: "6px" }}>1-800-AIR-COPS</div>
      </footer>
    </main>
  );
}
