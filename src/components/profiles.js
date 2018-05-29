import React from 'react';
import { Link, Redirect } from 'react-router-dom';


const Profiles = (props) => {
    const redi = () => {
        return (
            props.history.push("/")
        )
    }
    return (
        <div>
            <Link to={{
                pathname : `${props.match.url}/posts`
            }}> Take me to /profiles/posts</Link>
            {redi()}
        </div>
    )
}

export default Profiles;