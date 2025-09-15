import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY!);
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
const { userId } = req.body;
const { data: p, error } = await supabase.from("profiles").select("email").eq("id", userId).single();
if (error || !p?.email) return res.status(400).json({ ok:false });

await resend.emails.send({
from: "Operation Remoralization <welcome@yourdomain.com>",
to: p.email,
subject: "Welcome to Platinum 🎉",
html: `
<h2>You're in.</h2>
<p>Start here: <a href="${process.env.SITE_URL}/platinum/">Platinum dashboard</a></p>
<p>Book your first 1:1: <a href="https://calendly.com/YOUR_HANDLE/biweekly-review">Schedule</a></p>
`
});

res.json({ ok:true });
}
