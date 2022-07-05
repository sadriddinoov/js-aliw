var ticetdollarda = 500
var hoteldollarda = 250
var travelingevroda = 120
var usaTOuzs = 9433.34
var euroTOuzs = 10354.03

var ticetuzs = Math.round(ticetdollarda * usaTOuzs)
var hoteluzs = Math.round(hoteldollarda * usaTOuzs)
var traveluzs = Math.round(travelingevroda * euroTOuzs) 


var totalcost = (ticetuzs + hoteluzs + traveluzs)

var totalMoney = prompt(`Aliw qancha puling bor`)

if(totalcost <= totalMoney)
   alert(`Aliwer bemalol dam olib kel, kelib javascriptni organasan`)
else(
   alert(`dam oliwga bormaysan, javaskriptni organasan`)
)