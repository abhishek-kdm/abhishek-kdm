import Head from 'next/head';
import Wrapper from '@/Wrapper';

const Meta = {
    name: 'LycuiD',
    description: 'Living large...in the grid.',
    author: '@lycuid',
};

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>{`${Meta.name} | ${Meta.description}`}</title>
                <link rel="icon" href="/images/icon.png" type="image/png" />
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content={Meta.description} />
                <meta property="og:title" content={Meta.name} />
                <meta property="og:description" content={Meta.description} />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:creator" content={Meta.author} />
                <meta name="twitter:title" content={Meta.name} />
                <meta name="twitter:description" content={Meta.description} />
            </Head>
            <Wrapper>
                <Component {...pageProps} />
            </Wrapper>
        </>
    );
};

export default MyApp;
