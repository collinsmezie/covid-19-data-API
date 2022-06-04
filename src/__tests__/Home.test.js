import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Homepage from '../components/Homepage';
import { loadCompletedAction } from '../redux/Homepage/homeReducer';

describe('Render components', () => {
  test('render Homepage correctly', () => {
    const tree = renderer
      .create(<Router><Provider store={store}><Homepage /></Provider></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('expect an action with payload of data object array with Country test data', () => {
    const data = [
      {
        Country: 'Afghanistan',
        TotalConfirmed: 180520,
      },
    ];
    const action = loadCompletedAction(data);
    expect(action.payload).toEqual(expect.arrayContaining([data[0]]));
    expect(action.payload[0].Country).toBe('Afghanistan');
  });
});
