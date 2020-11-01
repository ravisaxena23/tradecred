import { Component } from "react";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: true,
      total: null,
      invoice: [],
      totinvoice: [],
      unique: null,
      correct: null,
      wrong: null,
    };
  }

  async componentDidMount() {

    const url = "http://localhost:5000/api/data";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({ invoice: data, Loading: false });
    console.log(data);
    const info = this.state.invoice.map((q) => q["Invoice Numbers"]);

    this.state.totinvoice = info.filter((q, idx) => info.indexOf(q) === idx);
    this.state.unique = this.state.totinvoice.length;
    this.state.total = this.state.invoice.length;

    this.setState({ correct: this.state.unique });
    this.setState({ wrong: this.state.total - this.state.correct });
    
  }

  render() {
    if (this.state.Loading) {
      return <div>Loading..</div>;
    }
    if (!this.state.invoice.length) {
      return <div>No Invoice</div>;
    } else {
      return (
        <div>
          <div
            class="card"
            style={{
              width: "18rem",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 10,
            }}
          >
            <div class="card-header">Information</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                {" "}
                Total responses {this.state.total}
              </li>
              <li class="list-group-item">
                Total correct responses {this.state.correct}
              </li>
              <li class="list-group-item">
                Total Wrong responsesn {this.state.wrong}
              </li>
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default Info;
