import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { saveAs } from "file-saver";
import FolderDirectory from "../files/floor.json";
/*import axios from "axios";

const Fs = require("fs");
const Path = require("path");
const Axios = require("axios");

async function download() {
  const url = "";
  const path = Path.resolve(__dirname, "files", "floor.json");
}
 */

class Download extends Component {
  handleSave = () => {
    let date = new Date();
    console.log(date);
    let fs = require("browserify-fs");
    fs.readFile(FolderDirectory, "utf-8", function(err, data) {
      const blob = new Blob([data], { type: "application/json" });
      saveAs(blob, "coreographfy.json");
    });
  };
  render() {
    return (
      <button
        onClick={this.handleSave}
        className="btn btn-secondary btn-block mt-4"
      >
        Download
      </button>
    );
  }
}

export default Download;
