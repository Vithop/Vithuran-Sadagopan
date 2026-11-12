import { createHandler, StartServer } from "@solidjs/start/server";

const structuredDataJson = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Vithuran Sadagopan",
    jobTitle: "Software Development Engineer II",
    worksFor: {
      "@type": "Organization",
      name: "Amazon",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "McMaster University",
    },
    url: "https://vithop.github.io/Vithuran-Sadagopan/",
    email: "mailto:vithuran.sada@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    sameAs: [
      "https://github.com/vithop",
      "https://linkedin.com/in/vithuran-sada",
    ],
    knowsAbout: [
      "Distributed Systems",
      "TypeScript",
      "Rust",
      "SolidJS",
      "React",
      "Node.js",
      "AWS Lambda",
      "GraphQL",
      "Deterministic State Machines",
      "Model Context Protocol (MCP)",
      "AI Developer Tooling",
    ],
  },
});

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="icon"
            type="image/svg+xml"
            href={`${import.meta.env.BASE_URL}favicon.svg?v=9`}
          />
          <script type="application/ld+json">{structuredDataJson}</script>
          {assets}
        </head>
        <body>
          <div id="root">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
