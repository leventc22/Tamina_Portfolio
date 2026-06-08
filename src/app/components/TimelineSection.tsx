import { motion } from "motion/react";

interface TimelineEntry {
  title: string;
  org: string;
  period: string;
  url?: string;
  urlText?: string;
}

const berufserfahrung: TimelineEntry[] = [
  {
    title: "Schmuckstylistin & Verkäuferin",
    org: "Suheylx — Eigene Schmuckmarke",
    period: "seit März 2025",
    url: "https://taminacey.wixsite.com/suheylx",
    urlText: "Suheylx. | besonderer Schmuck",
  },
  {
    title: "Persönliche Assistenz",
    org: "Tina Gschossmann",
    period: "seit Mai 2024",
  },
  {
    title: "Kauffrau für Marketingkommunikation",
    org: "HUK-COBURG | Joana Hahn",
    period: "Jun 2022 — Jun 2023",
  },
];

const ausbildung: TimelineEntry[] = [
  {
    title: "Kauffrau für Marketingkommunikation",
    org: "OPUS Marketing GmbH | Bayreuth",
    period: "Aug 2018 — Jul 2020",
  },
  {
    title: "Kauffrau für Marketingkommunikation",
    org: "RMG Connect GmbH | Stuttgart",
    period: "Aug 2017 — Jul 2018",
  },
];

const schulbildung: TimelineEntry[] = [
  {
    title: "Studium – Wirtschaftsingenieurwesen (3 Sem.)",
    org: "Hochschule Hof",
    period: "Okt 2015 — Feb 2017",
  },
  {
    title: "Abitur",
    org: "Johann-Christian-Reinhart Gymnasium | Hof",
    period: "Aug 2007 — Jun 2015",
  },
  {
    title: "Grundschule",
    org: "Sophienschule | Hof",
    period: "Apr 2003 — Jul 2006",
  },
];

const dateVariants = {
  rest: { opacity: 0.82 },
};

function Entry({
  entry,
  index,
  isLast,
}: {
  entry: TimelineEntry;
  index: number;
  isLast: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.62, delay: index * 0.1, ease: "easeOut" }}
      style={{
        padding: "20px 0",
        marginBottom: isLast ? 0 : 24,
      }}
    >
      <motion.div
        variants={dateVariants}
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "3.5px",
          color: "#D88F78",
          opacity: 0.82,
          marginBottom: 12,
          textTransform: "uppercase",
          transition: "color 0.2s ease, opacity 0.2s ease",
        }}
      >
        {entry.period}
      </motion.div>
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 24,
          fontWeight: 400,
          lineHeight: 1.18,
          color: "#111111",
          marginBottom: 12,
          letterSpacing: "-0.3px",
        }}
      >
        {entry.title}
      </div>
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 13,
          fontWeight: 300,
          color: "#5A5A5A",
          lineHeight: 1.7,
          maxWidth: "100%",
        }}
      >
        {entry.org}
      </div>
      {entry.url && (
        <div
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 10,
            letterSpacing: "1px",
            color: "#D88F78",
            marginTop: 8,
          }}
        >
          <a
            href={entry.url}
            target="_blank"
            rel="noreferrer noopener"
            style={{
              color: "#D88F78",
              textDecoration: "none",
            }}
          >
            {entry.urlText ?? entry.url}
          </a>
        </div>
      )}
      {!isLast && (
        <motion.div
          initial={{ width: 0, opacity: 0.55 }}
          whileInView={{ width: "100%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.62, delay: index * 0.15, ease: "easeOut" }}
          style={{
            height: 1,
            background: "rgba(216,143,120,0.22)",
            marginTop: 20,
          }}
        />
      )}
    </motion.div>
  );
}

function Column({
  title,
  entries,
  colIndex,
}: {
  title: string;
  entries: TimelineEntry[];
  colIndex: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, delay: colIndex * 0.15 }}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div style={{ width: 360, maxWidth: "100%" }}>
        <div
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "4px",
            color: "#D88F78",
            paddingBottom: 12,
            marginBottom: 18,
            borderBottom: "1px solid rgba(216,143,120,0.28)",
            textTransform: "uppercase",
          }}
        >
          {title}
        </div>
        {entries.map((entry, i) => (
          <Entry key={i} entry={entry} index={i} isLast={i === entries.length - 1} />
        ))}
      </div>
    </motion.div>
  );
}

export function TimelineSection() {
  return (
    <section
      style={{
        background: "#F6F3F0",
        padding: "150px 0",
        borderTop: "1px solid rgba(17,17,17,0.06)",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 80px" }}>
        {/* Section header */}
        <div style={{ marginBottom: 72 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 24,
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
              04 / WERDEGANG
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(42px, 4.6vw, 60px)",
              fontWeight: 300,
              lineHeight: 1.08,
              color: "#111111",
              margin: 0,
              letterSpacing: "-1.5px",
            }}
          >
            Erfahrung &amp;{" "}
            <em style={{ fontStyle: "italic" }}>Ausbildung</em>
          </h2>
        </div>

        {/* Three-column timeline */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 64,
          }}
        >
          <Column
            title="BERUFSERFAHRUNG"
            entries={berufserfahrung}
            colIndex={0}
          />
          <Column title="AUSBILDUNG" entries={ausbildung} colIndex={1} />
          <Column
            title="SCHULISCHE LAUFBAHN"
            entries={schulbildung}
            colIndex={2}
          />
        </div>
      </div>
    </section>
  );
}
