import React, {useEffect, useState}  from 'react'


const Searching = () => {
  const [searching, setSearching] = useState();
  const searchChangeHandler = (event) => {
    performSearch(event.target.value);
  };
  const performSearch = (searchTerm) => {
    const giphyKey = "RprhgzVrDdpMsqZoHWnAkpj4cSGcc9a8";
    var rating = "g";
    var limit = 25;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&q=${searchTerm}&limit=${limit}&offset=0&rating=${rating}&lang=en`;
    fetch(url)
      .then((response) => response.json())
      .then((searchResults) => {
        let results = searchResults.data
        var giphyRows = [];
        console.log(searchResults)
        console.log(searchTerm)
        console.log(results)
        results.forEach((giphy) => {
          const giphyRow = (
            <div key={giphy.id}>
              <img key={giphy.id} alt="giphy" src={`${giphy.images.downsized_medium.url}`}></img>
              {giphy.title}
            </div>
          );
          giphyRows.push(giphyRow);
        });
        setSearching(giphyRows)
      })
  }

    return (
        <div>
            <div>
                <h1>Giphy Searcher</h1>
                <input
                id="inputField"
                onChange={searchChangeHandler}
                placeholder="Search Amazing Giphy's">
                </input>
            </div>
            <div className="horizontal">
                {searching}
            </div>
        </div>
    )
}

export default Searching