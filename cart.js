$(document).ready(function() {
  // tombol plus
  $('.cart-qty-plus').on('click', function() {
    var $row = $(this).closest("tr");
    var $qtyInput = $row.find('.qty');
    var currentQty = parseInt($qtyInput.val());
    
    if (!isNaN(currentQty)) {
      $qtyInput.val(currentQty + 1);
      update_amounts();
    }
  });

  // tombol minus
  $('.cart-qty-minus').on('click', function() {
    var $row = $(this).closest("tr");
    var $qtyInput = $row.find('.qty');
    var currentQty = parseInt($qtyInput.val());
    
    if (!isNaN(currentQty) && currentQty > 0) {
      $qtyInput.val(currentQty - 1);
      update_amounts();
    }
  });

  update_amounts();
});

function update_amounts() {
  var sum = 0.0;
  $('#myTable > tbody > tr').each(function() {
    var qty = $(this).find('.qty').val();
    var price = $(this).find('.price').val();
    var amount = (qty * price);
    sum += amount;

    $(this).find('.amount').text('' + amount);
  });
  $('.total').text(sum);
}

const storedSaldo = localStorage.getItem("saldo");

if (storedSaldo) {
  const saldoObjek = JSON.parse(storedSaldo);

  document.getElementById("tempatSaldo").textContent = "Rp " + saldoObjek.saldo.toLocaleString('id-ID');
} else {

  document.getElementById("tempatSaldo").textContent = "Rp " + saldo.toLocaleString('id-ID');
}

// tombol hapus item
$(document).ready(function(){
  $(".removeBtn").click(function(){
    $(this).closest("tr").remove();
    update_amounts();
  });
});

function update_amounts() {
  var sum = 0.0;
  var formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });

  $('#myTable > tbody > tr').each(function() {
    if($(this).find('.qty').val() > 0){
    var qty = parseFloat($(this).find('.qty').val());
    var hargaInput = $(this).find('.price');
    var hargaText = hargaInput.val(); 
    var harga = parseFloat(hargaText.replace(/\D/g, ''));
    }

    if (!isNaN(qty) && !isNaN(harga)) {
      var amount = qty * harga;
      sum += amount;

      
      var formattedAmount = formatter.format(amount);
      $(this).find('.amount').text(formattedAmount);
    }
  });

  
  var formattedTotal = formatter.format(sum);
  $('.total').text(formattedTotal);
}

$(document).ready(function() {
  $(".checkoutBtn").click(function() {
    var sum = 0.0;
    var formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });

    $('#myTable > tbody > tr').each(function() {
      if($(this).find('.qty').val() > 0){
        var qty = parseFloat($(this).find('.qty').val());
        var hargaInput = $(this).find('.price');
        var hargaText = hargaInput.val(); 
        var harga = parseFloat(hargaText.replace(/\D/g, ''));
      }

      if (!isNaN(qty) && !isNaN(harga)) {
        var amount = qty * harga;
        sum += amount;
      }
    });

    var storedSaldo = JSON.parse(localStorage.getItem("saldo")).saldo;

    if (storedSaldo >= sum) {
      storedSaldo -= sum;
      localStorage.setItem("saldo", JSON.stringify({ saldo: storedSaldo }));
      document.getElementById("tempatSaldo").textContent = "Rp " + storedSaldo.toLocaleString('id-ID');

      var storedSaldo = JSON.parse(localStorage.getItem("saldo")).saldo;

      const username = localStorage.getItem("username");

      var popupContent = `
      <div id="transaksiBerhasil" class="popup">
          <div class="popup-content">
              <h2>Transaksi Berhasil</h2>
              <p>Selamat ${username}, Transaksi Anda Berhasil.</p>
              <a href="MainPage.html" class="kembali-button">Belanja Lagi</a>
              </button>
          </div>
      </div>`;

      $(popupContent).appendTo("#manual");
      $(".checkoutBtn").hide();
      $(".kembali-button").click(function() {});

    } else {
      alert("Saldo tidak mencukupi untuk checkout.");
    }
  });
});

