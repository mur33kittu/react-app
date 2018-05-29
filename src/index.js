import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import NewsList from './components/news_list';
import JSON from  './modals/db.json';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import PostItem from './components/post-item';

import Home from './components/home';
import Profiles from './components/profiles';
import Posts from './components/posts';
import Life from './components/life';
import Conditional from './components/conditional';
const App = () => {

        return (
            <BrowserRouter>
                <div>     
                    <header>
                        <Link to="/">Home</Link><br/>
                        <Link to="/posts">Posts</Link><br/>
                        <Link to="/life">Life</Link><br/>
                        <Link to="/conditional">Conditional</Link><br/>
                        <Link to={{
                            pathname : "/profiles"

                        }}>Profiles</Link>
                    </header> 
                    <hr/>
                    <Switch>
                        <Redirect from="/profiles" to="/"/>
                        <Route path="/posts/:id" component={PostItem}/>
                        <Route path="/profiles" component={Profiles}/>                        
                        <Route path="/posts" component={Posts}/>
                        <Route path="/life" component={Life}/>
                        <Route path="/conditional" component={Conditional}/>
                        <Route path="/" exact component={Home}/>
                    </Switch>        
                </div>
            </BrowserRouter>
        )
}

ReactDOM.render(<App/>, document.querySelector('#root'));