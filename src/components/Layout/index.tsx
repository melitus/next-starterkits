import React from 'react'

import Header from '../Header'
import Head from '../Head'
import {ILayout} from './Layout'
import {Footer} from '../Footer'
import styles from "./Layout.module.scss";


const Layout:React.FunctionComponent<ILayout.IProps> = (props): JSX.Element => {
  return (
    <>
      <Head {...props.head} />
      <div className={styles.horizontalLayout}>
        <Header />
        {props.children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
