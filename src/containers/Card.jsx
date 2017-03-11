import React, {Component} from 'react';
// import Tasks from './Tasks.jsx';
// import Tasks2 from './Tasks2.jsx';
import logo from './logo-full.png';
import './Card.css';
import './Card.js';
import $ from 'jquery';

class Card extends Component {
    render() {
        return (
          <div>
            <div className="container">
                <h2>CARD</h2>
                <p>
                    <em>Click and drag to reorder, double click to cross an item off.</em>
                </p>

                <form name="toDoList">
                    <input type="text" name="ListItem"/>
                </form>

                <div id="button">Add</div>
                <br/>
                <ol></ol>
            </div>
          </div>
        );
    };
}

export default Card;
