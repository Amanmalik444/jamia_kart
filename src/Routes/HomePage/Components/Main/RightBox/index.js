import React, { Component, useState } from 'react';
import CardList from './Components/CardList';

const RightBox = ({selectedCategory, stockFilter}) => {
  return (
    <div style={{position: 'relative', left: '21vw'}}>
      <CardList selectedCategory={selectedCategory} stockFilter={stockFilter} />
    </div>
  )
}

export default RightBox;