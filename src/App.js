import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";

import Card from "./components/Card/Card";
// import Filter from "./components/Filter/Filter";
import Pagination from "./components/Pagination/Pagination";
// import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";




function App() {

  const [fetchedData, setFetchedData] = useState([]);
  const {info,results} = fetchedData;

  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");


  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber} &name=${search}`

  useEffect(() => {
    (async  () => {
      let data = await fetch(api)
      .then((res) => res.json());
      setFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber}/>
      <div className="container">
        <div className="row">
          Filter component will be placed here
            <div className="col-lg-8 col-12">
              <div className="row">
                <Card results={results} />                
              </div>
            </div>
        </div>
      </div>
      <Pagination 
      info={info}
      pageNumber={pageNumber}
      setPageNumber={setPageNumber}/>
    </div>
  );
}



export default App;
