// import React, { Component } from "react";
// import "./App.css";
// import giphyKey from "./config";


// let rating = "g";
// let limit = 25;
// let trendUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${giphyKey}&limit=${limit}&rating=${rating}`;

// fetch(trendUrl)
//       .then((response) => response.json())
//       .then((trendResults) => {
//         var giphyRows = [];
//         console.log(trendResults.results)
//         trendResults.results.forEach((giphy) => {
//           const giphyRow = (
//             <div key={giphy.id}>
//               {/* giphs from api url use giphy.url*/}
//               <img alt="giphy" src={`${giphy.url}`}></img>
//               {giphy.title}
//             </div>
//           );
//           giphyRows.push(giphyRow);
//         });


// class App extends Component {
//   constructor(props) {
//     super(props);
//     const giphy = [
//       {id:0,
//        poster_src: "https://www.themoviedb.org/t/p/w440_and_h660_face/qTZIgXrBKURBK1KrsT7fe3qwtl9.jpg",
//        title: "Legacies", 
//        overview: "some losers have a legacy"
//       },
//       {id:1,
//        poster_src: "https://www.themoviedb.org/t/p/w440_and_h660_face/2C9vyK6leWDb2ds65R7uIwSmh8V.jpg",
//        title: "The Passion of the Crist", 
//        overview: "Jesus Wins"
//       }
//     ];
//     var movieRows = [];
//     movies.forEach((movie) => {
//       const movieRow =  <div key={movie.id}>
//                           <img alt="poster" src={movie.poster_src}></img>
//                           {movie.title}
//                         </div>
//       movieRows.push(movieRow)
//     })
//     this.state = {
//       rows: [],
//       limit: limit,
//       rating: rating,
//     };
//   };


//   searchChangeHandler = (event) => {
//     this.performSearch(event.target.value);
//   };
// // search handeler includes page limit and rating
//   performSearch(searchTerm) {
//     const url = `https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}=&limit=${limit}&offset=0&rating=${rating}&lang=en`;
//     fetch(url)
//       .then((response) => response.json())
//       .then((searchResults) => {
//         var giphyRows = [];
//         console.log(searchResults.results)
//         searchResults.results.forEach((giphy) => {
//           const giphyRow = (
//             <div key={giphy.id}>
//               <img alt="giphy" src={``}></img>
//               {giphy.title}
//             </div>
//           );
//           giphyRows.push(giphyRow);
//         });

//         this.setState({
//           rows: giphyRows,
//         });
//       })

//       .catch((error) => console.error("error from API: ", error));
//   }

//   render() {
//     return (
//       <div>
//         <div id="giphyTrending">
//           <h1>Giphy Trending</h1>
//           <input
//             id="inputField"
//             onChange={this.searchChangeHandler}
//             placeholder="Search Amazing Giphy's"></input>
//         </div>
//         {this.state.rows}
//       </div>
//     );
//   }


//   render() {
//     return (
//       <div>
//         <div id="giphySearch">
//           <h1>Giphy Search</h1>
//           <input
//             id="inputField"
//             onChange={this.searchChangeHandler}
//             placeholder="Search Amazing Giphy's"></input>
//         </div>
//         {this.state.rows}
//       </div>
//     );
//   }
// }

// export default App;


// function reducer(acc,cur) {
//   return {...acc, [cur.id]: cur};
// };
// let newGiphyList = await GiphyList.reduce(reducer, {});

// {this.state.loading || !this.state.giphys ? (
//   <div> loading... </div>
// ) : (  