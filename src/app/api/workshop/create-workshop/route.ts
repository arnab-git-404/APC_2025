import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Workshop } from '@/models/workshop';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    
    const {
      title,
      description,
      date,
      time,
      duration,
      platform,
      instructor,
      capacity,
      price,
      topics
    } = body;

    // Validate required fields
    if (!title || !description || !date || !time || !duration || !instructor || !capacity || !price) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create workshop
    const workshop = await Workshop.create({
      title,
      description,
      date: new Date(date),
      time,
      duration,
      platform: platform || 'Google Meet',
      instructor,
      capacity,
      price,
      topics: topics || [],
      enrolled: 0,
    });

    return NextResponse.json(
      { message: 'Workshop created successfully', workshop },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating workshop:', error);
    return NextResponse.json(
      { error: 'Failed to create workshop' },
      { status: 500 }
    );
  }
}