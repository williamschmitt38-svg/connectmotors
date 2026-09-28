const WA="5554992161879";
const WA_ICON='<svg viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>';
const vehicles=[
{code:"4968068",brand:"Toyota",model:"Yaris Cross",version:"XRX 1.5 5P AUT",price:166900,year:2026,km:6300,fuel:"Flex",gear:"Automático",state:"Semi-novo",tag:"Super Novo",super:true,body:"SUV",img:"https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80"},
{code:"8418226",brand:"Jeep",model:"Compass",version:"LONGITUDE TD350 DIESEL AUT",price:139900,year:2023,km:44000,fuel:"Diesel",gear:"Automático",state:"Semi-novo",tag:"",super:false,body:"SUV",img:"https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80"},
{code:"9064581",brand:"BMW",model:"X6",version:"XDRIVE 35I 306CV AUT",price:105900,year:2011,km:111700,fuel:"Gasolina",gear:"Automático",state:"Usado",tag:"",super:false,body:"SUV",img:"https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80"},
{code:"1598766",brand:"Audi",model:"A3 Sedan",version:"PRESTIGE PLUS 1.4 TFSI AUT",price:119900,year:2020,km:54000,fuel:"Gasolina",gear:"Automático",state:"Usado",tag:"",super:false,body:"Sedan",img:"https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80"},
{code:"4644490",brand:"Volkswagen",model:"T-Cross",version:"HIGHLINE 1.4 TSI AUT",price:114900,year:2022,km:43700,fuel:"Flex",gear:"Automático",state:"Usado",tag:"",super:false,body:"SUV",img:"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80"},
{code:"4958539",brand:"Ram",model:"Rampage",version:"LARAMIE 2.0 TB 4X4 AUT",price:199900,year:2025,km:11800,fuel:"Gasolina",gear:"Automático",state:"Semi-novo",tag:"Super Novo",super:true,body:"Pickup",img:"https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80"},
{code:"1087253",brand:"Citroen",model:"DS3",version:"SPORT CHIC 1.6 TB 3P",price:73900,year:2015,km:107800,fuel:"Gasolina",gear:"Manual",state:"Usado",tag:"Raridade",super:false,body:"Hatchback",img:"https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80"},
{code:"9629477",brand:"Chevrolet",model:"Equinox",version:"PREMIER 2.0 AWD AUT",price:110900,year:2018,km:127200,fuel:"Gasolina",gear:"Automático",state:"Usado",tag:"",super:false,body:"SUV",img:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80"},
{code:"6136837",brand:"Ford",model:"Bronco Sport",version:"WILDTRAK 2.0 TB AWD AUT",price:164900,year:2023,km:54600,fuel:"Gasolina",gear:"Automático",state:"Usado",tag:"",super:false,body:"SUV",img:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80"},
{code:"7475799",brand:"Jeep",model:"Wrangler",version:"SPORT 3.6 V6 2P AUT",price:209900,year:2015,km:22300,fuel:"Gasolina",gear:"Automático",state:"Usado",tag:"Raridade",super:true,body:"SUV",img:"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80"},
{code:"4826275",brand:"Toyota",model:"Hilux SW4",version:"SRV D4D 4X4 AUT",price:109900,year:2010,km:221200,fuel:"Diesel",gear:"Automático",state:"Usado",tag:"",super:false,body:"SUV",img:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80"},
{code:"4585595",brand:"Chevrolet",model:"Tracker",version:"PREMIER 1.2 TURBO AUT",price:109900,year:2023,km:66100,fuel:"Flex",gear:"Automático",state:"Semi-novo",tag:"",super:false,body:"SUV",img:"https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80"},
{code:"5476087",brand:"Volkswagen",model:"Saveiro",version:"ROBUST 1.6 FLEX",price:62900,year:2023,km:25000,fuel:"Flex",gear:"Manual",state:"Semi-novo",tag:"",super:false,body:"Pickup",img:"https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80"},
{code:"9857089",brand:"Ford",model:"Bronco Sport",version:"WILDTRAK 2.0 TB AWD AUT",price:189900,year:2024,km:27932,fuel:"Gasolina",gear:"Automático",state:"Semi-novo",tag:"",super:false,body:"SUV",img:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80"},
{code:"1807198",brand:"Chevrolet",model:"Camaro",version:"SS 6.2 V8 AUT",price:229900,year:2014,km:67000,fuel:"Gasolina",gear:"Automático",state:"Usado",tag:"Raridade",super:true,body:"Sedan",img:"https://images.unsplash.com/photo-1494976388531-d105aaa8c08b?auto=format&fit=crop&w=800&q=80"},
{code:"7520925",brand:"BMW",model:"320i",version:"MODERN SPORT TB FLEX 4P",price:177900,year:2020,km:56000,fuel:"Flex",gear:"Automático",state:"Usado",tag:"",super:false,body:"Sedan",img:"https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80"}
];
const brands=["Fiat","Hyundai","Nissan","Peugeot","Honda","Citroen","Renault","Volkswagen","Ford","Chevrolet","Jeep","Toyota","Mitsubishi","BMW","Kia","Mercedes-Benz","BYD","Chrysler"];
const brandDomains={Fiat:"fiat.com",Hyundai:"hyundai.com",Nissan:"nissan-global.com",Peugeot:"peugeot.com",Honda:"honda.com",Citroen:"citroen.com",Renault:"renault.com",Volkswagen:"vw.com",Ford:"ford.com",Chevrolet:"chevrolet.com",Jeep:"jeep.com",Toyota:"toyota.com",Ram:"ramtrucks.com",Ssangyong:"ssangyong.com",Audi:"audi.com",Kawasaki:"kawasaki.com",Ducati:"ducati.com",Jaecoo:"jaecoo.com",Omoda:"omoda.com",Chery:"chery.com",Land Rover:"landrover.com",Troller:"troller.com.br",Suzuki:"suzuki.com",Dodge:"dodge.com",Kia:"kia.com",Mercedes:"mercedes-benz.com",BYD:"byd.com",Chrysler:"chrysler.com",Harley:"harley-davidson.com",Mitsubishi:"mitsubishi-motors.com",BMW:"bmw.com",Kia:"kia.com",Mercedes:"mercedes-benz.com",BYD:"byd.com",Chrysler:"chrysler.com",Yamaha:"yamaha.com",Harley:"harley-davidson.com"};
const logoURL=b=>`https://logo.clearbit.com/${brandDomains[b]}?size=128`;
let favs=new Set(JSON.parse(localStorage.getItem("connect_favs")||"[]"));
let estadoFiltro="todos";

const $=id=>document.getElementById(id);
const fmt=v=>v.toLocaleString("pt-BR",{style:"currency",currency:"BRL",maximumFractionDigits:0});

function toast(m){const t=$("toast");t.textContent=m;t.style.display="block";clearTimeout(t._x);t._x=setTimeout(()=>t.style.display="none",2600)}

function renderBrands(){
  $("brandsRow").innerHTML=brands.map(b=>`<div class="brand-chip" data-b="${b}" role="button" tabindex="0" title="Filtrar ${b}"><img loading="lazy" src="${logoURL(b)}" alt="Logo ${b}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><span class="fallback">${b[0]}</span>${b}</div>`).join("");
  const filterBy=b=>{$("fMarca").value=b;document.querySelectorAll(".brand-chip").forEach(x=>x.classList.toggle("on",x.dataset.b===b));applyFilters();document.getElementById("estoque").scrollIntoView({behavior:"smooth"});toast("Filtrando: "+b)};
  document.querySelectorAll(".brand-chip").forEach(c=>{c.onclick=()=>filterBy(c.dataset.b);c.onkeydown=e=>{if(e.key==="Enter")filterBy(c.dataset.b)}});
  $("dropMarcas").innerHTML=brands.map(b=>`<a href="#estoque" data-b="${b}">${b}</a>`).join("");
  document.querySelectorAll("#dropMarcas a").forEach(a=>a.onclick=e=>{e.preventDefault();$("fMarca").value=a.dataset.b;applyFilters();document.getElementById("estoque").scrollIntoView({behavior:"smooth"})});
  const sel=$("fMarca");sel.innerHTML='<option value="todas">Mostrar Todas</option>';brands.forEach(b=>{const o=document.createElement("option");o.textContent=b;sel.appendChild(o)});
}

function card(v){
  const isFav=favs.has(v.code);
  const priceTxt=v.price>0?fmt(v.price):'R$ 0,00 <small>Sob Consulta</small>';
  const etq=v.super?'<span class="badge-etq">Super Oferta</span>':(v.tag?`<span class="badge-etq">${v.tag}</span>`:'');
  return `<div class="card" data-card="${v.code}">
   <div class="card-img" data-det-img="${v.code}"><img loading="lazy" src="${v.img}" alt="${v.brand} ${v.model}">
   <span class="badge">${v.state}</span>${etq}
   <button class="fav ${isFav?"on":""}" data-fav="${v.code}" aria-label="Favoritar">${isFav?"❤":"♡"}</button></div>
   <div class="card-body"><span class="code"><b>${v.state}</b> &nbsp; Código: ${v.code}</span>
   <h3>${v.brand} <span class="mdl">${v.model}</span><br><span class="ver">${v.version}</span></h3>
   <div class="price">${priceTxt}</div>
   <div class="meta"><span>📅 ${v.year}</span><span>🛣️ ${v.km.toLocaleString("pt-BR")} Km</span><span>⛽ ${v.fuel}</span></div>
   <div class="card-foot"><button class="btn-det" data-det="${v.code}" type="button">Ver Detalhes</button>
   <a class="btn-wa pulse-wa" target="_blank" href="https://wa.me/${WA}?text=${encodeURIComponent("Olá! Quero esse "+v.brand+" "+v.model+" "+v.version+" ("+v.year+") código "+v.code+" de "+(v.price>0?fmt(v.price):"a consultar")+". Ainda está disponível?")}">${WA_ICON} Chamar no WhatsApp</a></div>
   </div></div>`;
}

function getFiltros(){
  const ests=[...document.querySelectorAll(".fEst:checked")].map(x=>x.value);
  const etqs=[...document.querySelectorAll(".fEtiq:checked")].map(x=>x.value);
  return {
    cod:$("fCodigo").value.trim(),
    busca:(($("fBuscaTop")&&$("fBuscaTop").value)||$("fBusca").value||"").toLowerCase(),
    marca:$("fMarca").value, modelo:$("fModelo").value, versao:$("fVersao").value,
    cambio:$("fCambio").value, comb:$("fComb").value, carro:$("fCarro").value,
    maxV:+$("fValor").value, maxKm:+$("fKm").value,
    super:$("fSuper").checked, soFav:$("fFav").checked,
    ests, etqs, ordem:$("fOrdem").value
  };
}
function applyFilters(){
  const f=getFiltros();
  if($("valLabel"))$("valLabel").textContent="R$ 0 – "+f.maxV.toLocaleString("pt-BR");
  if($("kmLabel"))$("kmLabel").textContent="0Km – "+f.maxKm.toLocaleString("pt-BR")+"Km";
  let list=vehicles.filter(v=>{
    if(f.cod&&!v.code.includes(f.cod))return false;
    if(f.marca!=="todas"&&v.brand!==f.marca)return false;
    if(f.modelo!=="todos"&&v.model!==f.modelo)return false;
    if(f.versao!=="todas"&&!v.version.includes(f.versao))return false;
    if(f.ests.length&&!f.ests.includes(v.state))return false;
    if(f.cambio!=="todos"&&v.gear!==f.cambio)return false;
    if(f.comb!=="todos"&&!v.fuel.includes(f.comb))return false;
    if(f.carro!=="todas"&&v.body!==f.carro)return false;
    if(v.price>f.maxV)return false;
    if(v.km>f.maxKm)return false;
    if(f.super&&!v.super)return false;
    if(f.etqs.length&&!f.etqs.includes(v.tag))return false;
    if(f.soFav&&!favs.has(v.code))return false;
    if(f.busca&&!(v.brand+" "+v.model+" "+v.version+" "+v.code).toLowerCase().includes(f.busca))return false;
    return true;
  });
  if(f.ordem==="menor")list.sort((a,b)=>a.price-b.price);
  if(f.ordem==="maior")list.sort((a,b)=>b.price-a.price);
  if(f.ordem==="menorkm")list.sort((a,b)=>a.km-b.km);
  if(f.ordem==="anoNovo")list.sort((a,b)=>b.year-a.year);
  if(f.ordem==="recente")list.sort((a,b)=>b.year-a.year);
  $("vehicleGrid").innerHTML=list.length?list.map(card).join(""):`<p style="grid-column:1/-1;background:#fff;padding:20px;border-radius:8px">Nenhum veículo encontrado. <button class="link" id="btnEmpty">Limpar filtros</button></p>`;
  const be=$("btnEmpty");if(be)be.onclick=()=>clearAll();
  $("countTxt").textContent=`Exibindo: ${list.length} de ${vehicles.length} Veículos disponíveis`;
  $("destaqueGrid").innerHTML=vehicles.filter(x=>x.super).concat(vehicles.slice(0,3)).slice(0,3).map(card).join("");
  bindCards();
  if($("favCount"))$("favCount").textContent=favs.size;
  // hover touch: passar dedo ativa cor preta
  document.querySelectorAll(".card").forEach(c=>{
    c.addEventListener("touchstart",()=>{document.querySelectorAll(".card.touch-hover").forEach(x=>x!==c&&x.classList.remove("touch-hover"));c.classList.add("touch-hover")},{passive:true});
    c.addEventListener("mouseenter",()=>c.classList.add("touch-hover"));
    c.addEventListener("mouseleave",()=>c.classList.remove("touch-hover"));
  });
}
function bindCards(){
  document.querySelectorAll("[data-fav]").forEach(b=>b.onclick=e=>{e.stopPropagation();const c=b.dataset.fav;
    favs.has(c)?favs.delete(c):favs.add(c);localStorage.setItem("connect_favs",JSON.stringify([...favs]));applyFilters();toast(favs.has(c)?"Adicionado aos favoritos ❤":"Removido dos favoritos")});
  document.querySelectorAll("[data-det]").forEach(b=>b.onclick=()=>openDet(b.dataset.det));
  document.querySelectorAll("[data-det-img]").forEach(d=>d.onclick=e=>{if(e.target.closest("[data-fav]"))return;openDet(d.dataset.detImg)});
}
function openDet(code){
  const v=vehicles.find(x=>x.code===code);if(!v)return;
  $("detBody").innerHTML=`<div class="det-grid"><div><img src="${v.img}"><div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap"><span class="badge" style="position:static">${v.state}</span>${v.tag?`<span class="badge oferta" style="position:static">${v.tag}</span>`:""}</div></div>
  <div><span class="code">Código ${v.code}</span><h2>${v.brand} ${v.model}</h2><p>${v.version}</p>
  <div class="price" style="font-size:28px;margin:8px 0">${fmt(v.price)}</div>
  <p>📅 ${v.year} • 🛣️ ${v.km.toLocaleString("pt-BR")} km<br>⛽ ${v.fuel} • ⚙️ ${v.gear}<br>📍 ConnectMotors – Rua Pernambuco, 200, 13205, Bento Gonçalves</p>
  <div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap"><a class="btn-red" target="_blank" href="https://wa.me/${WA}?text=${encodeURIComponent("Olá! Tenho interesse no "+v.brand+" "+v.model+" "+v.version+" código "+v.code+". Ainda está disponível?")}">Tenho interesse</a>
  <button class="btn-outline" onclick="document.getElementById('ovDet').classList.remove('open')">Fechar</button></div></div></div>`;
  $("ovDet").classList.add("open");document.body.style.overflow="hidden";
}
// eventos filtros - formato print
function syncModeloOptions(){
  const marca=$("fMarca").value;
  const modelos=[...new Set(vehicles.filter(v=>marca==="todas"||v.brand===marca).map(v=>v.model))];
  $("fModelo").innerHTML='<option value="todos">Mostrar Todos</option>'+modelos.map(m=>`<option>${m}</option>`).join("");
}
["fCodigo","fMarca","fModelo","fVersao","fValor","fKm","fCambio","fComb","fCarro","fOrdem","fFav","fSuper"].forEach(id=>{const el=$(id);if(el)el.addEventListener("input",()=>{if(id==="fMarca")syncModeloOptions();applyFilters()})});
document.querySelectorAll(".fEst,.fEtiq").forEach(x=>x.addEventListener("change",applyFilters));
const fTop=$("fBuscaTop");if(fTop){fTop.addEventListener("input",()=>{$("fBusca").value=fTop.value;applyFilters()});fTop.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();applyFilters()}})}
const btnTop=$("btnBuscarTop");if(btnTop)btnTop.onclick=()=>{$("fBusca").value=fTop.value;applyFilters();document.getElementById("vehicleGrid").scrollIntoView({behavior:"smooth"})};
const btnCod=$("btnCod");if(btnCod)btnCod.onclick=()=>{applyFilters();toast("Buscando código "+$("fCodigo").value)};
const clearAll=()=>{$("fCodigo").value="";if(fTop)fTop.value="";$("fBusca").value="";$("fMarca").value="todas";syncModeloOptions();$("fModelo").value="todos";$("fVersao").value="todas";$("fValor").value=129000;$("fKm").value=189000;$("fCambio").value="todos";$("fComb").value="todos";$("fCarro").value="todas";$("fFav").checked=false;$("fSuper").checked=false;document.querySelectorAll(".fEst").forEach(x=>x.checked=(x.value!=="Zero Km"));document.querySelectorAll(".fEtiq").forEach(x=>x.checked=false);document.querySelectorAll(".brand-chip").forEach(x=>x.classList.remove("on"));applyFilters();toast("Filtros limpos")};
$("clearFilters").onclick=clearAll;
const btnTopo=$("btnLimparTopo");if(btnTopo)btnTopo.onclick=clearAll;
const btnBuscar=$("btnBuscar");if(btnBuscar)btnBuscar.onclick=()=>{applyFilters();document.getElementById("vehicleGrid").scrollIntoView({behavior:"smooth",block:"start"});toast("Busca aplicada")};
const verTodas=$("verTodasMarcas");if(verTodas)verTodas.onclick=e=>{e.preventDefault();clearAll();document.getElementById("estoque").scrollIntoView({behavior:"smooth"})};
$("linkFavs").onclick=e=>{e.preventDefault();$("fFav").checked=true;applyFilters();document.getElementById("estoque").scrollIntoView({behavior:"smooth"});toast(favs.size?favs.size+" favorito(s)":"Você ainda não tem favoritos — clique no ♡")};
// menu mobile
$("menuToggle").onclick=()=>$("mobileNav").classList.toggle("open");
document.querySelectorAll("#mobileNav a").forEach(a=>a.addEventListener("click",()=>$("mobileNav").classList.remove("open")));
// modais
const openSim=()=>{$("ovSim").classList.add("open");document.body.style.overflow="hidden"};
["openSimulador","openSimulador2","openSimuladorM","heroSimular"].forEach(id=>{const el=$(id);if(el)el.onclick=e=>{e.preventDefault();const m=$("mobileNav");if(m)m.classList.remove("open");openSim()}});
// scroll suave p/ todos âncoras + dropdown touch
document.querySelectorAll('a[href^="#"]').forEach(a=>{if(a.getAttribute("href").length>1&&!a.id.startsWith("open"))a.addEventListener("click",e=>{const t=document.querySelector(a.getAttribute("href"));if(t){e.preventDefault();t.scrollIntoView({behavior:"smooth"});const m=$("mobileNav");if(m)m.classList.remove("open")}})});
const dropBtn=document.querySelector(".drop-btn");if(dropBtn)dropBtn.addEventListener("click",e=>{if(window.innerWidth<960){e.preventDefault();const l=document.querySelector(".drop-list");l.style.display=l.style.display==="block"?"none":"block"}});
// HERO SLIDER clicável estilo Viggo
let heroIdx=0,heroTimer=null;
function heroShow(i){
  const slides=document.querySelectorAll(".hero-slide");if(!slides.length)return;
  heroIdx=(i+slides.length)%slides.length;
  slides.forEach((s,k)=>s.classList.toggle("active",k===heroIdx));
  const dots=document.querySelectorAll("#heroDots button");dots.forEach((d,k)=>d.classList.toggle("on",k===heroIdx));
}
function heroAuto(){clearInterval(heroTimer);heroTimer=setInterval(()=>heroShow(heroIdx+1),5000)}
(function initHero(){
  const slides=document.querySelectorAll(".hero-slide"),dotsBox=$("heroDots");if(!slides.length||!dotsBox)return;
  dotsBox.innerHTML=[...slides].map((_,i)=>`<button aria-label="Slide ${i+1}" data-d="${i}"></button>`).join("");
  dotsBox.querySelectorAll("button").forEach(d=>d.onclick=()=>{heroShow(+d.dataset.d);heroAuto()});
  $("heroPrev").onclick=()=>{heroShow(heroIdx-1);heroAuto()};
  $("heroNext").onclick=()=>{heroShow(heroIdx+1);heroAuto()};
  const sec=$("heroSlider");sec.addEventListener("mouseenter",()=>clearInterval(heroTimer));sec.addEventListener("mouseleave",heroAuto);
  heroShow(0);heroAuto();
})();
document.querySelectorAll("[data-close]").forEach(b=>b.onclick=()=>{b.closest(".overlay").classList.remove("open");document.body.style.overflow=""});
document.querySelectorAll(".overlay").forEach(o=>o.addEventListener("click",e=>{if(e.target===o){o.classList.remove("open");document.body.style.overflow=""}}));
document.addEventListener("keydown",e=>{if(e.key==="Escape")document.querySelectorAll(".overlay.open").forEach(o=>{o.classList.remove("open");document.body.style.overflow=""})});
// simulador Price com 1,49% a.m.
$("sCalc").onclick=()=>{
  const V=+$("sValor").value||0,E=+$("sEntrada").value||0,N=+$("sN").value||36,fin=V-E,i=0.0149;
  if(fin<=0){$("sRes").textContent="A entrada não pode ser maior que o valor.";return}
  const p=fin*i/(1-Math.pow(1+i,-N));
  $("sRes").innerHTML=`Financiado: <strong>${fmt(fin)}</strong><br>${N}x de <strong>${fmt(p)}</strong> (1,49% a.m. estimado)<br><small>Simulação aproximada. Fale com a loja para condições reais.</small>`;
  $("sWa").href=`https://wa.me/${WA}?text=${encodeURIComponent("Olá! Simulei no site: veículo de "+fmt(V)+", entrada "+fmt(E)+", "+N+"x de "+fmt(p)+". Quero uma proposta!")}`;
};
// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("vis")}),{threshold:.12});
document.querySelectorAll(".reveal,.card").forEach(el=>io.observe(el));
renderBrands();syncModeloOptions();applyFilters();
