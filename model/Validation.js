function Validation() {
  this.kiemTraRong = function (value, spanId, message) {
    if (value == "") {
      getEle(spanId).innerHTML = message;
      getEle(spanId).style.display = "block";
      return false;
    }
    getEle(spanId).innerHTML = "";
    getEle(spanId).style.display = "none";
    return true;
  };
  this.kiemTraDoDai = function (value, spanId, message, min, max) {
    if (value.trim().length >= min && value.trim().length <= max) {
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    }
    getEle(spanId).innerHTML = message;
    getEle(spanId).style.display = "block";
    return false;
  };
  this.kiemTraLuongVaGio = function (value, spanId, message, min, max) {
    if (value >= min && value <= max) {
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    }
    getEle(spanId).innerHTML = message;
    getEle(spanId).style.display = "block";
    return false;
  };

  this.kiemTraEmail = function (value, spanId, message) {
    var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(email)) {
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    }
    getEle(spanId).innerHTML = message;
    getEle(spanId).style.display = "block";
    return false;
  };
  this.kiemTraMatKhau = function (value, spanId, message) {
    var matKhau =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if (value.match(matKhau)) {
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    }
    getEle(spanId).innerHTML = message;
    getEle(spanId).style.display = "block";
    return false;
  };
  this.kiemTraTen = function (value, spanId, message) {
    var letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(letter)) {
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    }
    getEle(spanId).innerHTML = message;
    getEle(spanId).style.display = "block";
    return false;
  };
  this.kiemTraNgay = function (value, spanId, message) {
    var date =
      /^(((0[1-9]|[12][0-9]|30)[-/]?(0[13-9]|1[012])|31[-/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/]?02)[-/]?[0-9]{4}|29[-/]?02[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$/;
    if (value.match(date)) {
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    }
    getEle(spanId).innerHTML = message;
    getEle(spanId).style.display = "block";
    return false;
  };
  this.kiemTraSo = function (value, spanId, message) {
    var integer = /^[0-9]+$/;
    if (value.match(integer)) {
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    }
    getEle(spanId).innerHTML = message;
    getEle(spanId).style.display = "block";
    return false;
  };
  this.kiemTraTrung = function (value, spanId, message, array) {
    var flag = true;
    for (let i = 0; i < array.length; i++) {
      let nhanVien = array[i];
      if (nhanVien.taiKhoan === value) {
        flag = false;
        break;
      }
    }
    if (flag) {
      getEle(spanId).innerHTML = message;
      getEle(spanId).style.display = "block";
      return false;
    }
    getEle(spanId).innerHTML = "";
    getEle(spanId).style.display = "none";
    return true;
  };
  this.kiemTraChucVu = function (value, spanId, message) {
    if (value === "Chọn chức vụ") {
      getEle(spanId).innerHTML = message;
      getEle(spanId).style.display = "block";
      return false;
    }
    getEle(spanId).innerHTML = "";
    getEle(spanId).style.display = "none";
    return true;
  };
}
