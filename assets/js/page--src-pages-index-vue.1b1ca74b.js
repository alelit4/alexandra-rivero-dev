(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"7qvl":function(t,s,a){},A6W1:function(t,s,a){"use strict";var e={props:["showTitle"]},i=(a("ArLL"),a("KHd+")),o=a("Kw5r"),n=o.default.config.optionMergeStrategies.computed,r={metadata:{siteName:"Posts"}},c=function(t){var s=t.options;s.__staticData?s.__staticData.data=r:(s.__staticData=o.default.observable({data:r}),s.computed=n({$static:function(){return s.__staticData.data}},s.computed))},l=Object(i.a)(e,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"author"},[this.showTitle?s("h1",{staticClass:"author-site-title"},[this._v("\n\t\t"+this._s(this.$static.metadata.siteName)+"\n\t")]):this._e(),s("p",{staticClass:"author-intro"},[this._v("\n\t\tAlexandra Rivero. Co-organizer AdaLoveDev and GDG Tenerife. Official keeper of the Milky Way's Stars!\n\t")]),this._m(0)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"author-links"},[s("a",{attrs:{href:"https://twitter.com/AleSt4r"}},[this._v("Twitter")]),s("a",{attrs:{href:"https://github.com/alelit4"}},[this._v("GitHub")])])}],!1,null,null,null);"function"==typeof c&&c(l);s.a=l.exports},AO8t:function(t,s,a){},ArLL:function(t,s,a){"use strict";a("AO8t")},"BA+P":function(t,s,a){"use strict";var e=a("n6yM"),i=a("PpWc"),o={components:{PostMeta:e.a,PostTags:i.a},props:["post"]},n=(a("YDir"),a("KHd+")),r=Object(n.a)(o,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-card content-box",class:{"post-card--has-poster":t.post.poster}},[a("div",{staticClass:"post-card-header"},[t.post.cover_image?a("g-image",{staticClass:"post-card__image",attrs:{alt:"Cover image",src:t.post.cover_image}}):t._e()],1),a("div",{staticClass:"post-card-content"},[a("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card-title",domProps:{innerHTML:t._s(t.post.title)}}),a("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card-description",domProps:{innerHTML:t._s(t.post.description)}}),a("PostMeta",{staticClass:"post-card-meta",attrs:{post:t.post}}),a("PostTags",{staticClass:"post-card-tags",attrs:{post:t.post}}),a("g-link",{staticClass:"post-card-link",attrs:{to:t.post.path}},[t._v("Link")])],1)])}),[],!1,null,null,null);s.a=r.exports},"BWX/":function(t,s,a){"use strict";a("v8ht")},GsXb:function(t,s,a){"use strict";a("7qvl")},NAO6:function(t,s,a){},PpWc:function(t,s,a){"use strict";var e={props:["post"]},i=(a("GsXb"),a("KHd+")),o=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-tags"},t._l(t.post.tags,(function(s){return a("g-link",{key:s.id,staticClass:"post-tags-link",attrs:{to:s.path}},[a("span",[t._v("#")]),t._v(" "+t._s(s.title)+"\n\t\t")])})),1)}),[],!1,null,null,null);s.a=o.exports},YDir:function(t,s,a){"use strict";a("NAO6")},YIUa:function(t,s,a){"use strict";a("hpwU")},hpwU:function(t,s,a){},iyQ6:function(t,s,a){"use strict";a.r(s);var e=a("BA+P"),i=a("A6W1"),o={components:{PostCard:e.a,Author:i.a},metaInfo:{title:"Alexandra Rivero"}},n=(a("BWX/"),a("KHd+")),r=null,c=Object(n.a)(o,(function(){var t=this.$createElement,s=this._self._c||t;return s("Layout",{attrs:{"show-logo":!1}},[s("Author"),s("div",{staticClass:"posts"},this._l(this.$page.posts.edges,(function(t){return s("PostCard",{key:t.node.id,attrs:{post:t.node}})})),1)],1)}),[],!1,null,null,null);"function"==typeof r&&r(c);s.default=c.exports},n6yM:function(t,s,a){"use strict";var e={props:["post"]},i=(a("YIUa"),a("KHd+")),o=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-meta"},[t._v("\n   Posted "+t._s(t.post.date)+".\n   "),t.post.timeToRead?[a("strong",[t._v(t._s(t.post.timeToRead)+" min read.")])]:t._e()],2)}),[],!1,null,null,null);s.a=o.exports},v8ht:function(t,s,a){}}]);