import React from 'react';
import { render } from 'react-dom';
import Stream from './components/Stream';

const rootDoc = document.getElementById('root');

const tracks = [{
  title: 'Some track'
}, {
  title: 'Some other track'
}]

render(
  <Stream tracks={tracks} />,
  rootDoc
);
