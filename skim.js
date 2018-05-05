(function() {
  const mark = (str) => {
    return "<mark>" + str + "</mark>";
  }

  const skim = (p) => {
    let s = p.innerText.split(/(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s/gm);
    s[0] = mark(s[0]);
    s[s.length-1] = mark(s[s.length-1]);
    return s.join(" ");
  }
  const d = document;
  const sections = d.getElementsByClassName("SectionBreak__sectionBreak___1ppA7");
  for (let i=1; i<sections.length; i++) {
    let pars = sections[i];
    for (let i=0; i<pars.children.length; i++) {
      pars.children[i].innerHTML = skim(pars.children[i])
    };
  };

})();
