import React from "react";
import './rightNavBar.css';
import logo512 from '../../assets/images/logo512.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


function leftNav() {
    return (
        <>
        <div className="container">
            <div className="left">
               <img className="img" src={logo512} alt="logo" width="25" height="20"/>
            </div>
            <div className="right">
                
                <span data-testid="status-v3" data-icon="status-v3" ><svg version="1.1" id="ee51d023-7db6-4950-baf7-c34874b80976" x="0" y="0" viewBox="0 0 24 24" width="24" height="24" ><path fill="currentColor" d="M12 20.664a9.163 9.163 0 0 1-6.521-2.702.977.977 0 0 1 1.381-1.381 7.269 7.269 0 0 0 10.024.244.977.977 0 0 1 1.313 1.445A9.192 9.192 0 0 1 12 20.664zm7.965-6.112a.977.977 0 0 1-.944-1.229 7.26 7.26 0 0 0-4.8-8.804.977.977 0 0 1 .594-1.86 9.212 9.212 0 0 1 6.092 11.169.976.976 0 0 1-.942.724zm-16.025-.39a.977.977 0 0 1-.953-.769 9.21 9.21 0 0 1 6.626-10.86.975.975 0 1 1 .52 1.882l-.015.004a7.259 7.259 0 0 0-5.223 8.558.978.978 0 0 1-.955 1.185z"></path></svg></span>
                <span data-testid="chat" data-icon="chat" ><svg viewBox="0 0 24 24" width="24" height="24" ><path fill="currentColor" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path></svg></span>
                <span data-testid="menu" data-icon="menu" ><svg viewBox="0 0 24 24" width="24" height="24" ><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg></span>
            </div>
        </div>
        <div className="container__down">
           <form>
           <label htmlFor="text" className='search-bar'>

           <FontAwesomeIcon onClick={() => alert("hi!")} icon={faSearch}/>
           <input type="text"      placeholder="Search or start new chat"/>
           

           </label>
           
           
           </form>

        </div>
        </>
    );
}

export default leftNav;