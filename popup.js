document.addEventListener('DOMContentLoaded', function() {
  const skimmer = document.getElementById('btn-skimmer')

  const mark = (str) => {
    return "<mark>" + str + "</mark>"
  }

  const skim = (p) => {
	  let s = p.innerText.match(/\(?[^\.\?\!]+[\.!\?]\)?/g)
    s[0] = mark(s[0])
    s[s.length-1] = mark(s[s.length-1])
    return s.join(" ")
  }

  skimmer.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      const d = document;
      const article = d.getElementById('articleBody')
      const pars = article.childNodes[0].childNodes[0].childNodes[1]
      for (let i=0; i<pars.children.length; i++) {
        pars.children[i].innerHTML = skim(pars.children[i])
      }
    })
  })
})
