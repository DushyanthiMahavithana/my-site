import React, { useState, useRef } from 'react';
import { Projects } from '../Helpers/Projects';
import ProjectItems from '../components/ProjectItems';
import '../styles/Work.css';

function Work() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [highlightedProject, setHighlightedProject] = useState(null); 
  const projectRefs = {};

  const toggleDropdown = (language) => {
    if (selectedLanguage === language) {
      setSelectedLanguage(null);
    } else {
      setSelectedLanguage(language);
    }
  };

  const uniqueLanguages = [...new Set(Projects.map((project) => project.planguage))];

  const scrollToProject = (id) => {
    const element = projectRefs[id];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setHighlightedProject(id); 
    }
  };

  return (
    <div className='work'>
      <div className='sub-topics'>
        <h2>My Projects</h2>
        <div className='work-summary'>
          {uniqueLanguages.map((language, key) => (
            <div key={key}>
              <button onClick={() => toggleDropdown(language)} className='dropdown-button'>
                {language} Projects
              </button>
              {selectedLanguage === language && (
                <div className='dropdown-content'>
                  {Projects.filter((project) => project.planguage === language).map(
                    (projectItems, key) => (
                      <div
                        key={key}
                        onClick={() => scrollToProject(projectItems.pname)}
                        className={highlightedProject === projectItems.pname ? 'highlighted' : ''}
                      >
                        {projectItems.pname}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='work-list'>
          {Projects.map((projectItems, key) => {
            return (
              <div
                key={key}
                id={projectItems.pname}
                ref={(ref) => (projectRefs[projectItems.pname] = ref)}
                className={highlightedProject === projectItems.pname ? 'highlighted' : ''}
              >
                <ProjectItems
                  pname={projectItems.pname}
                  planguage={projectItems.planguage}
                  pabout={projectItems.pabout}
                  pyoutubelink={projectItems.pyoutubelink}
                  pgitlink={projectItems.pgitlink}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;









