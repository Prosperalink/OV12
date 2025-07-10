// Google Workspace Integration for Orson Vision
// Handles Gmail, Drive, Calendar, Sheets, and Docs APIs

export interface IGoogleWorkspaceConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  scopes: string[];
  apiKey: string;
}

export interface IContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
  budget?: string;
  timeline?: string;
}

export interface IEmailTemplate {
  id: string;
  name: string;
  subject: string;
  htmlBody: string;
  textBody: string;
}

export interface ICalendarEvent {
  summary: string;
  description: string;
  startTime: string;
  endTime: string;
  attendees: string[];
  location?: string;
  reminders?: {
    useDefault: boolean;
    overrides?: Array<{
      method: 'email' | 'popup';
      minutes: number;
    }>;
  };
}

export interface IDriveFile {
  id: string;
  name: string;
  mimeType: string;
  size: number;
  webViewLink: string;
  createdTime: string;
  modifiedTime: string;
}

export interface ISheetsRow {
  timestamp: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
  budget?: string;
  timeline?: string;
  status: 'new' | 'contacted' | 'qualified' | 'proposal' | 'closed';
}

// Google Workspace API configuration
export const GOOGLE_WORKSPACE_CONFIG: IGoogleWorkspaceConfig = {
  clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
  redirectUri:
    process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI ||
    'http://localhost:3000/auth/callback',
  scopes: [
    'https://www.googleapis.com/auth/gmail.send',
    'https://www.googleapis.com/auth/drive.file',
    'https://www.googleapis.com/auth/calendar.events',
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/documents',
  ],
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '',
};

// Email templates for different scenarios
export const EMAIL_TEMPLATES: Record<string, IEmailTemplate> = {
  contactForm: {
    id: 'contact-form',
    name: 'Contact Form Submission',
    subject: 'New Contact Form Submission - Orson Vision',
    htmlBody: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e3a8a;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone || 'Not provided'}</p>
        <p><strong>Company:</strong> {company || 'Not provided'}</p>
        <p><strong>Service:</strong> {service}</p>
        <p><strong>Budget:</strong> {budget || 'Not specified'}</p>
        <p><strong>Timeline:</strong> {timeline || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p style="background: #f3f4f6; padding: 15px; border-radius: 5px;">{message}</p>
        <hr style="margin: 20px 0;">
        <p style="color: #6b7280; font-size: 14px;">
          This submission was received from the Orson Vision website contact form.
        </p>
      </div>
    `,
    textBody: `
New Contact Form Submission

Name: {name}
Email: {email}
Phone: {phone || 'Not provided'}
Company: {company || 'Not provided'}
Service: {service}
Budget: {budget || 'Not specified'}
Timeline: {timeline || 'Not specified'}

Message:
{message}

---
This submission was received from the Orson Vision website contact form.
    `,
  },
  autoReply: {
    id: 'auto-reply',
    name: 'Auto Reply to Contact Form',
    subject: 'Thank you for contacting Orson Vision',
    htmlBody: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e3a8a;">Thank you for reaching out!</h2>
        <p>Dear {name},</p>
        <p>Thank you for contacting Orson Vision. We've received your message and will get back to you within 24 hours.</p>
        <p><strong>Your inquiry details:</strong></p>
        <ul>
          <li>Service: {service}</li>
          <li>Message: {message}</li>
        </ul>
        <p>In the meantime, feel free to explore our services and portfolio on our website.</p>
        <p>Best regards,<br>The Orson Vision Team</p>
        <hr style="margin: 20px 0;">
        <p style="color: #6b7280; font-size: 14px;">
          Orson Vision - Cinematic Humanism in Digital Innovation
        </p>
      </div>
    `,
    textBody: `
Thank you for reaching out!

Dear {name},

Thank you for contacting Orson Vision. We've received your message and will get back to you within 24 hours.

Your inquiry details:
- Service: {service}
- Message: {message}

In the meantime, feel free to explore our services and portfolio on our website.

Best regards,
The Orson Vision Team

---
Orson Vision - Cinematic Humanism in Digital Innovation
    `,
  },
};

// Google Workspace API Manager
export class GoogleWorkspaceManager {
  private static instance: GoogleWorkspaceManager;
  private accessToken: string | null = null;
  private refreshToken: string | null = null;
  private tokenExpiry: number | null = null;

