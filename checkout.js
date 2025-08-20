// pages/checkout.js
export default function Checkout() {
return (
<>
<main style={{maxWidth: 720, margin: '40px auto', padding: 24}}>
<h1>Join Operation Remoralization ($10/month)</h1>
<div id="checkout" style={{minHeight: 500}}></div>
</main>

{/* Stripe JS */}
<script src="https://js.stripe.com/v3/"></script>
<script
dangerouslySetInnerHTML={{
__html: `
(async function () {
// Fetch the client_secret for this session
const resp = await fetch('/api/create-checkout-session', { method: 'POST' });
const data = await resp.json();
if (!data.clientSecret) { alert('Checkout init error'); return; }

// Init Stripe and mount Embedded Checkout
const stripe = Stripe('${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}');
const checkout = await stripe.initEmbeddedCheckout({ clientSecret: data.clientSecret });
checkout.mount('#checkout');
})();
`
}}
/>
</>
);
}
