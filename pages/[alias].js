import { useEffect } from 'react'

export default function alias({children, alias}) {

  const fs = require('../link.json')


  const redirect = (json) => {
    const path = window.location.pathname

    for(let index in json) {
      const { alias, target } = json[index]

      if( path == `/${alias}` ) {
        return window.top.location.replace(target)
      }
    }

  }


  useEffect(() => {
    redirect(fs)
  }, [fs])

  return (
    <div>...</div>
  )
}
