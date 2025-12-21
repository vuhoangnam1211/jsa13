// alert("hello")
console.log("ABC");
console.log(2);

// Biến số : <tên biến> = <giá trị>
// statement ( let, var, const)
// tên biến : tự đặt
// = : gán giá trị
// giá trị : value...
let name = "MindX"
console.log(name);
let x = 50
let a = false
// Quy tắc đặt tên :CamelCase
let firstName = "Nam"
let lastName = "Vu"
console.log(lastName + " " + firstName);

// Data Type :
// 1. String : dạng chữ, ký tự, thường nằm trong dấu ""
let abc = "ABC"
// 2. Number : dạng số
let y = 100
// 3. Boolean : dạng đúng sai (chỉ trả ra kết quả dạng True/False)
let C = true
let D = false
// 4. Undefined : dạng biến khi chưa được gán giá trị
let result ;
// 5. Null : Kiểu dữ liệu dạng rỗng
let E = null

// Các thao tác với chuỗi ( string ) trong JS
// position : Phần tử trong chuỗi, bắt đầu bằng 1
// index : chỉ số vị trí trong chuỗi, bắt đầu từ 0
let name1 = "MindX"
console.log(name1[1]);
// Gộp chuỗi
let hello = "Hello"
let hi = "JSA17"
console.log(hello + " " + hi);

// Đếm sỗ kí tự trong chuỗi
let fullName = "Vu Hoang Nam"
console.log(fullName.length);


// Tách chuỗi : 
console.log(fullName.split(" "));

// Cắt chuỗi : 
let text = "Hello World"
console.log(text.slice(0,5));

// Viết hoa chuỗi : 
console.log(text.toUpperCase());

// Viết thường chuỗi : 
let text1 = "HELLO WORLD"
console.log(text.toLowerCase());

// Loại bỏ khoảng trắng
let text2 = "           ABC"
console.log(text2.trim());

// Bài tập 1
let str1 = "Hello";
let str2 = "MindX";
let kethop = str1 + " " + str2;
console.log(kethop);

// Bài tập 2
let ten = "vu hoang nam";
let words = ten.split(" ");

let first = words[0][0].toUpperCase() + words[0].slice(1);
let second = words[1][0].toUpperCase() + words[1].slice(1);
let third = words[2][0].toUpperCase() + words[2].slice(1);

let ketqua = first + " " + second + " " + third;
console.log(ketqua);