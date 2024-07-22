import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const renderPages = () => {
    const pages = [];

    if (totalPages <= 6) {
      // Khi tổng số trang ít hơn hoặc bằng 6, hiển thị tất cả các số trang
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 4) {
        pages.push('...');
      }

      const startPage = Math.max(currentPage - 1, 2);
      const endPage = Math.min(currentPage + 1, totalPages - 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 3) {
        pages.push('...');
      }

      pages.push(totalPages);
    }

    return pages;
  };

  const pages = renderPages();

  return (
    <nav className="flex flex-wrap justify-center space-x-2 sm:space-x-4">
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          className={`rounded-full border px-3 py-1 sm:px-4 sm:py-2 ${currentPage === page ? 'bg-gray-300' : ''}`}
          disabled={page === '...'}
        >
          {page}
        </button>
      ))}
    </nav>
  );
};

export default Pagination;
