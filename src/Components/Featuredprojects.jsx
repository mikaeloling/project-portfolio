import React from 'react';
import GitHubProjects from '../Components/GitHubProjects';

const FeaturedProjects = () => {
  return (
    <div className="featuredprojects">
      <div className="title">Featured Projects</div>

      <div className="frame">
        <div>
          <div className="code">
            <div className="textwrapper">Code</div>
          </div>
          <div className="textwrapper2">
            <GitHubProjects />
           
          </div>
        </div>
      </div>
    </div>

  )
    
};

export default FeaturedProjects;