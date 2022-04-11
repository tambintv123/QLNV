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
    var date = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
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
    var status = false;
    for (let i = 0; i < array.length; i++) {
      var nv = array[i];
      if (nv.taiKhoan === value) {
        status = true;
        break;
      }
    }
    if (status) {
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
