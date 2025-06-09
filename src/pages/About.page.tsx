import Head from 'next/head'
import React from 'react'

export default function About() {
  return (
    <>
      <Head>
        <title>About | Open Source Projects</title>
      </Head>
      <main className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold mb-4">About This Site</h1>
        <p className="text-lg text-gray-600 mb-6">
          This platform curates and showcases the best open source projects with accessible codebases for learning and contribution.
        </p>
        <p className="text-gray-700 mb-4">
          Our mission is to make open source contributions easier by providing categorized, searchable, and well-documented repositories.
          Whether you&apos;re a beginner looking to start, or an expert wanting to share, this is your space.
        </p>
        <p className="text-gray-700 mb-4">
          We believe in the power of community-driven development and strive to create a welcoming space for developers of all levels. 
          By highlighting high-quality projects, we aim to reduce the friction of finding your first contribution and help maintainers 
          gain more visibility.
        </p>
        <p className="text-gray-700 mb-4">
          Our platform includes:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Tag-based search for filtering projects by language, tech stack, or difficulty</li>
          <li>Detailed project descriptions and contribution guidelines</li>
          <li>Maintainer tools for updating repositories and managing issues</li>
          <li>Community features like favoriting, discussions, and contributor stats</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Whether you&apos;re building a portfolio, looking to solve real-world problems, or just curious, our goal is to make 
          your open source journey smoother and more fulfilling.
        </p>
        <p className="text-gray-700">
          Have questions or want to suggest a feature? We&apos;d love to hear from you. Get involved, contribute, and be a part 
          of something bigger!
        </p>
      </main>
    </>
  )
}
