// Serverless function for Vercel (CommonJS)
const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" });

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).send("Method Not Allowed");
  }
  try {
    const { email } = (req.body && typeof req.body === "object") ? req.body : {};
    const customer = await stripe.customers.create(email ? { email } : {});
    const setupIntent = await stripe.setupIntents.create({
      customer: customer.id, usage: "off_session",
    });
    res.status(200).json({
      clientSecret: setupIntent.client_secret,
      customerId: customer.id,
    });
  } catch (e) {
    console.error("create-setup-intent error:", e);
    res.status(500).json({ error: e.message });
  }
};
