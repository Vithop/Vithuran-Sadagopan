import { Router, Route } from "@solidjs/router";
import { Suspense } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import "./index.css";
import App from "./routes/index.tsx";

export default function Root() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>Vithuran Sadagopan // Software Development Engineer</Title>
          <Meta name="theme-color" content="#eae5dc" />
          <Meta
            name="description"
            content="Vithuran Sadagopan — Software Development Engineer building highly available distributed systems and high-craft interfaces."
          />
          <Meta property="og:title" content="Vithuran Sadagopan // Software Development Engineer" />
          <Meta property="og:description" content="Software Development Engineer building highly available distributed systems, deterministic state machines, and tactile interfaces." />
          <Meta property="og:type" content="website" />
          <Meta name="twitter:card" content="summary" />
          <Meta name="twitter:title" content="Vithuran Sadagopan // Software Development Engineer" />
          <Meta name="twitter:description" content="Software Development Engineer building highly available distributed systems and tactile interfaces." />
          
          <Link rel="preload" href="/fonts/Maqive-q2gn2.ttf" as="font" type="font/ttf" crossorigin="anonymous" />
          <Link rel="preconnect" href="https://fonts.googleapis.com" />
          <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
          <Link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          />

          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <Route path="/" component={App} />
    </Router>
  );
}
