// สร้าง Data ในรูปแบบ object  จะได้ข้อมูลเป็น key-value pair
const data = {
    "A" : 1,
    "B" : 5,
    "Z" : 10,
    "L" : 50,
    "C" : 100,
    "D" : 500,
    "R" : 1000,
}

let output = 0;
let prevValue =0;

function alienNumeral (s) {
    for (let i = 0; i < s.length; i++){
        const symbol = s[i]
        const value = data[symbol]
        if (value > prevValue) {
            // เมื่อ value ตัวแรกมีค่ามากกว่า value ตัวที่สอง 
            output -= 2 * prevValue;
        }
        output += value;
        prevValue = value;
    }
    return output;
}
// ส่วนของการ execute function และ test cases

// let s = "AAA";
// let s = "LBAAA";
let s = "RCRZCAB";
// let s = "ZAA";
console.log("Output: " + alienNumeral(s));