import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Hi, I'm Lyle-Anthony Aigbedion. I am a FullStack Software Engineer with a focus on the backend.
  I have been self-taught for most of my career; however, I recently graduated from FullStack Academy's Web Development Fellowship(WDF), and I am now in pursuit of a job. I love technology and programming, solving problems with code faced by me and others.
  `,
  paraTwo: `Currently, I work mostly with FullStack Javascript; Node, Express, React, Redux, and Databases(Postgres, MongoDB) or, the NERDS stack. I am interested in and working with more technologies and I hope you'll take a look at some of those projects when they land here!
  `,
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
            textH4="Born and brought up in"
            textH3="Brooklyn, NY, United States"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="food.png"
            alt="food image"
            textH4="Love to Eat"
            textH3="Love to Cook"
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
            img="controller.png"
            alt="controller image"
            textH4="Love Gaming"
            textH3="Playing Since Forever"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Self Taught, with Some Help"
            textH3="Thanks to the Internet and FSA!"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Obtained a BA in"
            textH3="Emerging Media"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
