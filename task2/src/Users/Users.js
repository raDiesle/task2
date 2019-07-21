import React, {useState} from 'react';
import './Users.scss';
import Search from "./Search/Search";
import Pagination from "./Paginator/Pagination";
import Country from "../Country/Country";

export default function Users() {

    const [searchValue, setSearchValue] = useState('Amend');
    const [currentPage, setCurrentPage] = useState(0);
    const [lastNameAscSort, setLastNameAscSort] = useState(false);

    const getUsersResults = () => {
        return [
            {id: 1, name: "Amend1", country: "de"},
            {id: 2, name: "Amend2", country: "de"},
            {id: 3, name: "Amend3", country: "de"},
            {id: 4, name: "Amend4", country: "de"},
            {id: 6, name: "Amend5", country: "de"},
            {id: 7, name: "Amend6", country: "de"},
            {id: 8, name: "Müller", country: "es"}
        ]
    };

    let userResults = [];

    // filter, pagination, sort
    if (searchValue.length > 3) {
        userResults = getUsersResults().map(user => {
            user.name.toLowerCase();
            return user;
        });

        userResults = userResults.filter(user => {
            return user.name.startsWith(searchValue);
        });

        userResults = userResults.sort((a, b) =>{
            if (a.name < b.name) {
                return lastNameAscSort ? -1 : 1;
            }
            if (a.name > b.name) {
                return !lastNameAscSort ? 1 : -1;
            }
            return 0;
        });

        const start = currentPage * 4;
        userResults = userResults.slice(start, start + 4);


    }

    const handleSort = () => {
        setLastNameAscSort(!lastNameAscSort);
    };

    return (
        <React.Fragment>
            <Search {...{searchValue, setSearchValue}} />
            {searchValue}
            <Pagination
                dataSize={userResults.length}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
            <table className="table">
                <tbody>
                <tr>
                    <td className="th actionPointer" onClick={handleSort}>Name
                    </td>
                    <td className="th">Country</td>
                </tr>
                {userResults.map((user) => {
                    return (
                        <tr key={user.id} className="tr">
                            <td className="td">
                                {user.name}
                            </td>
                            <td className="td">
                                <Country code={user.country} />
                            </td>
                        </tr>
                    );
                })
                }
                </tbody>
            </table>
        </React.Fragment>
    );
}
