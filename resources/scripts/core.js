WebFontConfig = {
  google: {families: ['Open+Sans:300,400,700:latin']}
};
(function() {
  var wf = document.createElement('script');
  wf.src = (document.location.protocol === 'https:' ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();
