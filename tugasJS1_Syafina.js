// IF ELSE
// let nilai = 65;

// if (nilai >= 90) {
//  console.log("Grade: A");
// } else if (nilai >= 80) {
//  console.log("Grade: B");
// } else if (nilai >= 70) {
//  console.log("Grade: C");
// } else if (nilai >= 60) {
//  console.log("Grade: D");
// } else {
//  console.log("Grade: F");
// }

// NESTED IF
// let nilai = 88;

// if (nilai >= 60) {
//     console.log("Anda lulus pada pilihan pertama.");

//     if (nilai >= 70) {
//         console.log("Anda lulus pada pilihan kedua.");
//     } else {
//         console.log("Anda tidak lulus pada pilihan kedua.");
//     }
// } else {
//     console.log("Anda tidak lulus pada pilihan pertama.");
// }

// SWITCH CASE
// let nilai = 65;
// let grade;

// switch (true) {
//  case nilai >= 90:
//     grade = "A";
//     break;
//  case nilai >= 80:
//     grade = "B";
//     break;
//  case nilai >= 70:
//     grade = "C";
//     break;
//  case nilai >= 60:
//     grade = "D";
//     break;
// }
// console.log("Grade:", grade);

// FOR STATEMENT
// for (let i = 7; i < 21; i++) {
//     console.log('The number is: ' + i);
//    }

// WHILE
// let i = 7;
// while (i < 21) {
//  console.log('The number is: ' + i);
//  i++;
// }

// DO WHILE
// let i = 7;
// do {
//  console.log('The number is: ' + i);
//  i++;
// } while (i < 21);

// FUNCTION
function jumlahNilai(nilai) {
    if (nilai >= 90) {
       return 'Grade: A';
    } else if (nilai >= 80) {
       return 'Grade: B';
    } else if (nilai >= 70) {
       return 'Grade: C';
    } else if (nilai >= 60) {
       return 'Grade: D';
    } else {
       return 'Grade: F';
    }
   }
   console.log(jumlahNilai(65));