//Xay dung lop MyDate
let MyDate = function (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    //Xay dung phuong thuc tra ve ngay, thang, nam
    this.getDay = function () {
        return this.day;
    }
    this.getMonth = function () {
        return this.month;
    }
    this.getYear = function () {
        return this.year;
    }
    //Thiet dat lai gia tri cac thuoc tinh day, month, year
    this.setDay = function (day) {
        this.day = day;
    }
    this.setMonth = function (month) {
        this.month = month;
    }
    this.setYear = function (year) {
        this.year = year;
    }
    this.setDate = function (day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    this.toString = function () {
        //Them so 0 ao truoc neu ngay hoac thang nho hon 10
        let formatDay = String(this.day).padStart(2, '0');
        let formatMonth = String(this.month).padStart(2, '0');
        return `${formatDay}/${formatMonth}/${this.year}`;
    }
};
//Tao doi tuong date voi ngay 2-2-2007
let date = new MyDate(20, 12, 2007);
//Thay doi ngay, thang, nam cua doi tuong date
date.setDay(30);
date.setMonth(4);
date.setYear(2002);
date.setDate(31,7,2024);
//Truy cap phuong thuc cua lop MyDate
let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();
alert(date.toString());
