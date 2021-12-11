
const question = [
  '卑弥呼が魏に使いを送る',
  '倭王武が中国に使いを送る',
  '聖徳太子が摂政となる',
  '十七条の憲法',
  '第1回遣唐使',
  '大化の改新',
  '大宝律令',
  '平城京',
  '墾田永年私財法',
  '平安京',
  '遣唐使停止',
  '平将門の乱',
  '藤原純友の乱',
  '『源氏物語』',
  '藤原道長が摂政に',
  '白河上皇が院政を始める',
  '保元の乱',
  '平治の乱',
  '平清盛が太政大臣になる',
  '壇ノ浦の戦い',
  '鎌倉幕府成立',
  '承久の乱',
  '御成敗式目',
  '文永の役（元寇）',
  '弘安の役（元寇）',
  '徳政令',
  '鎌倉幕府滅亡',
  '建武の新政',
  '南北朝の動乱が始まる',
  '室町幕府成立',
  '南北朝が合一',
  '勘合貿易',
  '応仁の乱',
  '鉄砲が伝わる',
  '織田信長が室町幕府を倒す',
  '豊臣秀吉が全国を統一する',
  '関ヶ原の戦い',
  '江戸幕府成立',
  '武家諸法度',
  '島原·天草一揆',
  '鎖国が完成',
  '新井白石の政治が始まる',
  '享保の改革',
  '田沼意次が老中になる',
  '寛政の改革',
  '大塩平八郎の乱',
  '天保の改革',
  'ペリー来航',
  '日米和親条約',
  '日米修好通商条約',
  '安政の大獄',
  '薩長同盟',
  '大政奉還',
  '五箇条の御誓文',
  '版籍奉還',
  '廃藩置県',
  '徴兵令·地租改正',
  '民撰議院設立の建白書',
  '西南戦争',
  '国会開設の勅論',
  '大日本帝国憲法発布',
  '第1回帝国議会開催',
  '日清戦争',
  '領事裁判権が徹廃される',
  '下関条約を結ぶ→三国干渉',
  '日英同盟',
  '日露戦争',
  'ポーツマス条約',
  '韓国併合',
  '大逆事件',
  '第一次世界大戦に参戦する',
  '中国にニ十一か条の要求',
  '原敬内閣が成立',
  '米騒動',
  '国際連盟に加盟する',
  '関東大震災',
  '普通選挙制が成立',
  '治安維持法が成立',
  '満州事変',
  '五一五事件',
  '国際連盟脱退',
  'ニ・ニ六事件',
  '日中戦争',
  '国家総動員法',
  '日独伊三国同盟',
  '太平洋戦争',
  '日ソ中立条約',
  'ポツダム宣言',
  '日本国憲法公布',
  '警察予備隊の設置',
  'サンフランシスコ平和条約',
  '自衛隊の設置',
  '日米安全保障条約改定',
  '国際連合に加盟',
  '日ソ共同宣言',
  '日米安全保障条約改定',
  '日韓基本条約',
  '沖縄の返還',
  '日中共同声明',
  '石油危機',
  '日中平和友好条約',
  'PKO協力法',
  '阪神・淡路大震災',
  '東日本大震災'
];
const kotae = [
  239,
  478,
  593,
  604,
  630,
  645,
  701,
  710,
  743,
  794,
  894,
  935,
  939,
  1011,
  1016,
  1086,
  1156,
  1159,
  1167,
  1185,
  1192,
  1221,
  1232,
  1274,
  1281,
  1297,
  1333,
  1334,
  1336,
  1338,
  1392,
  1404,
  1467,
  1543,
  1573,
  1590,
  1600,
  1603,
  1615,
  1637,
  1639,
  1709,
  1716,
  1772,
  1787,
  1837,
  1841,
  1853,
  1854,
  1858,
  1859,
  1866,
  1867,
  1868,
  1869,
  1871,
  1873,
  1874,
  1877,
  1881,
  1889,
  1890,
  1894,
  1894,
  1896,
  1902,
  1904,
  1905,
  1910,
  1910,
  1914,
  1916,
  1918,
  1918,
  1920,
  1923,
  1925,
  1925,
  1931,
  1932,
  1933,
  1936,
  1937,
  1938,
  1940,
  1941,
  1941,
  1945,
  1946,
  1950,
  1951,
  1954,
  1954,
  1956,
  1956,
  1960,
  1965,
  1972,
  1972,
  1973,
  1978,
  1992,
  1995,
  2011
];

