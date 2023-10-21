let MenuItems = ["Picanha", "Picada", "Tomahawk","Costila","Wagyu","Filete T-Bone","Cuadril","Churrasco","Bife ","Bife Ancho ","Tira","Bife Vacío","Lomo","Rib Eye","Porterhouse","Kebab","Filete","Top Sirloin","Arrachera","Entraña"];

function InitialValues() {
    var select = document.getElementsByClassName("menuItems");

    for (var i = 0; i < select.length; i++) {

        MenuItems.forEach((value) => {
            // New item
            let option = document.createElement("option");
            option.text = value;
            option.value = value;

            select[i].appendChild(option);
        });
    }
}

const pedidos = {};

function agregarPedido() {
  const productoSeleccionado = document.getElementById('productos').value;
  if (pedidos[productoSeleccionado]) {
    pedidos[productoSeleccionado]++;
  } else {
    pedidos[productoSeleccionado] = 1;
  }
  actualizarListaPedidos();
}

function actualizarListaPedidos() {
  const listaPedidos = document.getElementById('listaPedidos');
  listaPedidos.innerHTML = '';
  for (const producto in pedidos) {
    const item = document.createElement('tr');
    item.textContent = `${producto} | ${producto} ${pedidos[producto]}`;
    listaPedidos.appendChild(item);
  }
}




function agregarPedido2() {
  const productoSeleccionado = document.getElementById('productos2').value;
  if (pedidos[productoSeleccionado]) {
    pedidos[productoSeleccionado]++;
  } else {
    pedidos[productoSeleccionado] = 1;
  }
  actualizarListaPedidos2();
}

function actualizarListaPedidos2() {
  const listaPedidos = document.getElementById('listaPedidos2');
  listaPedidos.innerHTML = '';
  for (const producto in pedidos) {
    const item = document.createElement('tr');
    item.textContent = `${producto} | ${producto} ${pedidos[producto]}`;
    listaPedidos.appendChild(item);
  }
}


function agregarPedido3() {
  const productoSeleccionado = document.getElementById('productos3').value;
  if (pedidos[productoSeleccionado]) {
    pedidos[productoSeleccionado]++;
  } else {
    pedidos[productoSeleccionado] = 1;
  }
  actualizarListaPedidos3();
}

function actualizarListaPedidos3() {
  const listaPedidos = document.getElementById('listaPedidos3');
  listaPedidos.innerHTML = '';
  for (const producto in pedidos) {
    const item = document.createElement('tr');
    item.textContent = `${producto} | ${producto} ${pedidos[producto]}`;
    listaPedidos.appendChild(item);
  }
}


function agregarPedido4() {
  const productoSeleccionado = document.getElementById('productos4').value;
  if (pedidos[productoSeleccionado]) {
    pedidos[productoSeleccionado]++;
  } else {
    pedidos[productoSeleccionado] = 1;
  }
  actualizarListaPedidos4();
}

function actualizarListaPedidos4() {
  const listaPedidos = document.getElementById('listaPedidos4');
  listaPedidos.innerHTML = '';
  for (const producto in pedidos) {
    const item = document.createElement('tr');
    item.textContent = `${producto} | ${producto} ${pedidos[producto]}`;
    listaPedidos.appendChild(item);
  }
}

function AddTemplateItem(label, value) {
    let template = `<li class="list-group-item d-flex justify-content-between align-items-center">${label}<span class="badge bg-primary rounded-pill">${value}</span></li>`

    return template;
}

function AddTableItem(id, first, last, handle) {
    let template = `<tr><th scope="row">${id}</th><td>${first}</td><td>${last}</td><td>${handle}</td></tr>`

    return template;
}

function AddTableItemOption2(id, first, last, handle) {
    let tableRow = document.createElement("tr");
    let tableDataId = document.createElement("th");
    let tableDataFirst = document.createElement("td");
    let tableDataLast = document.createElement("td");
    let tableDataHandle = document.createElement("td");

    tableDataId.appendChild(document.createTextNode(id));
    tableDataId.scope = "row";
    
    tableDataFirst.appendChild(document.createTextNode(first));
    tableDataLast.appendChild(document.createTextNode(last));
    tableDataHandle.appendChild(document.createTextNode(handle));

    tableRow.appendChild(tableDataId);
    tableRow.appendChild(tableDataFirst);
    tableRow.appendChild(tableDataLast);
    tableRow.appendChild(tableDataHandle);

    return tableRow;
}

// Initial values and template defaults
InitialValues();