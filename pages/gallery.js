import { Client, queryPrismicResults } from './../prismic-configuration';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Head from 'next/head';
import styles from './gallery.module.scss';
import Modal from '../components/gallery/Modal';
import { galleryTransitions } from './../page_transitions/gallery';
import GallerySort from './../components/gallery/GallerySort';
import ImgGallery from './../components/gallery/ImgGallery';
import useOnAniStartOnlyEntry from './../custom_hooks/useOnAniStartOnlyEntry';
import PropTypes from 'prop-types';

Gallery.propTypes = {
    state: PropTypes.shape({
        viewport: PropTypes.string
    }),
    imgs: PropTypes.objectOf(PropTypes.array), 
    NAV_SPACER: PropTypes.object
}

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

    const [filterBy, setFilterBy] = useState('all');
    useEffect(() => {
        //Search by tags if 'filterBy' is set then resort by portrait and landscape
        //Prismic includes empty media templates so we need to remove them from the array if they exist
        setImgList([]);
        setTimeout(() => { //Timed out for animation on filter change
            const filteredByTags = allImgs.filter(item => {
                if(item.img.dimensions){
                    if(filterBy !== 'all'){
                        return item.tags.includes(filterBy); 
                    } else {
                        return true;
                    }
                }
            });
            const portraits = [];
            const landscapes = [];
            filteredByTags.forEach(item => {
                if(item.img.dimensions.height > item.img.dimensions.width){
                    portraits.push(item)
                } else {
                    landscapes.push(item)
                }
            })
            setImgList([...portraits, ...landscapes])
            window.scrollTo({ top: 0 })
        }, Math.random() * 750);
    }, [viewport, filterBy])

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

    const onAniStart = useOnAniStartOnlyEntry();
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
            onAnimationStart={onAniStart}
        >
            {NAV_SPACER}
            <header>
                <h1>A look into what we do</h1>
                <h2>Our events, bars, classes, cocktails, <span>and more</span>.</h2>
            </header>
            <GallerySort 
                tags={['all', 'cocktails', 'bars', 'events', 'classes', 'products', 'team']} 
                setFilterBy={setFilterBy}
                filterBy={filterBy}
            />
            <AnimatePresence>
                {imgList.length > 0 && 
                    <ImgGallery
                        key={imgList.length} 
                        galleryColumns={galleryColumns} 
                        colStyles={COLUMN_SIZE_STYLES} 
                        handleModalImgChange={handleModalImgChange} 
                    />
                }
            </AnimatePresence>
            <AnimatePresence>
                {modalImg >= 0 && 
                    <Modal
                        key={modalImg}
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
