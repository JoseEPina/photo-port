import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

const categories = [
   {
      name: 'portraits',
      description: 'Portraits of people in my life',
   },
];

const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

//! Baseline Test for Nav Componet
describe('Nav component', () => {
   // Baseline Test
   it('renders', () => {
      render(
         <Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
         />
      );
   });
   // Snapshot Test
   it('matches snapshot', () => {
      const { asFragment } = render(
         <Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
         />
      );
      // assert value comparison
      expect(asFragment()).toMatchSnapshot();
   });
});

//! Create a Test for Emoji Visibility
describe('emoji is visible', () => {
   it('inserts emoji into the h2', () => {
      // Arrange
      const { getByLabelText } = render(
         <Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
         />
      );
      // Assert
      expect(getByLabelText('camera')).toHaveTextContent('📸');
   });
});

//! Create a Test for Link Visibility
describe('links are visible', () => {
   it('inserts text into the links', () => {
      // Arrange
      const { getByTestId } = render(
         <Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
         />
      );
      // Assert
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About Me');
   });
});
