import React, { forwardRef } from "react";
import Tech from "./Tech";
import Soft from "./Soft";

const About = forwardRef((props, ref) => {
  return (
    <div className="abt" ref={ref}>
      <div className="left_about">
        <h1 className="head1">In a Nutshell</h1>
        <p className="head">Passionate about web development, specifically the MERN stack, I'm on a journey of continuous learning and exploration. Eager to contribute and innovate in the field of web solutions, I approach each project with enthusiasm and a commitment to growth. In this dynamic environment, I find joy in the simplicity of coding, solving problems, and staying curious about the ever-evolving world of web development. 🌐💡🚀</p>

        <p className="contact-info">
          <a href="https://www.linkedin.com/in/anupriya-jayaraj/" target="_blank" rel="noopener noreferrer" className="contact-info">
            <i className="fab fa-linkedin"></i> 
          </a>
          <a href="mailto:anupriyaj2511@gmail.com" className="contact-info">
            <i className="far fa-envelope"></i> 
          </a>
 
          <a href="https://github.com/Anupriya2508" target="_blank" rel="noopener noreferrer" className="contact-info">
            <i className="fab fa-github"></i> 
          </a>
        </p>

      </div>  
      <div className="right_about">
        <Tech />
        <Soft />

      </div>
    </div>
  );
}); 
 
export default About;