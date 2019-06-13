import React, { Component } from "react";

class PageModel extends Component {
  render() {
    return (
      <div className="page_content">
        <div className="page_header">
          <h3>
            Model <span class="fontRed">Page</span>
          </h3>
        </div>
        <div className="section_wrapper">
          <h3>Section 1</h3>
        </div>
        <div className="section_wrapper">
          <h3>Section 2</h3>
        </div>
        <div className="section_wrapper">
          <h3>Section 3</h3>
        </div>
        <div className="section_wrapper">
          <h3>Section 4</h3>
        </div>
      </div>
    );
  }
}

export default PageModel;
