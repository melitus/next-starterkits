import Head from 'next/head'

import {IHead} from './Head'

export default function Head(props: IHead.IProps):React.ReactElement {
  const date = new Date()
  const currentYear = date.getFullYear()

  return (
    <Head>
      <title>{props.title}</title>
      <link rel="icon" type="image/png" href="/favicon.png" />
      <meta name="description" content={props.description} />
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

      {/* Open Graph */}
      <meta property="og:site_name" content="C-DOC" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:type" content="Website" />
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
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="500" />
      <meta property="og:image:height" content="500" />
      <meta property="og:image:alt" content="C-DOC Logo" />
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
