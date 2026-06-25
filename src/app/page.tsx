import {
  Heading,
  Text,
  Button,
  Avatar,
  Column,
  Row,
  Meta,
  Schema,
} from "@once-ui-system/core";
// Importul aliniat structurii tale de foldere:
import { iconLibrary } from "@/resources/icons";
import { home, about, person, baseURL, social } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column
      maxWidth="m"
      fillWidth
      gap="xl"
      paddingY="12"
      /* Am șters "align='center'" de aici pentru ca textul și butoanele să se alinieze la stânga */
      style={{ margin: "0 auto" }}
    >
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column fillWidth gap="32" marginTop="xl">
        {/* SECȚIUNEA PRINCIPALĂ: Nume, Rol, Bio, Icoane de Socializare */}
        <Column gap="32" fillWidth>
          {/* Numele și Rolul */}
          <Column gap="12">
            <Heading variant="display-strong-xl">{person.name}</Heading>
            <Heading variant="display-default-s" onBackground="neutral-weak">
              {person.role}
            </Heading>
          </Column>

          {/* Descrierea */}
          <Text
            variant="body-default-l"
            onBackground="neutral-medium"
            style={{ maxWidth: "720px", lineHeight: "1.7" }}
          >
            {home.subline}
          </Text>

          {/* Icoane de Socializare și Buton CV */}
          <Row gap="16" vertical="center" wrap>
            <Button
              href="/David Andrei-Gabriel CV.pdf"
              target="_blank"
              variant="primary"
              size="m"
            >
              Show my CV
            </Button>

            <Row gap="16">
              {social.map((item) => {
                const SocialIcon = iconLibrary[item.icon];
                return (
                  <Button
                    key={item.name}
                    href={item.link}
                    variant="tertiary"
                    size="m"
                  >
                    {SocialIcon && (
                      <SocialIcon style={{ width: "20px", height: "20px" }} />
                    )}
                  </Button>
                );
              })}
            </Row>
          </Row>
        </Column>

        {/* SECȚIUNEA 2 COLOANE: Stânga (Work + Skills) / Dreapta (Articole) */}
        <Row fillWidth gap="32" marginTop="64" s={{ direction: "column" }}>
          {/* COLOANA STÂNGĂ */}
          <Column flex={1} gap="48">
            {/* 1. Caseta WORK */}
            <Column
              fillWidth
              padding="32"
              border="neutral-medium"
              radius="l"
              background="neutral-alpha-weak"
            >
              <Row vertical="center" gap="16" marginBottom="32">
                <Text variant="display-strong-xs">💼</Text>
                <Heading variant="heading-strong-m">Work</Heading>
              </Row>

              <Column gap="24">
                {about.work.experiences.map((exp: any, index) => {
                  const JobContent = (
                    <Row
                      fillWidth
                      vertical="center"
                      style={{
                        justifyContent: "space-between",
                        padding: "8px",
                        borderRadius: "8px",
                      }}
                    >
                      <Row vertical="center" gap="16">
                        <Avatar size="m" src={exp.logo || person.avatar} />
                        <Column>
                          <Text variant="body-strong-m">{exp.company}</Text>
                          <Text
                            variant="body-default-s"
                            onBackground="neutral-weak"
                          >
                            {exp.role}
                          </Text>
                        </Column>
                      </Row>
                      <Text
                        variant="body-default-s"
                        onBackground="neutral-weak"
                      >
                        {exp.timeframe}
                      </Text>
                    </Row>
                  );

                  return exp.link ? (
                    <a
                      key={index}
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "block",
                      }}
                    >
                      {JobContent}
                    </a>
                  ) : (
                    <div key={index}>{JobContent}</div>
                  );
                })}
              </Column>
            </Column>

            {/* 2. Secțiunea SKILL-URI TEHNICE */}
            {about.technical.display && (
              <Column gap="32" fillWidth>
                <Heading variant="display-strong-xs">
                  {about.technical.title}
                </Heading>

                <Column gap="32" fillWidth>
                  {about.technical.skills.map((skill, index) => (
                    <Column key={index} gap="12" fillWidth>
                      <Column gap="4">
                        <Text
                          variant="heading-strong-s"
                          onBackground="neutral-strong"
                        >
                          {skill.title}
                        </Text>
                        <Text
                          variant="body-default-s"
                          onBackground="neutral-medium"
                        >
                          {skill.description}
                        </Text>
                      </Column>

                      <Row gap="8" wrap style={{ width: "100%" }}>
                        {skill.tags?.map((item, tagIndex) => {
                          const tag = item as any;
                          const TechIcon = iconLibrary[tag.icon];

                          return (
                            <a
                              key={tagIndex}
                              href={tag.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={tag.name}
                              style={{
                                textDecoration: "none",
                                flex: 1,
                                minWidth: "48px",
                              }}
                            >
                              <Row
                                vertical="center"
                                background="neutral-alpha-weak"
                                radius="m"
                                border="neutral-medium"
                                style={{
                                  padding: "12px",
                                  justifyContent: "center",
                                  width: "100%",
                                }}
                              >
                                {TechIcon && (
                                  <TechIcon
                                    style={{ width: "20px", height: "20px" }}
                                  />
                                )}
                              </Row>
                            </a>
                          );
                        })}
                      </Row>
                    </Column>
                  ))}
                </Column>
              </Column>
            )}
          </Column>

          {/* COLOANA DREAPTĂ: PREVIZUALIZARE ARTICOLE */}
          <Column flex={1}>
            <Column
              gap="16"
              paddingLeft="32"
              style={{
                borderLeft: "1px solid var(--neutral-medium)",
                height: "100%",
              }}
            >
              {/* Spațiu disponibil pentru articole */}
            </Column>
          </Column>
        </Row>
      </Column>
    </Column>
  );
}
