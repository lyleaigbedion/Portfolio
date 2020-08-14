module.exports = {
  pathPrefix: '',
  siteUrl: 'https://rolwinreevan.com',
  siteTitle: 'Lyle Aigbedion',
  siteDescription: 'Portfolio of a software developer',
  author: 'Lyle Aigbedion',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT || '', // can embed disqus if I sign up.
  pages: {
    home: '/',
    projects: 'projects',
    blog: 'blog',
    contact: 'contact',
    resume: 'resume',
    tag: 'tags',
  },
  social: {
    github: 'https://github.com/lyleaigbedion',
    facebook: '#',
    twitter: '#',
    instagram: '#',
    rss: '#',
    linkedin: 'https://www.linkedin.com/in/lyle-aigbedion/',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/461de37a-02f0-4f99-ac46-c2850cbc873c',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  tags: {
    javascript: {
      name: 'javascript',
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    nodejs: {
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    rxjs: {
      name: 'RxJS',
      description: 'RxJS is a library for reactive programming using Observables, for asynchronous operations.',
      color: '#eb428e',
    },
    typescript: {
      name: 'typescript',
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    reactjs: {
      name: 'reactjs',
      description: 'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    gatsby: {
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    html: {
      name: 'HTML',
      description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    css: {
      name: 'css',
      description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    python: {
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },
    reduxjs: {
      name: 'redux.js',
      description: 'A predictable state container for JavaScript apps.',
      color: '#3b0563',
    },
    postgresql: {
      name: 'postgresql',
      description: 'An open source relational database management system developed by a worldwide team of volunteers.',
      color: '#306192',
    },
    d3js: {
      name: 'D3js',
      description: 'A JavaScript library for manipulating documents based on data.',
      color: '#f79045',
    },
    mongodb: {
      name: 'MongoDB',
      description: 'A document-oriented NoSQL database used for high volume data storage.',
      color: '#2f9e3e',
    },
    sequelizejs: {
      name: 'sequelize.js',
      description: 'A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.',
      color: '#2174b6',
    },
    mongoosejs: {
      name: 'mongoose.js',
      description: 'An Object Data Modeling (ODM) library for MongoDB and Node. js.',
      color: '#8a0000',
    },
    expressjs: {
      name: 'expressjs',
      description: 'A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.',
      color: '#383838',
    },
    wordpress: {
      name: 'WordPress',
      description: 'A free and open-source content management system ',
      color: '#444140',
    },
    p5js: {
      name: 'p5js',
      description: 'A JavaScript library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, beginners, and anyone else!',
      color: '#e61e5b',
    },
    tensorflowjs: {
      name: 'Tensorflow.js',
      description: 'A library for machine learning in JavaScript. Develop ML models in JavaScript, and use ML directly in the browser or in Node. js.',
      color: '#f78200',
    },

  },
};
