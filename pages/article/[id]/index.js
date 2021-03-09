//import { useRouter } from 'next/router'
import {server} from '../../../config'
import Link from 'next/link'
import Meta from '../../../components/Meta'

function article({ article }) {
    //console.log('-----', article)
   // const router = useRouter();
    //const { id } = router.query; 
    return (
        <>
            <Meta title={article.title}/>
            <h1>{article.title} </h1>
            <p>{article.body}</p>
            <br />
            <Link href='/'>Go Back</Link>
        </>
    )
}
export const getServerSideProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const article = await res.json();
       return {
        props: {
            article,
        }
    }
}

// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json();
//        return {
//         props: {
//             article,
//         }
//     }
// }
export default article