  private constructor() {
    // Initialize with stored tokens
    if (typeof window !== 'undefined') {
      this.accessToken = localStorage.getItem('google_access_token');
      this.refreshToken = localStorage.getItem('google_refresh_token');
      const expiry = localStorage.getItem('google_token_expiry');
      this.tokenExpiry = expiry ? parseInt(expiry) : null;
    }
  }

  static getInstance(): GoogleWorkspaceManager {
    if (!GoogleWorkspaceManager.instance) {
      GoogleWorkspaceManager.instance = new GoogleWorkspaceManager();
    }
    return GoogleWorkspaceManager.instance;
  }

  // Initialize Google OAuth
  async initializeAuth(): Promise<void> {
    if (typeof window === 'undefined') return;

    const authUrl =
      `https://accounts.google.com/o/oauth2/v2/auth?` +
      `client_id=${GOOGLE_WORKSPACE_CONFIG.clientId}&` +
      `redirect_uri=${encodeURIComponent(GOOGLE_WORKSPACE_CONFIG.redirectUri)}&` +
      `response_type=code&` +
      `scope=${encodeURIComponent(GOOGLE_WORKSPACE_CONFIG.scopes.join(' '))}&` +
      `access_type=offline&` +
      `prompt=consent`;

    window.location.href = authUrl;
  }

  // Handle OAuth callback
  async handleAuthCallback(code: string): Promise<boolean> {
    try {
      const response = await fetch('/api/auth/google/callback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      if (response.ok) {
        const data = await response.json();
        this.setTokens(data.access_token, data.refresh_token, data.expires_in);
        return true;
      }
      return false;
    } catch {
      // Error handling auth callback
      return false;
    }
  }

  // Set authentication tokens
  private setTokens(
    accessToken: string,
    refreshToken: string,
    expiresIn: number
  ): void {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.tokenExpiry = Date.now() + expiresIn * 1000;

    if (typeof window !== 'undefined') {
      localStorage.setItem('google_access_token', accessToken);
      localStorage.setItem('google_refresh_token', refreshToken);
      localStorage.setItem('google_token_expiry', this.tokenExpiry.toString());
    }
  }

  // Check if token is valid
  private isTokenValid(): boolean {
    return (
      this.accessToken !== null &&
      this.tokenExpiry !== null &&
      Date.now() < this.tokenExpiry
    );
  }

