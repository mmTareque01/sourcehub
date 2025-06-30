import Hero from "@/components/Hero";
import ProjectsList from "@/components/ProjectsList";
import Wrapper from "@/components/Wrapper";
import Head from "next/head";

export default async function HomePage({ page = 1, q = '' }: { page?: number, q?: string }) {
  const pageSize = 10; // items per page

  return (
    <Wrapper>

      <Head>
        <title>Open Source Hunt | Discover Quality Open Source Projects</title>
        <meta
          name="description"
          content="Discover and explore high-quality open source projects with full source code in React, Node.js, Python, Laravel, and more on Open Source Hunt."
        />

        <meta property="og:title" content="Open Source Hunt | Discover Quality Open Source Projects" />
        <meta
          property="og:description"
          content="Find and explore a curated list of open source projects with source code. Ideal for contributors, learners, and developers seeking boilerplates."
        />
        <meta property="og:image" content="/default.png" />
        <meta property="og:url" content="https://opensourcehub.xyz/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Open Source Hunt | Discover Quality Open Source Projects" />
        <meta name="twitter:description" content="Discover open source projects in React, Next.js, Node.js, Python, Laravel, and more." />
        <meta name="twitter:image" content="/default.png" />
        <link rel="canonical" href="https://opensourcehub.xyz/" />
      </Head>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Open Source Hunt",
            "url": "https://opensourcehub.xyz/",
            "description": "A curated collection of high-quality open source projects with source code.",
          }),
        }}
      />





      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <Hero />
          <h2 className=" text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Projects</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 p-4">
          </div>

          <noscript>
            <p className="text-sm text-gray-600 px-4">
              Explore open source projects written in React, Node.js, Python, Laravel and more with source code links. Open Source Hunt is your go-to resource for finding high-quality and beginner-friendly open source repositories.
            </p>
          </noscript>
          <ProjectsList page={page} q={q} pageSize={pageSize} />

        </div>
      </div>
    </Wrapper>
  );
}
