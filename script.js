// ============================================================
// Petshop Malucão — catálogo
// Para editar: troque o número do WhatsApp e a lista de produtos abaixo.
// ============================================================

const WHATSAPP = "5500000000000"; // DDI + DDD + número, só dígitos

const CATEGORIAS = [
  { id: "racoes", nome: "Rações", icone: "saco", fundo: "#FFE3D1" },
  { id: "petiscos", nome: "Petiscos", icone: "osso", fundo: "#FDE7E5" },
  { id: "brinquedos", nome: "Brinquedos", icone: "bola", fundo: "#FFF1C9" },
  { id: "higiene", nome: "Higiene", icone: "frasco", fundo: "#E3F1F7" },
  { id: "acessorios", nome: "Acessórios", icone: "coleira", fundo: "#ECE8F6" },
];

const PRODUTOS = [
  { id: 1, cat: "racoes", nome: "Ração Premium Cães Adultos", desc: "Frango e arroz, com ômega 3 para pelos brilhantes e digestão leve.", preco: 189.9, de: 219.9, opcoes: { nome: "Peso", lista: ["3 kg", "10,1 kg", "15 kg"] }, selo: "Mais vendida" },
  { id: 2, cat: "racoes", nome: "Ração Filhotes Raças Pequenas", desc: "Grãos pequenos e DHA para o desenvolvimento do seu filhote.", preco: 79.9, opcoes: { nome: "Peso", lista: ["1 kg", "3 kg"] } },
  { id: 3, cat: "racoes", nome: "Ração Gatos Castrados", desc: "Controle de peso e cuidado urinário, sabor salmão.", preco: 124.9, opcoes: { nome: "Peso", lista: ["1,5 kg", "3 kg", "7,5 kg"] } },
  { id: 4, cat: "racoes", nome: "Sachê Úmido para Gatos", desc: "Pedaços ao molho, sabores carne e peixe. Unidade de 85 g.", preco: 3.9, opcoes: { nome: "Sabor", lista: ["Carne", "Peixe", "Frango"] } },
  { id: 5, cat: "petiscos", nome: "Bifinho Sabor Carne", desc: "Petisco macio para adestramento e agrado do dia a dia. 65 g.", preco: 12.9, selo: "Leve 3, pague 2" },
  { id: 6, cat: "petiscos", nome: "Osso de Couro Natural", desc: "Ajuda na limpeza dos dentes e diverte por horas.", preco: 18.9, opcoes: { nome: "Tamanho", lista: ["P", "M", "G"] } },
  { id: 7, cat: "petiscos", nome: "Petisco Cremoso para Gatos", desc: "Sachê lambível sabor atum, irresistível. Pacote com 4.", preco: 21.9 },
  { id: 8, cat: "brinquedos", nome: "Bolinha de Borracha Resistente", desc: "Quica longe e aguenta mordida forte. Flutua na água.", preco: 24.9, opcoes: { nome: "Cor", lista: ["Vermelha", "Laranja", "Azul"] } },
  { id: 9, cat: "brinquedos", nome: "Varinha com Penas para Gatos", desc: "Para caçar, pular e gastar energia brincando com você.", preco: 19.9 },
  { id: 10, cat: "brinquedos", nome: "Pelúcia Mordedor com Apito", desc: "Macia, com apito interno. A favorita dos filhotes.", preco: 29.9, selo: "Novidade" },
  { id: 11, cat: "higiene", nome: "Shampoo Neutro Pet", desc: "Fórmula suave com aloe vera, para cães e gatos. 500 ml.", preco: 27.9 },
  { id: 12, cat: "higiene", nome: "Tapete Higiênico", desc: "Ultra absorvente com atrativo. Pacote com 30 unidades.", preco: 64.9, opcoes: { nome: "Pacote", lista: ["7 un.", "30 un.", "50 un."] } },
  { id: 13, cat: "higiene", nome: "Areia Sanitária de Grãos Finos", desc: "Controle de odor e fácil de limpar. 4 kg.", preco: 22.9 },
  { id: 14, cat: "acessorios", nome: "Coleira Ajustável com Plaquinha", desc: "Nylon resistente, fecho seguro e plaquinha para o nome.", preco: 34.9, opcoes: { nome: "Tamanho", lista: ["P", "M", "G"] } },
  { id: 15, cat: "acessorios", nome: "Comedouro Duplo Antiderrapante", desc: "Inox com base de borracha, para água e ração.", preco: 49.9 },
  { id: 16, cat: "acessorios", nome: "Caminha Redonda Fofinha", desc: "Bordas altas para o pet se aconchegar. Lavável.", preco: 129.9, opcoes: { nome: "Tamanho", lista: ["P", "M", "G"] } },
];

