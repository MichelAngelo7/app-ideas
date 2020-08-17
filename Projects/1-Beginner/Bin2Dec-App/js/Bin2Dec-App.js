function toBin(number) {
    let result = []
    let rest
    quotient = number
    if (quotient != 0) {
        while (quotient != 1) {
            rest = quotient % 2
            result.push(rest)
            quotient = Math.ceil(quotient / 2) - quotient % 2
        }
        result.push(1)
    } else {
        result.push(0)
    }
    return `(${number})10 (${result.reverse().join('')})2`
}

function toDec(str) {
    let bin = []
    bin = str.toString().split('').reverse()
    let sum = 0

    for (let i = 0; i <= bin.length; i++) {
        if (bin[i] == 1) {
            sum += bin[i] * (2 ** i)
        }
    }
    return sum
}

function checkDec(str) {
    let check = []
    check = str.toString().split('').reverse()
    let result = []
    for (let i = 0; i < check.length; i++) {
        result[i] = `(${check[i]} X 2^${i})`
    }
    return result.join(' + ')
}