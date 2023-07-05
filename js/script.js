function validateForm() {
    var name = document.forms['FormText']['name'].value;
    var emailaddress = document.forms['FormText']['emailaddress'].value;
    var Options = document.forms['FormText']['Options'].value;
    
    if (name == '' || emailaddress =='' || Options == '') {
        alert("Tidak ada boleh yang kosong")
        return false;
    }
    else {
        alert("yey bisa")
    }

}
