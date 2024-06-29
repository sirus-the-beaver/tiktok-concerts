import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';
import GetEvents from '../../../src/components/EventCard';
import Event from "../../../src/models/Event";
import { MockedFunction } from 'jest-mock';

jest.mock('../../../src/models/Event', () => ({
  find: jest.fn(),
}));

describe('GetEvents', () => {
  it('renders "No Events" when there are no events', async () => {
    (Event.find as MockedFunction<typeof Event.find>).mockResolvedValue([]);

    const { findByText } = render(<GetEvents />);

    expect(await findByText('No Events')).toBeInTheDocument();
  });

  it('renders events when there are events', async () => {
    (Event.find as MockedFunction<typeof Event.find>).mockResolvedValue([
      {
        _id: '1',
        title: 'Test Event',
        description: 'This is a test event.',
        date: '2022-01-01',
        location: 'Test Location',
      },
    ]);

    const { findByText } = render(<GetEvents />);

    expect(await findByText('Test Event')).toBeInTheDocument();
    expect(await findByText('This is a test event.')).toBeInTheDocument();
    expect(await findByText('2022-01-01')).toBeInTheDocument();
    expect(await findByText('Test Location')).toBeInTheDocument();
  });
});