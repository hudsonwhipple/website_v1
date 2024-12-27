import React from 'react';
import {
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  useMantineTheme,
} from '@mantine/core';
import classes from './FeaturesCard.module.css';

const mockdata = [
  {
    title: 'Data Analyst/SWE at Curricular Analytics',
    description:
      'Performed data analysis on the student curriculum plans at UT Austin to highlight complexity and other factors detering student graduation. Developing the data anayltics platform for the emerging program at UT Austin',
    image: 'UT_Austin.png',
  },
  {
    title: 'SWE at Gmango',
    description:
      'Built the mobile fronted app in flutter for our dental tech startup complete with checkout, users, and marketplace. Currently working to build AI health analysis of image scans taken with the products uploaded through the app',
    image: 'Gmango_logo.png',
  },
  {
    title: 'SWE at Code Assist',
    description:
      'In this UT research project, I developed the unittests for an ai auto-grading platform complete with multithreading tests and implemented api endpoints in the backend for user management in the PostgreSQL database',
    image: 'UT_Austin.png',
  },
];

export function FeaturesCards() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl" style={{ backgroundColor:'rgba(42, 42, 42, 0.25)',
      border: '1px solid rgba(99, 99, 99, 0.25)', textAlign: 'left' }}>
      <img src={feature.image} alt={feature.title} className={classes.cardImage} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md" style={{ color: 'white'}}>
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg">
            What starts here changes the world
        </Badge>
      </Group>
      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Just a little bit of what I have been doing in my freetime...
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}