import React from 'react';
import Link from 'next/link';

export default function Pagination({ prev, next }: { prev?: string|null; next?: string|null }) {
  return (
    <div className="flex items-center justify-between gap-4 p-4 text-white">
      <Link
        href={prev || "#"}
        className={`bg-[#223549] px-4 py-2 rounded-lg transition-colors ${!prev ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#1a2632]'}`}
        aria-disabled={!prev}
      >
        Previous
      </Link>

      <Link
        href={next || "#"}
        className={`bg-[#223549] px-4 py-2 rounded-lg transition-colors ${!next ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#1a2632]'}`}
        aria-disabled={!next}
      >
        Next
      </Link>
    </div>
  );
}
