(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-652681bc"],{"04d1":function(e,t,o){var r=o("342f"),n=r.match(/firefox\/(\d+)/i);e.exports=!!n&&+n[1]},"0cb2":function(e,t,o){var r=o("e330"),n=o("7b0b"),l=Math.floor,i=r("".charAt),a=r("".replace),s=r("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,o,r,f,d){var m=o+e.length,p=r.length,h=u;return void 0!==f&&(f=n(f),h=c),a(d,h,(function(n,a){var c;switch(i(a,0)){case"$":return"$";case"&":return e;case"`":return s(t,0,o);case"'":return s(t,m);case"<":c=f[s(a,1,-1)];break;default:var u=+a;if(0===u)return n;if(u>p){var d=l(u/10);return 0===d?n:d<=p?void 0===r[d-1]?i(a,1):r[d-1]+i(a,1):n}c=r[u-1]}return void 0===c?"":c}))}},"14c3":function(e,t,o){var r=o("da84"),n=o("c65b"),l=o("825a"),i=o("1626"),a=o("c6b6"),s=o("9263"),c=r.TypeError;e.exports=function(e,t){var o=e.exec;if(i(o)){var r=n(o,e,t);return null!==r&&l(r),r}if("RegExp"===a(e))return n(s,e,t);throw c("RegExp#exec called on incompatible receiver")}},"25f0":function(e,t,o){"use strict";var r=o("e330"),n=o("5e77").PROPER,l=o("6eeb"),i=o("825a"),a=o("3a9b"),s=o("577e"),c=o("d039"),u=o("ad6d"),f="toString",d=RegExp.prototype,m=d[f],p=r(u),h=c((function(){return"/a/b"!=m.call({source:"a",flags:"b"})})),b=n&&m.name!=f;(h||b)&&l(RegExp.prototype,f,(function(){var e=i(this),t=s(e.source),o=e.flags,r=s(void 0===o&&a(d,e)&&!("flags"in d)?p(e):o);return"/"+t+"/"+r}),{unsafe:!0})},"4de4":function(e,t,o){"use strict";var r=o("23e7"),n=o("b727").filter,l=o("1dde"),i=l("filter");r({target:"Array",proto:!0,forced:!i},{filter:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},"4e82":function(e,t,o){"use strict";var r=o("23e7"),n=o("e330"),l=o("59ed"),i=o("7b0b"),a=o("07fa"),s=o("577e"),c=o("d039"),u=o("addb"),f=o("a640"),d=o("04d1"),m=o("d998"),p=o("2d00"),h=o("512c"),b=[],S=n(b.sort),g=n(b.push),v=c((function(){b.sort(void 0)})),C=c((function(){b.sort(null)})),A=f("sort"),R=!c((function(){if(p)return p<70;if(!(d&&d>3)){if(m)return!0;if(h)return h<603;var e,t,o,r,n="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:o=3;break;case 68:case 71:o=4;break;default:o=2}for(r=0;r<47;r++)b.push({k:t+r,v:o})}for(b.sort((function(e,t){return t.v-e.v})),r=0;r<b.length;r++)t=b[r].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}})),y=v||!C||!A||!R,_=function(e){return function(t,o){return void 0===o?-1:void 0===t?1:void 0!==e?+e(t,o)||0:s(t)>s(o)?1:-1}};r({target:"Array",proto:!0,forced:y},{sort:function(e){void 0!==e&&l(e);var t=i(this);if(R)return void 0===e?S(t):S(t,e);var o,r,n=[],s=a(t);for(r=0;r<s;r++)r in t&&g(n,t[r]);u(n,_(e)),o=n.length,r=0;while(r<o)t[r]=n[r++];while(r<s)delete t[r++];return t}})},"512c":function(e,t,o){var r=o("342f"),n=r.match(/AppleWebKit\/(\d+)\./);e.exports=!!n&&+n[1]},5319:function(e,t,o){"use strict";var r=o("2ba4"),n=o("c65b"),l=o("e330"),i=o("d784"),a=o("d039"),s=o("825a"),c=o("1626"),u=o("5926"),f=o("50c4"),d=o("577e"),m=o("1d80"),p=o("8aa5"),h=o("dc4a"),b=o("0cb2"),S=o("14c3"),g=o("b622"),v=g("replace"),C=Math.max,A=Math.min,R=l([].concat),y=l([].push),_=l("".indexOf),x=l("".slice),k=function(e){return void 0===e?e:String(e)},w=function(){return"$0"==="a".replace(/./,"$0")}(),L=function(){return!!/./[v]&&""===/./[v]("a","$0")}(),U=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));i("replace",(function(e,t,o){var l=L?"$":"$0";return[function(e,o){var r=m(this),l=void 0==e?void 0:h(e,v);return l?n(l,e,r,o):n(t,d(r),e,o)},function(e,n){var i=s(this),a=d(e);if("string"==typeof n&&-1===_(n,l)&&-1===_(n,"$<")){var m=o(t,i,a,n);if(m.done)return m.value}var h=c(n);h||(n=d(n));var g=i.global;if(g){var v=i.unicode;i.lastIndex=0}var w=[];while(1){var L=S(i,a);if(null===L)break;if(y(w,L),!g)break;var U=d(L[0]);""===U&&(i.lastIndex=p(a,f(i.lastIndex),v))}for(var $="",N=0,F=0;F<w.length;F++){L=w[F];for(var M=d(L[0]),O=C(A(u(L.index),a.length),0),j=[],T=1;T<L.length;T++)y(j,k(L[T]));var I=L.groups;if(h){var B=R([M],j,O,a);void 0!==I&&y(B,I);var P=d(r(n,void 0,B))}else P=b(M,a,O,j,I,n);O>=N&&($+=x(a,N,O)+P,N=O+M.length)}return $+x(a,N)}]}),!U||!w||L)},"8aa5":function(e,t,o){"use strict";var r=o("6547").charAt;e.exports=function(e,t,o){return t+(o?r(e,t).length:1)}},a640:function(e,t,o){"use strict";var r=o("d039");e.exports=function(e,t){var o=[][e];return!!o&&r((function(){o.call(null,t||function(){throw 1},1)}))}},a9c7:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-row",{staticStyle:{"margin-top":"10px"}},[o("el-col",[o("el-card",[o("div",{attrs:{slot:"header"},slot:"header"},[o("h1",[e._v("系外企鹅的订阅转换")]),o("svg-icon",{staticStyle:{"margin-left":"20px"},attrs:{"icon-class":"github"},on:{click:e.goToProject}}),o("div",{staticStyle:{display:"inline-block",position:"absolute",right:"20px"}},[o("a",{attrs:{href:"#"}},[e._v("@系外企鹅")]),o("a",{attrs:{href:"https://github.com/tindy2013/subconverter"}},[e._v(e._s(e.backendVersion))])])],1),o("el-container",[o("el-form",{staticStyle:{width:"100%"},attrs:{model:e.form,"label-width":"80px","label-position":"left"}},[o("el-form-item",{attrs:{label:"模式设置:"}},[o("el-radio",{attrs:{label:"1"},model:{value:e.advanced,callback:function(t){e.advanced=t},expression:"advanced"}},[e._v("基础模式")]),o("el-radio",{attrs:{label:"2"},model:{value:e.advanced,callback:function(t){e.advanced=t},expression:"advanced"}},[e._v("进阶模式")])],1),o("el-form-item",{attrs:{label:"订阅链接:"}},[o("el-input",{attrs:{type:"textarea",rows:"3",placeholder:"支持订阅或ss/ssr/vmess链接，多个链接每行一个或用 | 分隔"},on:{blur:e.saveSubUrl},model:{value:e.form.sourceSubUrl,callback:function(t){e.$set(e.form,"sourceSubUrl",t)},expression:"form.sourceSubUrl"}})],1),o("el-form-item",{attrs:{label:"输出订阅:"}},[o("el-select",{staticStyle:{width:"100%"},model:{value:e.form.clientType,callback:function(t){e.$set(e.form,"clientType",t)},expression:"form.clientType"}},e._l(e.options.clientTypes,(function(e,t){return o("el-option",{key:t,attrs:{label:t,value:e}})})),1)],1),"2"===e.advanced?o("div",[o("el-form-item",{attrs:{label:"后端地址:"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"请选择"},model:{value:e.form.customBackend,callback:function(t){e.$set(e.form,"customBackend",t)},expression:"form.customBackend"}},e._l(e.options.customBackend,(function(e,t){return o("el-option",{key:t,attrs:{label:t,value:e}})})),1)],1),o("el-form-item",{attrs:{label:"远程配置:"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"请选择"},model:{value:e.form.remoteConfig,callback:function(t){e.$set(e.form,"remoteConfig",t)},expression:"form.remoteConfig"}},[e._l(e.options.remoteConfig,(function(t){return o("el-option-group",{key:t.label,attrs:{label:t.label}},e._l(t.options,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)})),o("el-button",{attrs:{slot:"append",icon:"el-icon-link"},on:{click:e.gotoRemoteConfig},slot:"append"},[e._v("配置示例")])],2)],1),o("el-form-item",{attrs:{label:"保留节点:"}},[o("el-input",{attrs:{placeholder:"节点名包含的关键字，支持正则"},model:{value:e.form.includeRemarks,callback:function(t){e.$set(e.form,"includeRemarks",t)},expression:"form.includeRemarks"}})],1),o("el-form-item",{attrs:{label:"排除节点:"}},[o("el-input",{attrs:{placeholder:"节点名不包含的关键字，支持正则"},model:{value:e.form.excludeRemarks,callback:function(t){e.$set(e.form,"excludeRemarks",t)},expression:"form.excludeRemarks"}})],1),o("el-form-item",{attrs:{label:"新文件名:"}},[o("el-input",{attrs:{placeholder:"返回的订阅文件名"},model:{value:e.form.filename,callback:function(t){e.$set(e.form,"filename",t)},expression:"form.filename"}})],1),o("el-form-item",{attrs:{"label-width":"0px"}},[o("el-row",{attrs:{type:"flex"}},[o("el-col",[o("el-checkbox",{attrs:{label:"输出为 Node List",border:""},model:{value:e.form.nodeList,callback:function(t){e.$set(e.form,"nodeList",t)},expression:"form.nodeList"}})],1),o("el-popover",{attrs:{placement:"bottom"},model:{value:e.form.extraset,callback:function(t){e.$set(e.form,"extraset",t)},expression:"form.extraset"}},[o("el-row",[o("el-checkbox",{attrs:{label:"Emoji"},model:{value:e.form.emoji,callback:function(t){e.$set(e.form,"emoji",t)},expression:"form.emoji"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"跳过证书验证"},model:{value:e.form.scv,callback:function(t){e.$set(e.form,"scv",t)},expression:"form.scv"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"启用 UDP"},on:{change:function(t){e.needUdp=!0}},model:{value:e.form.udp,callback:function(t){e.$set(e.form,"udp",t)},expression:"form.udp"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"节点类型"},model:{value:e.form.appendType,callback:function(t){e.$set(e.form,"appendType",t)},expression:"form.appendType"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"排序节点"},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"过滤非法节点"},model:{value:e.form.fdn,callback:function(t){e.$set(e.form,"fdn",t)},expression:"form.fdn"}})],1),o("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("更多选项")])],1),o("el-popover",{staticStyle:{"margin-left":"10px"},attrs:{placement:"bottom"}},[o("el-row",[o("el-checkbox",{attrs:{label:"Surge.DoH"},model:{value:e.form.tpl.surge.doh,callback:function(t){e.$set(e.form.tpl.surge,"doh",t)},expression:"form.tpl.surge.doh"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"Clash.DoH"},model:{value:e.form.tpl.clash.doh,callback:function(t){e.$set(e.form.tpl.clash,"doh",t)},expression:"form.tpl.clash.doh"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"网易云"},model:{value:e.form.insert,callback:function(t){e.$set(e.form,"insert",t)},expression:"form.insert"}})],1),o("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("定制功能")])],1)],1)],1)],1):e._e(),o("el-form-item",{staticStyle:{"margin-top":"40px","text-align":"center"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"140px",height:"70px","font-size":"17px"},attrs:{type:"danger",disabled:0===e.form.sourceSubUrl.length},on:{click:e.makeUrl}},[e._v("生成订阅链接")]),o("el-button",{staticStyle:{width:"140px",height:"70px","font-size":"17px"},attrs:{type:"danger",loading:e.loading,disabled:0===e.customSubUrl.length},on:{click:e.makeShortUrl}},[e._v("生成短链接")])],1),o("div",{staticStyle:{"margin-top":"50px"}}),o("el-divider",{attrs:{"content-position":"center"}},[o("i",{staticClass:"el-icon-magic-stick"})]),o("el-form-item",{attrs:{label:"定制订阅:"}},[o("el-input",{staticClass:"copy-content",attrs:{disabled:""},model:{value:e.customSubUrl,callback:function(t){e.customSubUrl=t},expression:"customSubUrl"}},[o("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.customSubUrl,expression:"customSubUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],ref:"copy-btn",attrs:{slot:"append",icon:"el-icon-document-copy"},slot:"append"},[e._v("复制")])],1)],1),o("el-form-item",{attrs:{label:"订阅短链:"}},[o("el-input",{staticClass:"copy-content",attrs:{disabled:""},model:{value:e.curtomShortSubUrl,callback:function(t){e.curtomShortSubUrl=t},expression:"curtomShortSubUrl"}},[o("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.curtomShortSubUrl,expression:"curtomShortSubUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],ref:"copy-btn",attrs:{slot:"append",icon:"el-icon-document-copy"},slot:"append"},[e._v("复制")])],1)],1),o("el-form-item",{staticStyle:{"text-align":"center"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",icon:"el-icon-upload",loading:e.loading},on:{click:function(t){e.dialogUploadConfigVisible=!0}}},[e._v("上传配置")]),o("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",icon:"el-icon-connection",disabled:0===e.customSubUrl.length},on:{click:e.clashInstall}},[e._v("一键导入Clash")])],1)],1)],1)],1)],1)],1),o("el-dialog",{attrs:{visible:e.dialogUploadConfigVisible,"show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"700px"},on:{"update:visible":function(t){e.dialogUploadConfigVisible=t}}},[o("div",{attrs:{slot:"title"},slot:"title"},[e._v(" Remote config upload "),o("el-popover",{staticStyle:{"margin-left":"10px"},attrs:{trigger:"hover",placement:"right"}},[o("el-link",{attrs:{type:"primary",href:e.sampleConfig,target:"_blank",icon:"el-icon-info"}},[e._v("参考配置")]),o("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})],1)],1),o("el-form",{attrs:{"label-position":"left"}},[o("el-form-item",{attrs:{prop:"uploadConfig"}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:15,maxRows:15},maxlength:"5000","show-word-limit":""},model:{value:e.uploadConfig,callback:function(t){e.uploadConfig=t},expression:"uploadConfig"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.uploadConfig="",e.dialogUploadConfigVisible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary",disabled:0===e.uploadConfig.length},on:{click:e.confirmUploadConfig}},[e._v("确 定")])],1)],1)],1)},n=[],l=(o("ac1f"),o("5319"),o("d3b7"),o("25f0"),o("4e82"),o("4de4"),o("e9c4"),"https://github.com/CareyWang/sub-web"),i="https://raw.githubusercontent.com/tindy2013/subconverter/master/base/config/example_external_config.ini",a="https://github.com/tindy2013/subconverter/releases",s="https://trsub.tk/sub?",c="https://suo.yt/short",u="https://api.wcc.best/config/upload",f="https://t.me/CareyWong_bot",d={data:function(){return{backendVersion:"",advanced:"2",isPC:!0,options:{clientTypes:{Clash:"clash",Surge3:"surge&ver=3",Surge4:"surge&ver=4",Quantumult:"quan",QuantumultX:"quanx",Surfboard:"surfboard",Loon:"loon",SSAndroid:"sssub",V2Ray:"v2ray",ss:"ss",ssr:"ssr",ssd:"ssd",ClashR:"clashr",Surge2:"surge&ver=2"},customBackend:{"localhost:25500 本地订阅转换":"http://localhost:25500/sub?","系外企鹅的订阅转换-后端(推荐)":"https://trsub.tk/sub?","subcon.dlj.tf(subconverter作者提供-稳定)":"https://subcon.dlj.tf/sub?","api.dler.io(sub作者&lhie1提供-稳定)":"https://api.dler.io/sub?","api.wcc.best(sub-web作者提供-稳定)":"https://api.wcc.best/sub?","sub.id9.cc(品云转换)":"https://sub.id9.cc/sub?"},backendOptions:[{value:"http://localhost:25500/sub?"},{value:"https://trsub.tk/sub?"},{value:"https://subcon.dlj.tf/sub?"},{value:"https://api.dler.io/sub?"},{value:"https://api.wcc.best/sub?"},{value:"https://sub.id9.cc/sub?"}],remoteConfig:[{label:"默认",options:[{label:"不选，由接口提供方提供",value:""}]},{label:"ACL4SSR Github配置",options:[{label:"ACL4SSR 标准版 分组比较全",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini"},{label:"ACL4SSR_AdblockPlus +去广告",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_AdblockPlus.ini"},{label:"ACL4SSR_NoAuto +无自动测速",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoAuto.ini"},{label:"ACL4SSR_NoReject +无广告拦截",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoReject.ini"},{label:"ACL4SSR_Mini 精简版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini.ini"},{label:"ACL4SSR_Mini_AdblockPlus.ini 精简版+去广告",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_AdblockPlus.ini"},{label:"ACL4SSR_Mini_NoAuto.ini 精简版+无自动测速",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_NoAuto.ini"},{label:"ACL4SSR_Mini_Fallback.ini 精简版+故障转移",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_Fallback.ini"},{label:"ACL4SSR 精简版+自动测速+故障转移+负载均衡",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiMode.ini"},{label:"ACL4SSR_Mini_MultiCountry.ini 精简版+多国家",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiCountry.ini"},{label:"ACL4SSR_Full 全分组",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini"},{label:"ACL4SSR全分组+自动测速+故障转移+负载均衡",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_MultiMode.ini"},{label:"ACL4SSR_Full_NoAuto.ini 全分组+无自动测速",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_NoAuto.ini"},{label:"ACL4SSR_Full_AdblockPlus 全分组+去广告",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_AdblockPlus.ini"},{label:"ACL4SSR_Full_Netflix 全分组+奈飞全量",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Netflix.ini"},{label:"ACL4SSR_Full_Google 全分组+谷歌全量",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Google.ini"}]},{label:"ACL4SSR 本地配置",options:[{label:"ACL4SSR 本地标准版 分组比较全",value:"config/ACL4SSR.ini"},{label:"ACL4SSR_Mini 本地 精简版",value:"config/ACL4SSR_Mini.ini"},{label:"ACL4SSR_Mini_NoAuto.ini 本地 精简版+无自动测速",value:"config/ACL4SSR_Mini_NoAuto.ini"},{label:"ACL4SSR_Mini_Fallback.ini 本地 精简版+故障转移",value:"config/ACL4SSR_Mini_Fallback.ini"},{label:"ACL4SSR_BackCN 本地 回国",value:"config/ACL4SSR_BackCN.ini"},{label:"ACL4SSR_NoApple 本地 无苹果分流",value:"config/ACL4SSR_NoApple.ini"},{label:"ACL4SSR_NoAuto 本地 无自动测速",value:"config/ACL4SSR_NoAuto.ini"},{label:"ACL4SSR_NoAuto_NoApple 本地 无自动测速 无苹果分流",value:"config/ACL4SSR_NoAuto_NoApple.ini"},{label:"ACL4SSR_NoMicrosoft 本地 无微软分流",value:"config/ACL4SSR_NoMicrosoft.ini"},{label:"ACL4SSR_WithGFW 本地 GFW列表",value:"config/ACL4SSR_WithGFW.ini"}]},{label:"其他",options:[{label:"No-Urltest",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/universal/no-urltest.ini"},{label:"Urltest",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/universal/urltest.ini"}]},{label:"定制版",options:[{label:"Maying",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/maying.ini"},{label:"Ytoo",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ytoo.ini"},{label:"FlowerCloud",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/flowercloud.ini"},{label:"NyanCAT",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/nyancat.ini"},{label:"Nexitally",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/nexitally.ini"},{label:"SoCloud",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/socloud.ini"},{label:"ARK",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ark.ini"},{label:"ssrCloud",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ssrcloud.ini"}]},{label:"特殊版",options:[{label:"NeteaseUnblock(仅规则，No-Urltest)",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/special/netease.ini"},{label:"Basic(仅GEOIP CN + Final)",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/special/basic.ini"}]}]},form:{sourceSubUrl:"",clientType:"",customBackend:"",remoteConfig:"",excludeRemarks:"",includeRemarks:"",filename:"",emoji:!0,nodeList:!1,extraset:!1,sort:!1,udp:!1,tfo:!1,scv:!1,fdn:!1,appendType:!1,insert:!1,new_name:!0,tpl:{surge:{doh:!1},clash:{doh:!1}}},loading:!1,customSubUrl:"",curtomShortSubUrl:"",dialogUploadConfigVisible:!1,uploadConfig:"",uploadPassword:"",myBot:f,sampleConfig:i,needUdp:!1}},created:function(){document.title="系外企鹅的订阅转换";var e=document.querySelector('link[rel="icon"]');e.href="/favicon.ico",this.isPC=this.$getOS().isPc,this.form.sourceSubUrl=this.getLocalStorageItem("sourceSubUrl")},mounted:function(){this.form.clientType="clash",this.form.customBackend=s,this.form.remoteConfig="https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini",this.notify(),this.getBackendVersion()},methods:{onCopy:function(){this.$message.success("Copied!")},goToProject:function(){window.open(l)},gotoGayhub:function(){window.open(a)},gotoRemoteConfig:function(){window.open(i)},clashInstall:function(){if(""===this.customSubUrl)return this.$message.error("请先填写必填项，生成订阅链接"),!1;var e="clash://install-config?url=";window.open(e+encodeURIComponent(""!==this.curtomShortSubUrl?this.curtomShortSubUrl:this.customSubUrl))},surgeInstall:function(){if(""===this.customSubUrl)return this.$message.error("请先填写必填项，生成订阅链接"),!1;var e="surge://install-config?url=";window.open(e+this.customSubUrl)},makeUrl:function(){if(""===this.form.sourceSubUrl||""===this.form.clientType)return this.$message.error("订阅链接与客户端为必填项"),!1;var e=""===this.form.customBackend?s:this.form.customBackend,t=this.form.sourceSubUrl;t=t.replace(/(\n|\r|\n\r)/g,"|"),this.customSubUrl=e+"target="+this.form.clientType+"&url="+encodeURIComponent(t)+"&insert="+this.form.insert,"2"===this.advanced&&(""!==this.form.remoteConfig&&(this.customSubUrl+="&config="+encodeURIComponent(this.form.remoteConfig)),""!==this.form.excludeRemarks&&(this.customSubUrl+="&exclude="+encodeURIComponent(this.form.excludeRemarks)),""!==this.form.includeRemarks&&(this.customSubUrl+="&include="+encodeURIComponent(this.form.includeRemarks)),""!==this.form.filename&&(this.customSubUrl+="&filename="+encodeURIComponent(this.form.filename)),this.form.appendType&&(this.customSubUrl+="&append_type="+this.form.appendType.toString()),this.customSubUrl+="&emoji="+this.form.emoji.toString()+"&list="+this.form.nodeList.toString()+"&tfo="+this.form.tfo.toString()+"&scv="+this.form.scv.toString()+"&fdn="+this.form.fdn.toString()+"&sort="+this.form.sort.toString(),this.needUdp&&(this.customSubUrl+="&udp="+this.form.udp.toString()),!0===this.form.tpl.surge.doh&&(this.customSubUrl+="&surge.doh=true"),"clash"===this.form.clientType&&(!0===this.form.tpl.clash.doh&&(this.customSubUrl+="&clash.doh=true"),this.customSubUrl+="&new_name="+this.form.new_name.toString())),this.$copyText(this.customSubUrl),this.$message.success("定制订阅已复制到剪贴板")},makeShortUrl:function(){var e=this;if(""===this.customSubUrl)return this.$message.warning("请先生成订阅链接，再获取对应短链接"),!1;this.loading=!0;var t=new FormData;t.append("longUrl",btoa(this.customSubUrl)),this.$axios.post(c,t,{header:{"Content-Type":"application/form-data; charset=utf-8"}}).then((function(t){1===t.data.Code&&""!==t.data.ShortUrl?(e.curtomShortSubUrl=t.data.ShortUrl,e.$copyText(t.data.ShortUrl),e.$message.success("短链接已复制到剪贴板")):e.$message.error("短链接获取失败："+t.data.Message)})).catch((function(){e.$message.error("短链接获取失败")})).finally((function(){e.loading=!1}))},notify:function(){var e=this.$createElement;this.$notify({title:"隐私提示",type:"warning",message:e("i",{style:"color: teal"},"各种订阅链接（短链接服务除外）生成纯前端实现，无隐私问题。默认提供后端转换服务，隐私担忧者请自行搭建后端服务。")})},confirmUploadConfig:function(){var e=this;if(""===this.uploadConfig)return this.$message.warning("远程配置不能为空"),!1;this.loading=!0;var t=new FormData;t.append("password",this.uploadPassword),t.append("config",this.uploadConfig),this.$axios.post(u,t,{header:{"Content-Type":"application/form-data; charset=utf-8"}}).then((function(t){0===t.data.code&&""!==t.data.data.url?(e.$message.success("远程配置上传成功，配置链接已复制到剪贴板，有效期三个月望知悉"),e.form.remoteConfig=t.data.data.url,e.$copyText(e.form.remoteConfig),e.dialogUploadConfigVisible=!1):e.$message.error("远程配置上传失败: "+t.data.msg)})).catch((function(){e.$message.error("远程配置上传失败")})).finally((function(){e.loading=!1}))},backendSearch:function(e,t){var o=this.options.backendOptions,r=e?o.filter(this.createFilter(e)):o;t(r)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},getBackendVersion:function(){var e=this;this.$axios.get(s.substring(0,s.length-5)+"/version").then((function(t){e.backendVersion=t.data.replace(/backend\n$/gm,""),e.backendVersion=e.backendVersion.replace("subconverter","")}))},saveSubUrl:function(){""!==this.form.sourceSubUrl&&this.setLocalStorageItem("sourceSubUrl",this.form.sourceSubUrl)},getLocalStorageItem:function(e){var t=+new Date,o=localStorage.getItem(e),r="";if(null!==o){var n=JSON.parse(o);n.expire>t?r=n.value:localStorage.removeItem(e)}return r},setLocalStorageItem:function(e,t){var o="86400",r=+new Date,n={setTime:r,ttl:parseInt(o),expire:r+1e3*o,value:t};localStorage.setItem(e,JSON.stringify(n))}}},m=d,p=o("2877"),h=Object(p["a"])(m,r,n,!1,null,null,null);t["default"]=h.exports},addb:function(e,t,o){var r=o("f36a"),n=Math.floor,l=function(e,t){var o=e.length,s=n(o/2);return o<8?i(e,t):a(e,l(r(e,0,s),t),l(r(e,s),t),t)},i=function(e,t){var o,r,n=e.length,l=1;while(l<n){r=l,o=e[l];while(r&&t(e[r-1],o)>0)e[r]=e[--r];r!==l++&&(e[r]=o)}return e},a=function(e,t,o,r){var n=t.length,l=o.length,i=0,a=0;while(i<n||a<l)e[i+a]=i<n&&a<l?r(t[i],o[a])<=0?t[i++]:o[a++]:i<n?t[i++]:o[a++];return e};e.exports=l},d784:function(e,t,o){"use strict";o("ac1f");var r=o("e330"),n=o("6eeb"),l=o("9263"),i=o("d039"),a=o("b622"),s=o("9112"),c=a("species"),u=RegExp.prototype;e.exports=function(e,t,o,f){var d=a(e),m=!i((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),p=m&&!i((function(){var t=!1,o=/a/;return"split"===e&&(o={},o.constructor={},o.constructor[c]=function(){return o},o.flags="",o[d]=/./[d]),o.exec=function(){return t=!0,null},o[d](""),!t}));if(!m||!p||o){var h=r(/./[d]),b=t(d,""[e],(function(e,t,o,n,i){var a=r(e),s=t.exec;return s===l||s===u.exec?m&&!i?{done:!0,value:h(t,o,n)}:{done:!0,value:a(o,t,n)}:{done:!1}}));n(String.prototype,e,b[0]),n(u,d,b[1])}f&&s(u[d],"sham",!0)}},d998:function(e,t,o){var r=o("342f");e.exports=/MSIE|Trident/.test(r)},e9c4:function(e,t,o){var r=o("23e7"),n=o("da84"),l=o("d066"),i=o("2ba4"),a=o("e330"),s=o("d039"),c=n.Array,u=l("JSON","stringify"),f=a(/./.exec),d=a("".charAt),m=a("".charCodeAt),p=a("".replace),h=a(1..toString),b=/[\uD800-\uDFFF]/g,S=/^[\uD800-\uDBFF]$/,g=/^[\uDC00-\uDFFF]$/,v=function(e,t,o){var r=d(o,t-1),n=d(o,t+1);return f(S,e)&&!f(g,n)||f(g,e)&&!f(S,r)?"\\u"+h(m(e,0),16):e},C=s((function(){return'"\\udf06\\ud834"'!==u("\udf06\ud834")||'"\\udead"'!==u("\udead")}));u&&r({target:"JSON",stat:!0,forced:C},{stringify:function(e,t,o){for(var r=0,n=arguments.length,l=c(n);r<n;r++)l[r]=arguments[r];var a=i(u,null,l);return"string"==typeof a?p(a,b,v):a}})}}]);
//# sourceMappingURL=chunk-652681bc.160daf97.js.map