var select = document.getElementById('genre');

function butotnClick(){location.reload();}
//
let button = document.getElementById('reset');
button.onclick = butotnClick;

//  btn.addEventListener('click', function() {/
//    / reset = document.getElementById('reset');
// //             location.reload();}
//

select.onchange = function(){

  if( this.value === "sel"){
    location.reload();
  }

  // 1-10の問題
  if(this.value === "1-10"){
      alert(this.value+"スタート！");
  const questionLength = question.length;
  let questionIndex = 0;
  const kotaeLength = kotae.length;
  let kotaeIndex = 0;
  const setupQuiz = () => {
  document.getElementById('js-question').textContent = question[questionIndex];
  }
  setupQuiz();
  let years = document.getElementById('years');
  var btn = document.getElementById('kakunin');
  btn.addEventListener('click', function() {
  target = document.getElementById("output");
             textBox = document.getElementById("id_textBox1");
             target.innerText = textBox.value;
   if(textBox.value == kotae[kotaeIndex])
   {alert("Good!");
   textBox.value = " ";
   questionIndex++;
   kotaeIndex++;
   setupQuiz();
   }
   else{
   alert("こたえは"+ kotae[kotaeIndex] +"です。");
   textBox.value = " ";
   questionIndex = 0;
   kotaeIndex = 0;
   setupQuiz();
   }

   if(questionIndex < 10){
        setupQuiz();
          }else{
          alert('コンプリート！');
   location.reload();
        }
},false);}


// 11-20の問題
if(this.value === "11-20"){
        alert(this.value+"スタート！");
const questionLength = question.length;
let questionIndex = 10;
const kotaeLength = kotae.length;
let kotaeIndex = 10;
const setupQuiz = () => {
document.getElementById('js-question').textContent = question[questionIndex];
}
setupQuiz();
let years = document.getElementById('years');
var btn = document.getElementById('kakunin');
btn.addEventListener('click', function() {
target = document.getElementById("output");
           textBox = document.getElementById("id_textBox1");
           target.innerText = textBox.value;
 if(textBox.value == kotae[kotaeIndex])
 {alert("Good!");
 textBox.value = " ";
 questionIndex++;
 kotaeIndex++;
 setupQuiz();
 }
 else{
 alert("残念！こたえは"+ kotae[kotaeIndex] +"です。");
 textBox.value = " ";
 questionIndex = 10;
 kotaeIndex = 10;
 setupQuiz();
 }

 if(questionIndex < 20){
      setupQuiz();
        }else{
        alert('コンプリート！');
 location.reload();
      }
},false);}


// 21-30の問題
if(this.value === "21-30"){
        alert(this.value+"スタート！");
const questionLength = question.length;
let questionIndex = 20;
const kotaeLength = kotae.length;
let kotaeIndex = 20;
const setupQuiz = () => {
document.getElementById('js-question').textContent = question[questionIndex];
}
setupQuiz();
let years = document.getElementById('years');
var btn = document.getElementById('kakunin');
btn.addEventListener('click', function() {
target = document.getElementById("output");
           textBox = document.getElementById("id_textBox1");
           target.innerText = textBox.value;
 if(textBox.value == kotae[kotaeIndex])
 {alert("Good!");
 textBox.value = " ";
 questionIndex++;
 kotaeIndex++;
 setupQuiz();
 }
 else{
 alert("こたえは"+ kotae[kotaeIndex] +"です。");
 textBox.value = " ";
 questionIndex = 20;
 kotaeIndex = 20;
 setupQuiz();
 }

 if(questionIndex < 30){
      setupQuiz();
        }else{
        alert('コンプリート！');
 location.reload();
      }
},false);}

// 31-40の問題
if(this.value === "31-40"){
        alert(this.value+"スタート！");
const questionLength = question.length;
let questionIndex = 30;
const kotaeLength = kotae.length;
let kotaeIndex = 30;
const setupQuiz = () => {
document.getElementById('js-question').textContent = question[questionIndex];
}
setupQuiz();
let years = document.getElementById('years');
var btn = document.getElementById('kakunin');
btn.addEventListener('click', function() {
target = document.getElementById("output");
           textBox = document.getElementById("id_textBox1");
           target.innerText = textBox.value;
 if(textBox.value == kotae[kotaeIndex])
 {alert("Good!");
 textBox.value = " ";
 questionIndex++;
 kotaeIndex++;
 setupQuiz();
 }
 else{
 alert("こたえは"+ kotae[kotaeIndex] +"です。");
 textBox.value = " ";
 questionIndex = 30;
 kotaeIndex = 30;
 setupQuiz();
 }

 if(questionIndex < 40){
      setupQuiz();
        }else{
        alert('コンプリート！');
 location.reload();
      }
},false);}

// 41-50の問題
if(this.value === "41-50"){
        alert(this.value+"スタート！");
const questionLength = question.length;
let questionIndex = 40;
const kotaeLength = kotae.length;
let kotaeIndex = 40;
const setupQuiz = () => {
document.getElementById('js-question').textContent = question[questionIndex];
}
setupQuiz();
let years = document.getElementById('years');
var btn = document.getElementById('kakunin');
btn.addEventListener('click', function() {
target = document.getElementById("output");
           textBox = document.getElementById("id_textBox1");
           target.innerText = textBox.value;
 if(textBox.value == kotae[kotaeIndex])
 {alert("Good!");
 textBox.value = " ";
 questionIndex++;
 kotaeIndex++;
 setupQuiz();
 }
 else{
 alert("こたえは"+ kotae[kotaeIndex] +"です。");
 textBox.value = " ";
 questionIndex = 40;
 kotaeIndex = 40;
 setupQuiz();
 }

 if(questionIndex < 50){
      setupQuiz();
        }else{
        alert('コンプリート！');
 location.reload();
      }
},false);}

// 51-60の問題
if(this.value === "51-60"){
        alert(this.value+"スタート！");
const questionLength = question.length;
let questionIndex = 50;
const kotaeLength = kotae.length;
let kotaeIndex = 50;
const setupQuiz = () => {
document.getElementById('js-question').textContent = question[questionIndex];
}
setupQuiz();
let years = document.getElementById('years');
var btn = document.getElementById('kakunin');
btn.addEventListener('click', function() {
target = document.getElementById("output");
           textBox = document.getElementById("id_textBox1");
           target.innerText = textBox.value;
 if(textBox.value == kotae[kotaeIndex])
 {alert("Good!");
 textBox.value = " ";
 questionIndex++;
 kotaeIndex++;
 setupQuiz();
 }
 else{
 alert("こたえは"+ kotae[kotaeIndex] +"です。");
 textBox.value = " ";
 questionIndex = 50;
 kotaeIndex = 50;
 setupQuiz();
 }

 if(questionIndex < 60){
      setupQuiz();
        }else{
        alert('コンプリート！');
 location.reload();
      }
},false);}


// 61-70の問題
if(this.value === "61-70"){
        alert(this.value+"スタート！");
const questionLength = question.length;
let questionIndex = 60;
const kotaeLength = kotae.length;
let kotaeIndex = 60;
const setupQuiz = () => {
document.getElementById('js-question').textContent = question[questionIndex];
}
setupQuiz();
let years = document.getElementById('years');
var btn = document.getElementById('kakunin');
btn.addEventListener('click', function() {
target = document.getElementById("output");
           textBox = document.getElementById("id_textBox1");
           target.innerText = textBox.value;
 if(textBox.value == kotae[kotaeIndex])
 {alert("Good!");
 textBox.value = " ";
 questionIndex++;
 kotaeIndex++;
 setupQuiz();
 }
 else{
 alert("こたえは"+ kotae[kotaeIndex] +"です。");
 textBox.value = " ";
 questionIndex = 60;
 kotaeIndex = 60;
 setupQuiz();
 }

 if(questionIndex < 70){
      setupQuiz();
        }else{
        alert('コンプリート！');
 location.reload();
      }
},false);}

// 71-80の問題
if(this.value === "71-80"){
        alert(this.value+"スタート！");
const questionLength = question.length;
let questionIndex = 70;
const kotaeLength = kotae.length;
let kotaeIndex = 70;
const setupQuiz = () => {
document.getElementById('js-question').textContent = question[questionIndex];
}
setupQuiz();
let years = document.getElementById('years');
var btn = document.getElementById('kakunin');
btn.addEventListener('click', function() {
target = document.getElementById("output");
           textBox = document.getElementById("id_textBox1");
           target.innerText = textBox.value;
 if(textBox.value == kotae[kotaeIndex])
 {alert("Good!");
 textBox.value = " ";
 questionIndex++;
 kotaeIndex++;
 setupQuiz();
 }
 else{
 alert("こたえは"+ kotae[kotaeIndex] +"です。");
 textBox.value = " ";
 questionIndex = 70;
 kotaeIndex = 70;
 setupQuiz();
 }

 if(questionIndex < 80){
      setupQuiz();
        }else{
        alert('コンプリート！');
 location.reload();
      }
},false);}

// 81-90の問題
if(this.value === "81-90"){
        alert(this.value+"スタート！");
const questionLength = question.length;
let questionIndex = 80;
const kotaeLength = kotae.length;
let kotaeIndex = 80;
const setupQuiz = () => {
document.getElementById('js-question').textContent = question[questionIndex];
}
setupQuiz();
let years = document.getElementById('years');
var btn = document.getElementById('kakunin');
btn.addEventListener('click', function() {
target = document.getElementById("output");
           textBox = document.getElementById("id_textBox1");
           target.innerText = textBox.value;
 if(textBox.value == kotae[kotaeIndex])
 {alert("Good!");
 textBox.value = " ";
 questionIndex++;
 kotaeIndex++;
 setupQuiz();
 }
 else{
 alert("こたえは"+ kotae[kotaeIndex] +"です。");
 textBox.value = " ";
 questionIndex = 80;
 kotaeIndex = 80;
 setupQuiz();
 }

 if(questionIndex < 90){
      setupQuiz();
        }else{
        alert('コンプリート！');
 location.reload();
      }
},false);}

// 91-100の問題
if(this.value === "91-100"){
        alert(this.value+"スタート！");
const questionLength = question.length;
let questionIndex = 90;
const kotaeLength = kotae.length;
let kotaeIndex = 90;
const setupQuiz = () => {
document.getElementById('js-question').textContent = question[questionIndex];
}
setupQuiz();
let years = document.getElementById('years');
var btn = document.getElementById('kakunin');
btn.addEventListener('click', function() {
target = document.getElementById("output");
           textBox = document.getElementById("id_textBox1");
           target.innerText = textBox.value;
 if(textBox.value == kotae[kotaeIndex])
 {alert("Good!");
 textBox.value = " ";
 questionIndex++;
 kotaeIndex++;
 setupQuiz();
 }
 else{
 alert("こたえは"+ kotae[kotaeIndex] +"です。");
 textBox.value = " ";
 questionIndex = 90;
 kotaeIndex = 90;
 setupQuiz();
 }

 if(questionIndex < 100){
      setupQuiz();
        }else{
        alert('コンプリート！');
 location.reload();
      }
},false);}







}
