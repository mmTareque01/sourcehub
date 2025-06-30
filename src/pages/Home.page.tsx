import { BASE } from "@/app/(public)/layout";
import Hero from "@/components/Hero";
import ProjectsList from "@/components/ProjectsList";
import Wrapper from "@/components/Wrapper";
import Head from "next/head";

export default async function HomePage({ page = 1, q = '' }: { page?: number, q?: string }) {
  const pageSize = 10;

  // Example project items (replace with real project data for dynamic structured data)
  const structuredProjects = [
    {
      name: "Next.js SaaS Boilerplate",
      url: `${BASE}/project/nextjs-saas`,
      position: 1
    },
    {
      name: "Laravel CRM Starter",
      url: `${BASE}/project/laravel-crm`,
      position: 2
    }
  ];

  return (
    <Wrapper>
      <Head>
        <title>Open Source hub | Discover Quality Open Source Projects</title>
        <meta
          name="description"
          content="Discover and explore high-quality open source projects with full source code in React, Node.js, Python, Laravel, and more on Open Source hub."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={BASE} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={BASE} />
        <meta property="og:title" content="Open Source hub | Discover Quality Open Source Projects" />
        <meta
          property="og:description"
          content="Find and explore a curated list of open source projects with source code. Ideal for contributors, learners, and developers seeking boilerplates."
        />
        <meta property="og:image" content={`${BASE}/default.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={BASE} />
        <meta name="twitter:title" content="Open Source hub | Discover Quality Open Source Projects" />
        <meta name="twitter:description" content="Discover open source projects in React, Next.js, Node.js, Python, Laravel, and more." />
        <meta name="twitter:image" content={`${BASE}/default.png`} />
      </Head>

      {/* WebSite schema with SearchAction */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Open Source Hub",
            "url": BASE,
            "description": "A curated collection of high-quality open source projects with source code.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": `${BASE}/?search={search_term_string}`,
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />

      {/* Optional: CollectionPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Featured Open Source Projects",
            "url": BASE,
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": structuredProjects.map(project => ({
                "@type": "ListItem",
                "position": project.position,
                "name": project.name,
                "url": project.url
              }))
            }
          })
        }}
      />

      <div className="w-full md:w-[750px] lg:w-[1000px] xl:w-[1200px] mx-auto">
        <Hero />
        <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Projects</h2>
        <ProjectsList page={page} q={q} pageSize={pageSize} />
        <noscript>
          <p className="text-sm text-gray-600 px-4">
            Explore open source projects written in React, Node.js, Python, Laravel and more with source code links. Open Source hub is your go-to resource for finding high-quality and beginner-friendly open source repositories.
          </p>
        </noscript>
      </div>
    </Wrapper>
  );
}
