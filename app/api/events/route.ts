import { NextRequest, NextResponse } from 'next/server';
import { getEvents, addEvent } from './eventStore';

export async function GET(request: NextRequest) {
  try {
    const allEvents = getEvents();
    return NextResponse.json(
      {
        success: true,
        data: allEvents,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to retrieve events',
      },
      { status: 500 }
    );
  }
}

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

    const newEvent = addEvent({
      name,
      date,
      ticketCost: parseFloat(ticketCost),
      hasFood: Boolean(hasFood),
    });

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
