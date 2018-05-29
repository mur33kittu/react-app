import React from 'react';



const Header = (props) => {
    
        return (
            <div className="header">
                <div className="logo" onClick={() => console.log("clicked") }>React Example</div>
                <input type="text" onChange ={ props.keywords } />
            </div>
        )
}

export default Header;