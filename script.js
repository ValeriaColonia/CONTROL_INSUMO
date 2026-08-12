/* =====================================================
   CONTROL DE INVENTARIO
   LocalStorage
===================================================== */

const CLAVE_INVENTARIO = "inventario_insumos";
const CLAVE_SALIDAS = "salidas_insumos";

const insumos = [
    "TUBO TAPA AMARILLA(5 ml)",
    "GRADILLA X 100",
    "TUBO TAPA AZUL CITRATADO",
    "TUBO TAPA LILA (4 ml)",
    "AGUJA MULTIPLE 21 * 1/2 ",
    "TUBO TAPA ROJA  (6 ml)",
    "EQUIPO ALADO 23 G* 3/4",
    "TORNIQUETE ADULTO",
    "TORNIQUETE PEDIATRICO",
    "TUBO TAPA AMARILLA  (3.5 ml)",
    "TUBO TAPA AZUL CITRATADO  (1.8 ml)",
    "TUBO TAPA LILA  (2 ml)",
    "TUBO PARA TRANSPORTE DE ORINA (CONICO)",
    "TUBO PARA CULTIVO DE ORINA",
    "NEEDLE HOLDER STANDARD TYPE (50)",
    "TUBOS DE GLUCOSA",
    "EQUIPO LUER",
    "TUBO TAPA LILA 5ML CON GEL",
    "HCG EN SUERO Y ORINA",
    "MEDIO DE TRANSPORTE AMIES CON CARBON CAJA X50",
    "CG Adhesive Label DTL 53X38 RollX2000",
    "ALGODÓN TORUNDAS PAQUETE",
    "ALCOHOL ANTISEPTICO FC*700ML",
    "CURAS ADHESIVAS REDONDAS CAJA X 100 UDS",
    "FRASCO MUESTRAS DE ORINA PAQUETE X 50 UNIDADES",
    "GUANTES DESECHABLES TALLA S CJA X100",
    "JERINGA * 10 CC CAJA X 100",
    "JERINGA * 5 CC CAJA X 100",
    "JERINGA *3 CC CAJA X 100",
    "LAMINAS PORTA OBJETOS ESMERILADAS CAJA",
    "GUARDIANES 2,9 LT CON TAPA UND",
    "TUBO POLIPROPILENO CON TAPA PQ*500",
    "FRASCO PARA BACILOSCOPIA PAQUETE X50",
    "BATA CIRUJANO LARGO PAQ *10",
    "CARGA DE GLUCOSA LIQUIDA - GALON 3750 ML",
    "PIPETA PASTEUR PLAST",
    "BIOSORB GELIFICANTE",
    "CINTA MEDIDORA PH",
    "TAPABOCAS DESECHABLES CAJA * 50",
    "HOJA DE BISTURI No 15 CAJA",
    "HOJAS DE BISTURI NO 11 CAJA",
    "APLICADORES CON ALGODÓN PAQ X 100",
    "GEL ANTIBACTERIAL 500 ML",
    "COMPRESAS QUIRURGICAS 45*45 NO ESTERILES UND",
    "CLORURO DE SODIO AL 0,9% X100 ML",
    "VINIPEL ROLLO",
    "GORROS DESECHABLES",
    "SABANAS DESECHABLES CAMILLA CON RESORTE PAQ*10",
    "BATA DESECHABLE PACIENTE PAQ*10",
    "FALDA CITOLOGIA PAQ* 10",
    "ROLLO SABANA DESECHABLE",
    "SD BIOLINE HIV 1/2 3.0 x 25 test (Kit toma de muestra)",
    "SD BIOLINE SYPHILIS 3.0 x 30 test (Kit toma de muestra)",
    "BIOLINE HCV Kit Completo Muestra Capilar X 30 cassettes",
    "EDTA CAPILLARY TUBE X 100 UD",
    "CHASE BUFFER 2.5 ML",
    "NEVERAS DE COAGULACION",
    "GELES",
    "VOLANTES",
    "TIRAS DE GLUCOMETRIA DB LIFE X 50 UNDS",
    "LANCETA DB LIFE X 50 UNDS",
    "SOLUCION CONTROL DB LIFE NIVEL 1",
    "SOLUCION CONTROL DB LIFE NIVEL 2"
];

