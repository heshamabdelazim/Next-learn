import { NextRequest, NextResponse } from 'next/server';
import { events, updateEvents } from '../data';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, date, ticketCost, hasFood } = body;

    // Validation
    if (!name || !date || ticketCost === undefined || hasFood === undefined) {
      return NextResponse.json(
        {
          success: false,
          message: 'Missing required fields: name, date, ticketCost, hasFood',
        },
        { status: 400 }
      );
    }

    // Create new event
    const newEvent = {
      id: (Math.max(...events.map((e) => parseInt(e.id)), 0) + 1).toString(),
      name,
      date,
      ticketCost: parseFloat(ticketCost),
      hasFood: Boolean(hasFood),
    };

    const updatedEvents = [...events, newEvent];
    updateEvents(updatedEvents);

    return NextResponse.json(
      {
        success: true,
        message: 'Event created successfully',
        data: newEvent,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to create event',
      },
      { status: 500 }
    );
  }
}
