export function sum(...parms: any[]) {
    if (parms.length === 0) return 0

    let input = parms[0] as string
    let numbers
    const custom = input.substr(0, 2)
    if (custom === "//") {
        const del = input.substr(2, 1)
        input = input.slice(input.indexOf('\n')).split(del).join(',')
    } 
    
    numbers = input.split(new RegExp(",|\n")).map((elem) => Number(elem))
    if (numbers.length === 1) return numbers[0]
     else {
         let sum = 0
         numbers.forEach(num => sum = sum + num)
         return sum
     }
}
