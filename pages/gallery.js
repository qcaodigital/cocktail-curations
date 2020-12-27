import { Client, assignResultTo } from './../prismic-configuration';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Head from 'next/head';
import styles from './gallery.module.scss';
import Image from 'next/image';
import Modal from '../components/gallery/modal';

export default function Gallery({ prismicResults, NAV_SPACER, state: { viewport } }){
    const imageGallery = assignResultTo('gallery_page', prismicResults)
    const [imageGalleryArr, setImageGalleryArr] = useState(Object.keys(imageGallery).map(key => imageGallery[key]));
    const [galleryColumns, setGalleryColumns] = useState([]);

    //Initialize columns
    let columns;
    switch(viewport){
        case 'mobile': columns = 2; break;
        case 'tablet': columns = 3; break;
        case 'desktop': columns = 4; break;
        default: columns = 3;
    }
    let columnsArr = [...Array(columns)].map(col => []);
    const COLUMN_SIZE_STYLES = {
        flex: `${1/columns}`,
        maxWidth: `${1/columns}`
    }

    //sory by portrait and landscape
    useEffect(() => {
        //Prismic includes empty media templates so we need to remove them from the array
        const galleryCopy = imageGalleryArr.filter(img => img.dimensions)
        const portraits = [];
        const landscapes = [];
        galleryCopy.forEach(img => {
            if(img.dimensions.height > img.dimensions.width){
                portraits.push(img)
            } else {
                landscapes.push(img)
            }
        })
        console.log(`Portrait count: ${portraits.length}, Landscape Count: ${landscapes.length}`)
        setImageGalleryArr([...portraits, ...landscapes])
        window.scrollTo({ top: 0 })
    }, [viewport])


    //Assign each image to a column, distributed evenly and then shuffled
    useEffect(() => {
        let counter = 0;
        imageGalleryArr.forEach(img => {
            columnsArr[counter].push(img);
            counter++;
            if(counter >= columns){
                counter = 0;
            }
        })

        columnsArr.forEach((col, idx) => {
            for(let i = 0; i < col.length; i++){
                let tempVal = col[i];
                const currIndex = Math.floor((Math.random() * (col.length - 1)));
                col[i] = col[currIndex];
                col[currIndex] = tempVal;
            }
        })

        setGalleryColumns(columnsArr);

    }, [imageGalleryArr])

    return (
        <>
        <Head>
            <title>Gallery | Cocktail Curations</title>
        </Head>
        <motion.section exit={{ opacity: 0 }} intitial={{ opacity: 0 }} animate={{ opacity: 1 }} id={styles.Gallery}>
            {NAV_SPACER}
            <header>
                <h1>A look into what we do</h1>
                <h2>Our events, bars, cocktails, and more.</h2>
            </header>
            <div className={styles.galleryContainer}>
                {galleryColumns.map((column, idx) => (
                    <div key={idx} style={COLUMN_SIZE_STYLES} className={styles.column}>
                        {column.map((img, i) => {
                            return (
                                <GalleryImg 
                                    key={img.url} 
                                    src={img.url} 
                                    alt={img.alt} 
                                    col={idx + 1}
                                    lastInCol={i === column.length - 1}
                                    viewport={viewport}
                                />
                            )
                        })} 
                    </div>
                ))}
            </div>
            <Modal img={imageGalleryArr[40]}/>
        </motion.section>
        </>
    )
}

export async function getStaticProps(){
    const prismicResults = await Client().query('')
    return {
        props: {
            prismicResults: prismicResults || null
        }
    }
}

export function GalleryImg({key, src, alt}){
    return (
        <div key={key} className={styles.imgContainer}>
            <img loading='lazy' src={src} alt={alt}/>
        </div>
    )
}