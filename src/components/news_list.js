import React from 'react'
import NewsItem from './news_list_item';

class NewsList extends React.Component{
    
    render()
    {
        const items = this.props.news.map((item) => {
            return (
                <NewsItem key={item.id} item={item}/>
            )
        });        
        return (
            <div>                
                <h3>News List</h3>
                {items}
            </div>
        )
    }
}
export default NewsList;