// IFBOX サイトを「これほしLPファーストビュー（大橋さん案）」のテイストに寄せる。
// 白と淡い青の地／紺の明朝の見出し／金のボタンと強調／丸い実績バッジ／番号は紺の丸。文言と構成は変えない。
const fs = require("fs"), path = require("path");
const f = path.join(__dirname, "index.html");
let s = fs.readFileSync(f, "utf8");
const R = (a, b) => { if (!s.includes(a)) throw new Error("not found: " + a.slice(0, 50)); s = s.replace(a, b); };

// フォント：見出しを明朝に
R("family=M+PLUS+Rounded+1c:wght@700;800;900&family=Noto+Sans+JP:wght@400;500;700;900&display=swap",
  "family=Shippori+Mincho+B1:wght@600;700;800&family=Noto+Sans+JP:wght@400;500;700;900&display=swap");

// 上書きのスタイル（既存の </style> の直前に足す）
const css = `
/* ===== テイスト変更（2026-09-29）：白×淡い青、紺の明朝、金の強調 ===== */
:root{--paper:#fff;--navy:#0B2A5B;--ink:#16223a;--ink2:#46536b;--ink3:#7d889b;--line:#dfe6f1;
  --coral:#B5842A;--coral-deep:#8C6214;--gold:#C2922F;--gold-soft:#F7F0DF;--gold-deep:#7A5510;--sky:#1F5FBF;--blue-soft:#EEF4FC;
  --goldgrad:linear-gradient(135deg,#D9B257 0%,#B5842A 45%,#8C6214 100%);
  --head:"Shippori Mincho B1","Noto Serif JP","Yu Mincho",serif}
body{background:#fff}
h1,h2,h3{letter-spacing:.02em;font-weight:700}
.em{color:var(--gold);background:linear-gradient(transparent 78%,rgba(194,146,47,.22) 78%)}
.trial{background:var(--blue-soft);color:var(--navy)}
.top{background:rgba(255,255,255,.94);border-bottom:1px solid var(--line)}
.logo{font-size:21px;letter-spacing:.04em}
.logo i{background:var(--navy);border-radius:6px;font-family:var(--body);font-size:12px}
.top nav a:hover{color:var(--gold)}
.btn{background:var(--goldgrad);border-radius:999px;box-shadow:0 8px 20px rgba(140,98,20,.28);letter-spacing:.04em}
.btn:after{content:"→";font-weight:700;margin-left:4px}
.btn:hover{background:var(--goldgrad);filter:brightness(1.06)}
.btn.s:after{content:none}
.btn.navy{background:#fff;color:var(--navy);border:2px solid var(--navy);box-shadow:none}
.btn.navy:hover{background:var(--blue-soft);filter:none}
.btn.ghost{border-color:var(--navy)}
/* ヒーロー */
.hero{position:relative;padding:54px 0 70px;background:
  linear-gradient(115deg,#fff 0%,#fff 38%,rgba(238,244,252,.0) 60%),
  radial-gradient(900px 420px at 88% 8%,#DDE9F9 0%,rgba(221,233,249,0) 70%),
  linear-gradient(180deg,#F6F9FE 0%,#fff 100%);overflow:hidden}
.hero:before{content:"";position:absolute;left:-120px;top:-160px;width:420px;height:420px;background:linear-gradient(135deg,#0B2A5B,#1F5FBF);opacity:.10;transform:rotate(28deg);border-radius:60px}
.hero:after{content:"";position:absolute;left:-60px;top:-190px;width:420px;height:420px;border:2px solid rgba(194,146,47,.35);transform:rotate(28deg);border-radius:60px}
.hero .w{position:relative;z-index:1}
.hero .pre{display:flex;align-items:center;gap:12px;font-size:15px;color:var(--navy);font-weight:500;margin-bottom:14px;letter-spacing:.06em}
.hero .pre:before{content:"";width:44px;height:2px;background:var(--navy)}
.hero h1{font-size:54px;line-height:1.3}
.hero h1 .em{font-size:1.12em}
.hero .lead{font-size:16.5px;margin:18px 0 18px}
.checks{list-style:none;padding:0;margin:0 0 24px;display:flex;flex-direction:column;gap:10px}
.checks li{position:relative;padding-left:40px;font-size:16px;color:var(--ink);line-height:1.6}
.checks li:before{content:"✓";position:absolute;left:0;top:-1px;width:28px;height:28px;border-radius:50%;background:var(--goldgrad);color:#fff;font-weight:900;font-size:15px;display:grid;place-items:center;box-shadow:0 4px 10px rgba(140,98,20,.25)}
.checks b{color:var(--sky);font-weight:900;background:linear-gradient(transparent 80%,rgba(194,146,47,.30) 80%)}
.badges{display:flex;gap:10px;justify-content:flex-end;margin:0 0 14px}
.badges span{width:104px;height:104px;border-radius:50%;background:#fff;border:2px solid var(--gold);box-shadow:0 8px 20px rgba(11,42,91,.12),inset 0 0 0 4px #fff,inset 0 0 0 5px rgba(194,146,47,.35);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;font-family:var(--head);font-weight:700;color:var(--navy);font-size:14.5px;line-height:1.35}
.badges svg{width:26px;height:26px;stroke:var(--sky);fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;margin-bottom:3px}
.shot img{border-radius:16px;box-shadow:0 24px 50px rgba(11,42,91,.22);border:6px solid #fff}
.bubble{border-radius:14px;border:1px solid var(--line)}
.bubble .in{border-color:var(--navy)}.bubble .in:after{background:var(--navy)}
.bubble .go b{background:var(--goldgrad)}
@media(max-width:860px){.hero h1{font-size:36px}.badges{justify-content:center;flex-wrap:wrap}.badges span{width:84px;height:84px;font-size:12.5px}.badges svg{width:20px;height:20px}}
/* 見出し：金の線＋英字 */
.sh .k{background:none;border:0;color:var(--gold);letter-spacing:.22em;font-size:13px;padding:0;display:inline-flex;align-items:center;gap:14px;font-family:var(--body)}
.sh .k:before,.sh .k:after{content:"";width:56px;height:1.5px;background:var(--gold)}
.sh h2{font-size:38px}
.sh p{letter-spacing:.08em}
@media(max-width:760px){.sh h2{font-size:27px}.sh .k:before,.sh .k:after{width:28px}}
/* カード類 */
.three div,.rc,.mc,.door,.ui,details{border-radius:14px;border-color:var(--line);box-shadow:0 10px 26px rgba(11,42,91,.07)}
.three div{position:relative;padding-top:30px}
.three .n{position:absolute;left:18px;top:-16px;background:var(--navy);color:#fff;border-radius:999px;padding:3px 14px;font-family:var(--body);font-size:12.5px;letter-spacing:.08em}
.three b{font-size:20px}
.nowthen{border-color:var(--line);border-radius:14px;background:var(--blue-soft)}
.nowthen div+div{border-left-color:#c5d3e8}
.nowthen b{color:var(--navy)}
.flow,.money{background:linear-gradient(180deg,#F3F7FD 0%,#fff 100%)}
.story{border-radius:12px}
.pill{background:var(--navy)}
.tx .num{background:var(--navy);box-shadow:0 0 0 4px #fff,0 0 0 5px var(--gold);font-family:var(--body)}
.ph img{border-radius:14px;border:6px solid #fff;box-shadow:0 16px 36px rgba(11,42,91,.16)}
.ph .who{background:rgba(11,42,91,.88)}
.role i.o{border-color:var(--gold)}.role span.need{color:var(--gold-deep)}
.bar{background:#e6edf7}.bar i{background:var(--goldgrad)}
.upd{border-left-color:var(--gold)}
.pay{background:var(--gold-soft);color:var(--gold-deep)}
.door .hd{font-size:24px}
.door.make .hd{background:var(--goldgrad)}.door.back .hd{background:linear-gradient(135deg,#0B2A5B,#1F4E9E)}
.rc svg{stroke:var(--sky)}
.bigrule{border-width:1.5px;border-radius:14px;background:var(--blue-soft);border-color:var(--navy)}
.mc .big{background:var(--goldgrad);-webkit-background-clip:text;background-clip:text;color:transparent}
summary:after{color:var(--gold)}
.last{background:linear-gradient(135deg,#0B2A5B 0%,#123C7E 100%)}
.last h2{font-size:38px}
footer{background:#081E42}
`;
R("</style>", css + "</style>");

