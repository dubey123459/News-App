import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './spinner';

import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const UpdateNews = async (pageNo) => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=31521fb2d0ad4114b60a26d96ce5b4f0&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setLoading(false)
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults)

    }
    useEffect(() => {
        document.title = props.category;
        UpdateNews();
    },[])
    // async componentDidMount() {
    //     //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=31521fb2d0ad4114b60a26d96ce5b4f0&page=1&pageSize=${props.pageSize}`;
    //     //     this.setState({loading: true});
    //     //    let data = await fetch(url);
    //     //     let parsedData = await data.json();
    //     //     console.log(parsedData)
    //     //     this.setState({ articles: parsedData.articles, totalArticles: parsedData.totalResults, loading: false })
    //     this.UpdateNews();
    // }

    // handlePreviousClick = async () => {
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=31521fb2d0ad4114b60a26d96ce5b4f0&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
    //     // this.setState({loading: true});
    //     // let data = await fetch(url);
    //     // let parsedData = await data.json();
    //     // this.setState({
    //     //     page: this.state.page - 1,
    //     //     articles: parsedData.articles,
    //     //    loading: false
    //     // })
    //     this.setState({ page: this.state.page - 1 })
    //     this.UpdateNews();
    // }

    // handleNextClick = async () => {
    //     // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize))){

    //     //    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=31521fb2d0ad4114b60a26d96ce5b4f0&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
    //     //    this.setState({loading: true});
    //     //     let data = await fetch(url);
    //     //     let parsedData = await data.json();
    //     //     this.setState({
    //     //         page: this.state.page + 1,
    //     //         articles: parsedData.articles,
    //     //         loading : false
    //     //     })
    //     // }
    //     this.setState({ page: this.state.page + 1 });
    //     this.UpdateNews();
    // }



    // for scroll
    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=31521fb2d0ad4114b60a26d96ce5b4f0&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)

    }


    return (
        <>
            <div className="container">

                <h3 className='text-center' style={{ margin: "25px 0px", marginTop :" 90px",color:"wheat" }}>Current News-Top Headlines</h3>
                {loading && <Spinner />}



                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}

                    hasMore={articles.length !== totalResults}
                    loader={<h4>Loading...</h4>}
                >



                    <div className="row  ">
                        {articles.map((element) => {
                            return <div className="col-md-4 " key={element.url} >
                                {/* isme niche slice use karne se description and tittle barabar dikhega */}
                                <Newsitem tittle={element.title ? element.title : " "} description={element.description ? element.description : " "} imageUrl={element.urlToImage} newsurl={element.url} Author={element.author} date={element.publishedAt} />

                            </div>


                        })}
                    </div>

                </InfiniteScroll>






                {/* <div className="container d-flex justify-content-between ">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePreviousClick} >Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} className="btn btn-primary" onClick={this.handleNextClick} >Next</button>
                </div> */}






            </div>
        </>
    )

}
News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general"
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
