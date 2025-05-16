import React from "react";
import AnimationContainer from "../utils/animation-container";
import { SKILLS } from "@/constants/skills";
import ShowSkills from "../utils/show-skills";

const MySkills = () => {
  return (
    <div className="w-full relative pb-20 py-10 z-40">
      <AnimationContainer
        animation="slide-up"
        delay={0.1}
        className="flex items-center justify-center overflow-hidden w-full mx-auto"
      >
        <div className="w-full">
          <h2 className="text-2xl lg:text-3xl font-medium text-left w-full">
            Skills & Tools
          </h2>

          <p className="text-justify lg:leading-7 text-foreground/80 lg:text-start mt-10">
            I’m a Data Scientist and AI Engineer experienced in building
            end-to-end machine learning pipelines, web applications, and data
            dashboards. I’ve worked across NLP, computer vision, time series,
            and automation projects, with expertise in Python, JavaScript, and
            modern frameworks.
          </p>

          <p className="text-justify lg:leading-7 text-foreground/80 lg:text-start mt-4">
            My toolkit spans from deep learning with PyTorch and TensorFlow to
            full-stack solutions using Next.js, Streamlit, FastAPI, and Power
            BI. I continuously explore new technologies to create impactful,
            intelligent systems.
          </p>
        </div>
      </AnimationContainer>

      <div className="flex flex-col pt-10 w-full">
        <div className="flex flex-col flex-wrap items-start gap-5">
          {SKILLS.map((skill, index) => (
            <AnimationContainer
              key={skill.title}
              delay={0.1 * index + 0.1}
              className="flex flex-col mb-4"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-bold">{skill.title}</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <ShowSkills stacks={skill.stack} />
                </div>
              </div>
            </AnimationContainer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
