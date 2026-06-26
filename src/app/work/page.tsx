import { Heading, Text, Column, Row, Meta } from "@once-ui-system/core";
import { iconLibrary } from "@/resources/icons";
import { work, baseURL } from "@/resources";
import styles from "./ProjectsPage.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column
      maxWidth="m"
      fillWidth
      gap="xl"
      paddingY="12"
      style={{ margin: "0 auto" }}
    >
      {/* Header-ul paginii de proiecte */}
      <Column gap="16" fillWidth>
        <Heading variant="display-strong-xl">Omega Studio projects</Heading>
        <Text
          variant="body-default-l"
          onBackground="neutral-medium"
          style={{ maxWidth: "640px" }}
        ></Text>
      </Column>

      {/* Grid-ul de Proiecte (responsive grid, cards) */}
      <div className={styles.container} style={{ marginTop: 40 }}>
        {/* Aici am adăugat "as any" pentru a rezolva eroarea TypeScript */}
        {(work as any).projects?.map((project: any, index: number) => {
          const projectUrl = project.links?.[0]?.url || "#";
          const GlobeIcon = iconLibrary["globe"];

          // Curățăm link-ul pentru a afișa doar domeniul (ex: omega-marketplace.com)
          const displayUrl = projectUrl
            .replace("https://", "")
            .replace("http://", "");

          return (
            <div key={index} className={styles.card}>
              <a
                className={styles.linkBlock}
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <div className={styles.titleRow}>
                    <Heading
                      variant="heading-strong-m"
                      onBackground="neutral-strong"
                    >
                      {project.title}
                    </Heading>
                    {GlobeIcon && (
                      <GlobeIcon
                        style={{ width: "16px", height: "16px", opacity: 0.6 }}
                      />
                    )}
                  </div>
                  <Text
                    variant="body-default-m"
                    onBackground="neutral-medium"
                    className={styles.description}
                  >
                    {project.description}
                  </Text>

                  <div className={styles.cardFooter}>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {displayUrl}
                    </Text>
                    <span className={styles.arrow}>↗</span>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>

      <Column gap="12" fillWidth style={{ marginTop: 48 }}>
        <Heading variant="display-strong-xl">Personal projects</Heading>
      </Column>

      <div className={styles.container} style={{ marginTop: 24 }}>
        {((work as any).personalProjects || []).length > 0 ? (
          (work as any).personalProjects.map((project: any, index: number) => {
            const projectUrl = project.links?.[0]?.url || "#";
            const GlobeIcon = iconLibrary["globe"];
            const displayUrl = projectUrl
              .replace("https://", "")
              .replace("http://", "");

            return (
              <div key={index} className={styles.card}>
                <a
                  className={styles.linkBlock}
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <div className={styles.titleRow}>
                      <Heading
                        variant="heading-strong-m"
                        onBackground="neutral-strong"
                      >
                        {project.title}
                      </Heading>
                      {GlobeIcon && (
                        <GlobeIcon
                          style={{
                            width: "16px",
                            height: "16px",
                            opacity: 0.6,
                          }}
                        />
                      )}
                    </div>
                    <Text
                      variant="body-default-m"
                      onBackground="neutral-medium"
                      className={styles.description}
                    >
                      {project.description}
                    </Text>

                    <div className={styles.cardFooter}>
                      <Text
                        variant="body-default-s"
                        onBackground="neutral-weak"
                      >
                        {displayUrl}
                      </Text>
                      <span className={styles.arrow}>↗</span>
                    </div>
                  </div>
                </a>
              </div>
            );
          })
        ) : (
          <div className={styles.card}>
            <div>
              <div className={styles.titleRow}>
                <Heading
                  variant="heading-strong-m"
                  onBackground="neutral-strong"
                >
                  No personal projects yet
                </Heading>
              </div>
            </div>
          </div>
        )}
      </div>
    </Column>
  );
}
