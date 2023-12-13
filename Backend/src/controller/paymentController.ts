import express from 'express';
import dotenv from 'dotenv';
import Stripe from 'stripe';
import { UserModel } from '../model/userSchema';
import mongoose from 'mongoose';
dotenv.config();

const stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create payment intent
export const createPaymentIntent = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  try {
    const { items } = req.body;
    items.price = parseInt(items.price);
    const amount = items.price * 100;
    const paymentIntent = await stripeClient.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });
    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error/Payment Intent Failed' });
  }
};

// Process payment
export const payment = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  try {
    const paymentData = req.body;
    const sender = await UserModel.findOne({ _id: paymentData.sender });
    const receiver = await UserModel.findOne({ _id: paymentData.receiver });
    if (!sender || !receiver) {
      return res.status(403).send({
        success: false,
        message: "Sender and receiver or both not found."
      })
    };

    const paymentDetails = {
      userId: sender._id,
      useremail: sender.email,
      firstName: paymentData.firstName,
      lastName: paymentData.lastName,
      email: paymentData.email,
      country: paymentData.country,
      postalCode: paymentData.postalCode,
      amount: paymentData.amount,
      transactionId: paymentData.transactionId,
    };

    // start mongoose session
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
      await UserModel.findByIdAndUpdate(
        paymentData.sender,
        {
          $set: {
            "donateDetails.totalSendAmount": Number(sender.donateDetails.totalSendAmount) + Number(paymentData.amount),
          },
          $push: { "donateDetails.senders": paymentDetails },
        },
        { runValidators: true }
      );
      await UserModel.findByIdAndUpdate(
        paymentData.receiver,
        {
          $set: {
            "donateDetails.totalReceiveAmount": Number(receiver.donateDetails.totalReceiveAmount) + Number(paymentData.amount),
          },
          $push: { "donateDetails.receivers": paymentDetails },
        },
        { runValidators: true }
      );
      await session.commitTransaction();
      session.endSession();
      res.status(200).json({ success: true, message: 'Donate successful', });

    } catch (error) {
      await session.abortTransaction();
      session.endSession();
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error/Payment Failed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error/Payment Failed' });
  }
};
