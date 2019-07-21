import React from 'react';

const countryConfigList = {
    de : "Germany",
    en: "America"
};
const Country = ({code}) => {
    return <span>{countryConfigList[code]}</span>;
};
export default Country;


export {countryConfigList};
