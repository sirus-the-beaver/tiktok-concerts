import React from 'react';
import { render } from '@testing-library/react';
import EventLayout from '../../../../src/app/events/layout';

describe('EventLayout', () => {
    it('renders children within a section', () => {
        const { container } = render(
            <EventLayout>
                <div>Test Content</div>
            </EventLayout>
        );

        expect(container.querySelector('section')).not.toBeNull();
        expect(container.querySelector('section')).toHaveTextContent('Test Content');
    });
});
