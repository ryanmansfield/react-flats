import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import flats from '../../data/flats';
import FlatList from './flat_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats
    };
  }

  center () {
    return {
      lat: 59.95,
      lng: 30.33
    };
  }

  render () {
    return (
      <div>
        <div className="flat-list">
          <FlatList
            flats={this.state.flats}

          />
        </div>
        <div className="map-container">
          <GoogleMapReact
            defaultCenter={this.center()}
            defaultZoom={12}
          />
        </div>
      </div>
    );
  }
}

export default App;
