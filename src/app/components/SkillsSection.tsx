import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const skills = [
  { name: "Branding & Design", percentage: 95 },
  { name: "Content & Social Media", percentage: 90 },
  { name: "Text & Storytelling", percentage: 90 },
  { name: "Projektmanagement", percentage: 90 },
  { name: "Strategie & Konzeption", percentage: 85 },
  { name: "Kampagnenmanagement", percentage: 85 },
];

const languageSkills = [
  {
    label: "Deutsch",
    level: 5,
    detail: "Muttersprache",
  },
  {
    label: "Englisch",
    level: 4,
    detail: "Fließend",
  },
  {
    label: "Französisch",
    level: 3,
    detail: "Gute Kenntnisse",
  },
  {
    label: "Türkisch",
    level: 2,
    detail: "Grundkenntnisse",
  },
];

const digitalSkills = [
  {
    label: "Canva",
    level: 5,
    detail: "Expertenkenntnisse",
  },
  {
    label: "Microsoft Office",
    level: 5,
    detail: "Word, Excel, PowerPoint",
  },
  {
    label: "CapCut & InShot",
    level: 4,
    detail: "Content Creation & Video Editing",
  },
  {
    label: "Adobe Photoshop",
    level: 3,
    detail: "Grundkenntnisse",
  },
  {
    label: "Adobe InDesign",
    level: 3,
    detail: "Grundkenntnisse",
  },
];

type EditorialSkill = {
  label: string;
  level: number;
  detail: string;
};

function IndicatorDots({ level }: { level: number }) {
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      {Array.from({ length: 5 }, (_, index) => {
        const active = index < level;
        return (
          <span
            key={index}
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: active ? "#D88F78" : "rgba(255,255,255,0.16)",
              border: active ? "none" : "1px solid rgba(255,255,255,0.08)",
            }}
          />
        );
      })}
    </div>
  );
}

function EditorialBlock({
  title,
  items,
}: {
  title: string;
  items: EditorialSkill[];
}) {
  return (
    <div
      style={{
        display: "grid",
        gap: 20,
        padding: "32px",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.01)",
        borderRadius: 24,
      }}
    >
      <div
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 11,
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "#D88F78",
          fontWeight: 600,
        }}
      >
        {title}
      </div>

      <div style={{ display: "grid", gap: 22 }}>
        {items.map((item) => (
          <div key={item.label}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 20,
                marginBottom: 8,
              }}
            >
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 14,
                  fontWeight: 400,
                  letterSpacing: "0.5px",
                  color: "#F6F3F0",
                  whiteSpace: "nowrap",
                }}
              >
                {item.label}
              </span>
              <IndicatorDots level={item.level} />
            </div>
            <p
              style={{
                margin: 0,
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 12,
                lineHeight: 1.6,
                color: "rgba(248,244,240,0.78)",
                maxWidth: 320,
              }}
            >
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillBar({
  skill,
  percentage,
  index,
}: {
  skill: string;
  percentage: number;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      style={{ marginBottom: 30 }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 14,
        }}
      >
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 14,
            fontWeight: 300,
            letterSpacing: "0.5px",
            color: "#E8E4E0",
          }}
        >
          {skill}
        </span>
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 9.5,
            fontWeight: 600,
            letterSpacing: "1.8px",
            color: "#D88F78",
            opacity: 0.7,
            lineHeight: 1.2,
          }}
        >
          {percentage}%
        </span>
      </div>
      <div
        style={{
          width: "100%",
          height: 4,
          background: "rgba(255,255,255,0.06)",
          position: "relative",
          borderRadius: 999,
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            delay: index * 0.08 + 0.3,
          }}
          style={{
            height: "100%",
            background: "linear-gradient(90deg, rgba(216,143,120,0.9) 0%, rgba(196,122,99,0.9) 100%)",
            position: "absolute",
            top: 0,
            left: 0,
            borderRadius: 999,
            boxShadow: "0 0 18px rgba(216,143,120,0.18)",
          }}
        />
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const circleRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["start end", "end start"],
  });
  const circleY = useTransform(scrollYProgress, [0, 1], [0, 22]);

  return (
    <section
      style={{
        background: "#111111",
        padding: "160px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background texture */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "radial-gradient(circle at 80% 50%, rgba(216,143,120,0.04) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 80px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Section label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 58,
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
            03 / KOMPETENZEN
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 96,
            alignItems: "start",
          }}
        >
          {/* Left: Skill bars */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(36px, 3.5vw, 52px)",
                fontWeight: 300,
                lineHeight: 1.16,
                color: "#F6F3F0",
                margin: "0 0 58px 0",
                letterSpacing: "-1px",
              }}
            >
              Meine
              <br />
              <em style={{ fontStyle: "italic", color: "#D88F78", fontWeight: 400 }}>
                Kernkompetenzen
              </em>
            </motion.h2>

            {skills.map((s, i) => (
              <SkillBar
                key={s.name}
                skill={s.name}
                percentage={s.percentage}
                index={i}
              />
            ))}
          </div>

          {/* Right: Decorative circular element */}
          <motion.div
            ref={circleRef}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 440,
              y: circleY,
            }}
          >
            {/* Large ghost number */}
            <div
              style={{
                position: "absolute",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 280,
                fontWeight: 300,
                color: "rgba(255,255,255,0.045)",
                lineHeight: 1,
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              03
            </div>

            {/* Rotating circular text */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                width: 420,
                height: 420,
              }}
            >
              <motion.svg
                animate={{ rotate: -360 }}
                transition={{
                  duration: 60,
                  ease: "linear",
                  repeat: Infinity,
                }}
                style={{ width: "100%", height: "100%" }}
                viewBox="0 0 420 420"
              >
                <defs>
                  <path
                    id="skillsCirclePath"
                    d="M 210 21 A 186 186 0 1 1 209.99 21"
                  />
                </defs>
                <circle
                  cx="210"
                  cy="210"
                  r="74"
                  fill="none"
                  stroke="#D88F78"
                  strokeWidth="0.8"
                  opacity="0.22"
                />
                <circle
                  cx="210"
                  cy="210"
                  r="186"
                  fill="none"
                  stroke="rgba(216,143,120,0.12)"
                  strokeWidth="1.4"
                />
                <text
                  fill="#D88F78"
                  fontFamily="'Montserrat', sans-serif"
                  fontSize="10.5"
                  fontWeight="600"
                  letterSpacing="5"
                  opacity="0.72"
                >
                  <textPath href="#skillsCirclePath">
                    KREATIVITÄT · VERBINDET · STRATEGIE · &nbsp;
                  </textPath>
                </text>
              </motion.svg>

              {/* Center dot */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#D88F78",
                  opacity: 0.95,
                }}
              />
            </div>
          </motion.div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 28,
            justifyContent: "start",
            marginTop: 72,
            width: "100%",
            maxWidth: 720,
          }}
        >
          <EditorialBlock title="SPRACHKENNTNISSE" items={languageSkills} />
          <EditorialBlock title="DIGITALE KOMPETENZEN" items={digitalSkills} />
        </div>
      </div>
    </section>
  );
}