const jsonData = localStorage.getItem("clickCard1");
const data = JSON.parse(jsonData);

var list1 = '<td>' +
  '  <div class="product-img">' +
  '    <div class="img-product">' +
  '      <img src="assets/barang/iphone13promax.png" alt=""></img>' +
  '    </div>' +
  '  </div>' +
  '</td>' +
  '<td>' +
  '  <p>iPhone 13 Pro Max</p>' +
  '  <button class="removeBtn">Remove <i class="fas fa-trash-alt"></i></button>' +
  '</td>' +
  '<td>' +
  '  <input type="text" value="Rp 16.999.000" class="price form-control" disabled></input>' +
  '</td>' +
  '<td>' +
  '  <div class="button-container">' +
  '    <button class="cart-qty-plus" type="button" value="+">+</button>' +
  '    <input type="text" name="qty1" min="0" class="qty form-control" value="0"></input>' +
  '    <button class="cart-qty-minus" type="button" value="-">-</button>' +
  '  </div>' +
  '</td>' +
  '<td align="right">' +
  '  <span id="amount" class="amount"></span>' +
  '</td>';
  
let clickCount = data && data.clicks ? data.clicks : 0;

if(clickCount > 0){
  document.getElementById("cartItem1").innerHTML = list1;
  let inputElement = document.querySelector('input[name="qty1"]');
  inputElement.value = clickCount;
}

const jsonData2 = localStorage.getItem("clickCard2");
const data2 = JSON.parse(jsonData2);

var list2 = '<td>' +
  '  <div class="product-img">' +
  '    <div class="img-product">' +
  '      <img src="assets/barang/iphone12.png" alt=""></img>' +
  '    </div>' +
  '  </div>' +
  '</td>' +
  '<td>' +
  '  <p>iPhone 12</p>' +
  '  <button class="removeBtn">Remove <i class="fas fa-trash-alt"></i></button>' +
  '</td>' +
  '<td>' +
  '  <input type="text" value="Rp 13.499.000" class="price form-control" disabled></input>' +
  '</td>' +
  '<td>' +
  '  <div class="button-container">' +
  '    <button class="cart-qty-plus" type="button" value="+">+</button>' +
  '    <input type="text" name="qty2" min="0" class="qty form-control" value="0"></input>' +
  '    <button class="cart-qty-minus" type="button" value="-">-</button>' +
  '  </div>' +
  '</td>' +
  '<td align="right">' +
  '  <span id="amount" class="amount"></span>' +
  '</td>';

let clickCount2 = data2 && data2.clicks ? data2.clicks : 0;

if(clickCount2 > 0){
  document.getElementById("cartItem2").innerHTML = list2;
  let inputElement = document.querySelector('input[name="qty2"]');
  inputElement.value = clickCount2;
}

const jsonData3 = localStorage.getItem("clickCard3");
const data3 = JSON.parse(jsonData3);

var list3 = '<td>' +
  '  <div class="product-img">' +
  '    <div class="img-product">' +
  '      <img src="assets/barang/ipadAirm1.png" alt=""></img>' +
  '    </div>' +
  '  </div>' +
  '</td>' +
  '<td>' +
  '  <p>iPad Air M1</p>' +
  '  <button class="removeBtn">Remove <i class="fas fa-trash-alt"></i></button>' +
  '</td>' +
  '<td>' +
  '  <input type="text" value="Rp 9.499.000" class="price form-control" disabled></input>' +
  '</td>' +
  '<td>' +
  '  <div class="button-container">' +
  '    <button class="cart-qty-plus" type="button" value="+">+</button>' +
  '    <input type="text" name="qty3" min="0" class="qty form-control" value="0"></input>' +
  '    <button class="cart-qty-minus" type="button" value="-">-</button>' +
  '  </div>' +
  '</td>' +
  '<td align="right">' +
  '  <span id="amount" class="amount"></span>' +
  '</td>';

