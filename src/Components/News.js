import React, { useState, useEffect } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  // constructor() {
  //   super();
  //   this.state = {
  //     articles: [],
  //     loading: false,
  //     page: 1,
  //     totalResults: 0,
  //   };
  // }]

  const updateNews =async () => {
    const url = `https://newsapi.org/v2/everything?domains=${props.domains}&q=${props.category}&apiKey=479acde88aab459ab45139661ec15233&page=1&pageSize=10&language=en&sortBy=publishedAt`;
    setLoading(true)
    let data = await fetch(url)
    let parseData = await data.json()
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
  };
   
  useEffect(() => {
    updateNews();
  // eslint-disable-next-line 
  },[totalResults]);
 

  // async componentDidMount() {
  //   let url = `https://newsapi.org/v2/everything?domains=${this.props.domains}&q=${this.props.category}&apiKey=479acde88aab459ab45139661ec15233&page=1&pageSize=10&language=en&sortBy=publishedAt`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parseData = await data.json();
  //   this.setState({
  //     articles: parseData.articles,
  //     totalResults: parseData.totalResults,
  //     loading: false,
  //   });
  // }

  const fetchMoreData =async () => {
    setPage(page + 1)
   const url = `https://newsapi.org/v2/everything?domains=${props.domains}&q=${props.category}&apiKey=479acde88aab459ab45139661ec15233&pageSize=10&language=en&sortBy=publishedAt&page=${page+1}`;
    // this.setState({loading:true});
    let  data = await fetch(url)
    let parseData = await data.json()
    setArticles(articles.concat(parseData.articles))
    setTotalResults((parseData.totalResults))
    // setLoading(false)
  };

  return (
    <>
      <div className="heading">
        <h1>
          <b className="row justify-content-center">Breaking News</b>
        </h1>
      </div>
      {/* {this.state.loading && <Spinner />} */}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={page !== 10}
        loader={<Spinner />}
      >
        {/* {this.state.items.map((i, index) => (
            <div style={style} key={index}>
              div - #{index}
            </div>
          ))} */}
        {loading && <Spinner />}
        <div className="container my-3">
          <div className="row my-5">
            {!loading &&
              articles.map((element) => {
                return (
                  <div className="col-md-4 my-3" key={element.url}>
                    <NewsItems
                      title={element.title ? element.title : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 100)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      date={element.publishedAt}
                      author={element.author}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </InfiniteScroll>

      {/* <div className="d-flex justify-content-between "> */}
      {/* <button
            type="button"
            disabled={this.state.page === 1}
            className="btn btn-danger mx-5 my-5"
            onClick={this.handlePreviousPage}
          >
            &laquo; Previous
          </button> */}
      {/* For fetch all item but news api give only 100 contains  that's why we use the next statement*/}
      {/* <button type="button" disabled={this.state.page +1 > Math.ceil(this.state.totalResults/12)} className="btn btn-danger mx-5 my-5" onClick={this.handleNextPage} >Next &raquo;</button> */}
      {/* <button
            type="button"
            disabled={this.state.page === 8}
            className="btn btn-danger mx-5 my-5"
            onClick={this.handleNextPage}
          >
            Next &raquo;
          </button> */}
      {/* </div> */}
    </>
  );
};

News.Props = {
  domains: "indiatoday.in",
  category: "general",
};
News.Types = {
  domains: PropTypes.string,
  category: PropTypes.string,
};

export default News;
