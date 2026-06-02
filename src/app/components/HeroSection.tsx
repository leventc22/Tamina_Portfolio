import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import taminaPortrait from "../../assets/tamina.png";
const PORTRAIT_URL = taminaPortrait;


export function HeroSection() {
  return (
    <section
      style={{
        background: "#F6F3F0",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Logo mark */}
      <div style={{ position: "absolute", top: 48, left: 80, zIndex: 10 }}>
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 30,
            fontWeight: 300,
            fontStyle: "italic",
            color: "#111111",
            letterSpacing: "-1px",
          }}
        >
          TC.
        </span>
      </div>

      {/* Nav labels */}
      <div
        style={{
          position: "absolute",
          top: 54,
          right: 80,
          display: "flex",
          gap: 40,
          alignItems: "center",
          zIndex: 10,
        }}
      >
        {["PORTFOLIO", "KONTAKT"].map((label) => (
          null
        ))}
      </div>

      {/* Main content grid */}
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 80px",
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
        }}
      >
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ paddingTop: 120, paddingBottom: 80, paddingRight: 60 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 44,
            }}
          >
            <div
              style={{ width: 32, height: 1, background: "#D88F78" }}
            />
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 10,
                letterSpacing: "4px",
                color: "#D88F78",
              }}
            >
              01 / EINFÜHRUNG
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(72px, 8.5vw, 112px)",
              fontWeight: 300,
              lineHeight: 1.0,
              color: "#111111",
              margin: "0 0 24px 0",
              letterSpacing: "-3px",
            }}
          >
            Tamina
            <br />
            <em style={{ fontStyle: "italic" }}>Ceylan</em>
          </h1>

          <div
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "7px",
              color: "#D88F78",
              marginBottom: 50,
            }}
          >
            MARKETING KOMMUNIKATION
          </div>

          <div
            style={{
              width: 80,
              height: 1,
              background: "#D88F78",
              marginBottom: 50,
            }}
          />

          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 15,
              fontWeight: 300,
              lineHeight: 2,
              color: "#555555",
              maxWidth: 430,
              margin: 0,
            }}
          >
            Kommunikation begeistert mich, weil sie Menschen verbindet und Marken erlebbar macht. Durch meine Erfahrung in Marketing, Content Creation und Projektmanagement habe ich gelernt, kreative Ideen zielgerichtet umzusetzen und Projekte zuverlässig zum Erfolg zu führen.
          </p>
        </motion.div>

        {/* Right: Portrait */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          {/* Portrait + decorations wrapper */}
          <div style={{ position: "relative", width: 525, height: 672 }}>
            {/* Peach circle background */}
            <div
              style={{
                position: "absolute",
                width: 650,
                height: 650,
                borderRadius: "50%",
                background: "#F0DDD6",
                bottom: -80,
                right: -100,
                zIndex: 0,
              }}
            />

            {/* Portrait image */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                width: "100%",
                height: "100%",
                overflow: "hidden",
              }}
            >
              <ImageWithFallback
                src={PORTRAIT_URL}
                alt="Tamina Ceylan"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </div>

            {/* Circular text overlay – centered on portrait */}
            <div
              style={{
                position: "absolute",
                width: 690,
                height: 690,
                top: "48%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1.5,
                pointerEvents: "none",
              }}
            >
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{
                  duration: 32,
                  ease: "linear",
                  repeat: Infinity,
                }}
                style={{ width: "100%", height: "100%" }}
                viewBox="0 0 620 620"
              >
                <defs>
                  <path
                    id="heroCirclePath"
                    d="M 310 30 A 280 280 0 1 1 309.99 30"
                  />
                </defs>
                <text
                  fill="#D88F78"
                  fontFamily="'Montserrat', sans-serif"
                  fontSize="10"
                  fontWeight="600"
                  letterSpacing="6"
                >
                  <textPath href="#heroCirclePath">
                    KREATIV · STRATEGISCH · EMPATHISCH · &nbsp;&nbsp;
                  </textPath>
                </text>
              </motion.svg>
            </div>
          </div>
        </motion.div>
      </div>


    </section>
  );
}
