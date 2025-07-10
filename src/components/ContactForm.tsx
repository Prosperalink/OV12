'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Check, Send } from 'lucide-react';
import { useState } from 'react';

interface IFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

interface IFormErrors {
  [key: string]: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<IFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const [errors, setErrors] = useState<IFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const totalSteps = 3;

  // Cinematic animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const progressVariants = {
    initial: { width: 0 },
    animate: {
      width: `${(currentStep / totalSteps) * 100}%`,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: IFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  // Enhanced input field component with floating label
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const InputField = ({
    field,
    label,
    type = 'text',
    required = false,
  }: {
    field: keyof IFormData;
    label: string;
    type?: string;
    required?: boolean;
  }) => (
    <motion.div
      className='relative mb-6'
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className='relative'>
        {/* eslint-disable-next-line @typescript-eslint/naming-convention */}
        {field === 'message' ? (
          <textarea
            id={field}
            name={field}
            value={formData[field]}
            onChange={e => handleInputChange(field, e.target.value)}
            onFocus={() => setFocusedField(field)}
            onBlur={() => setFocusedField(null)}
            className={`w-full px-4 py-4 border-2 rounded-lg transition-all duration-300 input-cinematic resize-none ${
              focusedField === field
                ? 'border-cinematic-blue dark:border-cinematic-gold shadow-lg shadow-cinematic-blue/20 dark:shadow-cinematic-gold/20'
                : 'border-gray-300 dark:border-gray-600'
            } ${
              errors[field]
                ? 'border-red-500 dark:border-red-400 shadow-lg shadow-red-500/20'
                : ''
            }`}
            placeholder={
              focusedField === field ? '' : `Enter your ${label.toLowerCase()}`
            }
            required={required}
            rows={6}
          />
        ) : (
          <input
            type={type}
            id={field}
            name={field}
            value={formData[field]}
            onChange={e => handleInputChange(field, e.target.value)}
            onFocus={() => setFocusedField(field)}
            onBlur={() => setFocusedField(null)}
            className={`w-full px-4 py-4 ${
              focusedField === field
                ? 'border-cinematic-blue dark:border-cinematic-gold shadow-lg shadow-cinematic-blue/20 dark:shadow-cinematic-gold/20'
                : 'border-gray-300 dark:border-gray-600'
            } ${
              errors[field]
                ? 'border-red-500 dark:border-red-400 shadow-lg shadow-red-500/20'
                : ''
            }`}
            placeholder={
              focusedField === field ? '' : `Enter your ${label.toLowerCase()}`
            }
            required={required}
          />
        )}

        {/* Floating label */}
        <motion.label
          className={`absolute left-4 ${
            field === 'message' ? 'left-12' : ''
          } top-4 text-gray-500 dark:text-gray-400 transition-all duration-300 pointer-events-none ${
            focusedField === field || formData[field]
              ? 'text-xs -translate-y-6 text-cinematic-blue dark:text-cinematic-gold'
              : 'text-base'
          }`}
          animate={{
            y: focusedField === field || formData[field] ? -24 : 0,
            scale: focusedField === field || formData[field] ? 0.85 : 1,
          }}
        >
          {label} {required && '*'}
        </motion.label>

        {/* Enhanced focus ring */}
        <div
          className={`absolute inset-0 rounded-lg border-2 border-transparent transition-all duration-300 ${
            focusedField === field
              ? 'border-cinematic-blue/30 dark:border-cinematic-gold/30'
              : ''
          }`}
        />
      </div>

      {/* Error message with animation */}
      <AnimatePresence>
        {errors[field] && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className='mt-2 text-sm text-red-500 dark:text-red-400 flex items-center'
          >
            <span className='w-1 h-1 bg-red-500 rounded-full mr-2 animate-pulse'></span>
            {errors[field]}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );

  if (isSubmitted) {
    return (
      <motion.div
        className='text-center py-12'
        variants={successVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.div
          className='w-20 h-20 bg-cinematic-gold rounded-full flex items-center justify-center mx-auto mb-6'
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <Check className='w-10 h-10 text-white' />
        </motion.div>

        <motion.h3
          className='text-2xl font-bold text-gray-900 dark:text-white mb-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Message Sent Successfully!
        </motion.h3>

        <motion.p
          className='text-gray-600 dark:text-gray-300 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Thank you for reaching out! We&apos;ll get back to you within 24 hours
          to discuss your project and how we can bring your vision to life with
          our cinematic approach to digital innovation.
        </motion.p>

        <motion.button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              company: '',
              service: '',
              budget: '',
              timeline: '',
              message: '',
            });
            setCurrentStep(1);
          }}
          className='px-6 py-3 bg-cinematic-blue dark:bg-cinematic-gold text-white dark:text-cinematic-blue font-medium rounded-lg hover:bg-cinematic-blue/90 dark:hover:bg-cinematic-gold/90 transition-all duration-300 btn-cinematic'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Another Message
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div
      className='max-w-2xl mx-auto'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      {/* Enhanced progress indicator */}
      <div className='mb-8'>
        <div className='flex items-center justify-between mb-4'>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
            Step {currentStep} of {totalSteps}
          </h3>
          <span className='text-sm text-gray-500 dark:text-gray-400'>
            {Math.round((currentStep / totalSteps) * 100)}% Complete
          </span>
        </div>

        <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden'>
          <motion.div
            className='h-full bg-gradient-to-r from-cinematic-blue to-cinematic-gold rounded-full'
            variants={progressVariants}
            initial='initial'
            animate='animate'
          />
        </div>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        className='space-y-6'
        variants={formVariants}
        initial='hidden'
        animate='visible'
      >
        {/* Step 1: Basic Information */}
        <AnimatePresence mode='wait'>
          {currentStep === 1 && (
            <motion.div
              key='step1'
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className='space-y-6'
            >
              <InputField field='name' label='Full Name' required />
              <InputField
                field='email'
                label='Email Address'
                type='email'
                required
              />
              <InputField field='phone' label='Phone Number' type='tel' />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 2: Company Information */}
        <AnimatePresence mode='wait'>
          {currentStep === 2 && (
            <motion.div
              key='step2'
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className='space-y-6'
            >
              <InputField field='company' label='Company Name' />
              <div className='text-center'>
                <p className='text-gray-600 dark:text-gray-300 mb-4'>
                  Share your vision with us - let&apos;s discuss how we can
                  transform your digital presence with our cinematic approach to
                  innovation.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 3: Message */}
        <AnimatePresence mode='wait'>
          {currentStep === 3 && (
            <motion.div
              key='step3'
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className='space-y-6'
            >
              <motion.div
                className='relative'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <textarea
                  value={formData.message}
                  onChange={e => handleInputChange('message', e.target.value)}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-4 border-2 rounded-lg transition-all duration-300 input-cinematic resize-none ${
                    focusedField === 'message'
                      ? 'border-cinematic-blue dark:border-cinematic-gold shadow-lg shadow-cinematic-blue/20 dark:shadow-cinematic-gold/20'
                      : 'border-gray-300 dark:border-gray-600'
                  } ${
                    errors.message
                      ? 'border-red-500 dark:border-red-400 shadow-lg shadow-red-500/20'
                      : ''
                  }`}
                  placeholder={
                    focusedField === 'message' ? '' : 'Your message...'
                  }
                  rows={6}
                  required
                />

                {/* Floating label for textarea */}
                <motion.label
                  className={`absolute left-4 top-4 text-gray-500 dark:text-gray-400 transition-all duration-300 pointer-events-none ${
                    focusedField === 'message' || formData.message
                      ? 'text-xs -translate-y-6 text-cinematic-blue dark:text-cinematic-gold'
                      : 'text-base'
                  }`}
                  animate={{
                    y: focusedField === 'message' || formData.message ? -24 : 0,
                    scale:
                      focusedField === 'message' || formData.message ? 0.85 : 1,
                  }}
                >
                  Your Message *
                </motion.label>
              </motion.div>

              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='text-sm text-red-500 dark:text-red-400 flex items-center'
                >
                  <span className='w-1 h-1 bg-red-500 rounded-full mr-2 animate-pulse'></span>
                  {errors.message}
                </motion.p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced navigation buttons */}
        <div className='flex justify-between pt-6'>
          {currentStep > 1 && (
            <motion.button
              type='button'
              onClick={handlePrevStep}
              className='px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 btn-cinematic'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Previous
            </motion.button>
          )}

          <div className='ml-auto'>
            {currentStep < totalSteps ? (
              <motion.button
                type='button'
                onClick={handleNextStep}
                className='px-6 py-3 bg-cinematic-blue dark:bg-cinematic-gold text-white dark:text-cinematic-blue font-medium rounded-lg hover:bg-cinematic-blue/90 dark:hover:bg-cinematic-gold/90 transition-all duration-300 btn-cinematic'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Next Step
              </motion.button>
            ) : (
              <motion.button
                type='submit'
                disabled={isSubmitting}
                className='px-6 py-3 bg-cinematic-gold dark:bg-cinematic-blue text-cinematic-blue dark:text-white font-medium rounded-lg hover:bg-cinematic-gold/90 dark:hover:bg-cinematic-blue/90 transition-all duration-300 btn-cinematic disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2'
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className='w-4 h-4 border-2 border-current border-t-transparent rounded-full'
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className='w-4 h-4' />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            )}
          </div>
        </div>
      </motion.form>
    </motion.div>
  );
}
