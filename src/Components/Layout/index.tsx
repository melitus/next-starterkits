import React, {ReactNode} from 'react'

import Header from '../Header'
import Head from '../Head'
import {ILayout} from './Layout'
import {Footer} from '../Footer'


const Layout:React.FunctionComponent<ILayout.IProps> = (props): JSX.Element => {
  return (
    <>
      <Head {...props.head} />
      <div>
        <Header />
        {props.children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
