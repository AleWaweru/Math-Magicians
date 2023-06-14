import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from '../components/quote';

describe('Quotes', () => {
  test('renders a loading spinner when loading', () => {
    const component = renderer.create(<Quotes isLoading />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders an error message when an error occurs', () => {
    const component = renderer.create(<Quotes hasError />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders a quote when quotes are available', () => {
    const quotes = [{ author: 'Alice', quote: 'Hello world!' }];
    const component = renderer.create(<Quotes quotes={quotes} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
