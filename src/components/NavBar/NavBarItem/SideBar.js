import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData';

class SideBar extends React.Component {
    render() {
        return (
            <div className="app-sidebar-content" data-scrollbar="true" data-height="100%">
                    <div className="menu">
                        <div className="menu-header">Navigation</div>
                        {SidebarData.map((item, index) => {
                            return (
                                <>
                                    <div className="menu-item">
                                        <Link to={item.path} className={item.className}>
                                            <span className={item.iconClassName}>{item.icon}</span>
                                            <span className={item.textClassName}>{item.title}</span>
                                        </Link>
                                    </div>
                                    <div className="menu-divider" />
                                </>
                            );
                        })}
                        {/* <div className="menu-item">
                            <a href="index-2.html" className="menu-link">
                                <span className="menu-icon"><i className="fa fa-laptop" /></span>
                                <span className="menu-text">Lecturer Register Subject</span>
                            </a>
                            <Link to="#" className="menu-link">
                                <span className="menu-icon"><i className="fa fa-laptop" /></span>
                                <span className="menu-text">Lecturer Register Subject</span>
                            </Link>
                        </div>
                        <div className="menu-divider" />
                        */}

                    </div>
                </div>
        );
    }
}

export default SideBar;