import React from 'react';
import { IconCheck } from '@tabler/icons-react';
import { MantineProvider, List, ThemeIcon } from '@mantine/core';
import Navbar from './components/Navbar';
import DisplayCard from './components/DisplayCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FloatingCard from './components/FloatingCard';
import ContactUs from './components/ContactUs';
import '@mantine/core/styles.css';
import { FeaturesCards } from './components/FeaturesCard';

const App: React.FC = () => {
  return (
    <MantineProvider>

      <div className="App">
        <Navbar />
        <header className="App-header">
          <main>
            <div className="container">
            </div>


            <section id="about">
              <br></br>
              <div className="row justify-content-center">
                <div className="col-md-6 mb-4">
                  <h1 className="section-header">About <span className="highlight">Me</span></h1>
                  <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Programming Languages:</b> – Java, C, Python, JavaScript, Dart, Objective-C, SQL
              </List.Item>
              <List.Item>
                <b>Worked With: </b> – React, Vue, Flutter, Flask, PostgreSQL, GCP, Docker, PyTorch, TensorFlow
              </List.Item>
            </List>
                </div>
                <div className="col-md-6 mb-4">
                  {/* <img src="profile_baby.jpeg" alt="Profile" className="profile-image" /> */}
                  <FloatingCard />

                </div>
              </div>
              <p className="section-body">
I am a third-year Computer Science student at the University of Texas at Austin, complementing my major with a certificate in Applied Statistical Modeling and a minor in Statistics and Data Sciences. My primary areas of interest lie at the intersection of machine learning, data science, and software engineering.
              </p>
              <p className="section-body"> 
              Beyond academics, I contribute to GMango, an innovative tech company combining AI with dental technology to revolutionize oral healthcare. As a key developer, I’ve focused on building the company’s mobile app, including features such as user profiles, settings, and marketplace. Additionally, I’m involved in an university initiative aimed at analyzing the Curricular Analytics of 40 prominent degree programs. This project seeks to identify administrative barriers to student success by developing a data-driven platform to visualize and interpret trends, shaping the future of academic curriculum at UT Austin.
              </p>
            </section>
            <section id="projects">
              <h1 className="section-header">Projects</h1>
              <p className="section-body"> Some projects completed are not publically available but please reach out to me to learn more about them!</p>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-4 mb-4">
                    <DisplayCard img="Google_Co_Lab.png" title="Climate Data Warehouse" description="Developed in 
                    GCP and dbt a data warehouse to take several climate datasets through transformation layers to 
                    analyze effects of policy on the environment and more" link="" available="secondary"/>
                  </div>
                  <div className="col-md-4 mb-4">
                    <DisplayCard img="SMOTE.png" title="Grocery Item Predictor" description="Feature Engieered 
                    and used Machine Learning to create a method of recommending products to likely customers" link="" available="secondary"/>
                  </div>
                  <div className="col-md-4 mb-4">
                    <DisplayCard img="website_personal.png" title="Personal Website" description="This frontend website 
                    was created through React, open-source libraries, and type script." link="https://github.com/hudsonwhipple/website_v1" available="primary"/>
                  </div>
                  <div className="col-md-4 mb-4">
                    <DisplayCard img="concert.jpg" title="Cheap Cheap Tickets" description="Implemented a 
                    fullstack website in React, Flask, PostgreSQL, and with REST API" link="https://github.com/hudsonwhipple/fullstackweb" available="primary"/>
                  </div>
                  <div className="col-md-4 mb-4">
                    <DisplayCard img="operatingsystem.jpg" title="PintOS" description="Built an operating system 
                    with priority donation, page replacement algorithms, and synchronization." link="" available="secondary"/>
                  </div>
                  <div className="col-md-4 mb-4">
                    <DisplayCard img="computerchip.jpg" title="System Emulator" description="Developed the 
                    software for a processor under the PIPE- optimization" link="" available="secondary"/>
                  </div>
                </div>
              </div>
            </section>
            <br></br>
            <section id="experience">
              <div className="container">
                <div className="row justify-content-center">
                  <div>
                    <h1 className="section-header">Experience</h1>
                    <FeaturesCards />
                  </div>
                </div>
              </div>
            </section>
            <br></br>
            <section id="contact">
              <div className="container">
                <div className="row justify-content-center">
                  <div>
                      <ContactUs />
                  </div>
                </div>
              </div>
            </section>
          </main>
        </header>
      </div>
    </MantineProvider>
  );
}

export default App;