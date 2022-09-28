import questions from '../data/data';
import Question from './Question';
import styles from './TextContent.module.css';

function TextContent() {
  return (
    <div className={styles.textContentBlock}>
      <h2>FAQ</h2>
      <div>
        {questions.map((p) => {
          return <Question question={p.question} answer={p.answer} />;
        })}
      </div>
    </div>
  );
}

export default TextContent;
