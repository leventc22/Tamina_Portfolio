import { motion } from "motion/react";

export function QuoteSection() {
  return (
    <section
      style={{
        background: "#111111",
        padding: "160px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(216,143,120,0.05) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Decorative side lines */}
      <div
        style={{
          position: "absolute",
          left: 80,
          top: "50%",
          transform: "translateY(-50%)",
          width: 1,
          height: 120,
          background:
            "linear-gradient(to bottom, transparent, #D88F78, transparent)",
          opacity: 0.3,
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 80,
          top: "50%",
          transform: "translateY(-50%)",
          width: 1,
          height: 120,
          background:
            "linear-gradient(to bottom, transparent, #D88F78, transparent)",
          opacity: 0.3,
        }}
      />

      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: "0 80px",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Section label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            marginBottom: 60,
          }}
        >
          <div
            style={{
              width: 32,
              height: 1,
              background: "rgba(216,143,120,0.4)",
            }}
          />
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 10,
              letterSpacing: "4px",
              color: "rgba(216,143,120,0.6)",
            }}
          >
            06 / CREDO
          </span>
          <div
            style={{
              width: 32,
              height: 1,
              background: "rgba(216,143,120,0.4)",
            }}
          />
        </div>

        {/* Opening guillemet */}
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 96,
            fontWeight: 300,
            color: "#D88F78",
            lineHeight: 0.6,
            marginBottom: 48,
            opacity: 0.5,
          }}
        >
          „
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(24px, 3vw, 42px)",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1.55,
            color: "#F6F3F0",
            margin: "0 0 56px 0",
            letterSpacing: "-0.5px",
          }}
        >
          Gute Kommunikation ist kein Zufall. Sie ist das Ergebnis von
          Strategie, Kreativität und echtem Verständnis.
        </motion.blockquote>

        {/* Rule */}
        <div
          style={{
            width: 40,
            height: 1,
            background: "#D88F78",
            margin: "0 auto 24px",
          }}
        />

        {/* Signature */}
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(18px, 2vw, 24px)",
            fontWeight: 400,
            letterSpacing: "0.3em",
            color: "#D88F78",
            textTransform: "uppercase",
            fontStyle: "normal",
          }}
        >
          TAMINA CEYLAN
        </div>
      </div>
    </section>
  );
}
