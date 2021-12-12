import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const mockToggleModal = jest.fn();
const currentPhoto = {
   name: 'Park bench',
   category: 'landscape',
   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
   index: 1,
};

afterEach(cleanup);

//! Baseline Test for Nav Componet
describe('Modal component', () => {
   it('renders', () => {
      // baseline to render component test
      render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />);
   });

   // snapshot test
   it('Matches the snapshot', () => {
      const { asFragment } = render(
         <Modal //
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
         />
      );
      // assert value comparison
      expect(asFragment()).toMatchSnapshot();
   });
});

//! Create a Test fir the Click Event execution
describe('Click Event', () => {
   it('calls onClose handler', () => {
      // Arrange: Render Modal
      const { getByText } = render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />);
      // Act: Simulate click event
      fireEvent.click(getByText('Close this modal'));
      // Assert: Expected matcher
      expect(mockToggleModal).toHaveBeenCalledTimes(1);
   });
});