// Ícones desenhados em SVG (sem imagens externas)
const ICONES = {
  saco: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M16 14h32l4 40a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4z" fill="#D63A2F"/><path d="M16 14l4-6h24l4 6" fill="#B02B22"/><circle cx="32" cy="36" r="10" fill="#fff"/><circle cx="28" cy="32" r="2.4" fill="#2A2420"/><circle cx="36" cy="32" r="2.4" fill="#2A2420"/><circle cx="32" cy="38" r="3" fill="#2A2420"/><circle cx="25" cy="38" r="2" fill="#2A2420"/><circle cx="39" cy="38" r="2" fill="#2A2420"/></svg>',
  osso: '<svg viewBox="0 0 64 64" aria-hidden="true"><g fill="#F2945E"><circle cx="14" cy="22" r="8"/><circle cx="14" cy="42" r="8"/><circle cx="50" cy="22" r="8"/><circle cx="50" cy="42" r="8"/><rect x="14" y="24" width="36" height="16" rx="6"/></g><rect x="20" y="29" width="24" height="6" rx="3" fill="#fff" opacity=".45"/></svg>',
  bola: '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="22" fill="#D63A2F"/><path d="M12 26c10 6 30 6 40 0M12 38c10-6 30-6 40 0" stroke="#FFC94A" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="24" cy="22" r="4" fill="#fff" opacity=".5"/></svg>',
  frasco: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="26" y="6" width="12" height="8" rx="2" fill="#2A2420"/><path d="M22 14h20v6l4 6v28a4 4 0 0 1-4 4H22a4 4 0 0 1-4-4V26l4-6z" fill="#4BA3C7"/><rect x="22" y="30" width="20" height="16" rx="3" fill="#fff"/><path d="M32 33c3 4 4 6 4 7.5a4 4 0 0 1-8 0c0-1.5 1-3.5 4-7.5z" fill="#4BA3C7"/></svg>',
  coleira: '<svg viewBox="0 0 64 64" aria-hidden="true"><ellipse cx="32" cy="26" rx="22" ry="12" fill="none" stroke="#7E63C4" stroke-width="8"/><rect x="26" y="34" width="12" height="6" rx="2" fill="#B5B0A8"/><circle cx="32" cy="48" r="9" fill="#FFC94A"/><path d="M28.5 46.5a1.6 1.6 0 1 1 3.2 0M32.3 46.5a1.6 1.6 0 1 1 3.2 0M28 49c2 3 6 3 8 0" stroke="#2A2420" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>',
};

// ---------- utilidades ----------
const $ = (s, el = document) => el.querySelector(s);
const brl = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const cat = (id) => CATEGORIAS.find((c) => c.id === id);
const linkWhats = (texto) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;
const normaliza = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

document.documentElement.classList.add("js");
$("#ano").textContent = new Date().getFullYear();
document.querySelectorAll("[data-whats]").forEach((a) => (a.href = linkWhats(a.dataset.whats)));

// ---------- categorias e filtros ----------
let filtroAtual = "todos";
let termo = "";

$("#catGrade").innerHTML = CATEGORIAS.map(
  (c) => `<button class="cat-card" data-cat="${c.id}"><span class="cat-icone" style="background:${c.fundo}">${ICONES[c.icone]}</span>${c.nome}</button>`
).join("");

$("#filtros").innerHTML = [{ id: "todos", nome: "Todos" }, ...CATEGORIAS]
  .map((c) => `<button class="filtro" role="tab" data-filtro="${c.id}" aria-selected="${c.id === "todos"}">${c.nome}</button>`)
  .join("");

function escolheFiltro(id) {
  filtroAtual = id;
  document.querySelectorAll(".filtro").forEach((b) => b.setAttribute("aria-selected", b.dataset.filtro === id));
  renderProdutos();
}
$("#filtros").addEventListener("click", (e) => { const b = e.target.closest(".filtro"); if (b) escolheFiltro(b.dataset.filtro); });
$("#catGrade").addEventListener("click", (e) => {
  const b = e.target.closest(".cat-card"); if (!b) return;
  escolheFiltro(b.dataset.cat);
  $("#catalogo").scrollIntoView({ behavior: "smooth" });
});
$("#busca").addEventListener("input", (e) => { termo = normaliza(e.target.value.trim()); renderProdutos(); });

