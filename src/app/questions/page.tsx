import { loadQuestions } from "../../lib/hello";
import styles from "./questions.module.css";

export interface Question {
    question: string;
    url: string;
  }




export default async function CharacterPage() {

    const questions = await loadQuestions();

    return(
        <>
            <h2>Questions</h2>
            <ul>{questions.map(({question,url}: Question) => <li key={url} className={styles.container}>{question}</li>)}</ul>
        </>
    )
}




