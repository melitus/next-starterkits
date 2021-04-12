import {ReactNode} from 'react'

declare namespace ILayout {
  export interface IProps {
     children: ReactNode
     head: {
      title: string
      description: string
      canonical: string
      robots?: boolean
  }
  noLanding?: boolean
  }
}

export {ILayout}
