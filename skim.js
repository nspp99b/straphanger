(function() {
  //define a function that, provided a sentence, will highlight it
  const mark = (str) => {
    return "<mark>" + str + "</mark>";
  }
  //define a function that, given a paragraph node, will highlight first and last sentences
  const skim = (p) => {
    //do your best to simply tokenize the innertext into sentences
    let s = p.innerText.split(/(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s/gm);

    //highlight the first and last sentences
    s[0] = mark(s[0]);
    s[s.length-1] = mark(s[s.length-1]);

    //reassemble the paragraph
    return s.join(" ");
  }

  //in any newyorker.com article, find the article paragraphs
  const d = document;
  const sections = d.getElementsByClassName("SectionBreak__sectionBreak___1ppA7");

  //iterate through the paragraphs, submitting each to the skimmer
  for (let i=1; i<sections.length; i++) {
    let pars = sections[i];
    for (let i=0; i<pars.children.length; i++) {
      pars.children[i].innerHTML = skim(pars.children[i])
    };
  };

})();
