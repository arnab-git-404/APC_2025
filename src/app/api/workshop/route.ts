import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Workshop } from '@/models/workshop';

export async function GET() {
  try {
    await connectDB();
    
    const workshops = await Workshop.find({}).sort({ date: 1 }).lean();
    
    const now = new Date();
    const upcomingWorkshops = workshops.filter(w => new Date(w.date) > now).length;
    const pastWorkshops = workshops.filter(w => new Date(w.date) <= now).length;
    const totalRegistrations = workshops.reduce((sum, w) => sum + (w.enrolled || 0), 0);
    
    const stats = {
      total: workshops.length,
      upcoming: upcomingWorkshops,
      past: pastWorkshops,
      totalRegistrations,
    };
    
    return NextResponse.json({
      workshops: JSON.parse(JSON.stringify(workshops)),
      stats,
    });
  } catch (error) {
    console.error('Error fetching workshops:', error);
    return NextResponse.json(
      { error: 'Failed to fetch workshops' },
      { status: 500 }
    );
  }
}