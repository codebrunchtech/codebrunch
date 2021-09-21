import React from 'react';
import { configure, render, screen } from '@testing-library/react';

import './__mocks__/matchMedia';
import App from './App/App';

configure({ testIdAttribute: 'data-v2' });

describe('application tests', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('should render name', () => {
    const element = screen.getByTestId('name');
    expect(element).toHaveTextContent(/HananStems Records/i);
  });

  test('should render title', () => {
    const element = screen.getByTestId('title');
    expect(element).toHaveTextContent(/Record Label/i);
  });

  test('should render creator', () => {
    const element = screen.getByTestId('creator');
    expect(element).toHaveTextContent(/Ben Hanan Subendran/i);
  });

  test('should render link to source code', () => {
    const element = screen.getByTestId('source');
    expect(element).toHaveAttribute('href', 'https://github.com/hanancs/hananstemsrecords');
  });

  const buttons = {
    Facebook: 'https://www.facebook.com/HananStemsRecords',
    Instagram: 'https://www.instagram.com/hananstemsrecords/',
    LinkedIn: 'https://www.linkedin.com/company/hananstems-records',
    Twitter: 'https://twitter.com/hananstems',
  };

  test('should render buttons with links', () => {
    Object.entries(buttons).forEach(([k, v]) => {
      const element = screen.getByTestId(`${k}`);
      expect(element).toHaveTextContent(k);

      const parent = element.parentElement;
      expect(parent).toHaveAttribute('href', v);
    });
  });
});
