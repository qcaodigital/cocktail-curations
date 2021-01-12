import { useRouter } from 'next/router';
import { Client, queryPrismicResults } from './../../prismic-configuration';
import BlogLayout from '../../components/blog/BlogLayout'
import { AnimatePresence } from 'framer-motion';

export async function getStaticPaths(){
    const prismicResults = await Client().query('');
    const blogPaths = queryPrismicResults('type', 'blog', prismicResults);
    const paths = blogPaths.map(result => ({ 
        params: { blogid: result.uid }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }){
    const prismicResults = await Client().query('');
    const blog = queryPrismicResults('uid', params.blogid, prismicResults);
    const blogs = queryPrismicResults('type', 'blog', prismicResults);
    const products = queryPrismicResults('uid', 'shopify_product_list', prismicResults);

    return {
        props: {
            blog: blog[0],
            blogs,
            products: products[0].data.product
        }
    }
}

export default function Blog(props){
    return (
        <BlogLayout key={props.blog.uid} {...props} />
    )
}