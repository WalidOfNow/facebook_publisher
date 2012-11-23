function Check_checked() {

    boxes = document.f1.Liked.length
    txt = ""
    for (i = 0; i < boxes; i++) {
        if (document.f1.Liked[i].checked) {
            txt = txt + document.f1.Liked[i].value + " "
        }
    }


    if (txt == "") {
        Message = "No Boxes ticked"
    }
    else {
        Message = ""
    }

    return Message
}