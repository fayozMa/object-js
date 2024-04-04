let rusum = prompt('Mashinangizni rusumini kiritng: ')
let rang = prompt('va rangini ham :) ')
alert("'start' buyrug'ini yozsangiz mashina yonadi . 'Drive' buyrug'ida haydaymiz . 'Stop' buyrug'ida to'xtaymiz")
let i = 0
while(i<1){
 let buyruq = prompt("Buyruqni kiriting: ".toLowerCase())
 if (buyruq === "start"){
    alert(rang + "li " + rusum + "mashinasi VRUM VRUM")
 }else if(buyruq === 'drive'){
    alert(rang + "li " + rusum + "mashinasi DRIVING")
 } else if(buyruq === 'stop'){
    alert(rang + "li " + rusum + "mashinasi STOPPING")
 } else {
    alert("Faqat 'start' , 'drive' , 'stop' shartlari qabul qilinadi holos.")
 }    
}
function car(rusum , rang, buyruq){
    this.rusumi = rusum
    this.rangi = rang
    this.buyruq = buyruq
}
let cars = new car(rusum , rang , buyruq)