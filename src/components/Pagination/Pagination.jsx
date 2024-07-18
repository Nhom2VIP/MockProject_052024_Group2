import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex space-x-2">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`rounded-full border px-4 py-2 ${currentPage === page ? 'bg-gray-300' : ''}`}
        >
          {page}
        </button>
      ))}
    </nav>
  );
};

export default Pagination;
