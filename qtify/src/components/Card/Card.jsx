import React from "react";
import styles from './Card.module.css';
import {Tooltip, Chip} from '@mui/material';
import { Link } from 'react-router-dom';

function Card({data, type}){
    const getCard = (type) => {
        // eslint-disable-next-line default-case
        switch(type) {
            case "album": {
                const {image, follows, songs, title, slug} = data;
                return (
                    <Tooltip tile={`${songs.length} songs`} placement="top" arrow>
                        <Link to={`/album/${slug}`}>
                            <div className={styles.wrapper}>
                                <div styles={styles.card}>
                                    <img src={image} alt="album" loading="lazy">
                                    </img>
                                    <div className={styles.banner}>
                                        <Chip label={`${follows} Follows`} size="small" className={styles.chip} />                                    
                                    </div>
                                </div>
                                <div className={styles.titleWrapper}>
                                    <p>{title}</p>
                                </div>
                            </div>
                        </Link>
                    </Tooltip>
                )
            }
            case "songs": {
                const {image, likes, title} = data;
                return (
                    <div className={styles.wrapper}>
                        <div styles={styles.card}>
                            <img src={image} alt="song" loading="lazy">
                            </img>
                            <div className={styles.banner}>
                                <div className={styles.pills}>
                                    <p>{likes} Likes</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.titleWrapper}>
                            <p>{title}</p>
                        </div>
                    </div>
                )
            }
            default: <></>
        }
    }
    return getCard(type);
}

export default Card;