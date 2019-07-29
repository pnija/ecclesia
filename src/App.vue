<template>
  <html>
    <head>
      <link rel="stylesheet" 
          href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
          integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
          crossorigin="anonymous">
    </head>
    <body>
      <div id="app" class="full-height">
          <!-- <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
          </div> -->
          <router-view/>
      </div>    
    </body>
  </html>
</template>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	font-family: 'IBM Plex Sans', sans-serif !important;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a{
	text-decoration: inherit !important;
}

/*...my code...*/

*{
    box-sizing: border-box;
    -moz-box-sizing:border-box;
    -webkit-box-sizing: border-box;
}
.pull-left{
    float: left;
}
.pull-right{
    float: right;
}
.fullwidth{
    width: 100%;
}
.container{
    max-width: 1200px !important;
    width: 100%;
    margin: 0 auto;
}
.b2{
	font-weight: 200 !important;
}
.b3{
	font-weight: 300 !important;
}
.b4{
	font-weight: 400 !important;
}
.b5{
	font-weight: 500 !important;
}
.fnt-14{
	font-size: 14px;
}
.bg{
	background: #b51f32 !important;
}
.color{
	color: #b51f32 !important;
}
html,body{
	height: 100%;
}
.full-height{
  height: 100%;
}
@media only screen and (max-width: 991px){
  .full-height{
    height: inherit !important;
  }
}
@media only screen and (max-width: 767px){
  .full-height{
    height: initial !important;
  }
}
</style>
