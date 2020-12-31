import { Client, assignResultTo } from './../prismic-configuration';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Head from 'next/head';
import styles from './gallery.module.scss';
import Modal from '../components/gallery/modal';
import { galleryTransitions } from './../page_transitions/gallery';

export default function Gallery({ prismicResults, NAV_SPACER, state: { viewport } }){
    if(!prismicResults) return null;
    const results = assignResultTo('gallery_page', prismicResults)
    const imgGallery = results[0].data;
    const [imgGalleryArr, setImgGalleryArr] = useState(Object.keys(imgGallery).map(key => imgGallery[key]));
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
        const galleryCopy = imgGalleryArr.filter(img => img.dimensions)
        const portraits = [];
        const landscapes = [];
        galleryCopy.forEach(img => {
            if(img.dimensions.height > img.dimensions.width){
                portraits.push(img)
            } else {
                landscapes.push(img)
            }
        })
        setImgGalleryArr([...portraits, ...landscapes])
        window.scrollTo({ top: 0 })
    }, [viewport])


    //Assign each img to a column, distributed evenly and then shuffled
    useEffect(() => {
        let counter = 0;
        imgGalleryArr.forEach(img => {
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

    }, [imgGalleryArr])

    //Modal Image Selector
    const [modalImg, setModalImg] = useState();
    function handleModalImgChange(img){
        for(let i = 0; i < imgGalleryArr.length; i++){
            if(img.url === imgGalleryArr[i].url){
                setModalImg(i);
                break;
            }
        }
    }

    //Disable scrolling and hide scrollbar if modal has an image to show/aka is open
    useEffect(() => {
        document.body.style.overflow = modalImg || modalImg === 0 ? 'hidden' : '';
    }, [modalImg])

    return (
        <>
        <Head>
            <title>Gallery | Cocktail Curations</title>
        </Head>
        <motion.section 
            exit={{ opacity: 0 }} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: .5 }}
            id={styles.Gallery}
        >
            {NAV_SPACER}
            <header>
                <h1>A look into what we do</h1>
                <h2>Our events, bars, classes, cocktails, and more.</h2>
            </header>
            <motion.div 
                animate='animate' 
                initial='initial' 
                className={styles.galleryContainer}
            >
                {galleryColumns.map((column, idx) => (
                    <motion.div 
                        key={idx} 
                        style={COLUMN_SIZE_STYLES} 
                        className={styles.column}
                        variants={galleryTransitions.imgStagger}
                    >
                        {column.map((img, idx) => (
                                <motion.div
                                    key={idx} 
                                    className={styles.imgContainer} 
                                    onClick={() => handleModalImgChange(img)}
                                >
                                    <motion.img src={img.url} alt={img.alt} variants={galleryTransitions.imgs}/>
                                </motion.div>
                            )
                        )} 
                    </motion.div>
                ))}
            </motion.div>
            {modalImg >= 0 && 
                <Modal 
                    img={modalImg} 
                    setModalImg={setModalImg} 
                    imgs={imgGalleryArr}
                    viewport={viewport}
                />
            }
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
