import React, { Component } from 'react';
import { Gallery } from './gallery/Gallery.jsx';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery</h1>
        </header>
        <Gallery></Gallery>
      </div>
    );
  }
}
