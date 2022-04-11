const getEle = (id) => document.getElementById(id);

let result = getEle("tableDanhSach");
let dsnv = new DanhSachNhanVien();
let validation = new Validation();

/**
 * quy doi tien te VND
 */
const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

/**
 * Ham lay thong tin nhan vien
 */
const getInfo = () => {
  let _taiKhoan = getEle("tknv").value;
  let _ten = getEle("name").value;
  let _email = getEle("email").value;
  let _matKhau = getEle("password").value;
  let _ngayLam = getEle("datepicker").value;
  let _luongCoBan = getEle("luongCB").value;
  let _chucVu = getEle("chucvu").value;
  let _gioLam = getEle("gioLam").value;
  let isValid = true;

  isValid &=
    validation.kiemTraRong(
      _taiKhoan,
      "tbTKNV",
      "(*) Tài khoản không được để trống"
    ) &&
    validation.kiemTraDoDai(
      _taiKhoan,
      "tbTKNV",
      "(*) Tài khoản phải từ 4 đến 6 ky so",
      4,
      6
    );

  isValid &= validation.kiemTraRong(_ten, "tbTen", "Tên không được để trống");
  isValid &=
    validation.kiemTraRong(
      _email,
      "tbEmail",
      "(*) Email không được để trống"
    ) &&
    validation.kiemTraEmail(
      _email,
      "tbEmail",
      "(*) Email không đúng định dạng"
    );
  isValid &=
    validation.kiemTraRong(
      _matKhau,
      "tbMatKhau",
      "(*) Mật khẩu không được để trống"
    ) &&
    validation.kiemTraDoDai(
      _matKhau,
      "tbMatKhau",
      "(*) Mật khẩu phải từ 6 đến 10 ky ky tu",
      6,
      10
    ) &&
    validation.kiemTraMatKhau(
      _matKhau,
      "tbMatKhau",
      "(*) Mật khẩu phải có ít nhất 1 ký tự viết hoa, 1 ký tự viết thường, 1 ký tự số, 1 ký tự đặc biệt"
    );
  isValid &=
    validation.kiemTraRong(
      _ngayLam,
      "tbNgay",
      "(*) Ngày làm không được để trống"
    ) &&
    validation.kiemTraNgay(
      _ngayLam,
      "tbNgay",
      "(*) Ngày làm không đúng định dạng"
    );
  isValid &=
    validation.kiemTraRong(
      _luongCoBan,
      "tbLuongCB",
      "(*) Lương cơ bản không được để trống"
    ) &&
    validation.kiemTraSo(
      _luongCoBan,
      "tbLuongCB",
      "(*) Lương cơ bản phải là số"
    ) &&
    validation.kiemTraLuongVaGio(
      _luongCoBan,
      "tbLuongCB",
      "(*) Lương cơ bản phải tu 1.000.000 den 20.000.000",
      1000000,
      20000000
    );

  isValid &= validation.kiemTraChucVu(
    _chucVu,
    "tbChucVu",
    "(*) Chức vụ không được để trống"
  );

  isValid &=
    validation.kiemTraRong(
      _gioLam,
      "tbGiolam",
      "(*) Giờ làm không được để trống"
    ) &&
    validation.kiemTraLuongVaGio(
      _gioLam,
      "tbGiolam",
      "(*) Giờ làm phải từ 80 giờ đến 200 giờ",
      80,
      200
    ) &&
    validation.kiemTraSo(_gioLam, "tbGiolam", "(*) Giờ làm phải là số");

  if (isValid) {
    let nhanVien = new NhanVien(
      _taiKhoan,
      _ten,
      _email,
      _matKhau,
      _ngayLam,
      _luongCoBan,
      _chucVu,
      _gioLam
    );

    nhanVien.tinhTongLuong();
    nhanVien.xepLoaiNhanVien();

    return nhanVien;
  }
  return null;
};

/**
 * Ham tao bang
 */
const createTable = (dsNhanVien) => {
  result.innerHTML = "";
  for (let i = 0; i < dsNhanVien.length; i++) {
    let nhanVien = dsNhanVien[i];
    result.innerHTML += `<tr>
                            <td>${nhanVien.taiKhoan}</td>
                            <td>${nhanVien.ten}</td>
                            <td>${nhanVien.email}</td>
                            <td>${nhanVien.ngayLam}</td>
                            <td>${nhanVien.chucVu}</td>
                            <td>${formatter.format(nhanVien.tongLuong)}</td>
                            <td>${nhanVien.xepLoai}</td>
                            <td><button class="btn btn-danger" onclick="xoaNV('${
                              nhanVien.taiKhoan
                            }')">Xóa</button></td>
                            <td><button class="btn btn-warning" onclick="suaNV('${
                              nhanVien.taiKhoan
                            }')" data-toggle="modal"
                            data-target="#myModal">Sửa</button></td>
                        </tr>`;
  }
};

/**
 * Set localstorage
 */
const setLocalStorage = () => {
  localStorage.setItem("dsnv", JSON.stringify(dsnv.dsNhanVien));
};

/**
 * Get localstorage
 */
const getLocalStorage = () => {
  let dataString = localStorage.getItem("dsnv");

  if (dataString) {
    let dataJson = JSON.parse(dataString);
    dsnv.dsNhanVien = dataJson;
    createTable(dsnv.dsNhanVien);
  }
};
getLocalStorage();

function themNV() {
  let nhanVien = getInfo();
  if (nhanVien) {
    dsnv.themNhanVien(nhanVien);
    createTable(dsnv.dsNhanVien);
    setLocalStorage();
  }
}

function xoaNV(taiKhoan) {
  dsnv.xoaNhanVien(taiKhoan);
  createTable(dsnv.dsNhanVien);
  setLocalStorage();
}

function suaNV(taiKhoan) {
  let nhanVien = dsnv.layThongTinNV(taiKhoan);
  getEle("tknv").value = nhanVien.taiKhoan;
  getEle("tknv").disabled = true;
  getEle("name").value = nhanVien.ten;
  getEle("email").value = nhanVien.email;
  getEle("password").value = nhanVien.matKhau;
  getEle("datepicker").value = nhanVien.ngayLam;
  getEle("luongCB").value = nhanVien.luongCoBan;
  getEle("chucvu").value = nhanVien.chucVu;
  getEle("gioLam").value = nhanVien.gioLam;

  getEle("btnCapNhat").style.display = "block";
}

getEle("btnThem").onclick = () => {
  getEle("tknv").disabled = false;
  getEle("btnCapNhat").style.display = "none";
};
function capNhatNV() {
  let nhanVien = getInfo();
  dsnv.capNhatNhanVien(nhanVien);
  createTable(dsnv.dsNhanVien);
  setLocalStorage();
}

/**
 * tim kiem nhan vien theo xep loai
 */

getEle("searchName").onkeyup = () => {
  let keyword = getEle("searchName").value;
  let listNV = dsnv.timKiemNhanVien(keyword);
  createTable(listNV);
};
