import React, { useState } from 'react'
import ProjectCards from './ProjectCards'
import colorSharp2 from '../assets/logos/color-sharp2.png'
import projImg1 from '../assets/logos/project-img1.png'
import projImg2 from '../assets/logos/project-img2.png'
import projImg3 from '../assets/logos/project-img3.png'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";


function Projects() {


  const [activeTab , setActiveTab] = useState('')


  function changeActiveTab(tab){
    setActiveTab(tab)
  }


    const Projects = [
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl : projImg3,
          },
    ]



  return (
    <section className="project" id="projects">
    <Container>
      <Row>
        <Col size={12}>
            <div className={"animate__animated animate__fadeIn"}>
              <h2>Projects</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                {/*<Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
  </Nav>*/}
                <div className='projects-tab'>
                  <p className={`first  ${activeTab === 'tab1' ? 'activetab' : ''}`} onClick={() => changeActiveTab('tab1')}>Tab 1</p>
                  <p className={activeTab === 'tab2' ? 'activetab' : ''} onClick={() => changeActiveTab('tab2')}>Tab 2</p>
                  <p className={`third ${activeTab === 'tab3' ? 'activetab' : ''}`} onClick={() => changeActiveTab('tab3')}>Tab 3</p>
                </div>
                <Tab.Content id="slideInUp" className={"animate__animated animate__slideInUp"}>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        <div className='cards-container'>
                        {
                        Projects.map((project, index) => {
                          return (
                              <ProjectCards
                              key={index}
                              {...project}
                              />
                       
                          )
                        })}
                        </div>    
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="section">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
        </Col>
      </Row>
    </Container>
    <img className="background-image-right" src={colorSharp2}></img>
  </section>

  )
}

export default Projects