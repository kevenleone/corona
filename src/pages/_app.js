import Layout from '../components/Layout'
import Header from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/main.scss'

export default function MyApp({ Component, pageProps }) {
    return (
        <Header>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Header>
    )
}