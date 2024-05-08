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
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div id="experience" className="section">
      <h1 className="section-header">Experience</h1>
      <VerticalTimeline>
        {timelineData.map((element) => {
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
              <ul>
                {element.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
