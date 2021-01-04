import Prismic from 'prismic-javascript'

const apiEndpoint = 'https://cocktailcurations.prismic.io/api/v2'
const accessToken = '';

export const Client = (req = null) => (
    Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)

const createClientOptions = (req = null, prismicAccessToken = null) => {
    const reqOption = req ? { req } : {}
    const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
    return {
        ...reqOption,
        ...accessTokenOption,
    }
}

export function queryPrismicResults(prop, query, results){
    const data = [];
    results.results.forEach(result => {
        if(result[prop] === query){
            data.push(result);
        }
    })

    // console.log(`Received Prismic results for query '${query}':`, data)

    return data;
}

export function linkResolver(doc){
    if(doc.type === 'blog'){
        return `/blog/${doc.uid}`
    }

    return '/';
}