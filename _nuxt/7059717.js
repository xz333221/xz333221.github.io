(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{308:function(t,e,n){var r=n(172),o=n(309),c=n(310),f=n(311),h=n(312);function l(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,f=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){f=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(f)throw o}}}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}n(27),n(39),n(40),n(69),n(52),n(47),n(276),n(313),n(314),n(38),n(19),n(30),n(29),n(36),n(37),n(32);var d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(t).filter((function(t){return e.includes(t)})).reduce((function(e,n){return Object.assign(e,h({},n,t[n]))}),{})},v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(t).filter((function(t){return!e.includes(t)})).reduce((function(e,n){return Object.assign(e,h({},n,t[n]))}),{})},m=function(){"use strict";function t(e,n){var r=e.query,path=e.path,o=e.init,text=e.text,f=e.postprocess,h=void 0===f?[]:f;c(this,t),this.query=r,this.path=path,this.init=o,this.postprocess=h,this.options=n||{},this.onlyKeys=null,this.withoutKeys=null,text||this.postprocess.unshift((function(data){return data.map((function(t){return v(t,["text"])}))}))}var e;return f(t,[{key:"only",value:function(t){return this.onlyKeys=Array.isArray(t)?t:[t],this}},{key:"without",value:function(t){return this.withoutKeys=Array.isArray(t)?t:[t],this}},{key:"sortBy",value:function(t,e){return this.query=this.query.simplesort(t,{desc:"desc"===e}),this}},{key:"where",value:function(t){return this.query=this.query.find(t),this}},{key:"search",value:function(t,e){var n;return n="object"===o(t)?t:e?{query:{type:"match",field:t,value:e,prefix_length:1,fuzziness:1,extended:!0,minimum_should_match:1}}:{query:{type:"bool",should:this.options.fullTextSearchFields.map((function(e){return{type:"match",field:e,value:t,prefix_length:1,operator:"and",minimum_should_match:1,fuzziness:1,extended:!0}}))}},this.query=this.query.find({$fts:n}),this}},{key:"surround",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.before,r=void 0===n?1:n,o=e.after,c=void 0===o?1:o;this.onlyKeys&&this.onlyKeys.push("slug"),this.withoutKeys&&(this.withoutKeys=this.withoutKeys.filter((function(t){return"slug"!==t})));var f=function(data){var e=data.findIndex((function(e){return e.slug===t})),n=new Array(r+c).fill(null,0);if(-1===e)return n;for(var o=data.slice(e-r,e),f=data.slice(e+1,e+1+c),h=0,i=r-1;i>=0;i--)n[i]=o[h]||null,h++;for(var l=0,y=r;y<=c;y++)n[y]=f[l]||null,l++;return n};return this.postprocess.push(f),this}},{key:"limit",value:function(t){return"string"==typeof t&&(t=parseInt(t)),this.query=this.query.limit(t),this}},{key:"skip",value:function(t){return"string"==typeof t&&(t=parseInt(t)),this.query=this.query.offset(t),this}},{key:"fetch",value:(e=r(regeneratorRuntime.mark((function t(){var data,e,n,r,o,c,f=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:data=this.query.data({removeMeta:!0}),this.onlyKeys&&(e=function(data){return data.map((function(t){return d(t,f.onlyKeys)}))},this.postprocess.unshift(e)),this.withoutKeys&&(n=function(data){return data.map((function(t){return v(t,f.withoutKeys)}))},this.postprocess.unshift(n)),r=l(this.postprocess);try{for(r.s();!(o=r.n()).done;)c=o.value,data=c(data)}catch(t){r.e(t)}finally{r.f()}if(data){t.next=7;break}throw new Error("".concat(this.path," not found"));case 7:return t.abrupt("return",JSON.parse(JSON.stringify(data)));case 8:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),t}();t.exports=m},319:function(t,e,n){"use strict";n.r(e);var r=n(4),o=(n(29),n(36),n(37),n(19),n(32),n(48),n(276),n(308)),c=n.n(o),f=n(316),h=n.n(f),l=n(317);n.n(l).a.register();var y,d,v=["/"],m=function(){var t={},e=[];Array.from(arguments).forEach((function(n){"string"==typeof n?e.push(n):"object"===Object(r.a)(n)&&(t=n)}));var path="/".concat(e.join("/").replace(/\/+/g,"/")),n=!path||!!v.find((function(t){return t===path})),o=n?{dir:t.deep?{$regex:path}:path}:{path:path},f=n?[]:[function(data){return data[0]}];return new c.a({query:d.chain().find(o,!n),postprocess:f},{fullTextSearchFields:["title","description","slug","text"]})};e.default=function(t){return(y=new h.a("content.db")).loadJSONObject(t),d=y.getCollection("items"),m}}}]);
//# sourceMappingURL=7059717.js.map