  // Refresh access token
  private async refreshAccessToken(): Promise<boolean> {
    if (!this.refreshToken) return false;

    try {
      const response = await fetch('/api/auth/google/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refresh_token: this.refreshToken }),
      });

      if (response.ok) {
        const data = await response.json();
        this.setTokens(data.access_token, this.refreshToken, data.expires_in);
        return true;
      }
      return false;
    } catch {
      // Error refreshing token
      return false;
    }
  }

  // Get valid access token
  private async getValidAccessToken(): Promise<string | null> {
    if (this.isTokenValid()) {
      return this.accessToken;
    }

    if (await this.refreshAccessToken()) {
      return this.accessToken;
    }

    return null;
  }

  // Send email via Gmail API
  async sendEmail(
    to: string,
    subject: string,
    textBody: string
  ): Promise<boolean> {
    const accessToken = await this.getValidAccessToken();
    if (!accessToken) return false;

    try {
      const email = [
        'Content-Type: text/plain; charset="UTF-8"',
        'MIME-Version: 1.0',
        `To: ${to}`,
        `Subject: ${subject}`,
        '',
        textBody,
      ].join('\r\n');

      const encodedEmail = Buffer.from(email)
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');

      const response = await fetch(
        `https://gmail.googleapis.com/gmail/v1/users/me/messages/send`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            raw: encodedEmail,
          }),
        }
      );

      return response.ok;
    } catch {
      // Error sending email
      return false;
    }
  }

  // Process contact form submission
  async processContactForm(data: IContactFormData): Promise<boolean> {
    try {
      // 1. Send notification email to admin
      const adminEmail =
        process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'contact@orsonvision.com';
      const notificationTemplate = EMAIL_TEMPLATES.contactForm;
      const autoReplyTemplate = EMAIL_TEMPLATES.autoReply;

      if (!notificationTemplate || !autoReplyTemplate) {
        throw new Error('Email templates not found');
      }

      const notificationHtml = notificationTemplate.htmlBody
        .replace(/{name}/g, data.name)
        .replace(/{email}/g, data.email)
        .replace(/{phone}/g, data.phone || '')
        .replace(/{company}/g, data.company || '')
        .replace(/{service}/g, data.service)
        .replace(/{message}/g, data.message)
        .replace(/{budget}/g, data.budget || '')
        .replace(/{timeline}/g, data.timeline || '');

      const autoReplyHtml = autoReplyTemplate.htmlBody
        .replace(/{name}/g, data.name)
        .replace(/{service}/g, data.service)
        .replace(/{message}/g, data.message);

      await this.sendEmail(
        adminEmail,
        notificationTemplate.subject,
        notificationHtml
      );

      // 2. Send auto-reply to customer
      await this.sendEmail(
        data.email,
        autoReplyTemplate.subject,
        autoReplyHtml
      );

      // 3. Add to Google Sheets CRM
      await this.addToCRM(data);

      return true;
    } catch {
      // Error processing contact form
      return false;
    }
  }

  // Add lead to Google Sheets CRM
  async addToCRM(data: IContactFormData): Promise<boolean> {
    const accessToken = await this.getValidAccessToken();
    if (!accessToken) return false;

    try {
      const spreadsheetId = process.env.GOOGLE_SHEETS_CRM_ID;
      if (!spreadsheetId) return false;

      const row: ISheetsRow = {
        timestamp: new Date().toISOString(),
        name: data.name,
        email: data.email,
        phone: data.phone || '',
        company: data.company || '',
        service: data.service,
        message: data.message,
        budget: data.budget || '',
        timeline: data.timeline || '',
        status: 'new',
      };

      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A:J:append?valueInputOption=USER_ENTERED`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            values: [
              [
                row.timestamp,
                row.name,
                row.email,
                row.phone || '',
                row.company || '',
                row.service,
                row.message,
                row.budget || '',
                row.timeline || '',
                row.status,
              ],
            ],
          }),
        }
      );

      return response.ok;
    } catch {
      return false;
    }
  }

  // Create calendar event
  async createCalendarEvent(event: ICalendarEvent): Promise<boolean> {
    const accessToken = await this.getValidAccessToken();
    if (!accessToken) return false;

    try {
      const response = await fetch(
        'https://www.googleapis.com/calendar/v3/calendars/primary/events',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            summary: event.summary,
            description: event.description,
            start: {
              dateTime: event.startTime,
              timeZone: 'Africa/Tunis',
            },
            end: {
              dateTime: event.endTime,
              timeZone: 'Africa/Tunis',
            },
            attendees: event.attendees.map(email => ({ email })),
            location: event.location,
            reminders: event.reminders,
          }),
        }
      );

      return response.ok;
    } catch {
      return false;
    }
  }

  // Upload file to Google Drive
  async uploadToDrive(
    file: File,
    folderId?: string
  ): Promise<IDriveFile | null> {
    const accessToken = await this.getValidAccessToken();
    if (!accessToken) return null;

    try {
      const metadata = {
        name: file.name,
        parents: folderId ? [folderId] : undefined,
      };

      const form = new FormData();
      form.append(
        'metadata',
        new Blob([JSON.stringify(metadata)], { type: 'application/json' })
      );
      form.append('file', file);

      const response = await fetch(
        'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          body: form,
        }
      );

      if (response.ok) {
        return await response.json();
      }
      return null;
    } catch {
      return null;
    }
  }

  // Check authentication status
  isAuthenticated(): boolean {
    return this.accessToken !== null;
  }

  // Logout
  logout(): void {
    this.accessToken = null;
    this.refreshToken = null;
    this.tokenExpiry = null;

    if (typeof window !== 'undefined') {
      localStorage.removeItem('google_access_token');
      localStorage.removeItem('google_refresh_token');
      localStorage.removeItem('google_token_expiry');
    }
  }
}

// Export singleton instance
export const googleWorkspaceManager = GoogleWorkspaceManager.getInstance();

// React hook for Google Workspace
export function useGoogleWorkspace() {
  return googleWorkspaceManager;
}
