import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const supabase = createRouteHandlerClient({ cookies });
  const data = await request.json();

  try {
    const { data: appointment, error } = await supabase
      .from('appointments')
      .insert([data])
      .select();

    if (error) throw error;

    return NextResponse.json({ success: true, appointment });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
  }
}