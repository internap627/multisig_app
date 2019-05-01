import React, {Component} from 'react'
import NewsSummary from './NewsSummary'
import apiKey from './apiKey'

class News extends Component {
    state = {
        news: null
    }

    componentDidMount(){
        var url = 'https://newsapi.org/v2/top-headlines?' +
        'sources=crypto-coins-news&' +
        apiKey;
        var req = new Request(url);
    fetch(req)
    .then(res => res.json())
    .then(res => {
        this.setState({
            news: [...res.articles]
        })
    })
    }

    render() {
        const articles = this.state.news
        return (
            <div className='coin-list section news-group'>
                {
                    articles && articles.map(article => <NewsSummary key={article.title} article={article} />)
                }
            </div>
        )
    }

}

export default News