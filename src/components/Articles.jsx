import React, { Component } from "react";

import { NotionRenderer, BlockMapType } from "react-notion";
import "react-notion/src/styles.css";

import "./../css/Article.css";

import axios from "axios";
import Sidebar from "./Sidebar";

class Articles extends Component {
  // getSingleItem = async (e) => {
  //   const response: BlockMapType = await axios.get(
  //     `https://notion-api.splitbee.io/v1/page/${e}`
  //   );
  //   const post = response.json();
  //   return <NotionRenderer blockMap={post} />;
  // };

  render() {
    let articleCount = 0;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <Sidebar titles={this.props.titles} />
          </div>
          <div className="col-md-8">
            {this.props.articles.map((content, id) => (
              <div id={"article-"+articleCount++}>
                <NotionRenderer
                  mapPageUrl={Articles}
                  fullPage={true}
                  blockMap={content}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Articles;
