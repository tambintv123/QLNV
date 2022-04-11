function DanhSachNhanVien() {
  this.dsNhanVien = [];
  this.timViTriNV = function (taiKhoan) {
    let index = -1;
    for (let i = 0; i < this.dsNhanVien.length; i++) {
      let nhanVien = this.dsNhanVien[i];
      if (nhanVien.taiKhoan == taiKhoan) {
        index = i;
        break;
      }
    }
    return index;
  };
  this.layThongTinNV = function (taiKhoan) {
    let index = this.timViTriNV(taiKhoan);
    if (index != -1) {
      let nhanVien = this.dsNhanVien[index];
      return nhanVien;
    }
    return null;
  };
  this.themNhanVien = function (nhanVien) {
    this.dsNhanVien.push(nhanVien);
  };
  this.xoaNhanVien = function (taiKhoan) {
    let index = this.timViTriNV(taiKhoan);
    if (index != -1) {
      this.dsNhanVien.splice(index, 1);
    }
  };
  this.capNhatNhanVien = function (nhanVien) {
    let index = this.timViTriNV(nhanVien.taiKhoan);
    if (index != -1) {
      this.dsNhanVien[index] = nhanVien;
    }
  };
  this.timKiemNhanVien = function (keyword) {
    let mangTimKiem = [];
    for (let i = 0; i < this.dsNhanVien.length; i++) {
      let nhanVien = this.dsNhanVien[i];
      if (nhanVien.xepLoai.toLowerCase().indexOf(keyword.toLowerCase()) != -1) {
        mangTimKiem.push(nhanVien);
      }
    }
    return mangTimKiem;
  };
}
