import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send } from 'lucide-react';
import axios from 'axios';
import { ShowToast } from '../utils/ShowToast';

const Container = styled(motion.section)`
  padding: 2vw 10vw;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  color: #0a2540;
  margin: 0 0 3rem 0;
  text-align: center;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 0%;
    width: 4rem;
    height: 4px;
    background: #0467d5;
    border-radius: 2px;
  }
`;

const Card = styled(motion.div)`
  background: #fff;
  border-radius: 1.5rem;
  padding: 3rem;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:hover {
    transform: translateY(-4px);
    transition: transform 0.3s ease;
  }
`;

const IconDecor = styled(motion.div)`
  position: absolute;
  top: -20px;
  right: -20px;
  background: #0467d5;
  padding: 1rem;
  border-radius: 50%;
  opacity: 0.1;

  svg {
    width: 40px;
    height: 40px;
    color: #0467d5;
  }
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled(motion.div)`
  position: relative;
`;

const Input = styled(motion.input)`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.75rem;
  font-size: 1rem;
  width: 100%;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;

  &:focus {
    border-color: #0467d5;
    box-shadow: 0 0 0 3px rgba(4, 103, 213, 0.1);
    outline: none;
  }

  &:not(:placeholder-shown) + label,
  &:focus + label {
    top: -12px;
    left: 12px;
    font-size: 0.75rem;
    background: #fff;
    padding: 0 4px;
    color: #0467d5;
  }
`;

const Label = styled(motion.label)`
  position: absolute;
  left: 16px;
  top: 16px;
  color: #999;
  font-size: 1rem;
  pointer-events: none;
  transition: 0.2s ease all;
`;

const TextArea = styled(motion.textarea)`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.75rem;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
  width: 100%;

  &:focus {
    border-color: #0467d5;
    box-shadow: 0 0 0 3px rgba(4, 103, 213, 0.1);
    outline: none;
  }

  &:not(:placeholder-shown) + label,
  &:focus + label {
    top: -12px;
    left: 12px;
    font-size: 0.75rem;
    background: #fff;
    padding: 0 4px;
    color: #0467d5;
  }
`;

const Button = styled(motion.button)`
  background: #0467d5;
  color: #fff;
  padding: 1rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: #035ac2;
    transform: translateY(-2px);
  }
`;

const InfoBanner = styled(motion.div)`
  margin-top: 2rem;
  text-align: center;
  font-size: 0.9rem;
  color: #555;
  
  a {
    color: #0467d5;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.165, 0.84, 0.44, 1],
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.165, 0.84, 0.44, 1],
    },
  },
}

const Contact = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
   
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formatEmailMessage = ({ name, email, message }) => {
    return `
      <div style="font-family: Arial, sans-serif; color: #1e293b;">
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; line-height: 1.5;">${message}</p>
      </div>
    `;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { name, email, message } = form;
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (trimmedName.length < 2) {
      ShowToast({
        type: 'error',
        title: 'Invalid Name',
        message: 'Please enter a valid name (at least 2 characters).',
      });
      return;
    }
  
    if (!emailRegex.test(trimmedEmail)) {
      ShowToast({
        type: 'error',
        title: 'Invalid Email',
        message: 'Please enter a valid email address.',
      });
      return;
    }
  
    if (trimmedMessage.length < 10) {
      ShowToast({
        type: 'error',
        title: 'Message Too Short',
        message: 'Please provide more details in your message (min. 10 characters).',
      });
      return;
    }
  
    let BREVO_API_KEY;
  
    try {
      BREVO_API_KEY = process.env.REACT_APP_BREVO_API;
      if (!BREVO_API_KEY) throw new Error('Missing API key');
    } catch (err) {
      ShowToast({
        type: 'error',
        title: 'Configuration Error',
        message: 'Email service not configured correctly.',
      });
      return;
    }
  
    setLoading(true);
  
    try {
      const emailData = {
        sender: { name: 'Sahil Raza', email: 'connectwithsahil007@gmail.com' },
        to: [{ name: 'Sahil Raza', email: 'connectwithsahil007@gmail.com' }],
        subject: `New Connect Message from ${trimmedName}`,
        htmlContent: formatEmailMessage({ name: trimmedName, email: trimmedEmail, message: trimmedMessage }),
      };
  
      const response = await axios.post(
        'https://api.brevo.com/v3/smtp/email',
        emailData,
        {
          headers: {
            'Content-Type': 'application/json',
            'api-key': BREVO_API_KEY,
          },
        }
      );
  
      if (response.status === 201) {
        ShowToast({
          type: 'success',
          title: 'Message Sent',
          message: 'Thanks for reaching out to Sahil Raza! He’ll get back to you shortly.',
        });        
        setForm({ name: '', email: '', message: '' });
      } else {
        throw new Error('Unexpected response status');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      ShowToast({
        type: 'error',
        title: 'Failed to Send',
        message: 'There was an error sending your message. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };
  

return (
  <Container
    ref={ref}
    variants={containerVariants}
    initial="hidden"
    animate={controls}
    id='contact'
  >
    <Title variants={titleVariants}>Contact Me</Title>
    <Card variants={cardVariants}>
      <IconDecor>
        <Send />
      </IconDecor>
      <Form variants={containerVariants} onSubmit={handleSubmit}>
        <FormGroup variants={cardVariants}>
          <Input 
            type="text" 
            required 
            placeholder="eg. John Doe" 
            name="name" 
            value={form.name} 
            onChange={handleChange} 
          />
        </FormGroup>
        <FormGroup variants={cardVariants}>
          <Input 
            type="email" 
            required 
            placeholder="eg. john@company.com" 
            name="email" 
            value={form.email} 
            onChange={handleChange} 
          />
        </FormGroup>
        <FormGroup variants={cardVariants}>
          <TextArea 
            required 
            placeholder="Your Message here..." 
            name="message" 
            value={form.message} 
            onChange={handleChange} 
          />
        </FormGroup>
        <Button 
          type="submit" 
          disabled={loading} 
          whileHover={!loading && { scale: 1.05 }} 
          whileTap={!loading && { scale: 0.95 }}
          style={{ opacity: loading ? 0.6 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
        >
          {loading ? 'Sending...' : <>Send Message <Send size={18} /></>}
        </Button>
      </Form>
      <InfoBanner variants={cardVariants}>
        Or reach out directly at <a href="mailto:connectwithsahil007@gmail.com">connectwithsahil007@gmail.com</a>
      </InfoBanner>
    </Card>
  </Container>
);
};

export default Contact;