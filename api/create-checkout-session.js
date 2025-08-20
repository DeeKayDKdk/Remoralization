// pages/api/create-checkout-session.js
import Stripe from 'stripe';

export default async function handler(req, res) {
if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // sk_live_...

try {
const session = await stripe.checkout.sessions.create({
ui_mode: 'embedded', // <-- stays on your site
mode: 'subscription',
line_items: [{ price: 'price_XXXX', quantity: 1 }], // your $10/mo price
return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
// Stay on-page after payment:
redirect_on_completion: 'never'
});

return res.status(200).json({ clientSecret: session.client_secret });
} catch (err) {
return res.status(400).json({ error: err.message });
}
}
