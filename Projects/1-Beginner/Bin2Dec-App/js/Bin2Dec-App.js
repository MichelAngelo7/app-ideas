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