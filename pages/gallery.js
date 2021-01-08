import { Client, queryPrismicResults } from './../prismic-configuration';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Head from 'next/head';
import styles from './gallery.module.scss';
import Modal from '../components/gallery/Modal';
import { galleryTransitions } from './../page_transitions/gallery';
import GallerySort from './../components/gallery/GallerySort';

export default function Gallery({ imgs, NAV_SPACER, state: { viewport } }){
    const allImgs = imgs.gallery_item;
    const [imgList, setImgList] = useState(allImgs);
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

    //Search by tags if 'sortBy' is set then resort by portrait and landscape
    const [sortBy, setSortBy] = useState('all');
    useEffect(() => {
        //Prismic includes empty media templates so we need to remove them from the array if they exist
        const galleryCopy = allImgs.filter(item => item.img.dimensions)
        const sortedByTags = galleryCopy.filter(item => sortBy !== 'all' ? item.tags.includes(sortBy) : true);
        const portraits = [];
        const landscapes = [];
        sortedByTags.forEach(item => {
            if(item.img.dimensions.height > item.img.dimensions.width){
                portraits.push(item)
            } else {
                landscapes.push(item)
            }
        })
        setImgList([...portraits, ...landscapes])
        window.scrollTo({ top: 0 })
    }, [viewport, sortBy])

    //Assign each img to a column, distributed evenly and then shuffled
    useEffect(() => {
        //distribute imgs
        let counter = 0;
        imgList.forEach(img => {
            columnsArr[counter].push(img);
            counter++;
            if(counter >= columns){
                counter = 0;
            }
        })

        //shuffle arrays
        columnsArr.forEach((col, idx) => {
            for(let i = 0; i < col.length; i++){
                let tempVal = col[i];
                const currIndex = Math.floor((Math.random() * (col.length - 1)));
                col[i] = col[currIndex];
                col[currIndex] = tempVal;
            }
        })

        setGalleryColumns(columnsArr);
    }, [imgList])

    //Modal Image Selector
    const [modalImg, setModalImg] = useState();
    function handleModalImgChange(item){
        for(let i = 0; i < imgList.length; i++){
            if(item.img.url === imgList[i].img.url){
                setModalImg(i);
                break;
            }
        }
    }

    //Disable scrolling and hide scrollbar if modal has an image to show/aka is open
    useEffect(() => {
        document.body.style.overflow = modalImg || modalImg === 0 ? 'hidden' : '';
        return () => document.body.style.overflow = '';
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
                <h2>Our events, bars, classes, cocktails, <span>and more</span>.</h2>
            </header>
            <GallerySort 
                tags={['all', 'cocktails', 'bars', 'events', 'classes']} 
                setSortBy={setSortBy}
                sortBy={sortBy}
            />
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
                        {column.map((item, idx) => (
                                <motion.div
                                    key={idx} 
                                    className={styles.imgContainer} 
                                    onClick={() => handleModalImgChange(item)}
                                >
                                    <motion.img src={item.img.url} alt={item.img.alt} variants={galleryTransitions.imgs}/>
                                </motion.div>
                            )
                        )} 
                    </motion.div>
                ))}
            </motion.div>
            <AnimatePresence>
                {modalImg >= 0 && 
                    <Modal
                        key='modal' 
                        modalImgIdx={modalImg} 
                        imgList={imgList}
                        setModalImg={setModalImg} 
                        viewport={viewport}
                    />
                }
            </AnimatePresence>
        </motion.section>
        </>
    )
}

export async function getStaticProps(){
    const prismicResults = await Client().query('')
    const results = queryPrismicResults('uid', 'gallery', prismicResults)
    return {
        props: {
            imgs: results[0].data
        }
    }
}
