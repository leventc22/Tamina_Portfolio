import { motion } from "motion/react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const contactItems = [
  {
    icon: <Mail size={15} />,
    label: "EMAIL",
    value: "tamina.cey@gmail.com",
    href: "mailto:tamina.cey@gmail.com",
  },
  {
    icon: <Phone size={15} />,
    label: "TELEFON",
    value: "+49 172 8291359",
    href: "tel:+491728291359",
  },
  {
    icon: <MapPin size={15} />,
    label: "STANDORT",
    value: "Hof, Deutschland",
    href: undefined,
  },
];

export function ContactSection() {
  return (
    <section
      style={{
        background: "#F6F3F0",
        padding: "160px 0 120px",
        borderTop: "1px solid rgba(17,17,17,0.06)",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 80px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 120,
            alignItems: "start",
          }}
        >
          {/* Left: Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 44,
              }}
            >
              <div style={{ width: 32, height: 1, background: "#D88F78" }} />
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 10,
                  letterSpacing: "4px",
                  color: "#D88F78",
                }}
              >
                07 / KONTAKT
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(32px, 3.5vw, 50px)",
                fontWeight: 300,
                lineHeight: 1.2,
                color: "#111111",
                margin: "0 0 32px 0",
                letterSpacing: "-1px",
              }}
            >
              Sie suchen eine engagierte und kreative{" "}
              <em style={{ fontStyle: "italic", color: "#D88F78" }}>
                Unterstützung
              </em>{" "}
              für Ihr Team?
            </h2>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                fontWeight: 300,
                lineHeight: 1.85,
                color: "#555555",
                margin: "0 0 52px 0",
                maxWidth: 460,
              }}
            >
              Ich freue mich darauf, Sie kennenzulernen und gemeinsam Ihre
              Projekte erfolgreich voranzubringen.
            </p>

            {/* CTA button */}
            <motion.a
              href="mailto:tamina.cey@gmail.com"
              whileHover={{ x: 4 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 18,
                background: "#111111",
                color: "#F6F3F0",
                padding: "18px 40px",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "3px",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              LASSEN SIE UNS INS GESPRÄCH KOMMEN
              <ArrowRight size={14} color="#D88F78" strokeWidth={2} />
            </motion.a>
          </motion.div>

          {/* Right: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ paddingTop: 108 }}
          >
            {contactItems.map((item, i) => (
              <div
                key={i}
                style={{
                  borderBottom: "1px solid rgba(17,17,17,0.08)",
                  padding: "28px 0",
                  display: "flex",
                  alignItems: "center",
                  gap: 24,
                }}
              >
                <div style={{ color: "#D88F78", minWidth: 18 }}>
                  {item.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 9,
                      fontWeight: 600,
                      letterSpacing: "3px",
                      color: "#999999",
                      marginBottom: 6,
                    }}
                  >
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 16,
                        fontWeight: 300,
                        color: "#111111",
                        textDecoration: "none",
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 16,
                        fontWeight: 300,
                        color: "#111111",
                      }}
                    >
                      {item.value}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Footer */}
            <div
              style={{
                marginTop: 64,
                paddingTop: 32,
                borderTop: "1px solid rgba(17,17,17,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 9,
                  letterSpacing: "3px",
                  color: "#999999",
                }}
              >
                © 2025 TAMINA CEYLAN
              </span>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 18,
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "#D88F78",
                  letterSpacing: "-0.5px",
                }}
              >
                TC.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
