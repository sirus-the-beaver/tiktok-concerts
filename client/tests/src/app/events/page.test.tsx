import React from 'react';
import { render } from '@testing-library/react';
import Events from '../../../../src/app/events/page';

describe('Events', () => {
    it('renders without crashing', () => {
        render(<Events />);
    });
});
