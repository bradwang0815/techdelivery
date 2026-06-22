import "./styles/About.css";
import { config } from "../config";

function splitJapaneseSentences(text: string): string[] {
  const sentences = text.match(/[^。]+。/g);
  return sentences?.length ? sentences : [text];
}

function keepSlashPhrasesTogether(text: string): string {
  return text.replace(/\s*\/\s*/g, "\u00a0/\u00a0");
}

const About = () => {
  const sentences = splitJapaneseSentences(config.about.description);

  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">{config.about.title}</h3>
        <div className="about-text">
          {sentences.map((sentence, index) => (
            <p key={index} className="about-sentence">
              {keepSlashPhrasesTogether(sentence)}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
