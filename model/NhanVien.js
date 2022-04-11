function NhanVien(
  _taiKhoan,
  _ten,
  _email,
  _matKhau,
  _ngayLam,
  _luongCoBan,
  _chucVu,
  _gioLam
) {
  this.taiKhoan = _taiKhoan;
  this.ten = _ten;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCoBan = _luongCoBan;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;
  this.tongLuong = 0;
  this.xepLoai = "";

  this.tinhTongLuong = function () {
    switch (this.chucVu) {
      case "Nhân viên": {
        this.tongLuong = parseFloat(this.luongCoBan);
        break;
      }
      case "Trưởng phòng": {
        this.tongLuong = parseFloat(this.luongCoBan) * 2;
        break;
      }
      case "Sếp": {
        this.tongLuong = parseFloat(this.luongCoBan) * 3;
        break;
      }
      default:
        break;
    }
  };
  this.xepLoaiNhanVien = function () {
    if (this.gioLam >= 192) return (this.xepLoai = "nhân viên xuất sắc");
    else if (this.gioLam >= 176) return (this.xepLoai = "nhân viên giỏi");
    else if (this.gioLam >= 160) return (this.xepLoai = "nhân viên khá");
    else if (this.gioLam < 160) return (this.xepLoai = "nhân viên trung bình");
  };
}
