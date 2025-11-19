import { NextRequest, NextResponse } from 'next/server';
import { events, updateEvents } from '../data';

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const { id } = body;

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

    // Remove event
    const deletedEvent = events[eventIndex];
    const updatedEvents = events.filter((e) => e.id !== id);
    updateEvents(updatedEvents);

    return NextResponse.json(
      {
        success: true,
        message: 'Event deleted successfully',
        data: deletedEvent,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to delete event',
      },
      { status: 500 }
    );
  }
}
