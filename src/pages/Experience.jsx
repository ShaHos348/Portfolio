import React, { useState, useEffect } from "react";
import "./styles/Experience.css";

import { ReactComponent as WorkIcon } from "../assets/work.svg";
import { ReactComponent as SchoolIcon } from "../assets/school.svg";

import timelineData from "./data/timelineData";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  let workIconStyles = { background: "cyan" };
  let schoolIconStyles = { background: "pink" };

  const [descriptionVisibility, setDescriptionVisibility] = useState(
    timelineData.map(() => true)
  );

  // Function to toggle description visibility for a specific element
  const toggleDescription = (index) => {
    setDescriptionVisibility((prevVisibility) => {
      const newVisibility = [...prevVisibility];
      newVisibility[index] = !newVisibility[index];
      return newVisibility;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setDescriptionVisibility(timelineData.map(() => false)); // Set visibility to false when screen size decreases
      } else {
        setDescriptionVisibility(timelineData.map(() => true));
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="experience" className="section">
      <h1 className="section-header">Experience</h1>
      <VerticalTimeline>
        {timelineData.map((element, index) => {
          let isWorkIcon = element.icon === "work";

          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="timeline-date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title title">
                {element.name}
              </h3>
              <h3 className="vertical-timeline-element-title etitle">
                ({element.title})
              </h3>

              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              {descriptionVisibility[index] && (
                <ul className="timeline-description">
                  {element.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
              <button
                className="timeline-description-button"
                onClick={() => toggleDescription(index)}
              >
                {descriptionVisibility[index]
                  ? "=>Hide Description<="
                  : "<=Show Description=>"}
              </button>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
