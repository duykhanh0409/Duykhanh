function cong() {
    var value = parseInt(document.getElementById('amount').value);
    value = value + 1;
    document.getElementById('amount').value = value;
}

function tru() {
    var value = parseInt(document.getElementById('amount').value);
    if (value > 0) {
        var value = parseInt(document.getElementById('amount').value);
        value = value - 1;
        document.getElementById('amount').value = value;
    } else {
        alert("vui lòng chọn hơn 1 sản phẩm");
    }

}