import React, { Component } from "react";


class GoodReadsWidget extends Component {
  render() {
    return (
        
        <div id="gr_updates_widget">
        <iframe id="the_iframe" src="https://goodreads.com/widgets/user_update_widget?height=400&num_updates=10&user=18284350&width=1200" width="1198" height="330" frameborder="0"></iframe>
         
        </div>
    );
  }
}

export default GoodReadsWidget;
