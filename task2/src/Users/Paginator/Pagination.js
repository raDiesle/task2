import React from 'react';
import './Pagination.scss';

export default function Pagination({dataSize, pageSize, currentPage, setCurrentPage}) {

    const backward = "<<";
    const forward = ">>";

    const handleBackward = () => {
            setCurrentPage(currentPage - 1);
    };

    const handleForward = () => {
        setCurrentPage(currentPage + 1);
    };

    const paginationSize = pageSize-1;
    const isEnoughElementsForPagination = dataSize > paginationSize;
    const lastPageNumber = Math.floor(dataSize / paginationSize);
    const renderForward = isEnoughElementsForPagination && currentPage <= lastPageNumber;

    const renderBack = currentPage > 0;
    return (
        <div className='pagination'>
            <div className='paginationControls'>
                { <button type="button" disabled={!renderBack} onClick={handleBackward}>{backward}</button>}
                <span>[{currentPage}]</span>
                {<button type="button" disabled={!renderForward} onClick={handleForward}>{forward}</button>}
            </div>
        </div>
    );
}
