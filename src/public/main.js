// @ts-ignore
const ul = document.getElementById('navbarSupportedContent').childNodes[0]
const ulChilds = ul.childNodes

for (const i in ulChilds) {
  const li = ulChilds[i]

  if (typeof li === 'object') {
    const a = li.childNodes[0]

    // @ts-ignore
    const href = a.getAttribute('href')

    if (href === window.location.pathname) {
      // @ts-ignore
      a.classList.add('active')

      // @ts-ignore
      for (j in ulChilds) {
        // @ts-ignore
        const li2 = ulChilds[j]

        if (typeof li2 === 'object') {
          const a2 = li2.childNodes[0]

          if (a !== a2) {
            // @ts-ignore
            a2.classList.remove('active')
          }
        }
      }
    }
  }
}