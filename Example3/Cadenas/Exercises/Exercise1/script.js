function transcribir(texto) {
    let comARN = ""
    for (var letra of texto) {
        if (letra == "A") {
            comARN += "U"
            } else if (letra == "C") {
                comARN += "G"
            } else if (letra == "G") {
                comARN += "C"
            } else if (letra == "T") {
                comARN += "A"
            }
        }
    return(comARN);
}

console.log(transcribir("ACGT")) // "UGCA" 
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"
console.log(transcribir("AGTCACGTGCACAGTGT")) // "UCAGUGCACGUGUCACA"
console.log(transcribir("ACGTGTCACGTGTACACATTGGGTTT")) // "UGCACAGUGCACAUGUGUAACCCAAA"