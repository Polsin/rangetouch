!function(t,e){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e(t,document):"function"==typeof define&&define.amd?define(null,function(){e(t,document)}):t.rangetouch=e(t,document)}("undefined"!=typeof window?window:this,function(t,e){"use strict";function n(t,e,n){t.addEventListener(e,n,!1)}function o(t,e){if(1>e){var n=parseInt(e).getDecimalCount();return parseFloat(t.toFixed(n))}return Math.round(t/e)*e}function u(t){var e,n=t.target,u=t.changedTouches[0],r=parseFloat(n.getAttribute("min"))||0,i=parseFloat(n.getAttribute("max"))||100,c=parseFloat(n.getAttribute("step"))||1,d=i-r,s=n.getBoundingClientRect(),l=100/s.width*(a.thumbWidth/2)/100;return e=100/s.width*(u.pageX-s.left),0>e?e=0:e>100&&(e=100),50>e?e-=(100-2*e)*l:e>50&&(e+=2*(e-50)*l),o(d*(e/100),c)}function r(t){a.enabled&&(t.preventDefault(),t.target.value=u(t))}function i(){n(e.body,a.events.start,r),n(e.body,a.events.move,r)}var a={enabled:!0,selectors:{range:'[type="range"]'},thumbWidth:15,events:{start:"touchstart",move:"touchmove"}};return function(){if("ontouchstart"in e.documentElement){for(var t=e.querySelectorAll(a.selectors.range),n=t.length-1;n>=0;n--)t[n].style.touchAction="manipulation";i()}}(),{set:function(t,e){a[t]=e}}});