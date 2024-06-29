import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';
import RootLayout from '../../../src/app/layout';

describe('RootLayout', () => {
    it('renders children correctly', () => {
        const { getByText } = render(
            <RootLayout>
                <div>Test Content</div>
            </RootLayout>
        );

        expect(getByText('Test Content')).toBeInTheDocument();
    });
});
