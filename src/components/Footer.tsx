"use client";

import { usePathname } from "next/navigation";
import { Row, ToggleButton, Text } from "@once-ui-system/core";
import { person, routes, work, blog } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname() ?? "";

  return (
    <Row
      as="footer"
      fillWidth
      padding="8"
      horizontal="center"
      s={{ direction: "column" }}
    >
      <Row
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="between"
        vertical="center"
        s={{
          direction: "column",
          horizontal: "center",
          align: "center",
        }}
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{person.name}</Text>
        </Text>
        <Row gap="4" horizontal="end" style={{ display: "flex" }}>
          {routes["/"] && (
            <ToggleButton
              label="HOME"
              href="/"
              selected={pathname === "/"}
              size="s"
            />
          )}
          {routes["/work"] && (
            <ToggleButton
              label="PROJECTS"
              href="/work"
              selected={pathname.startsWith("/work")}
              size="s"
            />
          )}
          {routes["/blog"] && (
            <ToggleButton
              label="ARTICLES"
              href="/blog"
              selected={pathname.startsWith("/blog")}
              size="s"
            />
          )}
        </Row>
      </Row>
      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
};
