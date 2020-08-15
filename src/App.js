import React from 'react';
import { Card } from 'antd';
import './App.css';
import dcomhelpline from './assets/images/dcomhelpline.png';
import budgetapp from './assets/images/budgetapp.png';
import vallarta from './assets/images/vallarta.png';
import bluestream from './assets/images/bluestream.png';
import narco from './assets/images/narco.png';
import codina from './assets/images/codina.png';
import fvi from './assets/images/fvi.png';
import debtv2 from './assets/images/debtv2.png';
import m8 from './assets/images/m8.png';

const sites = [
  {
    id: 'debtv2',
    link: 'https://www.debt.com/land/debt-settlement-v2',
    thumbnail: debtv2,
    skills: 'React.js, ES6, styled-component, Antd',
  },
  {
    id: 'dcomhelpline',
    link: 'https://helpline.debt.com/',
    thumbnail: dcomhelpline,
    skills: 'React.js, ES6, styled-components, React-Semantic-UI',
  },
  {
    id: 'vallarta',
    link: 'https://www.vallarta-adventures.com/en/',
    thumbnail: vallarta,
    skills: 'React.js, Next.js, ES6, Redux, styled-components',
  },
  {
    id: 'budgetapp',
    link: 'https://budget-tool-admin.debt.com/',
    thumbnail: budgetapp,
    skills: 'React.js, ES6, Redux, Antd, styled-components',
  },
  {
    id: 'm8',
    link: 'https://m8agency.com/',
    thumbnail: m8,
    skills: 'React, Next.js, styled-components, ES6',
  },
  {
    id: 'bluestream',
    link: 'https://www.mybluestream.com/',
    thumbnail: bluestream,
    skills: 'Angular, ES6, SASS, Bootstrap',
  },
  {
    id: 'narco',
    link: 'http://narcopedia.org/home',
    thumbnail: narco,
    skills: 'HTML5, CSS3, Jquery, Tumblr API',
  },
  {
    id: 'fvi',
    link: 'http://fvi.edu/medical_assistant/',
    thumbnail: fvi,
    skills: 'HTML5, CSS3, Jquery, Bootstrap',
  },
  {
    id: 'codina',
    link: 'http://armandocodina.info/',
    thumbnail: codina,
    skills: 'HTML5, CSS3, Jquery, Bootstrap',
  },
];

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>ALEXANDER F. VAZQUEZ</h1>
      </header>
      <section>
        <h3 className='portfolio-title'>Portfolio</h3>
        <div className='flex-grid-thirds'>
          {sites.map(({ id, thumbnail, link, skills }) => (
            <div className='col' key={id}>
              <a href={link} target='_blank' rel='noopener noreferrer'>
                <Card hoverable style={{ width: '100%', height: 300 }}>
                  <div style={{ backgroundImage: `url("${thumbnail}")` }} className='thumbnail' />
                  <div className='bottom-wrapper'>
                    <p className='skills'>
                      <strong>Stack: </strong>
                      {skills}
                    </p>
                  </div>
                </Card>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
