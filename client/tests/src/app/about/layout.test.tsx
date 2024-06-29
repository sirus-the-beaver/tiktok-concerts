import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import AboutLayout from '../../../../src/app/about/layout';

describe('AboutLayout', () => {
  it('renders its children', () => {
    const { getByText } = render(
      <AboutLayout>
        <div>Test Child</div>
      </AboutLayout>
    );

    expect(getByText('Test Child')).toBeInTheDocument();
  });
});