let clickCount3 = data3 && data3.clicks ? data3.clicks : 0;

if(clickCount3 > 0){
  document.getElementById("cartItem3").innerHTML = list3;
  let inputElement = document.querySelector('input[name="qty3"]');
  inputElement.value = clickCount3;
}

const jsonData4 = localStorage.getItem("clickCard4");
const data4 = JSON.parse(jsonData4);

var list4 = '<td>' +
  '  <div class="product-img">' +
  '    <div class="img-product">' +
  '      <img src="assets/barang/airpods pro.png" alt=""></img>' +
  '    </div>' +
  '  </div>' +
  '</td>' +
  '<td>' +
  '  <p>Airpods Pro</p>' +
  '  <button class="removeBtn">Remove <i class="fas fa-trash-alt"></i></button>' +
  '</td>' +
  '<td>' +
  '  <input type="text" value="Rp 3.299.000" class="price form-control" disabled></input>' +
  '</td>' +
  '<td>' +
  '  <div class="button-container">' +
  '    <button class="cart-qty-plus" type="button" value="+">+</button>' +
  '    <input type="text" name="qty4" min="0" class="qty form-control" value="0"></input>' +
  '    <button class="cart-qty-minus" type="button" value="-">-</button>' +
  '  </div>' +
  '</td>' +
  '<td align="right">' +
  '  <span id="amount" class="amount"></span>' +
  '</td>';

let clickCount4 = data4 && data4.clicks ? data4.clicks : 0;

if(clickCount4 > 0){
  document.getElementById("cartItem4").innerHTML = list4;
  let inputElement = document.querySelector('input[name="qty4"]');
  inputElement.value = clickCount4;
}

const jsonData5 = localStorage.getItem("clickCard5");
const data5 = JSON.parse(jsonData5);

var list5 = '<td>' +
  '  <div class="product-img">' +
  '    <div class="img-product">' +
  '      <img src="assets/barang/iphone15promax.png" alt=""></img>' +
  '    </div>' +
  '  </div>' +
  '</td>' +
  '<td>' +
  '  <p>iPhone 15 Pro Max</p>' +
  '  <button class="removeBtn">Remove <i class="fas fa-trash-alt"></i></button>' +
  '</td>' +
  '<td>' +
  '  <input type="text" value="Rp 33.999.000" class="price form-control" disabled></input>' +
  '</td>' +
  '<td>' +
  '  <div class="button-container">' +
  '    <button class="cart-qty-plus" type="button" value="+">+</button>' +
  '    <input type="text" name="qty5" min="0" class="qty form-control" value="0"></input>' +
  '    <button class="cart-qty-minus" type="button" value="-">-</button>' +
  '  </div>' +
  '</td>' +
  '<td align="right">' +
  '  <span id="amount" class="amount"></span>' +
  '</td>';

let clickCount5 = data5 && data5.clicks ? data5.clicks : 0;

if(clickCount5 > 0){
  document.getElementById("cartItem5").innerHTML = list5;
  let inputElement = document.querySelector('input[name="qty5"]');
  inputElement.value = clickCount5;
}

const jsonData6 = localStorage.getItem("clickCard6");
const data6 = JSON.parse(jsonData6);

