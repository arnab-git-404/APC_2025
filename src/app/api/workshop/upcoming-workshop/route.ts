/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Workshop } from '@/models/workshop';

export async function GET() {
  try {
    await connectDB();
    
    const now = new Date();
    
    // Find all workshops where date is greater than current date
    const upcomingWorkshops = await Workshop.find({
      date: { $gt: now },
      // status: 'upcoming'
    })
    .sort({ date: 1 }) // Sort by date ascending (earliest first)
    .lean();
    
    // Clean and format the workshops
    const formattedWorkshops = upcomingWorkshops.map((workshop: any) => ({
      id: workshop._id.toString(),
      title: workshop.title,
      description: workshop.description,
      date: workshop.date,
      time: workshop.time,
      duration: workshop.duration,
      platform: workshop.platform,
      instructor: workshop.instructor,
      capacity: workshop.capacity,
      enrolled: workshop.enrolled || 0,
      price: workshop.price,
      topics: workshop.topics || [],
    }));
    
    return NextResponse.json(
      {
        success: true,
        count: formattedWorkshops.length,
        workshops: formattedWorkshops
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching upcoming workshops:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to fetch upcoming workshops' 
      },
      { status: 500 }
    );
  }
}