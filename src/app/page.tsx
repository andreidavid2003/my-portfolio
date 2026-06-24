import {
  Heading,
  Text,
  Button,
  Avatar,
  Column,
  Row,
  Icon,
  Meta,
  Schema,
} from "@once-ui-system/core";
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
      align="center"
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
        <Column gap="24">
          <Heading variant="display-strong-xl">{person.name}</Heading>
          <Heading variant="display-default-l" onBackground="neutral-weak">
            {person.role}
          </Heading>

          <Text
            variant="body-default-l"
            onBackground="neutral-medium"
            style={{ maxWidth: "85%" }}
          >
            {home.subline}
          </Text>

          {/* Icoane de Socializare */}
          <Row gap="16" marginTop="16">
            {social.map((item) => (
              <Button
                key={item.name}
                href={item.link}
                variant="tertiary"
                size="m"
              >
                <Icon name={item.icon} size="m" />
              </Button>
            ))}
          </Row>
        </Column>

        {/* SECȚIUNEA 2 COLOANE: Work (stânga) și Articole (dreapta) */}
        <Row fillWidth gap="32" marginTop="64" s={{ direction: "column" }}>
          {/* Coloana Stânga: Casetă WORK */}
          <Column
            flex={1}
            padding="32"
            border="neutral-medium"
            radius="l"
            background="neutral-alpha-weak"
          >
            <Row vertical="center" gap="16" marginBottom="32">
              <Icon name="briefcase" size="m" />
              <Heading variant="heading-strong-m">Work</Heading>
            </Row>

            <Column gap="24">
              {about.work.experiences.map((exp, index) => (
                <Row
                  key={index}
                  fillWidth
                  vertical="center"
                  style={{ justifyContent: "space-between" }}
                >
                  <Row vertical="center" gap="16">
                    <Avatar size="m" src={person.avatar} />
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
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {exp.timeframe}
                  </Text>
                </Row>
              ))}
            </Column>
          </Column>

          {/* Coloana Dreapta: PREVIZUALIZARE ARTICOLE */}
          <Column flex={1} vertical="center">
            <Column
              gap="16"
              paddingLeft="32"
              style={{ borderLeft: "1px solid var(--neutral-medium)" }}
            >
              {/* Spațiu disponibil pentru articole */}
            </Column>
          </Column>
        </Row>
      </Column>
    </Column>
  );
}
