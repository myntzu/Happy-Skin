var x = document.getElementsByClassName("imgbtn")
  // console.log(x)
  for(var i = 0; i < x.length; i ++){
      var click = x[i]
      click.addEventListener("click", added)  
      click.addEventListener("click", itemIn)
  }
  // var y = document.getElementsByClassName("imgbtn")
  // // console.log(x)
  // for (var i = 0; i < y.length; i ++){
  //   var button = y[i]
  //   button.addEventListener("click", removeItem)
  // }

  // var qtyinput = document.getElementsByClassName("num")
  // for (var i = 0; i <qtyinput.length; i++){
  //   var input = qtyinput[i]
  //   input.addEventListener("change", changeqty)
  // }



// function changeqty(event){
//     var input = event.target
//     console.log(input)
//     if (isNaN(input.value) || input.value <= 0){
//       input.value = 1
//     }
//     // updateTotal()
// }


function added(){
    var buttonClick = event.target
    if (buttonClick.innerText == "Add to Cart"){
        buttonClick.innerText = "Added"
        updateCart()
        addItem()
    }else{
        alert("Item already added")
    }     
}

function updateCart(){
    var x = event.target
    var q = document.getElementsByClassName("cartqty")[0]
    var nqty = parseInt(q.innerText);
    if (x.innerText == "Remove"){
      nqty = nqty - 1
    }else{
      nqty = nqty + 1
    }
    q.innerText = nqty 
}

function addItem(){
  var button = event.target
  var item = button.parentElement
  var title = item.getElementsByClassName("title")[0].innerText
  var price = item.getElementsByClassName("price")[0].innerText
  var image = item.getElementsByClassName("pic")[0].src
  console.log(title,price,image)
  addToCart(title, price, image)     
}

function addToCart(title,price,image){
    var row = document.createElement("div")
    row.classList.add("row")
    var cartItem = document.getElementsByClassName("row")[0]
    var cartContent = `
        <div class="row">
            <img class="display" src=${image} width="70px">
            <span class="item">${title}</span>
            <input class="num" name="Quantity" type="number" value = 1>
            <span class="cost">${price}</span>
            <button class="del">Remove</button>
        </div>`
    row.innerHTML = cartContent
    cartItem.append(row)
    row.getElementsByClassName("del")[0].addEventListener("click", removeItem)
}

function removeItem(){
  var buttonClicked = event.target
  var name = buttonClicked.parentElement.getElementsByClassName("item")[0].innerText
  var itemName = document.getElementsByClassName("title")
  var item = document.getElementsByClassName("imgbtn")
  for (var i = 0; i < itemName.length; i++){
    if (itemName[i].innerText == name){
      item[i].innerText = "Add to Cart"
    }
  }
  buttonClicked.parentElement.remove()
  var content = document.getElementsByClassName("row")[0].innerText
  if (content == ""){
    var empty = document.getElementsByClassName("empty")[0]
    empty.style.display = "block"
    var btn = document.getElementsByClassName("cartbtn")[0]
    btn.style.display = "none"
  }
  updateCart()
}


var modal = document.getElementById("mycart")
var btn = document.getElementById("cart")
var span = document.getElementsByClassName("close")[0]
btn.onclick = function() {
  modal.style.display = "block"
}
span.onclick = function() {
  modal.style.display = "none"
}


function itemIn(){
  var empty = document.getElementsByClassName("empty")[0]
  empty.style.display = "none"
  var checkOut = document.getElementsByClassName("cartbtn")[0]
  checkOut.style.display = "inline"
}
