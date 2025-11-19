import { NextRequest, NextResponse } from 'next/server';
import { events, updateEvents } from '../data';

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, name, date, ticketCost, hasFood } = body;

    // Validation
    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: 'Missing required field: id',
        },
        { status: 400 }
      );
    }

    // Find event
    const eventIndex = events.findIndex((e) => e.id === id);

    if (eventIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          message: `Event with id ${id} not found`,
        },
        { status: 404 }
      );
    }

    // Update event with provided fields
    const updatedEvent = {
      ...events[eventIndex],
      ...(name && { name }),
      ...(date && { date }),
      ...(ticketCost !== undefined && { ticketCost: parseFloat(ticketCost) }),
      ...(hasFood !== undefined && { hasFood: Boolean(hasFood) }),
    };

    const updatedEvents = [
      ...events.slice(0, eventIndex),
      updatedEvent,
      ...events.slice(eventIndex + 1),
    ];
    updateEvents(updatedEvents);

    return NextResponse.json(
      {
        success: true,
        message: 'Event updated successfully',
        data: updatedEvent,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to update event',
      },
      { status: 500 }
    );
  }
}
