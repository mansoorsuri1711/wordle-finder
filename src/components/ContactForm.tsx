'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import CtaButton from '@/components/CtaButton';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    setFormSubmitted(true);
    reset();

    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="border border-ink/10 bg-white p-6 md:p-8">
      <h2 className="mb-6 text-center font-display text-2xl font-bold text-ink">Send us a message</h2>

      {formSubmitted ? (
        <div className="mb-6 border border-emerald/40 bg-emerald/10 p-4 text-center text-ink">
          <p>Thanks for your message. We will get back to you soon.</p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-ink/85">
            Name
          </label>
          <input
            id="name"
            type="text"
            className={`w-full rounded-md border bg-[#F7F8FC] px-4 py-2 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-violet ${
              errors.name ? 'border-pink' : 'border-ink/15'
            }`}
            placeholder="Your name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-pink-soft">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink/85">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={`w-full rounded-md border bg-[#F7F8FC] px-4 py-2 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-violet ${
              errors.email ? 'border-pink' : 'border-ink/15'
            }`}
            placeholder="you@example.com"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Enter a valid email',
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-pink-soft">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="mb-1 block text-sm font-medium text-ink/85">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            className={`w-full rounded-md border bg-[#F7F8FC] px-4 py-2 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-violet ${
              errors.subject ? 'border-pink' : 'border-ink/15'
            }`}
            placeholder="How can we help?"
            {...register('subject', { required: 'Subject is required' })}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-pink-soft">{errors.subject.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-ink/85">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className={`w-full rounded-md border bg-[#F7F8FC] px-4 py-2 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-violet ${
              errors.message ? 'border-pink' : 'border-ink/15'
            }`}
            placeholder="Write your message..."
            {...register('message', {
              required: 'Message is required',
              minLength: {
                value: 10,
                message: 'Message must be at least 10 characters',
              },
            })}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-pink-soft">{errors.message.message}</p>
          )}
        </div>

        <div className="flex justify-center">
          <CtaButton as="button" type="submit" icon="mail">
            Send message
          </CtaButton>
        </div>
      </form>
    </div>
  );
}
