parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"CxtJ":[function(require,module,exports) {
$(document).ready(function(){$("#case-study-showcase-2col").hide(),$("#case-study-showcase-3col").hide();var s=$(".case-study-card").length;console.log("Number of case study cards: "+s),s>2?($("#case-study-showcase-2col").hide(),$("#case-study-showcase-3col").show()):($("#case-study-showcase-2col").show(),$("#case-study-showcase-3col").hide())});
},{}],"FYGC":[function(require,module,exports) {
$(document).ready(function(){var o=[],c=[];$(".cta1").each(function(c){var s=$(this).css("background-color"),t=$(this).children().length>0?$(this).children().css("color"):$(this).css("color");o.push({bgColor:s,textColor:t})}),$(".cta2").each(function(o){var s=$(this).css("background-color"),t=$(this).children().length>0?$(this).children().css("color"):$(this).css("color");c.push({bgColor:s,textColor:t})}),$(".cta1").hover(function(){var c=$(this).index(".cta1"),s=o[c],t=s.bgColor,r=s.textColor;$(this).css("background-color",r),$(this).children().length>0?$(this).children().css("color",t):$(this).css("color",t)},function(){var c=$(this).index(".cta1"),s=o[c],t=s.bgColor,r=s.textColor;$(this).css("background-color",t),$(this).children().length>0?$(this).children().css("color",r):$(this).css("color",r)}),$(".cta2").hover(function(){var o=$(this).index(".cta2"),s=c[o],t=s.bgColor,r=s.textColor;$(this).css("background-color",r),$(this).children().length>0?$(this).children().css("color",t):$(this).css("color",t)},function(){var o=$(this).index(".cta2"),s=c[o],t=s.bgColor,r=s.textColor;$(this).css("background-color",t),$(this).children().length>0?$(this).children().css("color",r):$(this).css("color",r)})});
},{}],"LnQN":[function(require,module,exports) {
$(document).ready(function(){var t,r;$("[data-progress-link=true]").css("cursor","pointer"),$(".cta3.no-border").each(function(){var t=$(this).closest("[data-progress-link=true]").attr("href");$(this).attr("data-link-trigger",t)}),$("[data-progress-link=true]").hover(function(){var n=$(this).find(".cta3.no-border");t=$(this).closest("[data-progress-link=true]").attr("href"),n.removeAttr("href"),n.attr("data-link-trigger",t),$(n[0].click(function(t){t.preventDefault(),t.stopPropagation()})),r=setTimeout(function(){window.location.href=t},4e3),$(this).css("transition","transform 4s"),$(this)},function(){var n=$(this).find(".cta3.no-border");$(n[0].click(function(t){t.preventDefault(),t.stopPropagation()})),n.attr("href",t),clearTimeout(r),$(this).css("transition","none"),$(this)}),$(".cta3.no-border").click(function(t){t.preventDefault()}),$("[data-progress-link=true]").hover(function(){$("img",this).css({transition:"transform 4s",transform:"scale(1.1)"})},function(){$("img",this).css({transition:"transform 0.25s",transform:"scale(1)"})})});
},{}],"NilZ":[function(require,module,exports) {
$(document).ready(function(){$("[data-quote-update=true]").length>0&&$("[data-quote-update=true]").each(function(){var t=$(this),e=t.text()+"”";t.text(e);var s=$("<span class='start-quote'>“</span>");s.css({fontFamily:t.css("font-family"),fontSize:t.css("font-size"),fontStyle:t.css("font-style"),fontWeight:t.css("font-weight"),color:t.css("color"),marginTop:"0rem"}),t.before(s),"true"==$(this).attr("data-quote-mask")?setTimeout(function(){console.log("this quote is inside a testimonial slider");var t=-1*$(".start-quote").outerWidth()-3;$(".testimonial-slide-mask").css("margin-left",t);var e=$(".start-quote").outerWidth()+3;$("[data-quote-rest=true]").css("margin-left",e)},500):setTimeout(function(){var t=-1*$(".start-quote").outerWidth()-3;$(".start-quote").parent().css("margin-left",t)},500)})});
},{}],"HzX2":[function(require,module,exports) {
$(document).ready(function(){$("[data-date-update=true]").each(function(){for(var t=$(this).text().split("."),e=0;e<t.length;e++)1==t[e].length&&(t[e]="0"+t[e]);var a=t.join(".");$(this).text(a)})});
},{}],"i9qs":[function(require,module,exports) {
$(document).ready(function(){if($("#faq-wrapper").length>0){var a=[];if($(".faq-wrapper").each(function(t){var e="faq-question-wrapper-"+t;$(this).find(".faq-question-wrapper").attr("id",e),a[t]=$(this).find(".faq-question-wrapper").outerHeight(),$(this).height(a[t])}),$(".faq-question-wrapper").click(function(){var t=$(this).closest(".faq-wrapper"),e=t.index(),r=$(this).find("img");if(t.hasClass("expanded"))t.height(a[e]).removeClass("expanded"),r.css("transform","rotate(0deg)");else{var o=$(this).outerHeight()+t.find(".faq-answer-wrapper").outerHeight();t.height(o).addClass("expanded"),r.css("transform","rotate(135deg)")}}),$("[data-faq-bg=true]").length>0){var t=$("[data-faq-bg=true]").css("background-color");console.log("FAQ background color: "+t);var e=$("[data-faq-bg=true]").css("color");console.log("FAQ text color: "+e),$("[data-text-color-extract]").length>0&&$("[data-text-color-extract]").css("color",e),$("[data-bg-color-extract]").length>0&&$("[data-bg-color-extract").css("background-color",e)}}});
},{}],"v9Q8":[function(require,module,exports) {
history.scrollRestoration="manual",$(window).on("beforeunload",function(){$(window).scrollTop(0)}),$(document).ready(function(){if($("#copyright-year").length){var o="© Echo "+(new Date).getFullYear();$("#copyright-year")[0].innerHTML=o,$(".body2.white.link").hover(function(){$(this).siblings().addClass("not-hovered"),$(this).removeClass("not-hovered")},function(){$(this).siblings().removeClass("not-hovered")}),r(),$("[data-webflow-debugger=true]").remove();var e=$("#footer-top").css("background-color");$("body").css("background-color",e);var t=$("#nav-bar").css("background-color");function r(){var o=$("#footer").outerHeight();$("#footer-height").css("min-height",o),console.log(o)}function s(){var o=$("body").outerHeight();console.log(o);var e=$("#footer").outerHeight();console.log(e);var t=2*$("#footer").outerHeight();if(console.log("Footer Area Needed = "+t),console.log("Current Scroll Position = "+$(window).scrollTop()),console.log("Needed Scroll Position = "+(o-t)),$("#text-header-top").length&&($(window).scrollTop()>o-t?($("#text-header-top").hide(),$("#footer").show(),console.log("Header hidden"),console.log("Footer shown")):($("#text-header-top").show(),$("#footer").hide(),console.log("Header shown"),console.log("Footer hidden"))),0==$(window).scrollTop()||$(window).scrollTop()<0){console.log("user is at the top of the page");var r=$("body").attr("data-start-bg");$("body").css("background-color",r),$("#page-wrapper").css("background-color",r),$("#footer-top").css("background-color",r),document.documentElement.style.setProperty("--swatches--footercustom",r),console.log(r)}else{console.log("user is not at the top of the page");var s=$("body").attr("data-end-bg");$("body").css("background-color",s),$("#page-wrapper").css("background-color",s),$("#footer-top").css("background-color",s),document.documentElement.style.setProperty("--swatches--footercustom",s),console.log(s)}}document.documentElement.style.setProperty("--swatches--footercustom",e),document.documentElement.style.setProperty("--swatches--navcustom",t),$(window).resize(function(){r()}),$(window).scroll(function(){s()}),s()}});
},{}],"olYF":[function(require,module,exports) {
$(document).ready(function(){if($("#testimonial-slider").length>0){var i;function e(){i&&clearInterval(i),i=setInterval(function(){$("#testimonial-slider-next-proxy").click()},7500)}$("#testimonial-slider-next").hide(),$("#testimonial-slider-prev").hide(),$("#testimonial-slider-next-proxy").click(function(){$("#testimonial-slider-next").click()}),$("#testimonial-slider-prev-proxy").click(function(){$("#testimonial-slider-prev").click()}),e(),$("#testimonial-slider-next-proxy, #testimonial-slider-prev-proxy").on("click",function(){e()}),$("#testimonial-slider-next-proxy").click()}});
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./cs-showcase.js"),require("./cta-hover.js"),require("./cta-progress-link.js"),require("./custom-quote.js"),require("./date.js"),require("./faq.js"),require("./footer.js"),require("./testimonial-slider.js");
},{"./cs-showcase.js":"CxtJ","./cta-hover.js":"FYGC","./cta-progress-link.js":"LnQN","./custom-quote.js":"NilZ","./date.js":"HzX2","./faq.js":"i9qs","./footer.js":"v9Q8","./testimonial-slider.js":"olYF"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map