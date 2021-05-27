import React, {useEffect, useState} from 'react'


const Trending = () => {

    const [trending, setTrending] = useState();
    useEffect( async () => {
      const giphyKey = "RprhgzVrDdpMsqZoHWnAkpj4cSGcc9a8";
      var rating = "g";
      var limit = 25;
      var tUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${giphyKey}&limit=${limit}&rating=${rating}`;
      var response = await fetch(tUrl);
      var data = await response.json();
      console.log(data);
      var tgiphyList = await data.data;
      console.log(tgiphyList);
      var tgiphyRows = [];
  
      tgiphyList.forEach( giphy => {
        const tGiphys = (
          <div key={`${giphy.id}`}><img alt="giphy" src={`${giphy.images.downsized_medium.url}`}></img>
          {giphy.title}
          </div>
        );
        tgiphyRows.push(tGiphys);
        }
      );
      setTrending(tgiphyRows)
    }, [])
    
    return (
      <div>
        <div>
          <h1>Trending Gipys</h1>
        </div>
        <div className="horizontal">
          {trending}
        </div>
      </div>
    )
}
export default Trending;