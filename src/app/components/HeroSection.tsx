import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import taminaPortrait from "../../assets/tamina.png";
const PORTRAIT_URL = taminaPortrait;


export function HeroSection() {
  return (
    <section className="bg-[#F6F3F0] relative overflow-hidden min-h-screen">
      {/* Logo mark */}
      <div className="absolute z-10 top-4 left-4 md:top-[48px] md:left-[80px]">
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
      <div className="absolute z-10 right-4 top-4 md:top-[54px] md:right-[80px] flex gap-10 items-center">
        {["PORTFOLIO", "KONTAKT"].map((label) => (
          null
        ))}
      </div>

      {/* Main content grid */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-[80px] min-h-screen grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="pt-8 pb-8 pr-0 md:pt-[120px] md:pb-[80px] md:pr-[60px]"
        >
          <div className="flex items-center gap-3 mb-3 md:mb-[44px]">
            <div className="w-8 h-[1px] bg-[#D88F78]" />
            <span style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[10px] tracking-[4px] text-[#D88F78]">
              01 / EINFÜHRUNG
            </span>
          </div>

          <h1
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-[40px] md:text-[clamp(72px,8.5vw,112px)] font-light leading-[1] text-[#111111] mb-6 tracking-[-3px]"
          >
            Tamina
            <br />
            <em style={{ fontStyle: "italic" }}>Ceylan</em>
          </h1>

          <div style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[11px] font-semibold tracking-[7px] text-[#D88F78] mb-4 md:mb-[50px]">
            MARKETING KOMMUNIKATION
          </div>

          <div className="w-[80px] h-[1px] bg-[#D88F78] mb-4 md:mb-[50px]" />

          <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[15px] font-light leading-[1.6] md:leading-[2] text-[#555555] max-w-full md:max-w-[430px]">
            Kommunikation begeistert mich, weil sie Menschen verbindet und Marken erlebbar macht. Durch meine Erfahrung in Marketing, Content Creation und Projektmanagement habe ich gelernt, kreative Ideen zielgerichtet umzusetzen und Projekte zuverlässig zum Erfolg zu führen.
          </p>
        </motion.div>

        {/* Right: Portrait */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          className="relative flex items-center justify-center h-auto md:h-screen"
        >
          {/* Portrait + decorations wrapper */}
          <div className="relative w-full max-w-[525px] h-auto md:w-[525px] md:h-[672px] mx-auto">
            <div className="absolute rounded-full bg-[#F0DDD6] z-0 left-1/2 -translate-x-1/2 top-0 md:left-auto md:translate-x-0 md:-bottom-[80px] md:-right-[100px] w-[450px] h-[450px] md:w-[650px] md:h-[650px]" />

            <div className="relative z-20 w-full h-full overflow-hidden rounded-full">
              <ImageWithFallback
                src={PORTRAIT_URL}
                alt="Tamina Ceylan"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
              />
            </div>

            <div className="absolute z-10 pointer-events-none left-1/2 -translate-x-1/2 top-[52%] md:left-[50%] md:top-[48%] w-[520px] h-[520px] md:w-[690px] md:h-[690px]">
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{
                  duration: 32,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className="w-full h-full"
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
