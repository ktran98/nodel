function(){
  const doc = document;
  let article = doc.querySelector('article');
  let isWhite = false;
  article.addEventListener('mouseover',
  function()
  {
      article.style.border = '30px solid green';
  });
  article.addEventListener('mouseout',
  function()
  {
    article.style.border = '30px solid white'
  })
};
