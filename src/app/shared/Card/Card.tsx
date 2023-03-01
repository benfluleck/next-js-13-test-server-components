import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
interface CardProps {
  id?: string;
  name?: string;
  image: string;
  species?: string;
}

function Card({ id, name, image, species }: CardProps) {
  const getPriority = (id: any) => {
    if (id < 6) {
      return true;
    }
    return false
  };

  return (
    <div key={id}>
      <Image
        src={image}
        alt="image"
        width={300}
        height={300}
        priority={getPriority(id)}
      />

      <p className={styles.card_content}>{name}</p>
      <p className={styles.card_content}>{species}</p>
    </div>
  );
}

export default Card;
