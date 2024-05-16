const a = new ArrayBuffer(8);
const b = new Uint8Array(a);
b[0] = 015;
console.log(b);