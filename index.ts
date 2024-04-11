interface Pippo { a: number; };
interface Pluto { b: number; };

type CiccioDiNonnaPapera = {
    // a: number;
    b: number;
    c: number;
}

type Paperino = Pippo | Pluto;

const ciccio: CiccioDiNonnaPapera = {
    //a: 5,
    b: 4,
    c: 7
};

function funci(p: Pippo) {
    console.log(p.a);
}

funci(ciccio);