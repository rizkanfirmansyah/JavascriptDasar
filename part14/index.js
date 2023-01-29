// Branching/Percabangan Javascript

let nilai = prompt("Masukkan nilai semesrer anda");
nilai = parseInt(nilai);
let result = "";

switch (nilai) {
    case 100:
        result = "Nilai kamu A";
        break;
    case 90:
        result = "Nilai kamu A-";
        break;
    case 80:
        result = "Nilai kamu B+";
        break;
    case 70:
        result = "Nilai kamu B";
        break;
    case 60:
        result = "Nilai kamu C";
        break;
    default:
        result = "Kamu tidak lulus";
}

console.log(result);