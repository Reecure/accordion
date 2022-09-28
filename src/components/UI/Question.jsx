import { useState } from 'react';
import styles from './Question.module.css';

function Question({ question, answer }) {
  const [visible, setVisible] = useState(false);

  const visibleHandler = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };

  return (
    <div className={styles.questionBlock}>
      <div>
        <h3 className={styles.questions}>{question}</h3>
        {visible ? (
          <p>{answer}</p>
        ) : (
          <p className={styles.answerBlock}>{answer}</p>
        )}
      </div>
      <div>
        <button onClick={visibleHandler}></button>
      </div>
    </div>
  );
}

export default Question;
