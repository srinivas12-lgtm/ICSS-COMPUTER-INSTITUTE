import { db } from '@/lib/db';
import { enquiries } from '@/lib/schema';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.name || !body.mobile_number || !body.course_interested) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    if (!/^[6-9]\d{9}$/.test(body.mobile_number)) {
      return NextResponse.json({ error: 'Invalid mobile number' }, { status: 400 });
    }

    if (body.website_hp) {
      // Honeypot caught a bot, silently succeed
      return NextResponse.json({ ok: true }); 
    }

    await db.insert(enquiries).values({
      name: body.name,
      mobileNumber: body.mobile_number,
      courseInterested: body.course_interested,
      preferredBatch: body.preferred_batch || null,
      qualification: body.qualification || null,
      message: body.message || null,
      submittedAt: new Date(),
      status: 'new',
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
