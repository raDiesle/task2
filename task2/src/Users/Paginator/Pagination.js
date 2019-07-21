import React from 'react';
import './Pagination.scss';

export default function Pagination({dataSize, currentPage, setCurrentPage}) {

    const backward = "<<";
    const forward = ">>";

    const handleBackward = () => {
            setCurrentPage(currentPage - 1);
    };

    const handleForward = () => {
        setCurrentPage(currentPage + 1);
    };

    const paginationSize = 3;
    const isEnoughElementsForPagination = dataSize > paginationSize;
    const lastPageNumber = Math.floor(dataSize / paginationSize);
    const renderForward = isEnoughElementsForPagination && currentPage <= lastPageNumber;

    const renderBack = currentPage > 0;
    return (
        <div className='pagination'>
            <div className='pagination-controls'>
                { renderBack && <button type="button" onClick={handleBackward}>{backward}</button>}
                <span>{currentPage}</span>
                {renderForward && <button type="button" onClick={handleForward}>{forward}</button>}
            </div>
        </div>
    );
}
