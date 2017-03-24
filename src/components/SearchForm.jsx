import axios from 'axios';
import React, { Component, Props }from 'react';
import {AsyncTypeahead} from 'react-bootstrap-typeahead';
const AsyncExample = React.createClass({
  getInitialState() {
    return {
      options: [],
    };
  },


  render() {
    return (


      <AsyncTypeahead
        labelKey="username"
        onSearch={this._handleSearch}
        options={this.state.options}
        placeholder="Search for a user..."
        renderMenuItemChildren={(option, props, index) => (
          <div>
            <img
              className='img-circle'
              src='http://placehold.it/30x30'
              style={{

                marginRight: '10px'

              }}
            />
            <span>{option.username}</span>
            {/* .login is the username field from the github response. */}
          </div>

        )}
      />


    );
  },

  _handleSearch(query) {
    if (!query) {
      return;
    }


    fetch(`/register/${query}`)
      .then(resp => resp.json())
      // // .then(json => console.log(this))
      .then(json => this.setState({options: json}))


      // this.setState({options: data})



  },
});
export default AsyncExample;
