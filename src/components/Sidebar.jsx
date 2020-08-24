import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        let articleCount = 0;

        return (
            <div className="sidebar">    
                <h4>Recent Posts</h4>            
                <ul classNam="sidebar-list">
                {this.props.titles.map((title) => (
                    <li><a href={"#article-"+articleCount++}>{title.Name}</a></li>
                ))}

                </ul>
            </div>
        );
    }
}

export default Sidebar;