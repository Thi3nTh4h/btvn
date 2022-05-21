let _html = ''; // hien thi sinh vien
let enter = ''; //hien thi diem trung binh va xep laoi
let money = ''; // hien thi bang luong
class ConNguoi{
    ten:string;
    tuoi:number;
    gioiTinh:boolean;
    diaChi: string;
    constructor(ten:string, tuoi:number,gioiTinh:boolean,diaChi: string){
        this.ten = ten;
        this.tuoi = tuoi;
        this.gioiTinh = gioiTinh;
        this.diaChi = diaChi;
    }
    hienThithongTin():void{
       _html += 
       `<tr>
            <td>${this.ten}</td>
            <td>${this.tuoi}</td>
            <td>${this.gioiTinh}</td>
            <td>${this.diaChi}</td>
       </tr>` 
    }
}
var conNguoi1 = new ConNguoi ('thien thanh', 19, true, 'hai phong' );
var conNguoi2 = new ConNguoi ('thien thanh', 19, true, 'hai phong' );
var conNguoi3 = new ConNguoi ('thien thanh', 19, true, 'hai phong' );
conNguoi1.hienThithongTin();
conNguoi2.hienThithongTin();
conNguoi3.hienThithongTin();
var table = document.getElementById('table').innerHTML = _html;

class sinhVien extends ConNguoi{
    msv:string;
    diemToan:number;
    diemLy:number;
    diemHoa:number;
    constructor(ten:string, tuoi:number,gioiTinh:boolean,diaChi:string,msv:string,diemToan:number,diemLy:number,diemHoa:number){
        super(ten, tuoi, gioiTinh, diaChi);
        this.msv = msv;
        this.diemToan = diemToan;
        this.diemLy = diemLy;
        this.diemHoa = diemHoa;
    }
    hienThithongTin():void{
         _html += 
         `<tr>
             <td>${this.ten}</td>
             <td>${this.tuoi}</td>
             <td>${this.gioiTinh}</td>
             <td>${this.diaChi}</td>
        </tr>` 
     }
     tinhDTB():any{
        
         var diemTb = (this.diemToan * this.diemHoa * this.diemLy) / 3;
     }
     xepLoai():any{
            
            var tongDiem = this.diemHoa + this.diemToan + this.diemLy;
            let diemTB = tongDiem / 3; 
            let xepLoai = '';
            if (diemTB > 5 && diemTB < 6.5) {
            xepLoai = 'Trung Bình';
            } else if (diemTB >= 6.5 && diemTB < 8) {
            xepLoai = 'Khá';
            } else if (diemTB >= 8 && diemTB < 9) {
            xepLoai = 'Giỏi';
            } else if (diemTB >= 9) {
            xepLoai = 'Xuất sắc';
            } else {
            xepLoai = 'Yếu kém';
            }
        enter += 
        `<tr>
        <td>${this.ten}</td>
        <td>${this.tuoi}</td>
        <td>${this.gioiTinh}</td>
        <td>${this.diaChi}</td>
        <td>${diemTB}</td>
        <td>${xepLoai}</td>
        </tr>`
    
}
}
var sinhVien1 = new sinhVien ('thien thanh', 19, true , 'hai phong', 'B9167', 6,5,6)
var sinhVien2 = new sinhVien ('thien thanh', 19, true , 'hai phong', 'B9167', 8,7,7)
var sinhVien3 = new sinhVien ('thien thanh', 19, true , 'hai phong', 'B9167', 9,9,10)
sinhVien1.xepLoai();
sinhVien2.xepLoai();
sinhVien3.xepLoai();
var table = document.getElementById('avg').innerHTML = enter;

class nhanVien extends ConNguoi {
    mGV: string;
    luongCB: number;
    soNgaycong: number;
    constructor(ten:string, tuoi:number,gioiTinh:boolean,diaChi:string, mGV:string, luongCB:number, soNgaycong:number){
        super(ten,tuoi,gioiTinh,diaChi)
        this.mGV = mGV;
        this.luongCB = luongCB;
        this.soNgaycong = soNgaycong;

    }
    hienThithongTin():void{
        _html += 
        `<tr>
            <td>${this.ten}</td>
            <td>${this.tuoi}</td>
            <td>${this.gioiTinh}</td>
            <td>${this.diaChi}</td>
       </tr>` 
    }
    tinhLuong():any{
        var luongThang = this.luongCB * this.soNgaycong;
    }
    xepLoai(){
        var xepLoailuong = '';
        var luong = this.luongCB * this.soNgaycong;
        if (luong > 2000000 && luong < 4000000) {
            xepLoailuong = 'trung binh';
        }else if (luong >= 4000000 && luong < 7000000){
            xepLoailuong = 'kha';
        }else if (luong >= 7000000 && luong < 9000000){
            xepLoailuong = 'tot';
        }else if(luong >= 9000000){
            xepLoailuong = 'xuat sac';
        }
        else{
            xepLoailuong = 'kem';
        }

        money +=
        `<tr>
             <td>${this.ten}</td>
            <td>${this.tuoi}</td>
            <td>${this.gioiTinh}</td>
            <td>${this.diaChi}</td>
            <td>${luong}</td>
            <td>${xepLoailuong}</td>
        </tr>`
    }
}
var nhanVien1 = new nhanVien('thien thanh', 19, true,'hai phong' , 'B9167',200000,30)
var nhanVien2 = new nhanVien('thien thanh', 19, true,'hai phong' , 'B9167',300000,30)
var nhanVien3 = new nhanVien('thien thanh', 19, true,'hai phong' , 'B9167',100000,30)
nhanVien1.xepLoai();
nhanVien2.xepLoai();
nhanVien3.xepLoai();
document.getElementById('money').innerHTML = money;