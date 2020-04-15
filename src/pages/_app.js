import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/main.scss'

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}