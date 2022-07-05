import React from 'react';
import './sideComponent.css';
import LeftNavBar from '../navBar/leftNavBar';
import RightNavBar from '../navBar/rightNavBar';


function sideBar() {
    return (
        <>
        <div className="messages-list">

        <LeftNavBar/>

        
        

    
        </div>
        <RightNavBar/>
        </>
    );
}

export default sideBar;