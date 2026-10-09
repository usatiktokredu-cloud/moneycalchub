
function fmt(n){return '$'+Number(n).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});}
function num(id){return parseFloat(document.getElementById(id).value)||0;}
function show(html){var r=document.getElementById('result');r.innerHTML=html;r.style.display='block';r.scrollIntoView({behavior:'smooth',block:'nearest'});}
function pmt(P,rate,n){var r=rate/100/12;if(r===0)return P/n;return P*r/(1-Math.pow(1+r,-n));}
