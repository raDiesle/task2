import React, {useState, useEffect} from 'react';
import './Users.scss';
import Search from "./Search/Search";
import Pagination from "./Paginator/Pagination";
import Country from "../Country/Country";
import UserDetails from "../UserDetails/UserDetails";

export default function Users({isLoggedInCrudadmin}) {

    const [searchValue, setSearchValue] = useState('');

    const [currentPage, setCurrentPage] = useState(0);
    const pageSize = 3;


    const [lastNameAscSort, setLastNameAscSort] = useState(false);
    const lastNameAscSortString = 'lastNameAscSort';
    useEffect(() => {
        const lastNameAscSortFromStorage = localStorage.getItem(lastNameAscSortString) === 'true';
        setLastNameAscSort(lastNameAscSortFromStorage);
    }, []);
    const handleSort = () => {
        const newSortFlag = !lastNameAscSort;
        setLastNameAscSort(newSortFlag);
        localStorage.setItem(lastNameAscSortString, newSortFlag.toString());
    };

    const getUsersResults = () => {
        return [
            {id: 1, name: "Amend1", country: "de"},
            {id: 2, name: "Amend2", country: "en"},
            {id: 3, name: "Amend3", country: "de"},
            {id: 4, name: "Amend4", country: "de"},
            {id: 8, name: "Müller", country: "en"}
        ]
    };

    let userResults = [];

    // filter, pagination, sort
    if (searchValue.length > 3) {
        userResults = getUsersResults();

        userResults = userResults.filter(user => {
            return user.name.toLowerCase().startsWith(searchValue.toLowerCase());
        });

        userResults = userResults.sort((a, b) => {
            if (a.name < b.name) {
                return lastNameAscSort ? -1 : 1;
            }
            if (a.name > b.name) {
                return !lastNameAscSort ? 1 : -1;
            }
            return 0;
        });

        const start = currentPage * pageSize;
        userResults = userResults.slice(start, start + pageSize);
    }


    const [selectedUserId, setSelectedUserId] = useState(0);
    const handleUserSelected = (id) => {
        setSelectedUserId(id);
    };


    return (
        <React.Fragment>
            <Search {...{searchValue, setSearchValue}} />
            <table className="table">
                <tbody>
                <tr>
                    <td className="th actionPointer" onClick={handleSort}>
                        Name <i className={!lastNameAscSort ? 'sortByAsc' : 'sortByDesc'}></i>
                    </td>
                    <td className="th">Country</td>
                </tr>
                {userResults.map((user) => {
                    return (
                        <tr key={user.id} className="tr" onClick={() => handleUserSelected(user.id)}>
                            <td className="td">
                                {user.name}
                            </td>
                            <td className="td">
                                <Country code={user.country}/>
                            </td>
                        </tr>
                    );
                })
                }
                </tbody>
            </table>
            {userResults.length === 0 && <div className="noResults">Give at least 3 characters to search for user. No users found.</div>}
            <Pagination
                dataSize={userResults.length}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                pageSize={pageSize}
            />
            <UserDetails userId={selectedUserId} isLoggedInCrudadmin={isLoggedInCrudadmin}/>
        </React.Fragment>
    );
}
