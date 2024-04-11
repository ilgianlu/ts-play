interface Pippo { a: number; };
interface Pluto { b: number; };

type Paperino = Pippo | Pluto;

const ciccio: Paperino = {
    a: 5,
    b: 4,
    c: 7
};