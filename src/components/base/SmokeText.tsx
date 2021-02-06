import * as React from 'react'
import conceal from '@/utils/conceal'


export default ({children}) => {

    if (typeof children === 'string') {
        return conceal(children)
    }
    return children
}