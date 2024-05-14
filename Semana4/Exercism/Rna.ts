interface M {
    [key: string]: string
}
const Map: M = { 
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
}

export function toRna(dna: string): string {
    if(/[^ACGT]/.test(dna)) {
        throw 'Invalid input DNA.'
    }

    return dna.replace(/[ATCG]/g, m => Map[m])
}