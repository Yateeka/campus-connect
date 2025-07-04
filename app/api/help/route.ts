// app/api/help/route.ts  <-- This must be the correct path + name for Next.js 13+ App Router

import { NextRequest, NextResponse } from 'next/server';

const faq: { [key: string]: string } = {
  'book a health appointment': 'You can schedule a health appointment via your school’s health portal...',
  'mental health support': 'Most schools offer free counseling services for international students.',
  'campus jobs': 'You can find campus jobs on your university’s job portal...',
  'off-campus work': 'F-1 students typically need CPT or OPT authorization...',
  'events on campus': 'Check the events calendar or ask student services.',
  'renew visa': 'Contact your international advisor at the school.',
  'lost passport': 'Report it to your embassy and contact your DSO.',
  'find housing': 'Check our housing tab or local student housing sites.',
  'open a bank account': 'You usually need your passport, I-20, and proof of address.',
};

export async function POST(req: NextRequest) {
  const body = await req.json();
  const msg = body.message?.toLowerCase() || '';

  const key = Object.keys(faq).find((k) => msg.includes(k));
  const reply = key ? faq[key] : "Hmm, I’m not sure yet. Try asking about health, housing, or jobs.";

  return NextResponse.json({ reply });
}
