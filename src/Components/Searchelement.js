// import React, { useState } from 'react'
// import '../Styles/Searchelement.css'
// function Searchelement() {
//     const[searchText, setSearchText] =useState("");

//     const [Data, setData] = useState([]);
//     let api1 =
//       'https://academics.newtonschool.co/api/v1/facebook/post?search={"author.name":"Carmen Shanahan"}';
//       useEffect(() => {
//         GetData();
//       }, []);
    
//       const GetData = async () => {
//         const response = await fetch(api, {
//           headers: {
//             projectID: "f104bi07c490",
//           },
//         });
//         const r = await response.json();
//         // console.log(r)
//         setData(r["data"]);
//       };
//     const search = ()
//   return (
//     <div className='search-name'>
//         <ul>
//             <li></li>
//         </ul>
//     </div>
//   )
// }

// export default Searchelement


import React, { useState, useEffect } from 'react';
import '../Styles/Searchelement.css';

function Searchelement() {
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const api =
        'https://academics.newtonschool.co/api/v1/facebook/post?search={"author.name":"Carmen Shanahan"}';

    useEffect(() => {
        GetData();
    }, []);

    const GetData = async () => {
        const response = await fetch(api, {
            headers: {
                projectID: 'f104bi07c490',
            },
        });
        const result = await response.json();
        setData(result['data']);
    };

    const search = () => {
        const filteredResults = data.filter((item) =>
            item.author.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchResults(filteredResults);
    };

    return (
        <div className="search-name">
            <input
                type="text"
                placeholder="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <button onClick={search}>Search</button>
            <ul>
                {searchResults.length > 0 ? (
                    searchResults.map((item, index) => (
                        <li key={index}>
                            <div>
                                <img
                                    src={item.author.profileImage}
                                    alt="Author"
                                />
                                <p>{item.author.name}</p>
                            </div>
                        </li>
                    ))
                ) : (
                    <li>
                        <p>No results found</p>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Searchelement;
