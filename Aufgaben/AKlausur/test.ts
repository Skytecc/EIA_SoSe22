var a: number = 1;
while (a < 5) {
 a += a;

 console.log(a);
}

// Array Iterieren und höchstes Value bekommen

let test01: number[] = [85,89,102,222,55,110];

var highestNumber: number = test01[0];

for (var i: number = 0; i < test01[i] ; i++) {

    if(test01[i] > highestNumber) {
        highestNumber = test01[i];
    }   

}

console.log(highestNumber);