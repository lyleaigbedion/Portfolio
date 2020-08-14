import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Hi I'm Lyle, and for the past year and a half I've been teaching myself JavaScript and how to code. I come for a very family centered home and with it a family outlook a "togetherness" in almost everything done yet I chose programming, computer science, as my dream and major in college. No one in my close family knew about Comp Sci and so the path was lonely. Comp Sci in college proved to be too much for the person I was at the time to handle so I moved over to Digital media with 'light' coding classes, gaming programming with JavaScript, and intro to Web Production with WordPress. I guess I never forgave myself for giving up the comp sci major so I made sure to do the best work I could in these classes and I found a love for programming, just making things or solving a problem. I graduated with my digital media degree and even found an internship working for a non profit organization that deals with tech. Unfortunately, in the almost 2 years there, there was not much in the room to grow and widen my knowledge. I kept sharp or at least tried to by finding resources online and guides. I was introduced to someone from MongoDB now my friend, my mentor, showed me that I had so much more to learn and gave me the courage and drive to stick to it. I was given the link to the FullStack WDF program by my mentor and applied, I knew I needed to work with people in a more structured environment but lacked the funds and so this was an opportunity I wasn't going to pass up.`,
  paraTwo: `Currently I work mostly with Javascript technologies like ReactJS and NodeJS. I also
    have hands on experience working with cloud infrastructures like <b>AWS/GCP</b> and have deployed applications
    keeping scalability in mind. Docker, Kubernetes, Jenkins, SonarQube are some of the cool
    tools I use for <b>CI/ CD</b>. I'm always a learner and a self taught programmer.`,
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Lyle', 'Aigbedion', 'Lyle-Anthony', 'FullStack Engineer', 'Javascript', 'ReactJS', 'NodeJS', 'MongoDB']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Born and bought up in"
            textH3="Brooklyn, NY, United States"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="Love Coffee"
            textH3="Coffee + Me = Happiness"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="Socially Awkward"
            textH3="At times"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="motorcycle.png"
            alt="motorcycle image"
            textH4="Love Riding"
            textH3="Biker for life"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Self Taught Programmer"
            textH3="Thanks to the Web Resources"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued B.Tech in"
            textH3="Computer Science"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
