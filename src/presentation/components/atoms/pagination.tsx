import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const createPageButtons = (
  totalPages: number,
  currentPage: number,
  onPageChange: (page: number) => void
) => {
  const maxButtons = 3; // Defina o número máximo de botões a serem exibidos
  const middleButton = Math.ceil(maxButtons / 2);
  const startPage = Math.max(1, currentPage - middleButton + 1);
  const endPage = Math.min(startPage + maxButtons - 1, totalPages);

  const buttons = [];

  for (let i = startPage; i <= endPage; i++) {
    buttons.push(
      <button
        key={i}
        onClick={() => onPageChange(i)}
        className={currentPage === i ? 'active' : ''}
      >
        {i}
      </button>
    );
  }

  return buttons;
};

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="pagination">
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        {'◄'}
      </button>
      {createPageButtons(totalPages, currentPage, onPageChange)}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {'►'}
      </button>
    </div>
  );
};

export default Pagination;