var list6 = '<td>' +
  '  <div class="product-img">' +
  '    <div class="img-product">' +
  '      <img src="assets/barang/ipadPro2020.png" alt=""></img>' +
  '    </div>' +
  '  </div>' +
  '</td>' +
  '<td>' +
  '  <p>iPad Pro 2020</p>' +
  '  <button class="removeBtn">Remove <i class="fas fa-trash-alt"></i></button>' +
  '</td>' +
  '<td>' +
  '  <input type="text" value="Rp 32.499.000" class="price form-control" disabled></input>' +
  '</td>' +
  '<td>' +
  '  <div class="button-container">' +
  '    <button class="cart-qty-plus" type="button" value="+">+</button>' +
  '    <input type="text" name="qty6" min="0" class="qty form-control" value="0"></input>' +
  '    <button class="cart-qty-minus" type="button" value="-">-</button>' +
  '  </div>' +
  '</td>' +
  '<td align="right">' +
  '  <span id="amount" class="amount"></span>' +
  '</td>';

let clickCount6 = data6 && data6.clicks ? data6.clicks : 0;

if(clickCount6 > 0){
  document.getElementById("cartItem6").innerHTML = list6;
  let inputElement = document.querySelector('input[name="qty6"]');
  inputElement.value = clickCount6;
}

const jsonData7 = localStorage.getItem("clickCard7");
const data7 = JSON.parse(jsonData7);

var list7 = '<td>' +
  '  <div class="product-img">' +
  '    <div class="img-product">' +
  '      <img src="assets/barang/appleWatch3.png" alt=""></img>' +
  '    </div>' +
  '  </div>' +
  '</td>' +
  '<td>' +
  '  <p>Apple Watch Series 3</p>' +
  '  <button class="removeBtn">Remove <i class="fas fa-trash-alt"></i></button>' +
  '</td>' +
  '<td>' +
  '  <input type="text" value="Rp 3.299.000" class="price form-control" disabled></input>' +
  '</td>' +
  '<td>' +
  '  <div class="button-container">' +
  '    <button class="cart-qty-plus" type="button" value="+">+</button>' +
  '    <input type="text" name="qty7" min="0" class="qty form-control" value="0"></input>' +
  '    <button class="cart-qty-minus" type="button" value="-">-</button>' +
  '  </div>' +
  '</td>' +
  '<td align="right">' +
  '  <span id="amount" class="amount"></span>' +
  '</td>';

let clickCount7 = data7 && data7.clicks ? data7.clicks : 0;

if(clickCount7 > 0){
  document.getElementById("cartItem7").innerHTML = list7;
  let inputElement = document.querySelector('input[name="qty7"]');
  inputElement.value = clickCount7;
}

const jsonData8 = localStorage.getItem("clickCard8");
const data8 = JSON.parse(jsonData8);

var list8 = '<td>' +
  '  <div class="product-img">' +
  '    <div class="img-product">' +
  '      <img src="assets/barang/macbookm1.png" alt=""></img>' +
  '    </div>' +
  '  </div>' +
  '</td>' +
  '<td>' +
  '  <p>MacBook M1</p>' +
  '  <button class="removeBtn">Remove <i class="fas fa-trash-alt"></i></button>' +
  '</td>' +
  '<td>' +
  '  <input type="text" value="Rp 18.999.000" class="price form-control" disabled></input>' +
  '</td>' +
  '<td>' +
  '  <div class="button-container">' +
  '    <button class="cart-qty-plus" type="button" value="+">+</button>' +
  '    <input type="text" name="qty8" min="0" class="qty form-control" value="0"></input>' +
  '    <button class="cart-qty-minus" type="button" value="-">-</button>' +
  '  </div>' +
  '</td>' +
  '<td align="right">' +
  '  <span id="amount" class="amount"></span>' +
  '</td>';

let clickCount8 = data8 && data8.clicks ? data8.clicks : 0;

if(clickCount8 > 0){
  document.getElementById("cartItem8").innerHTML = list8;
  let inputElement = document.querySelector('input[name="qty8"]');
  inputElement.value = clickCount8;
}

// dimatikan saja supaya rapih
// let totalSemua = localStorage.getItem("totalSemua");

// if (totalSemua === null || totalSemua === undefined) {
//   totalSemua = 0;
// }

// document.getElementById("itemTotal").textContent = "Shop Cart : " + totalSemua;

