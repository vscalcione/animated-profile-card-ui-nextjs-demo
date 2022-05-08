import React from "react";
import Image from "next/image";
import ProfilePicture from '../../public/profile-picture.jpg';
import ContentComponent from "./ContentComponent";


const CardComponent = () => {
  return (
    <>
      <div className="card">
        <div className="img-box">
          <Image src={ProfilePicture} alt="profile-picture" className="profile-picture-box" />
        </div>
        <ContentComponent />
      </div>
    </>
  );
};

export default CardComponent;