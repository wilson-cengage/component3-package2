jsonpFunctioncomponent3package2([1],{14:function(e,t,r){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var p=r(0),i=p&&p.__esModule?function(){return p["default"]}:function(){return p};Object.defineProperty(i,"a",{get:i});var a=r(48),u=a&&a.__esModule?function(){return a["default"]}:function(){return a};Object.defineProperty(u,"a",{get:u});var l=r(6),f=l&&l.__esModule?function(){return l["default"]}:function(){return l};Object.defineProperty(f,"a",{get:f});var c=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),d=function(e){function t(){return o(this,t),n(this,Object.getPrototypeOf(t).apply(this,arguments))}return s(t,e),c(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{height:120}},i.a.createElement(u.a,{placement:"right",positionLeft:200,positionTop:50,title:"Popover right"},"And here's some ",i.a.createElement("strong",null,"amazing")," content. It's very engaging. right?"))}}]),t}(i.a.Component);t["default"]=d},48:function(e,t,r){"use strict";var o=r(18)["default"],n=r(17)["default"];t.__esModule=!0;var s=r(19),p=n(s),i=r(0),a=n(i),u=r(72),l=n(u),f=r(21),c=a["default"].createClass({displayName:"Popover",propTypes:{id:l["default"](a["default"].PropTypes.oneOfType([a["default"].PropTypes.string,a["default"].PropTypes.number])),placement:a["default"].PropTypes.oneOf(["top","right","bottom","left"]),positionLeft:a["default"].PropTypes.number,positionTop:a["default"].PropTypes.number,arrowOffsetLeft:a["default"].PropTypes.oneOfType([a["default"].PropTypes.number,a["default"].PropTypes.string]),arrowOffsetTop:a["default"].PropTypes.oneOfType([a["default"].PropTypes.number,a["default"].PropTypes.string]),title:a["default"].PropTypes.node},getDefaultProps:function(){return{placement:"right",bsClass:"popover"}},render:function(){var e,t=(e={},e[f.prefix(this.props)]=!0,e[this.props.placement]=!0,e),r=o({left:this.props.positionLeft,top:this.props.positionTop,display:"block"},this.props.style),n={left:this.props.arrowOffsetLeft,top:this.props.arrowOffsetTop};return a["default"].createElement("div",o({role:"tooltip"},this.props,{className:p["default"](this.props.className,t),style:r,title:null}),a["default"].createElement("div",{className:"arrow",style:n}),this.props.title?this.renderTitle():null,a["default"].createElement("div",{className:f.prefix(this.props,"content")},this.props.children))},renderTitle:function(){return a["default"].createElement("h3",{className:f.prefix(this.props,"title")},this.props.title)}});t["default"]=c,e.exports=t["default"]},72:function(e,t){"use strict";function r(e){return function(t,r,o){return null==t[r]?new Error("The prop '"+r+"' is required to make '"+o+"' accessible for users using assistive technologies such as screen readers"):e(t,r,o)}}t.__esModule=!0,t["default"]=r,e.exports=t["default"]}});