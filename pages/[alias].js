import { useEffect, useState } from 'react'

export default function alias({children, alias}) {

  const fs = require('../link.json')
  const [redirectLink, setRedirectLink] = useState(false)


  const redirect = (json) => {
    const path = window.location.pathname

    for(let index in json) {
      const { alias, target } = json[index]

      if( path == `/${alias}` ) {
		 setRedirectLink(target)
		 setTimeout(() => document.getElementById('redirector').click(), 500);
      }
    }

  }


  useEffect(() => {
    redirect(fs)
  }, [fs])

  return (
    <a id="redirector"	rel="noreferrer"  style={{textDecoration:'none',color:'#fff'}} href={redirectLink}>...</a>
  )
}
