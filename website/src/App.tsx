import React from 'react';
import Navbar from './components/Navbar';
import DisplayCard from './components/DisplayCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FloatingCard from './components/FloatingCard';

const App: React.FC = () => {
  return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <main>
            <br></br>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6 mb-4">
                  <h1 className="section-header">ABOUT ME</h1>
                </div>
                  <img src="profile_baby.jpeg" alt="Profile" className="profile-image" />
                  <FloatingCard />
                <div className="col-md-6 mb-4">

                </div>
              </div>
            </div>


            <section id="about">
              <p className="section-body">
                I'm a third-year student at the University of Texas at Austin studying Computer Science
                while also pursuing a certificate in Applied Statistical Modeling and minor in Statistics and Data Sciences.
                I am deeply passionate about machine learning, data science, and software development. Outside of a full class schedule, I
                am apart of an emerging tech company centered around machine learning and dental health care in addition to my role as a
                data analyst and software engineer for the Curricular Analytics program at UT Austin.
              </p>
            </section>

            <h1 className="section-header">Projects</h1>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-4 mb-4">
                  <DisplayCard title="System Emulator" description="This is a description of project 1." />
                </div>
                <div className="col-md-4 mb-4">
                  <DisplayCard title="Project 2" description="This is a description of project 2." />
                </div>
                <div className="col-md-4 mb-4">
                  <DisplayCard title="Project 3" description="This is a description of project 3." />
                </div>
                <div className="col-md-4 mb-4">
                  <DisplayCard title="Project 4" description="This is a description of project 4." />
                </div>
                <div className="col-md-4 mb-4">
                  <DisplayCard title="Project 5" description="This is a description of project 5." />
                </div>
                <div className="col-md-4 mb-4">
                  <DisplayCard title="Project 6" description="This is a description of project 6." />
                </div>
              </div>
            </div>
            <section id="contact">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-6 mb-4">
                    <h1 className="section-header">Contact</h1>
                  </div>
                  <div className="col-md-6 mb-4">
                    <p className="section-body">Email:</p>
                    <p className="section-body">LinkedIn:</p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </header>
      </div>
  );
}

export default App;