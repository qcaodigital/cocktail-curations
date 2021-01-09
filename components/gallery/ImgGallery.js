import styles from './ImgGallery.module.scss';
import { motion } from 'framer-motion';
import { galleryTransitions } from './../../page_transitions/gallery';
import { useEffect, useState } from 'react';

export default function ImgGallery({galleryColumns, colStyles, handleModalImgChange}){
    return (
        <motion.div 
            animate='animate'
            initial='initial'
            exit={{ opacity: 0 }}
            className={styles.galleryContainer}
            variants={galleryTransitions.imgStagger}
        >
            {galleryColumns.map((column, idx) => (
                <motion.div 
                    key={idx} 
                    style={colStyles} 
                    className={styles.column}
                    variants={galleryTransitions.imgStagger}
                >
                    {column.map((item, idx) => (
                        <motion.div
                            key={idx} 
                            className={styles.imgContainer} 
                            onClick={() => handleModalImgChange(item)}
                            variants={galleryTransitions.imgs}
                        >
                            <motion.img 
                                src={item.img.url} 
                                alt={item.img.alt} 
                            />
                        </motion.div>
                    ))} 
                </motion.div>
            ))}
        </motion.div>
    )
}