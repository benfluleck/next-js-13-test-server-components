import React from "react";
import Card from "../Card/Card";
import styles from "./card_list.module.css";

interface CardListProps {
  id?: string;
  name?: string;
  image: string;
  species?: string;
}

interface CardList {
  data: CardListProps[];
}

function CardList({ data }: CardList) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.root}>Character</h2>
      <div className={styles.container}>
        {data.map((character: CardListProps) => {
          const { id, name, image, species } = character;
          return (
            <Card
              id={id}
              name={name}
              image={image}
              key={id}
              species={species}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CardList;
