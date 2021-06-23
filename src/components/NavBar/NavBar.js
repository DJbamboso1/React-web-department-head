import React, { useState } from 'react'
import Toggle from "./NavBarItem/Toggle";
import Brand from "./NavBarItem/Brand";
// import Search from "./components/NavBar/NavBarItem/Search";
import MenuNavBar from "./NavBarItem/MenuNavBar";
import SideBar from "./NavBarItem/SideBar";
import { Link } from 'react-router-dom'
import { SidebarData } from './NavBarItem/SidebarData';


function NavBar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
        // alert(sidebar);
        
    };

    return (
        <div>
            <div id="header" className="app-header">
                <Toggle onClickShowSideBar={showSidebar}/>
                {/* <Brand /> */}
               <Brand onClick={showSidebar}/>

                <div className="menu">
                    {/* <Search /> */}
                    <MenuNavBar/>
                </div>
            </div>
            {/* <div id="sidebar" className="app-sidebar"> */}
            <div id="sidebar" className={sidebar ? 'app-sidebar active' : 'app-sidebar'}>
                <SideBar/>
                
            </div>
            
        </div>
    )
}

export default NavBar
