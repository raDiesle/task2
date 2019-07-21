import React from 'react';

export default function Country({code}) {
    const configList = {
        de : "Germany"
    };
    return <span>{configList[code]}</span>;
}