const presentaciones = {
    "TUBO TAPA AMARILLA  (5 ml)": "GRADILLA X 100",
    "GRADILLA X 100": "GRADILLA X 100",
    "TUBO TAPA AZUL CITRATADO ": "GRADILLA X 100",
    "TUBO TAPA LILA  (4 ml)": "GRADILLA X 100",
    "AGUJA MULTIPLE 21 * 1/2 ": "CAJA X 100",
    "TUBO TAPA ROJA  (6 ml)": "GRADILLA X 100",
    "EQUIPO ALADO 23 G* 3/4": "CAJA X 100",
    "TORNIQUETE ADULTO": "UNIDAD",
    "TORNIQUETE PEDIATRICO": "UNIDAD",
    "TUBO TAPA AMARILLA  (3.5 ml)": "GRADILLA X 100",
    "TUBO TAPA AZUL CITRATADO  (1.8 ml)": "GRADILLA X 100",
    "TUBO TAPA LILA IMPROVE (2 ml)": "GRADILLA X 100",
    "TUBO PARA TRANSPORTE DE ORINA (CONICO)": "GRADILLA X 100",
    "TUBO PARA CULTIVO DE ORINA": "GRADILLA X 100",
    "NEEDLE HOLDER STANDARD TYPE (50)": "BOLSA X 50",
    "TUBOS DE GLUCOSA": "GRADILLA X 100",
    "EQUIPO LUER": "CAJA X 100",
    "TUBO TAPA LILA 5ML CON GEL": "UNIDAD",
    "HCG EN SUERO Y ORINA": "CAJA X 30",
    "MEDIO DE TRANSPORTE AMIES CON CARBON CAJA X50": "CAJA X 50",
    "CG Adhesive Label DTL 53X38 RollX2000": "UNIDAD",
    "ALGODÓN TORUNDAS PAQUETE": "PAQUETE",
    "ALCOHOL ANTISEPTICO FC*700ML": "UNIDAD",
    "CURAS ADHESIVAS REDONDAS CAJA X 100 UDS": "CAJA X 100",
    "FRASCO MUESTRAS DE ORINA PAQUETE X 50 UNIDADES": "PAQUETE X 50",
    "GUANTES DESECHABLES TALLA S CJA X100": "CAJA X 100",
    "JERINGA * 10 CC CAJA X 100": "CAJA X 100",
    "JERINGA * 5 CC CAJA X 100": "CAJA X 100",
    "JERINGA *3 CC CAJA X 100": "CAJA X 100",
    "LAMINAS PORTA OBJETOS ESMERILADAS CAJA": "CAJA X 50",
    "GUARDIANES 2,9 LT CON TAPA UND": "UNIDAD",
    "TUBO POLIPROPILENO CON TAPA PQ*500": "BOLSA X 500",
    "FRASCO PARA BACILOSCOPIA PAQUETE X50": "BOLSA X 50",
    "BATA CIRUJANO LARGO PAQ *10": "PAQ X 10",
    "CARGA DE GLUCOSA LIQUIDA - GALON 3750 ML": "GALON X 3750",
    "PIPETA PASTEUR PLAST": "CAJA X 500",
    "BIOSORB GELIFICANTE": "BOLSA X 10",
    "CINTA MEDIDORA PH": "UNIDAD",
    "TAPABOCAS DESECHABLES CAJA * 50": "CAJA X 50",
    "HOJA DE BISTURI No 15 CAJA": "CAJA X 100",
    "HOJAS DE BISTURI NO 11 CAJA": "CAJA X 100",
    "APLICADORES CON ALGODÓN PAQ X 100": "BOLSA X 100",
    "GEL ANTIBACTERIAL 500 ML": "UNIDAD 500 ML",
    "COMPRESAS QUIRURGICAS 45*45 NO ESTERILES UND": "BOLSAS X 10",
    "CLORURO DE SODIO AL 0,9% X100 ML": "UNIDAD",
    "VINIPEL ROLLO": "UNIDAD",
    "GORROS DESECHABLES": "PAQUETE X 50",
    "SABANAS DESECHABLES CAMILLA CON RESORTE PAQ*10": "UNIDAD",
    "BATA DESECHABLE PACIENTE PAQ*10": "UNIDAD",
    "FALDA CITOLOGIA PAQ* 10": "PAQUETE X 10",
    "ROLLO SABANA DESECHABLE": "UNIDAD",
    "SD BIOLINE HIV 1/2 3.0 x 25 test (Kit toma de muestra)": "CAJA X 25",
    "SD BIOLINE SYPHILIS 3.0 x 30 test (Kit toma de muestra)": "CAJA X 30",
    "BIOLINE HCV Kit Completo Muestra Capilar X 30 cassettes": "CAJA X 30",
    "EDTA CAPILLARY TUBE X 100 UD": "UNIDAD",
    "CHASE BUFFER 2.5 ML": "100 PRUEBAS HBS",
    "NEVERAS DE COAGULACION": "UNIDAD",
    "GELES": "UNIDAD",
    "VOLANTES": "UNIDAD",
    "TIRAS DE GLUCOMETRIA DB LIFE X 50 UNDS": "CAJA X 50",
    "LANCETA DB LIFE X 50 UNDS": "CAJA X 50",
    "SOLUCION CONTROL DB LIFE NIVEL 1": "UNIDAD",
    "SOLUCION CONTROL DB LIFE NIVEL 2": "UNIDAD"
};

