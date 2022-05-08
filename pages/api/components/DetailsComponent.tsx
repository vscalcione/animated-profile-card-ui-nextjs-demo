import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faAt } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import env from '../env';

const DetailsComponent = () => {
  const messageUrl = env.messageUrl;
  const emailAddress = env.emailAddress;
  const linkedinUrl = env.linkedinUrl;
  const githubUrl = env.githubUrl;
  const instagramUrl = env.instagramUrl;

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
          <FontAwesomeIcon
            icon={faMessage}
            fontSize={30}
            onClick={() => window.open(`${messageUrl}`, "_blank")}
          />
          <FontAwesomeIcon
            icon={faAt}
            fontSize={30}
            onClick={() => window.open(`${emailAddress}`, "_blank")}
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            fontSize={30}
            onClick={() => window.open(`${linkedinUrl}`, "_blank")}
          />
          <FontAwesomeIcon
            icon={faGithub}
            fontSize={30}
            onClick={() => window.open(`${githubUrl}`, "_blank")}
          />
          <FontAwesomeIcon
            icon={faInstagram}
            fontSize={30}
            onClick={() => window.open(`${instagramUrl}`, "_blank")}
          />
        </div>
      </div>
    </>
  );
};

export default DetailsComponent;
