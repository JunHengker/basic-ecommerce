const saldo = 1000000000;

localStorage.setItem("saldo", JSON.stringify({ saldo }));

const storedSaldo = localStorage.getItem("saldo");

var updateSal = localStorage.getItem('updatedSaldo');
console.log(updateSal);

if (storedSaldo) {
  const saldoObjek = JSON.parse(storedSaldo);

  document.getElementById("tempatSaldo").textContent = "Rp " + saldoObjek.saldo.toLocaleString('id-ID');
} else {

  document.getElementById("tempatSaldo").textContent = "Rp " + saldo.toLocaleString('id-ID');
}

let clickCard1 = 0;

document.getElementById("clickCard1").addEventListener("click", function() {
  clickCard1++;
  document.getElementById("clickCard1").textContent = "Add to Cart : " + clickCard1; 
  updateTotal();

  const data = { clicks: clickCard1 };
  const jsonData = JSON.stringify(data);
  localStorage.setItem("clickCard1", jsonData);

});

let clickCard2 = 0;

document.getElementById("clickCard2").addEventListener("click", function() {
  clickCard2++; 
  document.getElementById("clickCard2").textContent = "Add to Cart : " + clickCard2; 
  updateTotal();

  const data2 = { clicks: clickCard2 };
  const jsonData2 = JSON.stringify(data2);
  localStorage.setItem("clickCard2", jsonData2);

});

let clickCard3 = 0;

document.getElementById("clickCard3").addEventListener("click", function() {
  clickCard3++; 
  document.getElementById("clickCard3").textContent = "Add to Cart : " + clickCard3; 
  updateTotal();

  const data3 = { clicks: clickCard3 };
  const jsonData3 = JSON.stringify(data3);
  localStorage.setItem("clickCard3", jsonData3);

});

let clickCard4 = 0;

document.getElementById("clickCard4").addEventListener("click", function() {
  clickCard4++; 
  document.getElementById("clickCard4").textContent = "Add to Cart : " + clickCard4; 
  updateTotal();

  const data4 = { clicks: clickCard4 };
  const jsonData4 = JSON.stringify(data4);
  localStorage.setItem("clickCard4", jsonData4);

});

let clickCard5 = 0;

document.getElementById("clickCard5").addEventListener("click", function() {
  clickCard5++; 
  document.getElementById("clickCard5").textContent = "Add to Cart : " + clickCard5;
  updateTotal();

  const data5 = { clicks: clickCard5 };
  const jsonData5 = JSON.stringify(data5);
  localStorage.setItem("clickCard5", jsonData5);

});

let clickCard6 = 0;

document.getElementById("clickCard6").addEventListener("click", function() {
  clickCard6++; 
  document.getElementById("clickCard6").textContent = "Add to Cart : " + clickCard6;
  updateTotal();

  const data6 = { clicks: clickCard6 };
  const jsonData6 = JSON.stringify(data6);
  localStorage.setItem("clickCard6", jsonData6);

});

let clickCard7 = 0;

document.getElementById("clickCard7").addEventListener("click", function() {
  clickCard7++; 
  document.getElementById("clickCard7").textContent = "Add to Cart : " + clickCard7; 
  updateTotal();

  const data7 = { clicks: clickCard7 };
  const jsonData7 = JSON.stringify(data7);
  localStorage.setItem("clickCard7", jsonData7);

});

let clickCard8 = 0;

document.getElementById("clickCard8").addEventListener("click", function() {
  clickCard8++; 
  document.getElementById("clickCard8").textContent = "Add to Cart : " + clickCard8;
  updateTotal();

  const data8 = { clicks: clickCard8 };
  const jsonData8 = JSON.stringify(data8);
  localStorage.setItem("clickCard8", jsonData8);

});

function updateTotal() {
  totalClicks = clickCard1 + clickCard2 + clickCard3 + clickCard4 + clickCard5 + clickCard6 + clickCard7 + clickCard8;
  if(totalClicks > 0){
    document.getElementById("itemTotal").textContent = "Shop Cart : " + totalClicks;
  } else
    document.getElementById("itemTotal").textContent = "Shop Cart ";
    localStorage.setItem("totalSemua", totalClicks);

}

updateTotal();
