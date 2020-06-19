let arr
let arr2

function calculation() {
    arr = document.getElementById("values").value
    arr2 = arr.split(",")
    prms(arr2)
    nrms(arr2)
    totalrms(arr2)
}

function prms(arr2) {
    let sup = 0
    let resultp = 0
    let positive = arr2.filter((v, i, o) => {
        return (v >= 0)
    })
    positive.forEach((v, i, o) => {
        sup = sup + Math.pow(v, 2)
    })
    resultp = Math.sqrt(sup / (positive.length))
    if (resultp > 0)
        document.getElementById("pRMS").innerHTML = resultp
    else
        document.getElementById("pRMS").innerHTML = 0
}

function nrms(arr2) {
    let sun = 0
    let resultn = 0
    let negative = arr2.filter((v, i, o) => {
        return (v < 0)
    })
    negative.forEach((v, i, o) => {
        sun = sun + Math.pow(v, 2)
    })
    resultn = Math.sqrt(sun / (negative.length))
    if (resultn > 0)
        document.getElementById("nRMS").innerHTML = resultn
    else
        document.getElementById("nRMS").innerHTML = 0
}

function totalrms(arr2) {
    let su = 0
    let result = 0
    arr2.forEach((v, i, o) => {
        su = su + Math.pow(v, 2)
    })
    result = Math.sqrt(su / (arr2.length))
    document.getElementById("totalRMS").innerHTML = result;
}