function updateClock() {
    let now = new Date()
    let dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hours = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = hours > 12 ? "PM" : "AM"
        hours = hours == 24 ? 0 : hours > 12 ? hours - 12 : hours;

    Number.prototype.pad = function(digits) {
        for (var n = this.toString(); n.length < digits; n=0+n);
        return n
    }

    let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    let week = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"]
    let ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"]
    
    let values = [week[dname], months[mo], dnum, yr, hours.pad(2), min.pad(2), sec.pad(2), pe]

    for (let i=0; i < ids.length; i++) {
        document.getElementById(ids[i]).firstChild.nodeValue = values[i]
    }
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1)
}