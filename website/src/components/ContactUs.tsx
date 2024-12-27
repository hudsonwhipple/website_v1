import React, { useState } from 'react';
import {
  ActionIcon,
  SimpleGrid,
  Title,
  TextInput,
  Textarea,
  Button,
  Group,
  Text,
} from '@mantine/core';
import emailjs from 'emailjs-com';
import { ContactIconsList } from './ContactIcons';
import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from '@tabler/icons-react';
import styles from './ContactUs.module.css';

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        'service_k6xxcuu', // Replace with your EmailJS service ID
        'template_7o4cpam', // Replace with your EmailJS template ID
        formData,
        's9FdrC1xpv5O6PU6N' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('EmailJS Error:', error);
          console.log(error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  const icons = social.map((Icon, index) => (
    <ActionIcon
      key={index}
      size={28}
      className={styles.social}
      variant="transparent"
    >
      <Icon size={22} stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <div className={styles.wrapper}>
      <SimpleGrid
        cols={{ base: 1, sm: 2 }} spacing={50}
      >
        <div>
          <Title className={styles.title}>Contact me</Title>
          <Text className={styles.description} mt="md" mb={30}>
            Feel free to reach out to me however!
          </Text>

          <ContactIconsList />

          <Group mt="xl">
            {icons}
          </Group>
        </div>
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <TextInput
              label="Email"
              name="email"
              placeholder="your@email.com"
              required
              classNames={{ input: styles.input, label: styles.inputLabel }}
              value={formData.email}
              onChange={handleChange}
            />
            <TextInput
              label="Name"
              name="name"
              placeholder="Your Name"
              mt="md"
              classNames={{ input: styles.input, label: styles.inputLabel }}
              value={formData.name}
              onChange={handleChange}
            />
            <Textarea
              required
              label="Your message"
              name="message"
              placeholder="I really love your work..."
              minRows={4}
              mt="md"
              classNames={{ input: styles.input, label: styles.inputLabel }}
              value={formData.message}
              onChange={handleChange}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" className={styles.control}>
                Send message
              </Button>
            </Group>
          </form>
        </div>
      </SimpleGrid>
    </div>
  );
};

export default ContactUs;