// ヒーローの中身：前置き・チェック3つ・右上の丸バッジ
R('<h1>「<span class="em">もし</span>」を、<br>みんなで<span class="em">形</span>に。</h1>',
  '<div class="pre">思いつきから、仲間集め、完成前の申し込みまで。</div>\n    <h1>「<span class="em">もし</span>」を、<br>みんなで<span class="em">形</span>に。</h1>');
R('<div class="ctas"><a class="btn" href="#doors">つくる人はこちら</a><a class="btn navy" href="#doors">おうえんする人はこちら</a></div>',
  '<ul class="checks"><li>書くのは<b>1行だけ</b>。紹介ページの下書きはAIが用意します。</li><li><b>仲間も、買う人も</b>、同じページで集められます。</li><li>目指しているのは、<b>支払いは届いたあと</b>。</li></ul>\n    <div class="ctas"><a class="btn" href="#doors">つくる人はこちら</a><a class="btn navy" href="#doors">おうえんする人はこちら</a></div>');
R('<div class="shot">',
  '<div class="shot">\n    <div class="badges" aria-hidden="true"><span><svg viewBox="0 0 24 24"><path d="M4 20h4L19 9l-4-4L4 16v4zM13 7l4 4"/></svg>1行で<br>書ける</span><span><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.500"/><path d="M3 19c0-3 3-5 6-5s6 2 6 5M15 14c3 0 6 1.500 6 4"/></svg>仲間が<br>集まる</span><span><svg viewBox="0 0 24 24"><path d="M5 7h14l-1.500 9h-11L5 7zM9 7V5a3 3 0 0 1 6 0v2"/></svg>完成前に<br>申し込み</span><span><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/></svg>支払いは<br>届いたあと</span></div>');

// 見出しの札を英字に（日本語は見出し本体にあるため）
R('<span class="k">進み方</span>', '<span class="k">FLOW</span>');
R('<span class="k">2つの入口</span>', '<span class="k">ENTRANCE</span>');
R('<span class="k">3つの役割</span>', '<span class="k">ROLES</span>');
R('<span class="k">お金のこと</span>', '<span class="k">PRICE</span>');
R('<span class="k">よくある質問</span>', '<span class="k">FAQ</span>');

fs.writeFileSync(f, s, "utf8");
console.log("restyled", s.length);
