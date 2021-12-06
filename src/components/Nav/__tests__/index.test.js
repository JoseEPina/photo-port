import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

//! Baseline Test for Nav Componet
describe('Nav component', () => {
   // Baseline Test
   it('renders', () => {
      render(<Nav />);
   });
   // Snapshot Test
   it('matches snapshot', () => {
      const { asFragment } = render(<Nav />);
      // assert value comparison
      expect(asFragment()).toMatchSnapshot();
   });
});

//! Create a Test for Emoji Visibility
describe('emoji is visible', () => {
   it('inserts emoji into the h2', () => {
      // Arrange
      const { getByLabelText } = render(<Nav />);
      // Assert
      expect(getByLabelText('camera')).toHaveTextContent('📸');
   });
});

//! Create a Test for Link Visibility
describe('links are visible', () => {
   it('inserts text into the links', () => {
      // Arrange
      const { getByTestId } = render(<Nav />);
      // Assert
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About Me');
   });
});
