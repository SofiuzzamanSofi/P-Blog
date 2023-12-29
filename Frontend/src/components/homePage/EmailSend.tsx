"use client";

import React, { useState, useRef, FC } from 'react';
import { toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

interface EmailSendProps { }

const EmailSend: FC<EmailSendProps> = ({ }) => {
    const form = useRef<HTMLFormElement>(null); // Specify the type of ref
    const [loading, setLoading] = useState(false);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // stop if message character is less than 20 and greater than 4000
        if (e.currentTarget.message.value.length <= 19) {
            return toast.error("Message Must be 20 Characters or More.");
        }
        if (e.currentTarget.message.value.length >= 4001) {
            return toast.error("Message Must be 4000 Characters or Less.");
        }

        setLoading(true);

        try {
            const result = await emailjs.sendForm(
                process.env.NEXT_PUBLIC_SERVICE_ID || '',
                process.env.NEXT_PUBLIC_TEMPLATE_ID || '',
                e.currentTarget,
                process.env.NEXT_PUBLIC_PUBLIC_KEY || ''
            );

            toast.success("Your Valuable Feedback/Message is Submitted.");
            form.current?.reset();
            setLoading(false);
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong.");
            setLoading(false);
        }
    };

    return (
        <form className="space-y-6 ng-untouched ng-pristine ng-valid"
            ref={form}
            onSubmit={sendEmail}
        >
            <div>
                <label htmlFor="name" className="text-sm">Full name</label>
                <input id="name" type="text" name="name" required placeholder="Your Name" className="w-full p-3 rounded bg-gray-800" />
            </div>
            <div>
                <label htmlFor="email" className="text-sm">Email</label>
                <input id="email" type="email" name="email" required placeholder="example@mail.com" className="w-full p-3 rounded bg-gray-800" />
            </div>
            <div>
                <label htmlFor="message" className="text-sm">Message</label>
                <textarea
                    name="message"
                    required
                    placeholder="describe your feedback/message/complain"
                    id="message" rows={3} className="w-full p-3 rounded bg-gray-800" data-gramm="false" wt-ignore-input="true"></textarea>
            </div>
            <button type="submit" value={`${loading ? "Loading..." : "Send Your Feedback"}`} className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-300 text-gray-900">Send Message</button>
        </form>
    );
};

export default EmailSend;