import { motion } from "motion/react";

const capabilities = [
  "Kreative Konzepte",
  "Markenkommunikation",
  "Campaigning",
  "Content Creation",
  "Projektmanagement",
];

export function UberMichSection() {
  return (
    <section style={{ background: "#F6F3F0", padding: "160px 0" }}>
      <div className="section-inner" style={{ maxWidth: 1400, margin: "0 auto", padding: "0 80px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "80px 1fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          <div style={{ width: 80, minWidth: 80, alignSelf: "start" }}>
            <div
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "4px",
                color: "#D88F78",
              }}
            >
              ÜBER MICH
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "55% 35%",
              gap: 92,
              alignItems: "start",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 56,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 10,
                    letterSpacing: "4px",
                    color: "#666666",
                    textTransform: "uppercase",
                  }}
                >
                  02
                </span>
                <div
                  style={{
                    flex: 1,
                    maxWidth: 80,
                    height: 1,
                    background: "#D88F78",
                    opacity: 0.5,
                  }}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(40px, 4vw, 62px)",
                    fontWeight: 300,
                    lineHeight: 1.14,
                    color: "#111111",
                    margin: "0 0 32px 0",
                    letterSpacing: "-1.5px",
                  }}
                >
                  Strategin.
                  <br />
                  Kreative
                  <br />
                  <em style={{ fontStyle: "italic" }}>
                    Ideen&shy;geberin.
                  </em>
                </h2>

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 15,
                    fontWeight: 300,
                    lineHeight: 2,
                    letterSpacing: "-0.1px",
                    color: "#555555",
                    margin: "0 0 24px 0",
                    maxWidth: 680,
                  }}
                >
                  Ich arbeite projektbasiert, mit Leidenschaft und Neugier. Mich
                  begeistert es, Marken zu verstehen, Ideen zu entwickeln und sie
                  so zu kommunizieren, dass sie Menschen erreichen und bewegen.
                </p>

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 15,
                    fontWeight: 300,
                    lineHeight: 2,
                    letterSpacing: "-0.1px",
                    color: "#555555",
                    margin: 0,
                    maxWidth: 680,
                  }}
                >
                  Ob Kampagnen, Konzept oder Content — ich denke ganzheitlich,
                  arbeite strukturiert und verliere dabei nie das große Ganze aus
                  dem Blick.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                display: "grid",
                gap: 18,
                paddingTop: 12,
              }}
            >
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "6px",
                  color: "#D88F78",
                  marginBottom: 14,
                  textTransform: "uppercase",
                  borderBottom: "1px solid rgba(17,17,17,0.05)",
                  paddingBottom: 10,
                }}
              >
                KOMPETENZEN
              </div>

              {capabilities.map((cap, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "48px 1fr",
                    gap: 20,
                    padding: "16px 0",
                    borderBottom:
                      i < capabilities.length - 1
                        ? "1px solid rgba(17,17,17,0.04)"
                        : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 10,
                      fontWeight: 500,
                      letterSpacing: "3px",
                      color: "#111111",
                      lineHeight: 1,
                      textTransform: "uppercase",
                      opacity: 0.6,
                    }}
                  >
                    0{i + 1}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 24,
                      fontWeight: 300,
                      color: "#111111",
                      letterSpacing: "-0.4px",
                      lineHeight: 1.12,
                    }}
                  >
                    {cap}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
