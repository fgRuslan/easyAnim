# easyAnim
[![version](https://img.shields.io/badge/version-2.5-ffb400.svg?style=flat-square)](https://github.com/fgRuslan/easyAnim/releases)[![license](https://img.shields.io/badge/license-GPLv3-brightgreen.svg?style=flat-square)](http://choosealicense.com/licenses/gpl-3.0/)
[![npmver](http://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/easyanim)

This  is  a  Javascript  library  that  can  be  used  to  make  animating  in  jQuery  quicker.

[library  site](https://fgRuslan.github.io/easyAnim)

[manual](https://github.com/fgRuslan/easyAnim/blob/master/manual.md)

##How to install the library
You should clone this from github  by  this  command
```
git clone https://github.com/fgRuslan/easyAnim.git
```
Or  with  npm,this  library  is  available  on  npm.
```
npm install easyanim
```
Or  you  can  download  an  archive.

##How  to  use  the  library
You  should  write  this  code  to  load  jQuery  and  jQueryUI,which  is  used  by  easyanim.

```html
<link href="jquery-ui.css" 
rel="stylesheet" type="text/css"/>
<script src="easy.js"></script>
<script src="jQuery.js"></script>
<script src="jQueryUI.js"></script>
```
When  you  finished  this  step  you   can  use  the  library.

#Examples

If  you  want  to  try  the  library you  can  write  this  code:
```html
<html>
<script src="easy.js"></script>
<script src="jQuery.js"></script>
<script src="jQueryUI.js"></script>
<a id="object" href="#">hi,  i  am  the  link!!</a>
<script>
easy.fadeOut("#object",5000);
</script>
</html>
```

When  you  load  this  page  you  will  see  the  link,that  will  dissapear  after  5  seconds..

Note  that  you  can  use  minimify.py  to  minimify  easy.js  by  removing  CRLFs  in  the  file.

```
python minimify.py
```

Beware!You  shouldn't  use  comments  like  this  -  //,only  /*  */

Minimify  won't  work  then.

Thank  you,if  you  have  questions,bugfixes  or  something  else,write  here:

rusikisaev@list.ru

Thank  you.
