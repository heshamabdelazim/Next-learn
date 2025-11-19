import { NextRequest, NextResponse } from "next/server";
import { events } from "../data";

export async function GET(request?: NextRequest) {
  try {
    return NextResponse.json(
      {
        success: true,
        data: events,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to retrieve events",
      },
      { status: 500 }
    );
  }
}
//test
