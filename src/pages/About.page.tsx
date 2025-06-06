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
        <p className="text-gray-700">
          Our mission is to make open source contributions easier by providing categorized, searchable, and well-documented repositories.
          Whether you&apos;re a beginner looking to start, or an expert wanting to share, this is your space.
        </p>
      </main>
    </>
  )
}
