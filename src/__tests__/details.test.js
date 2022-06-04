import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Details from '../components/Details';

describe('Render components', () => {
  test('render Details correctly', () => {
    const tree = renderer
      .create(<Router><Provider store={store}><Details /></Provider></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