// ---------- lista de produtos ----------
function renderProdutos() {
  const lista = PRODUTOS.filter((p) =>
    (filtroAtual === "todos" || p.cat === filtroAtual) &&
    (!termo || normaliza(p.nome + " " + p.desc).includes(termo))
  );
  $("#produtos").innerHTML = lista.map((p) => {
    const c = cat(p.cat);
    return `<article class="produto">
      <button class="produto-arte" style="background:${c.fundo}" data-ver="${p.id}" aria-label="Ver detalhes de ${p.nome}">
        ${p.selo ? `<span class="etiqueta">${p.selo}</span>` : ""}${ICONES[c.icone]}
      </button>
      <div class="produto-info">
        <h3>${p.nome}</h3>
        <p>${p.desc}</p>
        <div class="produto-rodape">
          <span class="preco">${p.de ? `<s>${brl(p.de)}</s>` : ""}${brl(p.preco)}</span>
          <button class="btn-add" data-add="${p.id}">Adicionar</button>
        </div>
      </div>
    </article>`;
  }).join("");
  $("#semResultado").hidden = lista.length > 0;
}
$("#produtos").addEventListener("click", (e) => {
  const ver = e.target.closest("[data-ver]");
  const add = e.target.closest("[data-add]");
  if (ver) abreModal(+ver.dataset.ver);
  if (add) {
    const p = PRODUTOS.find((x) => x.id === +add.dataset.add);
    if (p.opcoes) abreModal(p.id); else adiciona(p, null, 1);
  }
});
renderProdutos();

// ---------- carrinho ----------
let carrinho = [];
try { carrinho = JSON.parse(localStorage.getItem("malucao-carrinho")) || []; } catch { carrinho = []; }
const salva = () => { try { localStorage.setItem("malucao-carrinho", JSON.stringify(carrinho)); } catch {} };

function adiciona(p, opcao, qtd) {
  const chave = p.id + "|" + (opcao || "");
  const existe = carrinho.find((i) => i.chave === chave);
  if (existe) existe.qtd += qtd;
  else carrinho.push({ chave, id: p.id, opcao, qtd });
  salva(); renderCarrinho(true);
  avisa(`${p.nome} no carrinho 🐾`);
}

function renderCarrinho(pulo) {
  const total = carrinho.reduce((s, i) => s + PRODUTOS.find((p) => p.id === i.id).preco * i.qtd, 0);
  const qtdTotal = carrinho.reduce((s, i) => s + i.qtd, 0);
  const cont = $("#contador");
  cont.textContent = qtdTotal;
  if (pulo) { cont.classList.remove("pulo"); void cont.offsetWidth; cont.classList.add("pulo"); }
  $("#itens").innerHTML = carrinho.map((i) => {
    const p = PRODUTOS.find((x) => x.id === i.id); const c = cat(p.cat);
    return `<li class="item">
      <span class="item-arte" style="background:${c.fundo}">${ICONES[c.icone]}</span>
      <div><div class="item-nome">${p.nome}</div>${i.opcao ? `<div class="item-op">${p.opcoes.nome}: ${i.opcao}</div>` : ""}
        <div class="qtd"><button data-menos="${i.chave}" aria-label="Diminuir">−</button><output>${i.qtd}</output><button data-mais="${i.chave}" aria-label="Aumentar">+</button></div>
      </div>
      <span class="item-preco">${brl(p.preco * i.qtd)}</span>
    </li>`;
  }).join("");
  $("#total").textContent = brl(total);
  $("#carrinhoVazio").hidden = carrinho.length > 0;
  $("#finalizar").disabled = carrinho.length === 0;
}
$("#itens").addEventListener("click", (e) => {
  const m = e.target.closest("[data-mais]"), n = e.target.closest("[data-menos]");
  const chave = (m || n)?.dataset.mais || (m || n)?.dataset.menos;
  if (!chave) return;
  const it = carrinho.find((i) => i.chave === chave);
  it.qtd += m ? 1 : -1;
  if (it.qtd <= 0) carrinho = carrinho.filter((i) => i !== it);
  salva(); renderCarrinho();
});
$("#finalizar").addEventListener("click", () => {
  let total = 0;
  const linhas = carrinho.map((i) => {
    const p = PRODUTOS.find((x) => x.id === i.id); total += p.preco * i.qtd;
    return `• ${i.qtd}x ${p.nome}${i.opcao ? ` (${i.opcao})` : ""}: ${brl(p.preco * i.qtd)}`;
  });
  const msg = `Olá, Petshop Malucão! Quero fazer este pedido:\n\n${linhas.join("\n")}\n\nTotal: ${brl(total)}\n\nNome:\nEntrega ou retirada:`;
  window.open(linkWhats(msg), "_blank", "noopener");
});
renderCarrinho();

