import React from 'react';
import { render } from '@testing-library/react';
import About from '../../../../src/app//about/page';

describe('About', () => {
    it('renders without crashing', () => {
        render(<About />);
    });
});
