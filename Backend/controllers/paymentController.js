import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Process Payment
export const processPayment = async (req, res) => {
  try {
    const { amount, currency, paymentMethodId } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method: paymentMethodId,
      confirmation_method: "manual",
      confirm: true,
    });

    res.status(200).json({ success: true, paymentIntent });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Payment Status
export const getPaymentStatus = async (req, res) => {
  try {
    const { paymentId } = req.params;
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentId);

    res.status(200).json({ success: true, status: paymentIntent.status });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
