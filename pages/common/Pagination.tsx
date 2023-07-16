type Props = {
  totalPages: any;
  setCurrentPage: (num: any) => void;
  currentPage: number;
}

const Pagination = ({ totalPages, setCurrentPage, currentPage }: Props) => {

  const handlePageClick = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  const renderPage = (pageNumber: any, isActive = false) => {
    const className = `size-40 flex-center rounded-full cursor-pointer ${
      isActive ? "bg-dark-1 text-white" : ""
    }`;
    return (
      <div key={pageNumber} className="col-auto">
        <div className={className} onClick={() => handlePageClick(pageNumber)}>
          {pageNumber}
        </div>
      </div>
    );
  };

  const renderPages = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  
    let pages = [];
  
    // Display the first page
    pages.push(renderPage(1, currentPage === 1));
  
    // Display the page numbers
    let startPage = 2;
    let endPage = totalPages - 1;
  
    if (totalPages > 7) {
      if (currentPage <= 5) {
        endPage = 7;
      } else if (currentPage >= totalPages - 5) {
        startPage = totalPages - 6; // Change the startPage to display 6 buttons initially
      } else {
        startPage = currentPage - 4;
        endPage = currentPage + 3; // Display 7 buttons in the middle of the total page range
      }
    }
  
    for (let i = startPage; i <= endPage; i++) {
      pages.push(renderPage(i, i === currentPage));
    }
  
    // Display the last page
    pages.push(renderPage(totalPages, currentPage === totalPages));
  
    // Display the "..." before the last button
    if (endPage < totalPages - 1) {
      pages.splice(pages.length - 1, 0,
        <div key="ellipsis-end" className="col-auto">
          <div className="size-40 flex-center rounded-full">...</div>
        </div>
      );
    }
  
    // Display the "..." after the first button
    if (startPage > 2) {
      pages.splice(1, 0,
        <div key="ellipsis-start" className="col-auto">
          <div className="size-40 flex-center rounded-full">...</div>
        </div>
      );
    }
  
    // Add logic to display remaining buttons after clicking the last button or in the middle of the range
    if (currentPage === totalPages || (startPage > 2 && currentPage === startPage)) {
      pages = pages.slice(0, 9); // Display only the first 9 buttons
    }
  
    return pages;
  };
  
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="mt-20 pt-20">
      <div className="row x-gap-10 y-gap-20 justify-between md:justify-center">
        <div className="col-auto md:order-1">
          <button className="button -blue-1 size-40 rounded-full border-light" onClick={handlePreviousPage}>
            <i className="icon-chevron-left text-12" />
          </button>
        </div>

        <div className="col-md-auto md:order-3">
          <div className="row x-gap-20 y-gap-20 items-center md:d-none">
            {renderPages()}
          </div>

          <div className="row x-gap-10 y-gap-20 justify-center items-center d-none md:d-flex">
            {renderPages()}
          </div>
        </div>

        <div className="col-auto md:order-2">
          <button className="button -blue-1 size-40 rounded-full border-light" onClick={handleNextPage}>
            <i className="icon-chevron-right text-12" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
