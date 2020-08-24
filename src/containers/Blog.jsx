import React, { Component } from "react";

import { NotionRenderer, BlockMapType } from "react-notion";

import Articles from "../components/Articles"
import BlogHeader from "./../components/BlogHeader"

export default class Blog extends Component {
  state = {
    notionPosts: [],
    articles: []
  };

  componentDidMount = async () => {

    var Promise = require('bluebird');
    const notionTable: BlockMapType = await fetch(
      "https://notion-data-grabber.stubclan.workers.dev/v1/table/4227fb829af2415296ede5e44377516b"
    );
    const notionTableJson = await notionTable.json();
    this.setState({ notionPosts: notionTableJson });

    const notionDataIds = notionTableJson.map(({id}) => (id)); // map over productData JSON for "store_ids" and store them into storeIDs

    const articles = [];
    await Promise.each(notionDataIds, async id => { // loop over "store_ids" inside storeIDs
      try {
        const notionPage = await fetch(`https://notion-data-grabber.stubclan.workers.dev/v1/page/${id}`); // fetch data by "id"
        const notionPageJson = await notionPage.json(); // convert storeRes to JSON
        articles.push(notionPageJson); // push storeJSON into the storeData array, then loop back to the top until all ids have been fetched
      } catch(err) { console.error(err) }
    });

    this.setState({ articles: articles}) // set both results to state
  }; 

  render() {
    return (
      <div>
        <BlogHeader />
        <Articles articles={this.state.articles} titles={this.state.notionPosts} />
      </div>
    );
  }
}
