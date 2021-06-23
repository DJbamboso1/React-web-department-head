import React from 'react'

class Search extends React.Component {
    render() {
        return(
            <form className="menu-search" method="POST" name="header_search_form">
            <div className="menu-search-icon"><i className="fa fa-search" /></div>
            <div className="menu-search-input">
              <input type="text" className="form-control" placeholder="Search menu..." />
            </div>
          </form>
        );
    }
}

export default Search;