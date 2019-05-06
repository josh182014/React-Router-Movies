import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    console.log('movie', movie)
    const savedList = this.state.savedList;
    // if (savedList.length === 0 ) {
    //   savedList.push(movie);
    //   this.setState({ savedList });
    // }
    // else {
    //   savedList.forEach(each => {
    //     if (each.id === movie.id) {
    //       alert('nah')
    //     }
    //     else if (movie.id !== each.id) {
    //       savedList.push(movie);
    //       this.setState({ savedList });
    //     }
    //   })
    // }
    if (!savedList.includes(movie)) {
      savedList.push(movie);
      this.setState({ savedList });
    }
    else {
      alert(`You already added ${movie.title} to your Saved Movies :)`)
    }
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" render={(props) => <Movie {...props} addToSavedList={this.addToSavedList} />} />
      </div>
    );
  }
}
