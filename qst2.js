const num = 17711
if(Number.isInteger(num)){
    console.log(`O número informado foi -> ${num}\nSequência:`)
    let a = 0, b = 1, c = 0
    console.log(`${a}\n${b}`)
    while(num >= c && num != c) {
        c = a + b
        a = b
        b = c
        if(num == c) {
            console.log(`-> ${c} <-`)
        } else {
            console.log(`${c}`)
        }
    }
    if(num == c) {
        console.log('O número informado pertence a sequência de Fibonacci!')
    } else {
        console.log('O número informado não pertence a sequência de Fibonacci!')
    }
} else {
    console.log('Informe valores adequados à sequência na próxima vez!')
}
