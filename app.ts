class Rectangulo {
    
    constructor(
        public baseRectangulo: number, 
        public alturaRectangulo: number, 
        public color: string
        ){}

    calcularArea(): number { 
        const result: number = this.baseRectangulo * this.alturaRectangulo;
        this.printResult(result);
        return result;
    }

    calcularPerimetro(): number {
        const result: number = (2 * this.alturaRectangulo) + (2 * this.baseRectangulo);
        this.printResult(result);
        return result;
    }

    static calcularPerimetroRectangulo(altura: number, base: number): number {
        return (2 * altura) + (2 * base);
    }

    private printResult(result: number): void {
        console.log("Este es el resultado: ", result);
        
    }
}

class Circulo {
    static numeroDeCirculos: number = 0;
    static readonly PI: number = 3.1416;
    constructor(
        private radio: number,
    ){
        Circulo.numeroDeCirculos++;
    }

    calcularArea(): number {
        return Math.PI * (this.radio * this.radio)
    }
}

const Recto: Rectangulo = new Rectangulo(5, 10, "White"); 

Rectangulo.calcularPerimetroRectangulo(2,2);
