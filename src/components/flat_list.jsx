import React, { Component } from 'react';
import Flat from './flat.jsx';

const FlatList = (props) => {
  <div className="flat-list">
    return props.flats.map ((flat) => {
      return (
        <Flat/>
      );
    });
  </div>
  };
};
export default FlatList;
