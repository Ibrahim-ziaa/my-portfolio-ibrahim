import AnimationContainer from "../utils/animation-container";

const AboutMe = () => {
  return (
    <div className="w-full relative pt-10 pb-20 z-40">
      <AnimationContainer
        animation="slide-up"
        className="flex items-center justify-center overflow-hidden w-full mx-auto"
      >
        <div className="w-full">
          <h2 className="text-2xl lg:text-3xl font-medium text-left w-full">
            About Me
          </h2>
        </div>
      </AnimationContainer>

      <AnimationContainer
        animation="slide-up"
        className="flex items-center justify-center overflow-hidden w-full mx-auto pt-10"
      >
        <div className="w-full flex items-center justify-center">
          <p className="text-base md:text-lg text-justify w-full">
            I'm <strong>Ibrahim Zia Khan</strong>, a Data Scientist and AI engineer with a passion for building smart, data-driven solutions. I’ve worked with global clients via Upwork — including from the USA, Singapore, and Ireland — delivering projects in machine learning, NLP, computer vision, and data analytics.
            <br /><br />
            My experience includes developing a skin cancer classifier using EfficientNet and XAI techniques, a multilingual voice summarizer using HuBERT and Mistral APIs, and a custom chatbot for travel assistance powered by intent recognition and entity extraction. I’ve also built dashboards for e-commerce, solar energy forecasting models, and end-to-end analytics solutions in Power BI and Looker Studio.
            <br /><br />
            I'm proficient in Python, PyTorch, scikit-learn, TensorFlow, Streamlit, SQL, and Next.js. I love transforming real-world problems into practical AI solutions. If you're looking for someone who can blend research-level AI with deployable systems, let's build something meaningful together.
          </p>
        </div>
      </AnimationContainer>
    </div>
  );
};

export default AboutMe;
