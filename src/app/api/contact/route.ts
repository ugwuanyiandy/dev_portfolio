import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    const { name, email, budget, service, description } = await req.json()

    const { error } = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: 'christaindrew@gmail.com',
        replyTo: email,
        subject: `New project inquiry from ${name}`,
        html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; color: #111;">
                <h2 style="margin: 0 0 24px; font-size: 20px;">New project inquiry</h2>

                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #888; width: 120px; font-size: 13px;">Name</td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #888; font-size: 13px;">Email</td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px;"><a href="mailto:${email}" style="color: #111;">${email}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #888; font-size: 13px;">Budget</td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px;">${budget}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #888; font-size: 13px;">Service</td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px;">${service}</td>
                    </tr>
                </table>

                <div style="margin-top: 24px;">
                    <p style="color: #888; font-size: 13px; margin: 0 0 8px;">Description</p>
                    <p style="font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${description}</p>
                </div>
            </div>
        `,
    })

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
}
