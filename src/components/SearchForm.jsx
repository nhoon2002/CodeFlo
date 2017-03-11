import React, { Component }from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className="navbar-form navbar-left" onSubmit={this.handleSubmit}>
          <input type="text" className="form-control" placeholder="Search" value={this.state.value} onChange={this.handleChange} />
          <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default SearchForm;
