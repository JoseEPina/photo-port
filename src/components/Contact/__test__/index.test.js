import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('ContactForm is rendering', () => {
   it('renders', () => {
      render(<Contact />);
   });

   it('Matches Snapshot', () => {
      const { asFragment } = render(<Contact />);
      expect(asFragment()).toMatchSnapshot();
   });

   it('To Match Contact Message', () => {
      const { getByTestId } = render(<Contact />);
      expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
   });

   it('To Match Text Content of Submit', () => {
      const { getByTestId } = render(<Contact />);
      expect(getByTestId('button')).toHaveTextContent('Submit');
   });
});
