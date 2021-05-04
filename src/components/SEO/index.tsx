import Head from 'next/head'

import {ISEO} from './SEO'

export default function Head(props: ISEO.IProps):React.ReactElement {
  const date = new Date()
  const currentYear = date.getFullYear()

  return (
    <Head>
       <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={props.description} />
        <meta property="og:title" content={props.title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={props.description} />
        {props.url ? <meta property="og:url" content={props.url} /> : ""}
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image" content={props.image + "?w=1000"} />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image" content={props.image + "?w=500"} />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
      <meta property="og:image:alt" content="C-DOC Logo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@purposeinvest" />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:image" content={props.image} />
       <meta
        name="robots"
        content={props.robots === false ? 'noindex, nofollow' : 'index, follow'}
      />
      {props.canonical ? (
        <link rel="canonical" href={`https://localhost${props.canonical}`} />
      ) : null}

      <meta name="author" content="Aroh" />
      <meta name="copyright" content={`santino © ${currentYear}`} />
      <meta name="theme-color" content="#ffffff" />
      {props.canonical ? (
        <meta
          property="og:url"
          content={`https://localhost${props.canonical}`}
        />
      ) : null}
      <meta
        property="og:image"
        name="image"
        content="https://localhost/social.png"
      />
    </Head>
  )
}



// function NextHead({
//     title,
//     description,
//     currentURL }: PAGE_HEAD): React.ReactElement {
//     return(
//         <Head>
//             <title key="title">{title}</title>
//             <meta charSet="UTF-8" content="text/html" key="charset" />
//             <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
//             <meta name="description" content={description} key="description" />

//             <meta name="twitter:card" content="summary" key="twcard" />
//             <meta name="twitter:creator" content="@Kieran6dev" key="twhandle" />

//             <meta property="og:title" content={title} key="ogtitle"/>
//             <meta property="og:description" content={description} key="ogdescription" />
//             <meta property="og:type" content="website" key="ogtype" />
//             <meta property="og:url" content={currentURL} key="ogurl" />

//             <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
//             <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
//             <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
//             <link rel="shortcut icon" href="./favicon.ico" />

//             <meta name="msapplication-TileColor" content="#ffffff" />
//             <meta name="theme-color" content="#ffffff" />
//         </Head>
//     );
// }
