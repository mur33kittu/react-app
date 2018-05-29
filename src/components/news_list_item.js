import React from 'react';
import { css } from 'glamor';

const NewsItem = ({item}) => {
    let cssList = css({
        padding:'20px',
        boxSizing : 'border-box',
        borderBottom : '1px solid gray',
        ':hover':{
            color:'red'
        }
    })
    let itemGrey = css({
        backgroundColor : 'lightgray'
    })

    return (
        <div {...cssList} {...itemGrey}>            
            <h2>{item.title}</h2>
            <p>{item.body}</p>
        </div>
    )
}

export default NewsItem;