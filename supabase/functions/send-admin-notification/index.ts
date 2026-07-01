import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      }
    })
  }

  try {
    const { lead_details, requested_resource, timestamp, page_url } = await req.json()

    const subject = `New Lead Magnet Request – ${requested_resource}`
    const html = `
      <p>A new lead magnet request has been submitted on Enviro & IPR.</p>
      <h3>Lead Details:</h3>
      <p><strong>Name:</strong> ${lead_details.name}</p>
      <p><strong>Email:</strong> ${lead_details.email}</p>
      <p><strong>Phone:</strong> ${lead_details.phone}</p>
      <p><strong>Organization:</strong> ${lead_details.organization || '—'}</p>
      <p><strong>Service Interested In:</strong> ${lead_details.service_interest || '—'}</p>
      <p><strong>Requested Resource:</strong> ${requested_resource}</p>
      <p><strong>Website Page:</strong> ${page_url || '—'}</p>
      <p><strong>Submitted On:</strong> ${timestamp}</p>
      <br/>
      <p>Please review the request and manually share the requested document with the user.</p>
    `

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY env variable not set. Email not sent.");
      return new Response(JSON.stringify({ error: 'Resend API key not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      })
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Enviro & IPR Leads <onboarding@resend.dev>',
        to: 'rajeev@enviroandipr.com',
        subject,
        html,
      }),
    })

    const data = await res.json()
    console.log("Email delivery response status:", res.status, data);

    return new Response(JSON.stringify({ success: true, data }), {
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    })
  } catch (error: any) {
    console.error("Failed to send email:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    })
  }
})
