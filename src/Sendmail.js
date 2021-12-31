import React from "react";
import "./App.css";

class Sendmail extends React.Component {
  constructor() {
    super();
    this.state = {
      subject: "",
      body: "",
    };
  }
  Validation = (event) => {
    var subject = document.getElementById("subject").value;
    var body = document.getElementById("body").value;
    window.location.href =
      "mailto:sakthiveltsmr@gmail.com?subject=" + subject + "&body=" + body;
    event.PreventDefault();
    return false;
  };
  render() {
    return (
      <div className="heading">
        <h1 style={{ color: "hotpink", fontFamily: "cursive" }}>
          Send Me Email..📧
        </h1>
        <div className="container" id="mailme">
          <div className="row">
            <div className="col sm-8 offset-md-2">
              <form
                class="justify-content-center"
                onSubmit={this.Validation}
                target="_blank"
                method="GET"
              >
                <div className="form-group form-group-lg">
                  <label className="skils" for="subject">
                    <strong>Name</strong>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    class="form-control"
                    required
                  />
                </div>
                <div class="form-group form-group-lg">
                  <label class="skils" for="body">
                    <strong>FeedBack</strong>
                  </label>
                  <textarea
                    id="body"
                    className="form-control"
                    row="5"
                    required
                  />
                </div>
                <div className="btn1">
                  <input
                    type="submit"
                    value="send"
                    id="navigation"
                    class="btn btn-primary"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Sendmail;
