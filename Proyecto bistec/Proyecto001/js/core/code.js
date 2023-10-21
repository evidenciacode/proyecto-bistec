function AddItem(val) {
     //document.getElementById("salesItems").innerHTML = AddTableItem(1, val, `other: ${val}`, "1234");

    document.getElementById("salesItems").appendChild(AddTableItemOption2(1, val, `other: ${val}`, "5000"));

    document.getElementById("salesItems2").appendChild(AddTableItemOption2(2, val, `other: ${val}`, "200"));
}