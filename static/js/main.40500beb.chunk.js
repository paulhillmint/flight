(this.webpackJsonpflight=this.webpackJsonpflight||[]).push([[0],{25:function(e,a,t){e.exports=t(57)},30:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},54:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t.n(c),o=t(20),n=t.n(o),r=(t(30),t(12)),m=t(6),p=t(2),l=(t(43),function(){return s.a.createElement("header",null,s.a.createElement(p.Container,null,s.a.createElement(p.Row,null,s.a.createElement(p.Col,{sm:4},s.a.createElement("div",{className:"Header-title code"},"\u2708Flight")),s.a.createElement(p.Col,{sm:8},s.a.createElement("div",{className:"Header-nav"})))))}),i=t(9),w=t(13),d=t(14),k=t(22),u=t(21),h=(t(44),{visibility:"hidden"}),b=function(e){var a=e.hidden,t=e.header,c=e.footer,o=e.children;return s.a.createElement("div",{className:"Card",style:a?h:{}},s.a.createElement("div",{className:"Card-header code"},t),o,c&&s.a.createElement("div",{className:"Card-footer"},c))},g=(t(45),function(e){var a=e.flightId,t=e.urls,c=e.handleCoverLoad,o=e.handleCoverError,n=t.coverURL,r=t.makerURL,m=t.torrentURL,p=t.busURL;return s.a.createElement(b,{header:s.a.createElement("h2",null,"Flight: ",a.toUpperCase()),footer:s.a.createElement("div",null,r&&s.a.createElement(v,{url:r,title:E(r),icon:s.a.createElement(u.a,null)}),s.a.createElement(v,{url:m,title:"Torrent Kitty",icon:s.a.createElement(w.b,null)}),s.a.createElement(v,{url:p,title:"JavBus",icon:s.a.createElement(w.a,null)}))},s.a.createElement("img",{src:n,alt:"cover",onLoad:c,onError:o}))}),v=function(e){var a=e.url,t=e.title,c=e.icon;return c||(c=s.a.createElement(d.b,null)),s.a.createElement("a",{className:"WebLink",href:a,target:"_blank",rel:"noopener noreferrer"},s.a.createElement("span",{className:"WebLink-icon"},c),s.a.createElement("span",{className:"WebLink-title"},t),s.a.createElement("span",{className:"WebLink-arrow"},s.a.createElement(d.a,null)))},E=function(e){var a=e.match(/\/\/[a-z]+.([\w-]*).[com|jp|co.jp|net|tv]/i),t="Maker";if(a&&a[1])switch(a[1]){case"s1s1s1":t="S1 NO.1 STYLE";break;case"ideapocket":t="\u30a2\u30a4\u30dd\u30b1 ideapocket";break;case"moodyz":t="MOODYZ";break;case"kawaiikawaii":t="\u30e1\u30fc\u30ab\u30fc kawaii*";break;case"sod":t="SOFT ON DEMAND";break;case"prestige-av":case"mgstage":t="PRESTIGE GROUP";break;case"oppai-av":t="OPPAI";break;case"wanz-factory":t="WANZ FACTORY";break;case"tameikegoro":t="\u6e9c\u6c60\u30b4\u30ed\u30fc";break;case"av-e-body":t="E-BODY";break;case"premium-beauty":t="PREMIUM";break;case"kirakira-av":t="kira\u2606kira";break;case"mutekimuteki":t="MUTEKI";break;case"befreebe":t="BeFree";break;case"bi-av":t="Chijyo HEAVEN";break;case"madonna-av":t="Madonna";break;case"fitch-av":t="Fitch";break;case"miman":t="\u672a\u6e80 MIMAN";break;case"muku":t="\u7121\u57a2 MUKU";break;case"dasdas":t="DAS";break;case"honnaka":t="\u672c\u4e2d HONNAKA";break;default:t=a[1].replace("av","").replace("-"," ").toUpperCase()}return t},f=g;g.ErrorCard=function(e){var a=e.flightId;return s.a.createElement(b,{header:s.a.createElement("h2",null,"Flight: ",a.toUpperCase())},s.a.createElement("div",{className:"ErrorCard-sign"},s.a.createElement(k.a,{className:"icon"}),s.a.createElement("h3",null,"Flight Not Found")))};t(46);var j=function(e){var a=e.url,t=Object(c.useState)(!1),o=Object(i.a)(t,2),n=o[0],r=o[1];return s.a.createElement(b,{hidden:!n,header:s.a.createElement("h2",null,"Preview Video (Bonus)")},s.a.createElement("video",{controls:!0,onCanPlay:function(e){r(!0)},onError:function(e){r(!1)}},s.a.createElement("source",{src:a,type:"video/mp4"}),"Your browser does not support HTML5 video."))},_=function(e){var a=[e];if(e.includes("dmb_w")){var t=e.replace("dmb_w","dm_w"),c=e.replace("dmb_w","dm_s"),s=c.replace(/([a-z]{3})00(\d{3})/g,"$1$2");a=[e,t,c,s]}else e.includes("mgstage")&&(a.push(e.replace(".mp4","_35a.mp4")),a.push(e.replace(".mp4","_35b.mp4")),a.push(e.replace(".mp4","_35.mp4")));return a},y=function(e){var a=e.urls,t=a.previewURL,c=a.bonusURL;return s.a.createElement("div",null,s.a.createElement(b,{header:s.a.createElement("h2",null,"Preview Video")},s.a.createElement("video",{controls:!0},_(t).map((function(e,a){return s.a.createElement("source",{key:a,src:e,type:"video/mp4"})})),"Your browser does not support HTML5 video.")),c&&s.a.createElement(j,{url:c}))},C=(t(47),function(e){var a,t,c,s,o=e.toLowerCase().split("-"),n=o[0],r=o[1],m="".concat(n).concat(r),p="".concat(n,"-").concat(r),l="".concat(n.toUpperCase(),"-").concat(r.toUpperCase());switch(a="https://cc3001.dmm.co.jp/litevideo/freepv/".concat(n.substr(0,1),"/").concat(n.substr(0,3),"/").concat(n,"00").concat(r,"/").concat(n,"00").concat(r,"_dmb_w.mp4"),t="",n){case"star":case"stars":case"sdab":case"sdam":case"sdmf":case"sdmm":case"sdmu":case"sdnm":case"sdnt":case"sdjs":case"sdde":case"kmhr":case"kmhrs":a="https://awscc3001.r18.com/litevideo/freepv/1/1".concat(n.substr(0,2),"/1").concat(m,"/1").concat(m,"_dmb_w.mp4");break;case"abp":case"abs":case"sga":case"chn":case"bgn":case"dic":case"tre":case"esk":case"ppt":case"ppp":case"tap":case"hrv":case"spc":case"nre":case"wpc":case"mas":case"inu":case"ztr":case"jcn":case"osr":case"mmy":case"yrh":a="https://sample.mgstage.com/sample/prestige/".concat(n,"/").concat(r,"/").concat(l,".mp4"),t="https://feature.mgstage.com/feature/".concat(l,"_tokuten_sample/").concat(l,"_tokuten_sample.mp4");break;case"dtt":case"kbi":a="https://sample.mgstage.com/sample/kanbi/336".concat(n,"/").concat(r,"/").concat(l,".mp4"),t="https://feature.mgstage.com/feature/336".concat(l,"_tokuten_sample/336").concat(l,"_tokuten_sample.mp4");break;case"rix":case"tbl":a="https://sample.mgstage.com/sample/magictabloid/099".concat(n,"/").concat(r,"/").concat(l,".mp4");break;case"onez":a="https://sample.mgstage.com/sample/onemore/013".concat(n,"/").concat(r,"/").concat(l,".mp4");break;case"docp":case"cdc":case"fch":a="https://sample.mgstage.com/sample/doc/".concat(n,"/").concat(r,"/").concat(l,".mp4");break;case"sksk":a="https://sample.mgstage.com/sample/sukesuke/368".concat(n,"/").concat(r,"/").concat(l,".mp4");break;case"gne":a="https://sample.mgstage.com/sample/gallop/236".concat(n,"/").concat(r,"/").concat(l,".mp4");break;case"otim":a="https://sample.mgstage.com/sample/onetime/393".concat(n,"/").concat(r,"/393").concat(l,".mp4");break;case"bf":a="https://cc3001.dmm.co.jp/litevideo/freepv/".concat(n.substr(0,1),"/").concat((n+"0").substr(0,3),"/").concat(n,"00").concat(r,"/").concat(n,"00").concat(r,"_dmb_w.mp4")}switch(c="http://pics.dmm.co.jp/mono/movie/adult/".concat(m,"/").concat(m,"pl.jpg"),s="",n){case"soe":case"snis":case"ssni":case"ofje":c="https://www.s1s1s1.com/contents/works/".concat(m,"/").concat(m,"-pl.jpg"),s="https://www.s1s1s1.com/works/detail/".concat(m,"/");break;case"ipz":case"ipx":case"iptd":case"idbd":case"supd":c="https://www.ideapocket.com/contents/works/".concat(m,"/").concat(m,"-pl.jpg"),s="https://www.ideapocket.com/works/detail/".concat(m,"/");break;case"midd":case"mide":case"migd":case"mifd":case"mird":case"miaa":case"mimk":case"mdvr":c="https://www.moodyz.com/contents/works/".concat(m,"/").concat(m,"-pl.jpg"),s="https://www.moodyz.com/works/detail/".concat(m,"/");break;case"cawd":case"kawd":case"kwbd":c="https://www.kawaiikawaii.jp/contents/works/".concat(m,"/").concat(m,"-pl.jpg"),s="https://www.kawaiikawaii.jp/works/detail/".concat(m,"/");break;case"star":case"stars":case"sdab":case"sdam":case"sdmf":case"sdmm":case"sdmu":case"sdnm":case"sdnt":case"sdjs":case"sdde":case"kmhr":case"kmhrs":c="http://pics.dmm.co.jp/mono/movie/adult/1".concat(m,"/1").concat(m,"pl.jpg"),s="https://ec.sod.co.jp/prime/videos/?id=".concat(l);break;case"abp":case"abs":case"sga":case"chn":case"bgn":case"dic":case"tre":case"esk":case"ppt":case"ppp":case"tap":case"hrv":case"spc":case"nre":case"wpc":case"mas":case"inu":case"ztr":case"jcn":case"osr":case"mmy":case"yrh":c="https://image.mgstage.com/images/prestige/".concat(n,"/").concat(r,"/pb_e_").concat(p,".jpg"),s="https://www.mgstage.com/product/product_detail/".concat(l,"/");break;case"dtt":case"kbi":c="https://image.mgstage.com/images/kanbi/336".concat(n,"/").concat(r,"/pb_e_336").concat(p,".jpg"),s="https://www.mgstage.com/product/product_detail/336".concat(l);break;case"rix":case"tbl":c="https://image.mgstage.com/images/magictabloid/099".concat(n,"/").concat(r,"/pb_e_099").concat(p,".jpg"),s="https://www.mgstage.com/product/product_detail/099".concat(l);break;case"onez":c="https://image.mgstage.com/images/onemore/013".concat(n,"/").concat(r,"/pb_e_013").concat(p,".jpg"),s="https://www.mgstage.com/product/product_detail/013".concat(l);break;case"docp":case"cdc":case"fch":c="https://image.mgstage.com/images/doc/".concat(n,"/").concat(r,"/pb_e_").concat(p,".jpg"),s="https://www.mgstage.com/product/product_detail/".concat(l,"/");break;case"sksk":c="https://image.mgstage.com/images/sukesuke/368".concat(n,"/").concat(r,"/pb_e_368").concat(p,".jpg"),s="https://www.mgstage.com/product/product_detail/368".concat(l);break;case"gne":c="https://image.mgstage.com/images/gallop/236".concat(n,"/").concat(r,"/pb_e_236").concat(p,".jpg"),s="https://www.mgstage.com/product/product_detail/236".concat(l);break;case"otim":c="https://image.mgstage.com/images/onetime/393".concat(n,"/").concat(r,"/pb_e_393").concat(p,".jpg"),s="https://www.mgstage.com/product/product_detail/393".concat(l);break;case"pppd":case"ppbd":c="https://www.oppai-av.com/contents/works/".concat(m,"/").concat(m,"-pl.jpg"),s="https://www.oppai-av.com/works/detail/".concat(m,"/");break;case"wanz":case"core":case"bmw":c="https://www.wanz-factory.com/contents/works/".concat(m,"/").concat(m,"-pl.jpg"),s="https://www.wanz-factory.com/works/detail/".concat(m,"/");break;case"mdyd":case"meyd":c="https://www.tameikegoro.jp/contents/works/".concat(m,"/").concat(m,"-pl.jpg"),s="https://www.tameikegoro.jp/works/detail/".concat(m,"/");break;case"sspd":case"rbd":case"atid":case"shkd":case"adn":case"jbd":c="https://www.attackers.net/contents/works/".concat(m,"/").concat(m,"-pl.jpg"),s="https://www.attackers.net/works/detail/".concat(m,"/");break;case"ebod":case"eyan":case"mkck":c="https://www.av-e-body.com/contents/works/".concat(m,"/").concat(m,"-pl.jpg"),s="https://www.av-e-body.com/works/detail/".concat(m,"/");break;case"pred":case"prtd":case"pbd":case"pgd":case"pid":case"pjd":case"pxd":case"ptv":c="https://www.premium-beauty.com/contents/works/".concat(m,"/").concat(m,"-pl.jpg"),s="https://www.premium-beauty.com/works/detail/".concat(m,"/");break;case"blk":case"kisd":case"set":c="https://www.kirakira-av.com/contents/works/".concat(m,"/").concat(m,"-pl.jpg"),s="https://www.kirakira-av.com/works/detail/".concat(m,"/");break;case"tek":c="https://www.mutekimuteki.com/contents/works/".concat(m,"/").concat(m,"-pl.jpg"),s="https://www.mutekimuteki.com/works/detail/".concat(m,"/");break;case"bf":c="https://www.befreebe.com/contents/works/".concat(m,"/").concat(m,"-pl.jpg"),s="https://www.befreebe.com/works/detail/".concat(m,"/");break;case"cjod":case"bist":case"beb":case"bib":case"bwb":c="https://www.bi-av.com/contents/works/".concat(m,"/").concat(m,"-pl.jpg"),s="https://www.bi-av.com/works/detail/".concat(m,"/");break;case"jul":case"juy":case"jusd":case"oba":case"ure":c="https://www.madonna-av.com/contents/works/".concat(m,"/").concat(m,"-pl.jpg"),s="https://www.madonna-av.com/works/detail/".concat(m,"/");break;case"jufd":case"jufe":case"juny":c="https://www.fitch-av.com/contents/works/".concat(m,"/").concat(m,"-pl.jpg"),s="https://www.fitch-av.com/works/detail/".concat(m,"/");break;case"mmnd":c="https://www.miman.jp/contents/works/".concat(m,"/").concat(m,"-pl.jpg"),s="https://www.miman.jp/works/detail/".concat(m,"/");break;case"mudr":case"mukd":case"mucd":c="https://www.muku.tv/contents/works/".concat(m,"/").concat(m,"-pl.jpg"),s="https://www.muku.tv/works/detail/".concat(m,"/");break;case"dasd":c="https://www.dasdas.jp/contents/works/".concat(m,"/").concat(m,"-pl.jpg"),s="https://www.dasdas.jp/works/detail/".concat(m,"/");break;case"rki":c="https://www.rookie-av.jp/contents/works/".concat(m,"/").concat(m,"-pl.jpg"),s="https://www.rookie-av.jp/works/detail/".concat(m,"/");break;case"hnd":case"hndb":case"hnds":c="https://www.honnaka.jp/contents/works/".concat(m,"/").concat(m,"-pl.jpg"),s="https://www.honnaka.jp/works/detail/".concat(m,"/")}return"http://www.dmm.co.jp/",{previewURL:a,bonusURL:t,coverURL:c,makerURL:s,shopURL:"http://www.dmm.co.jp/",torrentURL:"https://www.torrentkitty.tv/search/".concat(e),busURL:"https://www.javbus.com/".concat(e)}}),L=function(){var e=Object(m.f)().flightId,a=C(e),t=Object(c.useState)(!0),o=Object(i.a)(t,2),n=o[0],r=o[1],l=function(e){var a=e.target;a.offsetWidth<a.offsetHeight&&r(!1)},w=function(e){r(!1)};return s.a.createElement(p.Container,null,s.a.createElement(p.Row,{gutterWidth:18},s.a.createElement(p.Col,{sm:4},n?s.a.createElement(f,{flightId:e,urls:a,handleCoverLoad:l,handleCoverError:w}):s.a.createElement(f.ErrorCard,{flightId:e})),s.a.createElement(p.Col,{sm:8},s.a.createElement(y,{urls:a}))))},N=(t(54),function(){return s.a.createElement("footer",null,s.a.createElement(p.Container,null,s.a.createElement(p.Row,null,s.a.createElement(p.Col,{sm:12},s.a.createElement("div",{className:"Footer-title code"},"\xa9 2019 Crafted by Vulopus")))))}),U=(t(55),t(56),function(){return s.a.createElement("h2",{class:"App-title code"},"Welcome to Flight")}),R=function(){return s.a.createElement("h2",{class:"App-title code"},"About")},O=function(){return s.a.createElement(r.a,null,s.a.createElement("div",{className:"App"},s.a.createElement(l,null),s.a.createElement("div",{className:"App-content"},s.a.createElement(m.c,null,s.a.createElement(m.a,{path:"/flights/:flightId"},s.a.createElement(L,null)),s.a.createElement(m.a,{path:"/about"},s.a.createElement(R,null)),s.a.createElement(m.a,{path:"/"},s.a.createElement(U,null)))),s.a.createElement(N,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(s.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.40500beb.chunk.js.map