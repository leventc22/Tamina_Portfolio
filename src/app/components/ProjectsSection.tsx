import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Hugo49Image from "../../assets/Hugo49.png?url";
import WilhelmineImage from "../../assets/Willhelmine.png?url";
import BuettnerImage from "../../assets/Büttner.png?url";
import HUKImage from "../../assets/HUK.png?url";
import SuheylxImage from "../../assets/Suheylx.png?url";

const projects = [
  {
    title: "hugo49°",
    description:
      "Markenkommunikation und Kampagnenentwicklung für ein modernes Immobilien- und Lifestyle-Konzept mit starker visueller Sprache.",
    imageUrl: Hugo49Image,
    category: "Immobilienmarketing & Markenkommunikation",
    tag: "Kampagne & Branding",
  },
  {
    title: "Wilhelmine Stadtmagazin",
    description:
      "Mitentwicklung eines regionalen Stadtmagazins mit Fokus auf Redaktion, Vermarktung, Social Media und lokaler Berichterstattung.",
    imageUrl: WilhelmineImage,
    category: "Editorial & Content",
    tag: "Editorial & Content",
  },
  {
    title: "Simply Home by Büttner",
    description:
      "Entwicklung einer zielgruppenorientierten Submarke sowie Konzeption und Umsetzung verschiedener Kommunikationsmaßnahmen für ein modernes Musterhaus-Konzept.",
    imageUrl: BuettnerImage,
    category: "Markenentwicklung & Immobilienmarketing",
    tag: "Markenentwicklung",
  },
  {
    title: "HUK-COBURG Kundendienstbüro Joana Hahn",
    description:
      "Strategische Weiterentwicklung der digitalen Kommunikation durch Social Media Management, Content Creation und visuelle Markenführung für das HUK-COBURG Kundendienstbüro Joana Hahn.",
    imageUrl: HUKImage,
    category: "Social Media & Markenkommunikation",
    tag: "Social Media",
  },
  {
    title: "Suheylx",
    description:
      "Eigenständig entwickelte Schmuckmarke mit Fokus auf personalisierbaren Schmuck, emotionales Branding und modernen E-Commerce.",
    imageUrl: SuheylxImage,
    category: "Brand Development & E-Commerce",
    tag: "Own Brand & E-Commerce",
  },
];

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  const selectedProject = activeProject
    ? projects.find((project) => project.title === activeProject) ?? null
    : null;
  const isWilhelmineSelected =
    selectedProject?.title === "Wilhelmine Stadtmagazin";
  const isBuettnerSelected =
    selectedProject?.title === "Simply Home by Büttner";
  const isHUKSelected =
    selectedProject?.title === "HUK-COBURG Kundendienstbüro Joana Hahn";
  const isSuheylxSelected =
    selectedProject?.title === "Suheylx";

  return (
    <section
      style={{
        background: "#F0EBE7",
        padding: "160px 0",
        borderTop: "1px solid rgba(17,17,17,0.06)",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 80px" }}>
        {/* Section header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "flex-end",
            marginBottom: 80,
          }}
        >
          <div>
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
                05 / PROJEKTE
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(40px, 4vw, 60px)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "#111111",
                margin: 0,
                letterSpacing: "-1.5px",
              }}
            >
              Highlight-
              <em style={{ fontStyle: "italic" }}>Projekte</em>
            </h2>
          </div>

          <div style={{ paddingBottom: 4 }}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                fontWeight: 300,
                lineHeight: 1.85,
                color: "#666666",
                margin: 0,
              }}
            >
              Hier finden Sie eine Auswahl von Projekten, die ich von der Idee bis zur Umsetzung begleiten durfte – von Markenkommunikation und Content Creation bis hin zu Social Media und Kampagnenentwicklung.
            </p>
          </div>
        </div>

        {/* 2 × 2 project grid */}
        <div className="project-grid">
          {projects.map((project, i) => {
            const isInteractive =
              project.title === "hugo49°" ||
              project.title === "Wilhelmine Stadtmagazin" ||
              project.title === "Simply Home by Büttner" ||
              project.title === "HUK-COBURG Kundendienstbüro Joana Hahn" ||
              project.title === "Suheylx";

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                whileHover={{ y: isInteractive ? -8 : -4 }}
                onClick={() => isInteractive && setActiveProject(project.title)}
                onKeyDown={(event) => {
                  if (
                    isInteractive &&
                    (event.key === "Enter" || event.key === " ")
                  ) {
                    event.preventDefault();
                    setActiveProject(project.title);
                  }
                }}
                role={isInteractive ? "button" : undefined}
                tabIndex={isInteractive ? 0 : undefined}
                style={{
                  background: "#FFFFFF",
                  overflow: "hidden",
                  cursor: isInteractive ? "pointer" : "default",
                  border: "1px solid rgba(17,17,17,0.08)",
                  borderRadius: 24,
                  boxShadow: "0 28px 70px rgba(17,17,17,0.06)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                }}
              >
                {/* Image */}
                <motion.div
                  whileHover={isInteractive ? { scale: 1.03 } : undefined}
                  style={{
                    height: 340,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <ImageWithFallback
                    src={project.imageUrl}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.7s ease",
                    }}
                  />
                  {/* Gradient overlay */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "50%",
                      background:
                        "linear-gradient(to top, rgba(17,17,17,0.15) 0%, transparent 100%)",
                      pointerEvents: "none",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 20,
                      left: 20,
                      background: "rgba(246,243,240,0.95)",
                      padding: "8px 16px",
                      borderRadius: 999,
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "2.4px",
                      color: "#D88F78",
                      textTransform: "uppercase",
                    }}
                  >
                    {project.tag}
                  </div>
                </motion.div>

                {/* Card content */}
                <div style={{ padding: "32px" }}>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 30,
                      fontWeight: 400,
                      lineHeight: 1.18,
                      color: "#111111",
                      margin: "0 0 14px 0",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 15,
                      fontWeight: 300,
                      lineHeight: 1.8,
                      color: "#555555",
                      margin: "0 0 28px 0",
                      opacity: 0.95,
                    }}
                  >
                    {project.description}
                  </p>
                  {!isInteractive && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <div
                        style={{ width: 24, height: 1, background: "#D88F78" }}
                      />
                      <span
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 9,
                          letterSpacing: "2.5px",
                          color: "#D88F78",
                        }}
                      >
                        MEHR ERFAHREN
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(17,17,17,0.55)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
          onClick={() => setActiveProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 900,
              maxHeight: "calc(100vh - 48px)",
              overflowY: "auto",
              background: "rgba(255,255,255,0.98)",
              borderRadius: 28,
              boxShadow: "0 24px 60px rgba(17,17,17,0.16)",
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setActiveProject(null)}
              aria-label="Schließen"
              style={{
                position: "absolute",
                top: 24,
                right: 24,
                width: 40,
                height: 40,
                border: "none",
                background: "transparent",
                color: "#111111",
                fontSize: 22,
                cursor: "pointer",
                lineHeight: 1,
                zIndex: 2,
              }}
            >
              ×
            </button>

            <div
              style={{
                height: 420,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <ImageWithFallback
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <div
              style={{
                padding: "42px 42px 54px",
                maxWidth: 760,
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "3px",
                  color: "#D88F78",
                  textTransform: "uppercase",
                  marginBottom: 18,
                }}
              >
                {selectedProject.category || selectedProject.tag}
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(38px, 4.4vw, 48px)",
                  fontWeight: 300,
                  lineHeight: 1.05,
                  color: "#111111",
                  margin: 0,
                  letterSpacing: "-1px",
                }}
              >
                {selectedProject.title}
              </h2>
              {isWilhelmineSelected ? (
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 16,
                    fontWeight: 300,
                    lineHeight: 1.85,
                    color: "#555555",
                    margin: "24px 0 0 0",
                    maxWidth: 760,
                  }}
                >
                  Das Wilhelmine Stadtmagazin wurde als regionales Magazin für
                  Bayreuth gegründet und widmet sich lokalen Geschichten,
                  Kultur, Wirtschaft und gesellschaftlichen Themen. Namensgeberin
                  ist die Markgräfin Wilhelmine von Bayreuth, eine der
                  bedeutendsten historischen Persönlichkeiten der Stadt.
                </p>
              ) : isBuettnerSelected ? (
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 16,
                    fontWeight: 300,
                    lineHeight: 1.85,
                    color: "#555555",
                    margin: "24px 0 0 0",
                    maxWidth: 760,
                  }}
                >
                  Für Büttner Massivhaus unterstützte ich die Entwicklung und
                  Vermarktung der neuen Submarke „Simply Home by Büttner“. Ziel
                  war es, die verschiedenen Musterhausgrößen und Preiskategorien
                  verständlich, emotional und zielgruppenorientiert zu
                  kommunizieren.
                </p>
              ) : isHUKSelected ? (
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 16,
                    fontWeight: 300,
                    lineHeight: 1.85,
                    color: "#555555",
                    margin: "24px 0 0 0",
                    maxWidth: 760,
                  }}
                >
                  Für das HUK-COBURG Kundendienstbüro Joana Hahn unterstützte ich
                  die digitale Markenkommunikation mit dem Ziel, die lokale
                  Sichtbarkeit zu erhöhen und Versicherungsleistungen modern,
                  verständlich und nahbar zu präsentieren.
                </p>
              ) : isSuheylxSelected ? (
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 16,
                    fontWeight: 300,
                    lineHeight: 1.85,
                    color: "#555555",
                    margin: "24px 0 0 0",
                    maxWidth: 760,
                  }}
                >
                  Suheylx entstand 2025 als eigenständig entwickelte Schmuckmarke
                  mit dem Ziel, hochwertigen und personalisierbaren Schmuck mit
                  emotionalem Mehrwert zu verbinden.
                </p>
              ) : (
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 16,
                    fontWeight: 300,
                    lineHeight: 1.85,
                    color: "#555555",
                    margin: "24px 0 0 0",
                    maxWidth: 760,
                  }}
                >
                  Markenkommunikation und Kampagnenentwicklung für ein modernes
                  Immobilien- und Lifestyle-Konzept mit starker visueller Sprache.
                </p>
              )}

              <div style={{ marginTop: 44, display: "grid", gap: 38 }}>
                {isWilhelmineSelected ? (
                  <>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 12,
                          fontWeight: 600,
                          letterSpacing: "3px",
                          color: "#111111",
                          textTransform: "uppercase",
                          marginBottom: 16,
                        }}
                      >
                        ÜBER DAS PROJEKT
                      </div>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          fontWeight: 300,
                          lineHeight: 1.85,
                          color: "#555555",
                          margin: 0,
                          maxWidth: 760,
                        }}
                      >
                        Das Wilhelmine Stadtmagazin wurde als regionales Magazin für
                        Bayreuth gegründet und widmet sich lokalen Geschichten,
                        Kultur, Wirtschaft und gesellschaftlichen Themen.
                        Namensgeberin ist die Markgräfin Wilhelmine von Bayreuth,
                        eine der bedeutendsten historischen Persönlichkeiten der
                        Stadt.
                      </p>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          fontWeight: 300,
                          lineHeight: 1.85,
                          color: "#555555",
                          margin: "24px 0 0 0",
                          maxWidth: 760,
                        }}
                      >
                        Ich war von Beginn an Teil des Projekts und begleitete den
                        Aufbau des Magazins gemeinsam mit dem Team von der ersten
                        Idee bis zur Veröffentlichung. Neben redaktionellen Aufgaben
                        übernahm ich organisatorische, kaufmännische und vertriebliche
                        Tätigkeiten und unterstützte die Entwicklung des Magazins als
                        eigenständige Marke.
                      </p>
                    </div>

                    <div>
                      <div
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 12,
                          fontWeight: 600,
                          letterSpacing: "3px",
                          color: "#111111",
                          textTransform: "uppercase",
                          marginBottom: 16,
                        }}
                      >
                        MEINE AUFGABEN
                      </div>
                      <ul
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          fontWeight: 300,
                          lineHeight: 1.85,
                          color: "#555555",
                          margin: 0,
                          paddingLeft: 24,
                          listStyleType: "disc",
                          listStylePosition: "outside",
                          display: "grid",
                          rowGap: 16,
                          maxWidth: 760,
                        }}
                      >
                        <li>Recherche und Aufbereitung von Themen rund um Bayreuth und die Markgräfin Wilhelmine</li>
                        <li>Verfassen redaktioneller Texte und Artikel</li>
                        <li>Vorbereitung, Durchführung und Nachbereitung von Interviews</li>
                        <li>Organisation und Begleitung von Fotoshootings</li>
                        <li>Strukturierung des Magazinaufbaus inklusive Seitenplanung und Seitenaufrissen</li>
                        <li>Akquise von Anzeigenkunden zur Finanzierung des Magazins</li>
                        <li>Kaufmännische Abwicklung und Rechnungsmanagement</li>
                        <li>Betreuung und Weiterentwicklung des Wilhelmine Instagram Accounts</li>
                        <li>Planung und Erstellung von Social-Media-Inhalten</li>
                        <li>Abstimmung mit Kunden, Partnern und Projektbeteiligten</li>
                      </ul>
                    </div>

                    <div>
                      <div
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 12,
                          fontWeight: 600,
                          letterSpacing: "3px",
                          color: "#111111",
                          textTransform: "uppercase",
                          marginBottom: 16,
                        }}
                      >
                        MEIN BEITRAG
                      </div>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          fontWeight: 300,
                          lineHeight: 1.85,
                          color: "#555555",
                          margin: 0,
                          maxWidth: 760,
                        }}
                      >
                        Als Teil des Gründungsteams unterstützte ich die Entwicklung
                        des Magazins von Grund auf. Mein Verantwortungsbereich reichte
                        von Redaktion und Themenentwicklung über Social Media bis hin
                        zu Vertrieb und kaufmännischer Organisation.
                      </p>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          fontWeight: 300,
                          lineHeight: 1.85,
                          color: "#555555",
                          margin: "24px 0 0 0",
                          maxWidth: 760,
                        }}
                      >
                        Besonders die eigenständige Akquise von Anzeigenkunden, die
                        Betreuung des Instagram-Auftritts sowie die Mitgestaltung der
                        redaktionellen Inhalte trugen dazu bei, das Magazin erfolgreich
                        am Markt zu etablieren.
                      </p>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          fontWeight: 300,
                          lineHeight: 1.85,
                          color: "#555555",
                          margin: "24px 0 0 0",
                          maxWidth: 760,
                        }}
                      >
                        Bereits nach der ersten Ausgabe erhielten wir äußerst positives
                        Feedback von Leserinnen und Lesern – sowohl persönlich als auch
                        über die digitalen Kanäle. Das Projekt zeigte eindrucksvoll,
                        wie regionale Geschichten, strategische Vermarktung und starke
                        Inhalte zu einer erfolgreichen Publikation zusammengeführt
                        werden können.
                      </p>
                    </div>
                  </>
                ) : isBuettnerSelected ? (
                  <>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 12,
                          fontWeight: 600,
                          letterSpacing: "3px",
                          color: "#111111",
                          textTransform: "uppercase",
                          marginBottom: 16,
                        }}
                      >
                        ÜBER DAS PROJEKT
                      </div>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          fontWeight: 300,
                          lineHeight: 1.85,
                          color: "#555555",
                          margin: 0,
                          maxWidth: 760,
                        }}
                      >
                        Für Büttner Massivhaus unterstützte ich die Entwicklung und
                        Vermarktung der neuen Submarke „Simply Home by Büttner“. Ziel war
                        es, die verschiedenen Musterhausgrößen und Preiskategorien
                        verständlich, emotional und zielgruppenorientiert zu
                        kommunizieren.
                      </p>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          fontWeight: 300,
                          lineHeight: 1.85,
                          color: "#555555",
                          margin: "24px 0 0 0",
                          maxWidth: 760,
                        }}
                      >
                        Auf Basis einer ausführlichen Zielgruppenanalyse entstand
                        gemeinsam mit dem Team eine eigenständige Markenwelt innerhalb
                        der Dachmarke Büttner. Die Submarke sollte die einfache und
                        unkomplizierte Realisierung eines Eigenheims in den Mittelpunkt
                        stellen und die verschiedenen Hausgrößen klar differenzieren.
                      </p>
                    </div>

                    <div>
                      <div
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 12,
                          fontWeight: 600,
                          letterSpacing: "3px",
                          color: "#111111",
                          textTransform: "uppercase",
                          marginBottom: 16,
                        }}
                      >
                        MEINE AUFGABEN
                      </div>
                      <ul
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          fontWeight: 300,
                          lineHeight: 1.85,
                          color: "#555555",
                          margin: 0,
                          paddingLeft: 24,
                          listStyleType: "disc",
                          listStylePosition: "outside",
                          display: "grid",
                          rowGap: 16,
                          maxWidth: 760,
                        }}
                      >
                        <li>Erstellung einer detaillierten Zielgruppenanalyse</li>
                        <li>Unterstützung bei der Entwicklung der Submarke „Simply Home by Büttner“</li>
                        <li>Mitwirkung bei der Konzeption und Umsetzung des Exposés</li>
                        <li>Koordination und Umsetzung verschiedener Printprodukte</li>
                        <li>Einholung und Abstimmung von Angeboten externer Dienstleister</li>
                        <li>Erstellung eines umfassenden Mediaplans</li>
                        <li>Budgetplanung und Kostenkoordination</li>
                        <li>Abstimmung mit Radiosendern und Zeitungsverlagen</li>
                        <li>Kaufmännische Projektunterstützung</li>
                      </ul>
                    </div>

                    <div>
                      <div
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 12,
                          fontWeight: 600,
                          letterSpacing: "3px",
                          color: "#111111",
                          textTransform: "uppercase",
                          marginBottom: 16,
                        }}
                      >
                        MEIN BEITRAG
                      </div>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          fontWeight: 300,
                          lineHeight: 1.85,
                          color: "#555555",
                          margin: 0,
                          maxWidth: 760,
                        }}
                      >
                        Durch strategische Recherche, strukturierte Projektkoordination
                        und kaufmännische Unterstützung konnte ich die erfolgreiche
                        Einführung der Submarke begleiten.
                      </p>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          fontWeight: 300,
                          lineHeight: 1.85,
                          color: "#555555",
                          margin: "24px 0 0 0",
                          maxWidth: 760,
                        }}
                      >
                        Von der Zielgruppenanalyse über die Kommunikationsstrategie bis
                        hin zu Mediaplanung und Umsetzung verschiedener Werbemaßnahmen
                        unterstützte ich die Entwicklung einer konsistenten und
                        professionellen Markenkommunikation.
                      </p>
                    </div>
                  </>
                ) : isHUKSelected ? (
                  <>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 12,
                          fontWeight: 600,
                          letterSpacing: "3px",
                          color: "#111111",
                          textTransform: "uppercase",
                          marginBottom: 16,
                        }}
                      >
                        ÜBER DAS PROJEKT
                      </div>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          fontWeight: 300,
                          lineHeight: 1.85,
                          color: "#555555",
                          margin: 0,
                          maxWidth: 760,
                        }}
                      >
                        Für das HUK-COBURG Kundendienstbüro Joana Hahn unterstützte ich
                        die digitale Markenkommunikation mit dem Ziel, die lokale
                        Sichtbarkeit zu erhöhen und Versicherungsleistungen modern,
                        verständlich und nahbar zu präsentieren.
                      </p>
                    </div>

                    <div>
                      <div
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 12,
                          fontWeight: 600,
                          letterSpacing: "3px",
                          color: "#111111",
                          textTransform: "uppercase",
                          marginBottom: 16,
                        }}
                      >
                        MEINE AUFGABEN
                      </div>
                      <ul
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          fontWeight: 300,
                          lineHeight: 1.85,
                          color: "#555555",
                          margin: 0,
                          paddingLeft: 24,
                          listStyleType: "disc",
                          listStylePosition: "outside",
                          display: "grid",
                          rowGap: 16,
                          maxWidth: 760,
                        }}
                      >
                        <li>Betreuung und Weiterentwicklung der Social-Media-Kanäle</li>
                        <li>Planung und Erstellung von Content für Instagram, Facebook und TikTok</li>
                        <li>Entwicklung von Bild-, Video- und Textformaten</li>
                        <li>Gestaltung von Werbe- und Kommunikationsmaterialien</li>
                        <li>Durchführung von Foto- und Videoaufnahmen</li>
                        <li>Unterstützung bei Veranstaltungen und Kundenaktionen</li>
                        <li>Entwicklung eines einheitlichen visuellen Auftritts</li>
                        <li>Recherche aktueller Trends und Content-Ideen</li>
                        <li>Unterstützung der digitalen Markenkommunikation</li>
                        <li>Abstimmung von Kampagnen und Inhalten mit dem Kundendienstbüro</li>
                      </ul>
                    </div>

                    <div>
                      <div
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 12,
                          fontWeight: 600,
                          letterSpacing: "3px",
                          color: "#111111",
                          textTransform: "uppercase",
                          marginBottom: 16,
                        }}
                      >
                        MEIN BEITRAG
                      </div>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          fontWeight: 300,
                          lineHeight: 1.85,
                          color: "#555555",
                          margin: 0,
                          maxWidth: 760,
                        }}
                      >
                        Mein Schwerpunkt lag auf der kreativen und strategischen
                        Weiterentwicklung der digitalen Außendarstellung des
                        Kundendienstbüros.
                      </p>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          fontWeight: 300,
                          lineHeight: 1.85,
                          color: "#555555",
                          margin: "24px 0 0 0",
                          maxWidth: 760,
                        }}
                      >
                        Durch die eigenständige Erstellung von Bild-, Video- und
                        Grafikmaterialien sowie eine strukturierte Content-Planung
                        konnte die Online-Präsenz professionell ausgebaut werden.
                      </p>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          fontWeight: 300,
                          lineHeight: 1.85,
                          color: "#555555",
                          margin: "24px 0 0 0",
                          maxWidth: 760,
                        }}
                      >
                        Besonders erfolgreich entwickelte sich der Instagram-Kanal,
                        dessen Community während meiner Tätigkeit von rund 100 auf
                        über 650 Follower wuchs.
                      </p>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          fontWeight: 300,
                          lineHeight: 1.85,
                          color: "#555555",
                          margin: "24px 0 0 0",
                          maxWidth: 760,
                        }}
                      >
                        Zusätzlich unterstützte ich den Aufbau eines TikTok-Kanals,
                        dessen erste Inhalte bereits organisch Reichweiten von rund
                        1.000 Aufrufen erzielten.
                      </p>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          fontWeight: 300,
                          lineHeight: 1.85,
                          color: "#555555",
                          margin: "24px 0 0 0",
                          maxWidth: 760,
                        }}
                      >
                        Die Kombination aus Content Creation, visueller Gestaltung
                        und Social-Media-Management sorgte für einen konsistenten
                        Markenauftritt und stärkte die digitale Wahrnehmung des
                        Kundendienstbüros nachhaltig.
                      </p>
                    </div>
                  </>
                ) : isSuheylxSelected ? (
                  <>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 12,
                          fontWeight: 600,
                          letterSpacing: "3px",
                          color: "#111111",
                          textTransform: "uppercase",
                          marginBottom: 16,
                        }}
                      >
                        ÜBER DAS PROJEKT
                      </div>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          fontWeight: 300,
                          lineHeight: 1.85,
                          color: "#555555",
                          margin: 0,
                          maxWidth: 760,
                        }}
                      >
                        Suheylx entstand 2025 als eigenständig entwickelte Schmuckmarke
                        mit dem Ziel, hochwertigen und personalisierbaren Schmuck mit
                        emotionalem Mehrwert zu verbinden.
                      </p>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          fontWeight: 300,
                          lineHeight: 1.85,
                          color: "#555555",
                          margin: "24px 0 0 0",
                          maxWidth: 760,
                        }}
                      >
                        Von der Markenstrategie über das Corporate Design bis hin zur
                        technischen Umsetzung des Onlineshops wurde die gesamte Marke
                        vollständig selbst entwickelt und aufgebaut.
                      </p>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          fontWeight: 300,
                          lineHeight: 1.85,
                          color: "#555555",
                          margin: "24px 0 0 0",
                          maxWidth: 760,
                        }}
                      >
                        Die Marke steht für moderne Designs, individuelle Erinnerungen
                        und Schmuckstücke, die persönliche Geschichten sichtbar machen.
                      </p>
                    </div>

                    <div>
                      <div
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 12,
                          fontWeight: 600,
                          letterSpacing: "3px",
                          color: "#111111",
                          textTransform: "uppercase",
                          marginBottom: 16,
                        }}
                      >
                        MEINE AUFGABEN
                      </div>
                      <ul
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          fontWeight: 300,
                          lineHeight: 1.85,
                          color: "#555555",
                          margin: 0,
                          paddingLeft: 24,
                          listStyleType: "disc",
                          listStylePosition: "outside",
                          display: "grid",
                          rowGap: 16,
                          maxWidth: 760,
                        }}
                      >
                        <li>Entwicklung der Markenstrategie und Positionierung</li>
                        <li>Konzeption und Gestaltung der kompletten Brand Identity</li>
                        <li>Logo- und Corporate-Design-Entwicklung</li>
                        <li>Aufbau und Gestaltung des Onlineshops</li>
                        <li>Produktpräsentation und Content Creation</li>
                        <li>Social-Media-Marketing und Community-Aufbau</li>
                        <li>Influencer-Kooperationen und Kampagnenplanung</li>
                        <li>Kundenkommunikation und Bestellabwicklung</li>
                        <li>Einkauf, Organisation und Vertriebsmanagement</li>
                        <li>Laufende Optimierung der digitalen Präsenz</li>
                      </ul>
                    </div>

                    <div>
                      <div
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 12,
                          fontWeight: 600,
                          letterSpacing: "3px",
                          color: "#111111",
                          textTransform: "uppercase",
                          marginBottom: 16,
                        }}
                      >
                        ERGEBNIS
                      </div>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          fontWeight: 300,
                          lineHeight: 1.85,
                          color: "#555555",
                          margin: 0,
                          maxWidth: 760,
                        }}
                      >
                        Mit Suheylx entstand ein vollständig eigenständig aufgebautes
                        E-Commerce-Projekt, das strategische Markenentwicklung,
                        digitales Design und unternehmerisches Denken miteinander
                        verbindet.
                      </p>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          fontWeight: 300,
                          lineHeight: 1.85,
                          color: "#555555",
                          margin: "24px 0 0 0",
                          maxWidth: 760,
                        }}
                      >
                        Die Marke verfügt über eine klare visuelle Identität, eine
                        moderne Online-Präsenz und ein konsistentes Markenerlebnis
                        über sämtliche Kanäle hinweg.
                      </p>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          fontWeight: 300,
                          lineHeight: 1.85,
                          color: "#555555",
                          margin: "24px 0 0 0",
                          maxWidth: 760,
                        }}
                      >
                        Das Projekt zeigt die Fähigkeit, eine Marke von der ersten
                        Idee bis zur erfolgreichen Umsetzung ganzheitlich zu
                        entwickeln, aufzubauen und kontinuierlich weiterzuentwickeln.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 12,
                          fontWeight: 600,
                          letterSpacing: "3px",
                          color: "#111111",
                          textTransform: "uppercase",
                          marginBottom: 16,
                        }}
                      >
                        ÜBER DAS PROJEKT
                      </div>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          fontWeight: 300,
                          lineHeight: 1.85,
                          color: "#555555",
                          margin: 0,
                          maxWidth: 760,
                        }}
                      >
                        Im Rahmen des Projekts unterstützte ich die Entwicklung und
                        Vermarktung eines modernen Immobilien- und Lifestyle-Konzepts.
                        Mein Fokus lag auf Recherche, Organisation und kaufmännischer
                        Unterstützung, um Vermarktungsprozesse effizient zu begleiten
                        und zielgruppenorientiert umzusetzen.
                      </p>
                    </div>

                    <div>
                      <div
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 12,
                          fontWeight: 600,
                          letterSpacing: "3px",
                          color: "#111111",
                          textTransform: "uppercase",
                          marginBottom: 16,
                        }}
                      >
                        MEINE AUFGABEN
                      </div>
                      <ul
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          fontWeight: 300,
                          lineHeight: 1.85,
                          color: "#555555",
                          margin: 0,
                          paddingLeft: 24,
                          listStyleType: "disc",
                          listStylePosition: "outside",
                          display: "grid",
                          rowGap: 16,
                          maxWidth: 760,
                        }}
                      >
                        <li>Recherche und Unterstützung bei der Ausarbeitung von Exposés</li>
                        <li>Analyse von Mikro- und Makrolagen</li>
                        <li>Auswahl zielgruppenorientierter Einrichtungskonzepte für Renderings</li>
                        <li>Organisation von Vertriebs- und Marketingevents</li>
                        <li>Unterstützung des Vertriebsteams der Winkler und Brendel Immobilien GmbH</li>
                        <li>Erstellung von Angeboten und Rechnungen</li>
                        <li>Einholung und Vergleich von Angeboten externer Dienstleister</li>
                        <li>Kalkulationen und Budgetunterstützung</li>
                        <li>Korrespondenz mit Kunden und Partnern</li>
                        <li>Abstimmung zwischen Projektbeteiligten und Vertrieb</li>
                      </ul>
                    </div>

                    <div>
                      <div
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 12,
                          fontWeight: 600,
                          letterSpacing: "3px",
                          color: "#111111",
                          textTransform: "uppercase",
                          marginBottom: 16,
                        }}
                      >
                        MEIN BEITRAG
                      </div>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          fontWeight: 300,
                          lineHeight: 1.85,
                          color: "#555555",
                          margin: 0,
                          maxWidth: 760,
                        }}
                      >
                        Durch strukturierte Organisation, sorgfältige Recherche und eine
                        zielgruppenorientierte Arbeitsweise konnte ich die Vermarktung
                        verschiedener Projekte unterstützen und interne Prozesse effizient
                        begleiten.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

