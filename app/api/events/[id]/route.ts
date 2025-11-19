import { NextRequest, NextResponse } from 'next/server';
import { getEventById, updateEvent, deleteEvent } from '../eventStore';

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const body = await request.json();
    const { name, date, ticketCost, hasFood } = body;

    const existingEvent = getEventById(id);
    if (!existingEvent) {
      return NextResponse.json(
        {
          success: false,
          message: `Event with id ${id} not found`,
        },
        { status: 404 }
      );
    }

    const updates: any = {};
    if (name !== undefined) updates.name = name;
    if (date !== undefined) updates.date = date;
    if (ticketCost !== undefined) updates.ticketCost = parseFloat(ticketCost);
    if (hasFood !== undefined) updates.hasFood = Boolean(hasFood);

    const updated = updateEvent(id, updates);

    return NextResponse.json(
      {
        success: true,
        message: 'Event updated successfully',
        data: updated,
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

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const existingEvent = getEventById(id);
    if (!existingEvent) {
      return NextResponse.json(
        {
          success: false,
          message: `Event with id ${id} not found`,
        },
        { status: 404 }
      );
    }

    const deleted = deleteEvent(id);

    return NextResponse.json(
      {
        success: true,
        message: 'Event deleted successfully',
        data: deleted,
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
