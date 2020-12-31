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

export function assignResultTo(query, results){
    const data = [];
    results.results.forEach(result => {
        if(result.type === query){
            data.push(result);
        }
    })

    // console.log(`Received Prismic results for query '${query}':`, data)

    return data;
}