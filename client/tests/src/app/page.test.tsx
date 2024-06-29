import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../../src/app/page';

describe('Home', () => {
    it('renders without crashing', () => {
        render(<Home />);
    });
});
