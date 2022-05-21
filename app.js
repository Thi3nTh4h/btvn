var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _html = ''; // hien thi sinh vien
var enter = ''; //hien thi diem trung binh va xep laoi
var money = ''; // hien thi bang luong
var ConNguoi = /** @class */ (function () {
    function ConNguoi(ten, tuoi, gioiTinh, diaChi) {
        this.ten = ten;
        this.tuoi = tuoi;
        this.gioiTinh = gioiTinh;
        this.diaChi = diaChi;
    }
    ConNguoi.prototype.hienThithongTin = function () {
        _html +=
            "<tr>\n            <td>".concat(this.ten, "</td>\n            <td>").concat(this.tuoi, "</td>\n            <td>").concat(this.gioiTinh, "</td>\n            <td>").concat(this.diaChi, "</td>\n       </tr>");
    };
    return ConNguoi;
}());
var conNguoi1 = new ConNguoi('thien thanh', 19, true, 'hai phong');
var conNguoi2 = new ConNguoi('thien thanh', 19, true, 'hai phong');
var conNguoi3 = new ConNguoi('thien thanh', 19, true, 'hai phong');
conNguoi1.hienThithongTin();
conNguoi2.hienThithongTin();
conNguoi3.hienThithongTin();
var table = document.getElementById('table').innerHTML = _html;
var sinhVien = /** @class */ (function (_super) {
    __extends(sinhVien, _super);
    function sinhVien(ten, tuoi, gioiTinh, diaChi, msv, diemToan, diemLy, diemHoa) {
        var _this = _super.call(this, ten, tuoi, gioiTinh, diaChi) || this;
        _this.msv = msv;
        _this.diemToan = diemToan;
        _this.diemLy = diemLy;
        _this.diemHoa = diemHoa;
        return _this;
    }
    sinhVien.prototype.hienThithongTin = function () {
        _html +=
            "<tr>\n             <td>".concat(this.ten, "</td>\n             <td>").concat(this.tuoi, "</td>\n             <td>").concat(this.gioiTinh, "</td>\n             <td>").concat(this.diaChi, "</td>\n        </tr>");
    };
    sinhVien.prototype.tinhDTB = function () {
        var diemTb = (this.diemToan * this.diemHoa * this.diemLy) / 3;
    };
    sinhVien.prototype.xepLoai = function () {
        var tongDiem = this.diemHoa + this.diemToan + this.diemLy;
        var diemTB = tongDiem / 3;
        var xepLoai = '';
        if (diemTB > 5 && diemTB < 6.5) {
            xepLoai = 'Trung Bình';
        }
        else if (diemTB >= 6.5 && diemTB < 8) {
            xepLoai = 'Khá';
        }
        else if (diemTB >= 8 && diemTB < 9) {
            xepLoai = 'Giỏi';
        }
        else if (diemTB >= 9) {
            xepLoai = 'Xuất sắc';
        }
        else {
            xepLoai = 'Yếu kém';
        }
        enter +=
            "<tr>\n        <td>".concat(this.ten, "</td>\n        <td>").concat(this.tuoi, "</td>\n        <td>").concat(this.gioiTinh, "</td>\n        <td>").concat(this.diaChi, "</td>\n        <td>").concat(diemTB, "</td>\n        <td>").concat(xepLoai, "</td>\n        </tr>");
    };
    return sinhVien;
}(ConNguoi));
var sinhVien1 = new sinhVien('thien thanh', 19, true, 'hai phong', 'B9167', 6, 5, 6);
var sinhVien2 = new sinhVien('thien thanh', 19, true, 'hai phong', 'B9167', 8, 7, 7);
var sinhVien3 = new sinhVien('thien thanh', 19, true, 'hai phong', 'B9167', 9, 9, 10);
sinhVien1.xepLoai();
sinhVien2.xepLoai();
sinhVien3.xepLoai();
var table = document.getElementById('avg').innerHTML = enter;
var nhanVien = /** @class */ (function (_super) {
    __extends(nhanVien, _super);
    function nhanVien(ten, tuoi, gioiTinh, diaChi, mGV, luongCB, soNgaycong) {
        var _this = _super.call(this, ten, tuoi, gioiTinh, diaChi) || this;
        _this.mGV = mGV;
        _this.luongCB = luongCB;
        _this.soNgaycong = soNgaycong;
        return _this;
    }
    nhanVien.prototype.hienThithongTin = function () {
        _html +=
            "<tr>\n            <td>".concat(this.ten, "</td>\n            <td>").concat(this.tuoi, "</td>\n            <td>").concat(this.gioiTinh, "</td>\n            <td>").concat(this.diaChi, "</td>\n       </tr>");
    };
    nhanVien.prototype.tinhLuong = function () {
        var luongThang = this.luongCB * this.soNgaycong;
    };
    nhanVien.prototype.xepLoai = function () {
        var xepLoailuong = '';
        var luong = this.luongCB * this.soNgaycong;
        if (luong > 2000000 && luong < 4000000) {
            xepLoailuong = 'trung binh';
        }
        else if (luong >= 4000000 && luong < 7000000) {
            xepLoailuong = 'kha';
        }
        else if (luong >= 7000000 && luong < 9000000) {
            xepLoailuong = 'tot';
        }
        else if (luong >= 9000000) {
            xepLoailuong = 'xuat sac';
        }
        else {
            xepLoailuong = 'kem';
        }
        money +=
            "<tr>\n             <td>".concat(this.ten, "</td>\n            <td>").concat(this.tuoi, "</td>\n            <td>").concat(this.gioiTinh, "</td>\n            <td>").concat(this.diaChi, "</td>\n            <td>").concat(luong, "</td>\n            <td>").concat(xepLoailuong, "</td>\n        </tr>");
    };
    return nhanVien;
}(ConNguoi));
var nhanVien1 = new nhanVien('thien thanh', 19, true, 'hai phong', 'B9167', 200000, 30);
var nhanVien2 = new nhanVien('thien thanh', 19, true, 'hai phong', 'B9167', 300000, 30);
var nhanVien3 = new nhanVien('thien thanh', 19, true, 'hai phong', 'B9167', 100000, 30);
nhanVien1.xepLoai();
nhanVien2.xepLoai();
nhanVien3.xepLoai();
document.getElementById('money').innerHTML = money;
