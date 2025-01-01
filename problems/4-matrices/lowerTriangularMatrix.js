class LowerTriangularMatrix {
    constructor(n) {
        this.n = n; 
        this.A = new Array((n * (n + 1)) / 2).fill(0); 
    }

    getIndex(i, j) {
        if (i >= j) {
            return (this.n * (j - 1) + (j - 2) * (j - 1) / 2 + (i - j));
        }
        return -1; // Invalid index for upper triangular part
    }

    set(i, j, x) {
        if (i >= j) {
            const index = this.getIndex(i, j);
            if (index !== -1) {
                this.A[index] = x;
            }
        }
    }

    get(i, j) {
        if (i >= j) {
            const index = this.getIndex(i, j);
            if (index !== -1) {
                return this.A[index];
            }
        }
        return 0;
    }

    display() {
        for (let i = 1; i <= this.n; i++) {
            let row = "";
            for (let j = 1; j <= this.n; j++) {
                if (i >= j) {
                    row += this.get(i, j) + " ";
                } else {
                    row += "0 ";
                }
            }
            console.log(row.trim());
        }
    }
}

const n = 4; 
const matrix = new LowerTriangularMatrix(n);


const values = [
    [1],        // Row 1
    [2, 3],     // Row 2
    [4, 5, 6],  // Row 3
    [7, 8, 9, 10] // Row 4
];

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        matrix.set(i, j, values[i - 1][j - 1]);
    }
}
console.log("\nLower Triangular Matrix:");
matrix.display();
