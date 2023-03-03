'use client'

import useSWR from 'swr'
import Image from "next/image";
import styles from "./character.module.css";
import { useMemo } from 'react';


const fetcher = (arg: any, ...args: any) => fetch(arg, ...args).then((res) => res.json())

const Character = () => {

  const randomCharacter = useMemo(() => Math.floor(Math.random() * 827), [])



  const { data, error } = useSWR(`https://rickandmortyapi.com/api/character/${randomCharacter}`, fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div> 

  return (
    <div className={styles.container}>
      <Image width={300} height={400} alt="Image" src={data?.image} />
      <div className={styles.content}>
        <h3>{data?.name}</h3>
        <p>{data?.status}</p>
        <p>{data?.species}</p>
        <p>{data?.gender}</p>
      </div>
  </div>)
  


}

export default Character;