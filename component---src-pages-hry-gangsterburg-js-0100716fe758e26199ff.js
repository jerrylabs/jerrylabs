(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+U7J":function(e){e.exports=JSON.parse('[{"title":"Kraď to auto!","codeName":"kta","players":"2‑6","time":"20‑40 minut","age":"od 15 let","publishYear":"2021","endorsement":"Kraď auta, ujížděj policajtům, bourej a střílej do soupeřů abys splnil kšefty pro mafiánské bosse a nahrabal si pořádný balík peněz!","description":"Akční karetní hra mapující život \\"obchodníka\\" s automobily ve městě Gangsterburg. Plň kšefty od rozvozu pizzy až po přepadení banky a bacha na policajty!","tags":["kompetetivní","akční","gangsterka","mafie"],"images":["cover.png","game.jpg","cards.jpg","figures.jpg"],"status":"new"},{"title":"Cyborg Mutant Zombie Circus","codeName":"circus","players":"2‑6","time":"30‑60 minut","age":"od 15 let","publishYear":"2020","endorsement":"Nejslavnější meziplanetární reality show budoucnosti! Získejte přízeň fanoušků po celé Galaxii překonáváním nástrah v bláznivém, ale smrtonosném labyrintu.","description":"Karetní kompetetivní sci-fi dystopický RPG dungeon survival - reality show simulátor plný absurdního humoru. Váš cíl je se jako vyřazený robot či nepovedený mutant stát plnoprávným člověkem.","tags":["kompetetivní","sci-fi","rpg","survival","dystopická","humor"],"images":["circus001.jpg","circus002.jpg","circus003.jpg","circus004.jpg","circus005.jpg","circus006.jpg","circus007.jpg","circus008.jpg"],"extLinks":{"bgg":"https://boardgamegeek.com/boardgame/332152/cyborg-mutant-zombie-circus"}},{"title":"Gangsterburg","codeName":"gangsterburg","players":"2‑5","time":"90‑120 minut","age":"od 18 let","publishYear":"2013","endorsement":"Ovládni jako hlava mafiánské rodiny hospody, kasína, hampejzy a nakonec celé zkorumpované město Gangsterburg - semeniště kriminálníků a podvratných živlů.","description":"Desková budovatelská „obíhačka“, ve které hráči nakupují podniky šedé ekonomiky. Jejich prostřednictvím pak naplňují potřeby význačných veřejných činitelů za účelem ovládnutí města.","tags":["kompetitivní","budovatelská","gangsterka","mafie"],"extLinks":{"bgg":"https://boardgamegeek.com/boardgame/332154/gangsterburg"}},{"title":"Super Trooper","codeName":"supertrooper","players":"2‑6","time":"20‑60 minut","age":"od 13 let","publishYear":"2011","endorsement":"Jako jeden z několika svobodných warlordů ubraň svou zemi před nájezdníky a megakorporacemi. Kopírovatelný remake legendární karetní hry Doomtrooper.","description":"Kopírovatelná alternativa sběratelské karetní hry Doomtrooper. Poměřte sílu s armádami ostatních hráčů! K dispozici máme tři páry předchystaných balíčků pro duel.","tags":["kompetetivní","sci-fi","bitevní","strategická","deck building"],"extLinks":{"bgg":"https://boardgamegeek.com/boardgame/144893/super-trooper","zatrolene":"https://www.zatrolene-hry.cz/spolecenska-hra/super-trooper-3617/"}}]')},"1rhv":function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),l=t("iJGD"),o=t.n(l);a.a=function(e){var a=e.game,t=Object(n.useState)({toggler:!1,slide:1}),l=t[0],s=t[1];return r.a.createElement("div",{className:"gameInfo game__info"},r.a.createElement("div",{className:"gameInfo__fields"},r.a.createElement("div",{className:"gameInfo__field"},r.a.createElement("div",{className:"gameInfo__value"},r.a.createElement("span",{role:"img","aria-labelledby":"lblPls"},"👪")," ",a.players),r.a.createElement("div",{className:"gameInfo__label",id:"lblPls"},"Počet hráčů")),r.a.createElement("div",{className:"gameInfo__field"},r.a.createElement("div",{className:"gameInfo__value"},r.a.createElement("span",{role:"img","aria-labelledby":"lblTime"},"⏰")," ",a.time),r.a.createElement("div",{className:"gameInfo__label",id:"lblTime"},"Délka hry")),r.a.createElement("div",{className:"gameInfo__field"},r.a.createElement("div",{className:"gameInfo__value"},r.a.createElement("span",{role:"img","aria-labelledby":"lblAge"},"👶")," ",a.age),r.a.createElement("div",{className:"gameInfo__label",id:"lblAge"},"Věk"))),a.tags&&r.a.createElement("div",{className:"gameInfo__tags"},a.tags.map((function(e,a){return r.a.createElement("span",{className:"gameInfo__tag",key:a},e)}))),a.images&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Galerie"),r.a.createElement("div",{className:"gameInfo__gallery"},r.a.createElement(o.a,{toggler:l.toggler,sources:a.images.map((function(e){return"/images/games/"+a.codeName+"/"+e})),slide:l.slide}),a.images.map((function(e,t){return r.a.createElement("button",{key:t,type:"button",className:"gameInfo__preview",style:{backgroundImage:"url(/images/games/"+a.codeName+"/"+e+")"},onClick:function(){return s({toggler:!l.toggler,slide:t+1})}})})))),a.extLinks&&r.a.createElement("div",{className:"gameInfo__extLinks"},a.extLinks.bgg&&r.a.createElement("a",{href:a.extLinks.bgg,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{className:"bggLogo",src:"/images/bgg.svg",alt:"Profil hry na BoardGameGeek.com"})),a.extLinks.zatrolene&&r.a.createElement("a",{href:a.extLinks.zatrolene,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{className:"zhLogo",src:"/images/zatrolene-hry.png",alt:"Profil hry na ZatroleneHry.cz"}))))}},"9aOE":function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),l=t("Wbzz"),o=t("Bl7J"),s=t("ocAx"),i=t("1rhv"),m=t("jSZ2");a.default=function(){var e=t("+U7J").find((function(e){return"gangsterburg"===e.codeName}));return r.a.createElement(o.a,{className:"game"},r.a.createElement(s.a,{title:e.title,className:"home zoomy",image:"gangsterburg"}),r.a.createElement("div",{className:"container game__panel"},r.a.createElement("div",{className:"game__download"},r.a.createElement("p",{className:"big"},"Rodinná desková hra volně na motivy společenské a politické situace. Volně ke stažení a vytištění na základě ",r.a.createElement(l.a,{to:"/licence/"},"licence Creative Commons"),". ZIP archiv (8 MB) obsahuje karty, hrací desku, pravidla a návod k vytištění. Ke hře je třeba kostka a žetonky."),r.a.createElement("div",{className:"game__download-wrap"},r.a.createElement("a",{href:"/games/gangsterburg.zip",className:"button button--download"},"Stáhnout hru")),r.a.createElement(m.a,null)),r.a.createElement(i.a,{game:e})),r.a.createElement("section",null,r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Více o hře"),r.a.createElement("p",null,"Město Gangsterburg bylo vždy sídlištěm kriminálníků a podvratných živlů. Nově zvolená městská rada si však umí s hospodářskou krizí poradit! Všeobecná amnestie následovaná privatizací veškerých městských podniků je výzvou pro každého mafiána nažrat se kořisti."),r.a.createElement("p",null,"Jako hlava mafiánské rodiny máš za úkol získat převahu nad ostatními a tak ovládnout celý Gangsterburg!"),r.a.createElement("p",null,"Nakupujte podniky degustace (hospody), finančního poradentsví (kasína), veřejných služeb (hampejzy) a zážitkových center (ilegální drogy) a korumpujte policisty, soudce i politiky."),r.a.createElement("h2",null,"Poděkování"),r.a.createElement("p",null,"Děkujeme všem, kteří se podíleli na testování a vývoji deskové hry Gangsterburg."))))}},jSZ2:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),l=function(){return r.a.createElement("form",{action:"https://www.paypal.com/cgi-bin/webscr",method:"post",target:"_top"},r.a.createElement("input",{type:"hidden",name:"cmd",value:"_s-xclick"}),r.a.createElement("input",{type:"hidden",name:"hosted_button_id",value:"RJXN94FPWP28S"}),r.a.createElement("input",{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif",border:"0",name:"submit",title:"PayPal - The safer, easier way to pay online!",alt:"Donate with PayPal button"}),r.a.createElement("img",{alt:"",border:"0",src:"https://www.paypal.com/en_CZ/i/scr/pixel.gif",width:"1",height:"1"}))},o=function(){return r.a.createElement("div",{className:"donate"},r.a.createElement(l,null))};a.a=function(){var e=Object(n.useState)(!1),a=e[0];e[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"center"},"Podpořte JerryLabs!"),r.a.createElement(o,null),r.a.createElement("p",{className:"center"},"Nebo ",r.a.createElement("span",{role:"img","aria-label":"darovat"},"🎁")," platbou na účet 1126400055/3030",r.a.createElement("br",null)),!a&&r.a.createElement("img",{src:"/images/ad.jpg",alt:"Zde může být vaše reklama",style:{maxWidth:"100%",margin:"1rem 0 2rem"}}))}}}]);
//# sourceMappingURL=component---src-pages-hry-gangsterburg-js-0100716fe758e26199ff.js.map