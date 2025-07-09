import { IContactFormData } from '@/lib/google-workspace';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data: IContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.service || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Company: ${data.company || 'Not provided'}
Service: ${data.service}
Budget: ${data.budget || 'Not specified'}
Timeline: ${data.timeline || 'Not specified'}

Message:
${data.message}

---
This submission was received from the Orson Vision website contact form.
    `;

    // Send email using environment variables or external service
    const adminEmail = process.env.ADMIN_EMAIL || 'contact@orsonvision.com';

    // For now, we'll simulate email sending
    // In production, you would integrate with a real email service
    console.log('Contact form submission:', {
      to: adminEmail,
      subject: 'New Contact Form Submission - Orson Vision',
      content: emailContent,
      data,
    });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
