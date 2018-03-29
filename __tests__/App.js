import 'react-native';
import React from 'react';
import {App} from '../App';
// const myModule = require('../App');

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

beforeEach(() => {
  test();
});

// it('renders correctly', () => {
//   const tree = renderer.create(
//     <App />
//   );
// });
test('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

// test('the data is peanut butter', done => {
//   function callback(data) {
//     expect(data).toBe('peanut butter');
//     done();
//   }
//
//   // fetchData(callback);
// });