// gaveta
const gaveta = $("#gaveta"), sob = $("#sobreposicao");
function abreGaveta() { gaveta.classList.add("aberta"); gaveta.setAttribute("aria-hidden", "false"); sob.hidden = false; $("#fecharCarrinho").focus(); }
function fechaGaveta() { gaveta.classList.remove("aberta"); gaveta.setAttribute("aria-hidden", "true"); sob.hidden = true; }
$("#abrirCarrinho").addEventListener("click", abreGaveta);
$("#fecharCarrinho").addEventListener("click", fechaGaveta);
sob.addEventListener("click", fechaGaveta);

// ---------- modal do produto ----------
const modal = $("#modal");
let produtoModal = null, qtdModal = 1;
function abreModal(id) {
  const p = PRODUTOS.find((x) => x.id === id), c = cat(p.cat);
  produtoModal = p; qtdModal = 1;
  $("#modalArte").style.background = c.fundo;
  $("#modalArte").innerHTML = ICONES[c.icone];
  $("#modalCat").textContent = c.nome;
  $("#modalNome").textContent = p.nome;
  $("#modalDesc").textContent = p.desc;
  $("#modalOpcoes").innerHTML = p.opcoes
    ? `<fieldset class="opcoes"><legend>${p.opcoes.nome}</legend>${p.opcoes.lista.map((o, k) => `<label><input type="radio" name="opcao" value="${o}" ${k === 0 ? "checked" : ""}><span>${o}</span></label>`).join("")}</fieldset>`
    : "";
  atualizaModal();
  modal.hidden = false;
  $("#fecharModal").focus();
}
function atualizaModal() { $("#qtd").textContent = qtdModal; $("#modalPreco").textContent = brl(produtoModal.preco * qtdModal); }
const fechaModal = () => { modal.hidden = true; };
$("#mais").addEventListener("click", () => { qtdModal++; atualizaModal(); });
$("#menos").addEventListener("click", () => { if (qtdModal > 1) qtdModal--; atualizaModal(); });
$("#fecharModal").addEventListener("click", fechaModal);
modal.addEventListener("click", (e) => { if (e.target === modal) fechaModal(); });
$("#adicionarModal").addEventListener("click", () => {
  const op = modal.querySelector('input[name="opcao"]:checked');
  adiciona(produtoModal, op ? op.value : null, qtdModal);
  fechaModal();
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape") { fechaModal(); fechaGaveta(); fechaMenu(); } });

// ---------- menu do celular ----------
const ham = $("#hamburguer"), menu = $("#menu");
function fechaMenu() { menu.classList.remove("aberto"); ham.setAttribute("aria-expanded", "false"); }
ham.addEventListener("click", () => { const ab = menu.classList.toggle("aberto"); ham.setAttribute("aria-expanded", ab); });
menu.addEventListener("click", (e) => { if (e.target.closest("a")) fechaMenu(); });

// ---------- aviso ----------
let tempoAviso;
function avisa(t) { const a = $("#aviso"); a.textContent = t; a.classList.add("mostra"); clearTimeout(tempoAviso); tempoAviso = setTimeout(() => a.classList.remove("mostra"), 2200); }

// ---------- entrada ao rolar ----------
if ("IntersectionObserver" in window) {
  const obs = new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visivel"); obs.unobserve(en.target); } }), { threshold: 0.15 });
  document.querySelectorAll(".revelar").forEach((el) => obs.observe(el));
} else {
  document.querySelectorAll(".revelar").forEach((el) => el.classList.add("visivel"));
}
