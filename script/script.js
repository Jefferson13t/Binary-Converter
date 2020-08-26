let conv = window.document.querySelector('#bin')
let res = window.document.querySelector('#res')

function apag() {
    for(i = 0; i < conv.value.length ; i++) {
    if (conv.value[i] != '0' && conv.value[i] != '1') {
    conv.value = ''
   }
  }
}
function mostr() {
    for(i = 0; i < conv.value.length ; i++) {
        if (conv.value[i] != '0' && conv.value[i] != '1') {
        conv.value = 'Insert a binary number...'
       }
      }

    if (!conv.value) {
    conv.value = "Insert a binary number..."
    }
} 
function nov() {
    res.innerHTML = "Here comes the decimal number"
}
function mres() {
    for(i = 0; i < conv.value.length ; i++) {
        if (conv.value[i] != '0' && conv.value[i] != '1') {
    } else {
    converter(conv.value)
    }
}
function converter(cv) {
    
    if (conv.value[0] != "I"){

    let j = [];
    let k = [];
    let resp = 0;
    for (i = 0; i < cv.length; i++){
      j[i] = Number(cv[i])  
    }
    j.reverse()
    for (i = j.length - 1; i >= 0; i--) {
      k[i] = j[i] * (2 ** i)
    }
    for (let i in k){
        resp += k[i]
    }

    res.innerHTML = `The decimal value is <strong>${resp}</strong>`;
    conv.value = 'Insert a decimal number...';
}
}
}