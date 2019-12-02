import React, { Component, Fragment } from "react";
import axios from "axios";
/* import { Container } from "react-bootstrap"; */

class Upload extends Component {
  state = {
    file: "",
    fileName: "Choose file",
    uploadedFile: {}
  };

  onChange = event => {
    const selectedFile = event.target.files[0];
    if (selectedFile !== undefined)
      this.setState({
        file: selectedFile,
        fileName: selectedFile.name
      });
  };

  onSubmit = async event => {
    event.preventDefault();
    const data = new FormData();
    data.append("file", this.state.file);

    try {
      const res = axios.post("https://localhost:8000/upload", data, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      const { fileName, filePath } = res.data;
      this.setState({ uploadedFile: { fileName, filePath } });
      /* .then(res => console.log(res.statusText)); */
      /* this.props.onUpload(this.state.file); */
    } catch (err) {
      if (err.response.status === 500) {
        console.log("there was a problem with the server");
      } else {
        console.log("another error");
      }
    }
  };

  render() {
    return (
      <Fragment>
        <form className="input-group" onSubmit={this.onSubmit}>
          <input
            type="file"
            className="custom-file-input"
            ref="file"
            id="inputGroupFile"
            aria-describedby="inputGroupFileAddon"
            onChange={this.onChange}
          />
          <label className="custom-file-label" htmlFor="inputGroupFile">
            {this.state.fileName}
          </label>
          <input
            className="btn btn-secondary btn-block mt-4"
            type="submit"
            value="Upload"
            id="inputGroupFileAddon"
          />
        </form>
      </Fragment>
    );
  }
}

export default Upload;
