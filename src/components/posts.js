import React from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
    return (
        <div>
            <Link to="/posts/1">1</Link><br/>
            <Link to="/posts/2">2</Link><br/>
            <Link to="/posts/3">3</Link>
        </div>
    )
}

export default Posts;