function obtenerInventario() {
    return JSON.parse(localStorage.getItem(CLAVE_INVENTARIO)) || [];
}

function guardarInventario(inventario) {
    localStorage.setItem(CLAVE_INVENTARIO, JSON.stringify(inventario));
}

function obtenerSalidas() {
    return JSON.parse(localStorage.getItem(CLAVE_SALIDAS)) || [];
}

function guardarSalidas(salidas) {
    localStorage.setItem(CLAVE_SALIDAS, JSON.stringify(salidas));
}

document.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {
    cargarListaInsumos();
    cargarTablaInventario();
    cargarHistorialEntradas();
    cargarListaSalidas();
    establecerFechaActual();

    document.getElementById("formIngreso").addEventListener("submit", guardarIngreso);
    document.getElementById("formSalida").addEventListener("submit", registrarSalida);
    document.getElementById("insumo").addEventListener("change", completarPresentacion);
}

function mostrarVista(nombre) {
    document.querySelectorAll(".vista").forEach(vista => {
        vista.classList.remove("activa");
    });

    const vista = document.getElementById(nombre);
    if (vista) {
        vista.classList.add("activa");
    }

    if (nombre === "inventario") {
        // Por defecto al entrar a inventario mostramos la tabla actual
        mostrarInventarioActual();
    }

    if (nombre === "salida") {
        cargarListaSalidas();
    }

    if (nombre === "consumo") {
        calcularConsumo();
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* =====================================================
   CONTROL DE VISTAS DENTRO DE INVENTARIO (ACTUAL VS HISTORIAL)
===================================================== */
let viendoHistorialEntradas = false;

function alternarVistaInventario() {
    viendoHistorialEntradas = !viendoHistorialEntradas;
    const btn = document.getElementById("btnCambiarVistaInv");
    const titulo = document.getElementById("tituloInventario");
    const subtitulo = document.getElementById("subtituloInventario");
    const tablaInv = document.getElementById("contenedorTablaInventario");
    const tablaHistorial = document.getElementById("contenedorHistorialEntradas");

    if (viendoHistorialEntradas) {
        btn.textContent = "Ver Inventario Actual";
        titulo.textContent = "Historial de Entradas";
        subtitulo.textContent = "Registro completo de todos los ingresos realizados al sistema.";
        tablaInv.style.display = "none";
        tablaHistorial.style.display = "block";
        cargarHistorialEntradas();
    } else {
        btn.textContent = "Ver Historial de Entradas";
        titulo.textContent = "Inventario Actual";
        subtitulo.textContent = "Consulta, edita o elimina los registros existentes.";
        tablaInv.style.display = "block";
        tablaHistorial.style.display = "none";
        cargarTablaInventario();
    }
}

function cargarListaInsumos() {
    const select = document.getElementById("insumo");
    select.innerHTML = '<option value="">Seleccione un insumo</option>';
    insumos.forEach(insumo => {
        const option = document.createElement("option");
        option.value = insumo;
        option.textContent = insumo;
        select.appendChild(option);
    });
}

function completarPresentacion() {
    const nombre = document.getElementById("insumo").value;
    const presentacion = document.getElementById("presentacion");
    if (presentaciones[nombre]) {
        presentacion.value = presentaciones[nombre];
    }
}

function nuevoIngreso() {
    limpiarFormulario();
    document.getElementById("tituloFormulario").textContent = "Registrar ingreso";
    mostrarVista("ingreso");
}

function limpiarFormulario() {
    document.getElementById("formIngreso").reset();
    document.getElementById("registroId").value = "";
}

function guardarIngreso(event) {
    event.preventDefault();

    const id = document.getElementById("registroId").value;
    const fechaHoraActual = new Date().toISOString();

    const registro = {
        id: id || Date.now().toString(),
        fechaRegistro: id ? undefined : fechaHoraActual, // Mantiene la fecha original si se edita, o la crea si es nuevo
        insumo: document.getElementById("insumo").value,
        presentacion: document.getElementById("presentacion").value,
        marca: document.getElementById("marca").value,
        serie: document.getElementById("serie").value,
        registroSanitario: document.getElementById("registroSanitario").value,
        clasificacionRiesgo: document.getElementById("clasificacionRiesgo").value,
        lote: document.getElementById("lote").value,
        fechaVencimiento: document.getElementById("fechaVencimiento").value,
        cantidad: Number(document.getElementById("cantidad").value)
    };

    let inventario = obtenerInventario();
    const posicion = inventario.findIndex(item => item.id === registro.id);

    if (posicion >= 0) {
        // Conservamos la fecha de registro original al editar
        registro.fechaRegistro = inventario[posicion].fechaRegistro || fechaHoraActual;
        inventario[posicion] = registro;
        alert("El registro fue actualizado correctamente.");
    } else {
        inventario.push(registro);
        alert("Ingreso registrado correctamente.");
    }

    guardarInventario(inventario);
    limpiarFormulario();
    cargarTablaInventario();
    cargarHistorialEntradas();
    mostrarVista("inventario");
}

function mostrarInventarioActual() {
    viendoHistorialEntradas = false;
    document.getElementById("btnCambiarVistaInv").textContent = "Ver Historial de Entradas";
    document.getElementById("tituloInventario").textContent = "Inventario Actual";
    document.getElementById("subtituloInventario").textContent = "Consulta, edita o elimina los registros existentes.";
    document.getElementById("contenedorTablaInventario").style.display = "block";
    document.getElementById("contenedorHistorialEntradas").style.display = "none";
    cargarTablaInventario();
}

function cargarTablaInventario() {
    const cuerpo = document.getElementById("inventarioBody");
    if (!cuerpo) return;

    const inventario = obtenerInventario();
    cuerpo.innerHTML = "";

    if (inventario.length === 0) {
        cuerpo.innerHTML = `<tr><td colspan="12">No hay registros en el inventario.</td></tr>`;
        return;
    }

    inventario.forEach(item => {
        const salidas = obtenerSalidas().filter(salida => salida.inventarioId === item.id);
        const totalSalidas = salidas.reduce((total, salida) => total + Number(salida.cantidad), 0);
        const existencia = Number(item.cantidad) - totalSalidas;

        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${escapar(item.insumo)}</td>
            <td>${escapar(item.presentacion)}</td>
            <td>${escapar(item.marca)}</td>
            <td>${escapar(item.serie)}</td>
            <td>${escapar(item.registroSanitario)}</td>
            <td>${escapar(item.clasificacionRiesgo)}</td>
            <td>${escapar(item.lote)}</td>
            <td>${formatearFecha(item.fechaVencimiento)}</td>
            <td>${item.cantidad}</td>
            <td>${totalSalidas}</td>
            <td class="existencia ${existencia <= 0 ? "cero" : ""}">
                ${existencia}
            </td>
            <td class="acciones">
                <button class="btn editar" onclick="editarRegistro('${item.id}')">Editar</button>
                <button class="btn eliminar" onclick="eliminarRegistro('${item.id}')">Eliminar</button>
            </td>
        `;
        cuerpo.appendChild(fila);
    });
}

function cargarHistorialEntradas() {
    const cuerpo = document.getElementById("historialEntradasBody");
    if (!cuerpo) return;

    const inventario = obtenerInventario();
    cuerpo.innerHTML = "";

    if (inventario.length === 0) {
        cuerpo.innerHTML = `<tr><td colspan="10">No hay historial de entradas registrado.</td></tr>`;
        return;
    }

    inventario.forEach(item => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${formatearFechaHora(item.fechaRegistro)}</td>
            <td>${escapar(item.insumo)}</td>
            <td>${escapar(item.presentacion)}</td>
            <td>${escapar(item.marca)}</td>
            <td>${escapar(item.serie)}</td>
            <td>${escapar(item.registroSanitario)}</td>
            <td>${escapar(item.clasificacionRiesgo)}</td>
            <td>${escapar(item.lote)}</td>
            <td>${formatearFecha(item.fechaVencimiento)}</td>
            <td><strong>${item.cantidad}</strong></td>
        `;
        cuerpo.appendChild(fila);
    });
}

function editarRegistro(id) {
    const inventario = obtenerInventario();
    const registro = inventario.find(item => item.id === id);

    if (!registro) {
        alert("No se encontró el registro.");
        return;
    }

    document.getElementById("registroId").value = registro.id;
    document.getElementById("insumo").value = registro.insumo;
    document.getElementById("presentacion").value = registro.presentacion;
    document.getElementById("marca").value = registro.marca;
    document.getElementById("serie").value = registro.serie;
    document.getElementById("registroSanitario").value = registro.registroSanitario;
    document.getElementById("clasificacionRiesgo").value = registro.clasificacionRiesgo;
    document.getElementById("lote").value = registro.lote;
    document.getElementById("fechaVencimiento").value = registro.fechaVencimiento;
    document.getElementById("cantidad").value = registro.cantidad;
    document.getElementById("tituloFormulario").textContent = "Editar registro";

    mostrarVista("ingreso");
}

function eliminarRegistro(id) {
    const inventario = obtenerInventario();
    const registro = inventario.find(item => item.id === id);
    if (!registro) return;

    const confirmar = confirm(`¿Está segura de eliminar "${registro.insumo}"?`);
    if (!confirmar) return;

    let salidas = obtenerSalidas();
    salidas = salidas.filter(salida => salida.inventarioId !== id);
    guardarSalidas(salidas);

    const nuevoInventario = inventario.filter(item => item.id !== id);
    guardarInventario(nuevoInventario);
    cargarTablaInventario();
    cargarHistorialEntradas();
    alert("El registro fue eliminado.");
}

function cargarListaSalidas() {
    const select = document.getElementById("salidaInsumo");
    if (!select) return;

    const inventario = obtenerInventario();
    select.innerHTML = '<option value="">Seleccione un insumo</option>';

    inventario.forEach(item => {
        const salidas = obtenerSalidas().filter(salida => salida.inventarioId === item.id);
        const totalSalidas = salidas.reduce((total, salida) => total + Number(salida.cantidad), 0);
        const existencia = Number(item.cantidad) - totalSalidas;

        if (existencia > 0) {
            const option = document.createElement("option");
            option.value = item.id;
            option.textContent = `${item.insumo} | ${item.presentacion} | Disponible: ${existencia}`;
            select.appendChild(option);
        }
    });
}

function registrarSalida(event) {
    event.preventDefault();

    const inventarioId = document.getElementById("salidaInsumo").value;
    const cantidad = Number(document.getElementById("salidaCantidad").value);

    if (!inventarioId || cantidad <= 0) {
        alert("Seleccione un insumo e indique una cantidad válida.");
        return;
    }

    const inventario = obtenerInventario();
    const item = inventario.find(registro => registro.id === inventarioId);

    if (!item) {
        alert("No se encontró el insumo.");
        return;
    }

    const salidas = obtenerSalidas();
    const totalSalidas = salidas
        .filter(salida => salida.inventarioId === inventarioId)
        .reduce((total, salida) => total + Number(salida.cantidad), 0);

    const existencia = Number(item.cantidad) - totalSalidas;

    if (cantidad > existencia) {
        alert(`No hay suficiente inventario.\n\nDisponible: ${existencia}`);
        return;
    }

    const salida = {
        id: Date.now().toString(),
        inventarioId: inventarioId,
        cantidad: cantidad,
        fecha: new Date().toISOString()
    };

    salidas.push(salida);
    guardarSalidas(salidas);
    document.getElementById("formSalida").reset();
    alert("Salida registrada correctamente.");
    
    cargarListaSalidas();
    cargarTablaInventario();
}

/* =====================================================
   DESCARGAR EXCEL (CSV) DE SALIDAS
===================================================== */
function descargarExcelSalidas() {
    const salidas = obtenerSalidas();
    const inventario = obtenerInventario();

    if (salidas.length === 0) {
        alert("No hay salidas registradas para descargar.");
        return;
    }

    // Cabeceras del archivo CSV (Compatible con Excel)
    let csvContent = "\uFEFFFecha,Insumo,Presentación,Lote,Cantidad Retirada\n";

    salidas.forEach(salida => {
        const item = inventario.find(inv => inv.id === salida.inventarioId);
        const insumoNombre = item ? `"${item.insumo.replace(/"/g, '""')}"` : '"Insumo desconocido"';
        const presentacion = item ? `"${item.presentacion.replace(/"/g, '""')}"` : '""';
        const lote = item ? `"${item.lote || ''}"` : '""';
        const fechaFormateada = formatearFechaHora(salida.fecha);

        csvContent += `${fechaFormateada},${insumoNombre},${presentacion},${lote},${salida.cantidad}\n`;
    });

    // Crear el archivo virtual y descargar
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Reporte_Salidas_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function establecerFechaActual() {
    const campo = document.getElementById("fechaConsumo");
    if (!campo) return;

    const hoy = new Date();
    const año = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, "0");
    const dia = String(hoy.getDate()).padStart(2, "0");

    const fechaFormateada = `${año}-${mes}-${dia}`;
    campo.value = fechaFormateada;
    campo.max = fechaFormateada;

    actualizarTextoSemana();
}

function calcularConsumo() {
    const cuerpo = document.getElementById("consumoBody");
    if (!cuerpo) return;

    const inventario = obtenerInventario();
    const salidas = obtenerSalidas();
    cuerpo.innerHTML = "";

    if (salidas.length === 0) {
        cuerpo.innerHTML = `<tr><td colspan="10">No existen salidas registradas.</td></tr>`;
        return;
    }

    const grupos = {};
    salidas.forEach(salida => {
        if (!grupos[salida.inventarioId]) {
            grupos[salida.inventarioId] = [];
        }
        grupos[salida.inventarioId].push(salida);
    });

    Object.keys(grupos).forEach(inventarioId => {
        const item = inventario.find(registro => registro.id === inventarioId);
        if (!item) return;

        const registros = grupos[inventarioId];
        const semanas = {};

        registros.forEach(salida => {
            const semana = obtenerSemana(new Date(salida.fecha));
            if (!semanas[semana]) semanas[semana] = 0;
            semanas[semana] += Number(salida.cantidad);
        });

        const cantidades = Object.values(semanas);
        const consumoTotal = cantidades.reduce((a, b) => a + b, 0);
        const promedio = cantidades.length > 0 ? consumoTotal / cantidades.length : 0;

        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${escapar(item.insumo)}</td>
            <td>${escapar(item.presentacion)}</td>
            <td>${escapar(item.marca)}</td>
            <td>${escapar(item.serie)}</td>
            <td>${escapar(item.registroSanitario)}</td>
            <td>${escapar(item.clasificacionRiesgo)}</td>
            <td>${escapar(item.lote)}</td>
            <td>${formatearFecha(item.fechaVencimiento)}</td>
            <td><strong>${consumoTotal}</strong></td>
            <td><strong>${promedio.toFixed(2)}</strong></td>
        `;
        cuerpo.appendChild(fila);
    });
}

function obtenerSemana(fecha) {
    const fechaUTC = new Date(Date.UTC(fecha.getFullYear(), fecha.getMonth(), fecha.getDate()));
    const dia = fechaUTC.getUTCDay() || 7;
    fechaUTC.setUTCDate(fechaUTC.getUTCDate() + 4 - dia);
    const inicioAño = new Date(Date.UTC(fechaUTC.getUTCFullYear(), 0, 1));
    const numeroSemana = Math.ceil((((fechaUTC - inicioAño) / 86400000) + 1) / 7);
    return (fechaUTC.getUTCFullYear() + "-S" + String(numeroSemana).padStart(2, "0"));
}

function formatearFecha(fecha) {
    if (!fecha) return "";
    const partes = fecha.split("-");
    if (partes.length !== 3) return fecha;
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

function formatearFechaHora(isoString) {
    if (!isoString) return "";
    const fecha = new Date(isoString);
    if (isNaN(fecha)) return isoString;
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const año = fecha.getFullYear();
    const hora = String(fecha.getHours()).padStart(2, '0');
    const min = String(fecha.getMinutes()).padStart(2, '0');
    return `${dia}/${mes}/${año} ${hora}:${min}`;
}

function actualizarTextoSemana() {
    const campo = document.getElementById("fechaConsumo");
    const inputFecha = campo.value;
    const textoSemana = document.getElementById("textoRangoSemana");

    if (!inputFecha) {
        textoSemana.textContent = "";
        return;
    }

    if (campo.max && inputFecha > campo.max) {
        alert("No puedes consultar una semana en el futuro. Se ajustará a la fecha actual.");
        campo.value = campo.max;
        actualizarTextoSemana();
        return;
    }

    const partes = inputFecha.split('-');
    const fecha = new Date(partes[0], partes[1] - 1, partes[2]);
    let diaSemana = fecha.getDay();
    let diferenciaLunes = diaSemana === 0 ? -6 : 1 - diaSemana;

    const lunes = new Date(fecha);
    lunes.setDate(fecha.getDate() + diferenciaLunes);

    const domingo = new Date(lunes);
    domingo.setDate(lunes.getDate() + 6);

    const opcionesMes = { month: 'long' };
    const mesLunes = lunes.toLocaleDateString('es-ES', opcionesMes);
    const mesDomingo = domingo.toLocaleDateString('es-ES', opcionesMes);
    const año = domingo.getFullYear();

    if (mesLunes === mesDomingo) {
        textoSemana.textContent = `Semana del ${lunes.getDate()} al ${domingo.getDate()} de ${mesLunes} de ${año}`;
    } else {
        textoSemana.textContent = `Semana del ${lunes.getDate()} de ${mesLunes} al ${domingo.getDate()} de ${mesDomingo} de ${año}`;
    }
}

function escapar(texto) {
    if (texto === null || texto === undefined) return "";
    return String(texto)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
