import { NextRequest, NextResponse } from 'next/server';

// For production, you'd want to use a database like Vercel KV, Supabase, or a service like Buttondown
// This is a simple implementation that logs subscribers and can be upgraded later

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Log the subscription (visible in Vercel logs)
    console.log(`[NEWSLETTER SIGNUP] ${new Date().toISOString()} - ${email}`);

    // In production, you would:
    // 1. Store in a database (Vercel KV, Supabase, etc.)
    // 2. Or call Buttondown/Mailchimp/ConvertKit API
    // 3. Send a confirmation email

    // For now, we'll use Buttondown's API if an API key is set
    const buttondownApiKey = process.env.BUTTONDOWN_API_KEY;
    
    if (buttondownApiKey) {
      const response = await fetch('https://api.buttondown.email/v1/subscribers', {
        method: 'POST',
        headers: {
          'Authorization': `Token ${buttondownApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          tags: ['website'],
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error('[BUTTONDOWN ERROR]', error);
        // Still return success to user - we logged it
      }
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thanks for subscribing!' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[SUBSCRIBE ERROR]', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Newsletter subscription endpoint. Use POST to subscribe.' },
    { status: 200 }
  );
}
