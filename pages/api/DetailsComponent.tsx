import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faAt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';


const DetailsComponent = () => {
  return (
    <>
      <div className="details">
        <h2>
          Vincenzo Scalcione <br />
          <span>Senior Fullstack Developer</span>
        </h2>
        <div className="infos">
          <h3>
            342 <br />
            <span>Posts</span>
          </h3>
          <h3>
            120k <br />
            <span>Programmming Languages</span>
          </h3>
          <h3>
            285 <br />
            <span>IT projects</span>
          </h3>
        </div>
        <div className="action-buttons">

          <FontAwesomeIcon icon={faMessage} fontSize={30} />
          <FontAwesomeIcon icon={faAt} fontSize={30} />
          <FontAwesomeIcon icon={faLinkedin} fontSize={30} />
          <FontAwesomeIcon icon={faGithub} fontSize={30} />
          <FontAwesomeIcon icon={faInstagram} fontSize={30} />
        </div>
      </div>
    </>
  );
};

export default DetailsComponent;
