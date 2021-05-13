var a = prompt("Nhập giá trị a:")
console.log("a = " + a)
var b = prompt("Nhập giá trị b:")
console.log("b = " + b)

if (isNaN(a) || isNaN(b)){
    alert("Hãy nhập vào số!")
}
else if (a == 0){
    alert("Phương trình vô nghiệm!")
}
else if (b == 0) {
    alert("Phương trình có vô số nghiệm!")
}
else{
    x = -b/a
    console.log(x)
    alert("Kết quả x là: " + x)
}