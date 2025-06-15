import React from 'react';
import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  getPageLink: (page: number) => string;
}



// Utility function to generate range like 1 2 3 ... 9 10
function generatePageRange(current: number, total: number): (number | "...")[] {
  const delta = 2;
  const range: (number | "...")[] = [];
  const left = current - delta;
  const right = current + delta;

  let lastPage = 0;

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= left && i <= right)) {
      if (lastPage && i - lastPage !== 1) {
        range.push("...");
      }
      range.push(i);
      lastPage = i;
    }
  }

  return range;
}


export default function Pagination({
  currentPage,
  totalPages,
  getPageLink,
}: PaginationProps) {
  // Ensure currentPage is a number
  const current = Number(currentPage);

  const visiblePages = generatePageRange(current, totalPages);

  return (
    <div className="flex items-center justify-center gap-2 p-4  flex-wrap">
      {/* Previous Button */}
      <Link
        href={current > 1 ? getPageLink(current - 1) : "#"}
        className={`bg-[#223549] px-4 py-2 rounded-lg transition-colors ${current === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#1a2632]"
          }`}
        aria-disabled={current === 1}
      >
        Previous
      </Link>

      {/* Page Numbers */}
      {visiblePages.map((page, index) => (
        <React.Fragment key={index}>
          {page === "..." ? (
            <span className="px-3 py-2 text-gray-400">...</span>
          ) : (
            <Link
              href={getPageLink(page)}
              className={`px-4 py-2 rounded-lg transition-colors ${page === current ? "bg-blue-600" : "bg-[#223549] hover:bg-[#1a2632]"
                }`}
            >
              {page}
            </Link>
          )}
        </React.Fragment>
      ))}

      {/* Next Button */}
      <Link
        href={current < totalPages ? getPageLink(current + 1) : "#"}
        className={`bg-[#223549] px-4 py-2 rounded-lg transition-colors ${current === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-[#1a2632]"
          }`}
        aria-disabled={current === totalPages}
      >
        Next
      </Link>
    </div>
  );
}
