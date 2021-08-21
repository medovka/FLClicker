let allPollen = 0,
activePollen = 1,
pricePollenActive = 50,
passivePollen = 0,
pricePollenPassive = 500

function flClicks() {
    allPollen += activePollen
    document.getElementById("allPollen").innerHTML = allPollen
}

function activeClicks() {
    if (allPollen < pricePollenActive) {
        alert ('Не хватает пыльцы!')
    } else {
        activePollen += 1
        allPollen -= pricePollenActive
        pricePollenActive += 10
        document.getElementById("active").innerHTML = activePollen
        document.getElementById("prisePollenActive").innerHTML = pricePollenActive
        document.getElementById("allPollen").innerHTML = allPollen
    }
}

function passiveClicks() {
    if (allPollen < pricePollenPassive) {
        alert ('Не хватает пыльцы!')
    } else {
        passivePollen += 1
        allPollen -= pricePollenPassive
        pricePollenPassive += 100
        document.getElementById("passive").innerHTML = passivePollen
        document.getElementById("prisePollenPassive").innerHTML = pricePollenPassive
        document.getElementById("allPollen").innerHTML = allPollen
    }
}

const interval = setInterval(function() {
    allPollen += passivePollen
    document.getElementById("allPollen").innerHTML = allPollen
}, 1000)