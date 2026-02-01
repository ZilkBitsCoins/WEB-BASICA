function fechayhora() {
    const fecha = new Date();
    const opciones = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return fecha.toLocaleDateString('es-ES', opciones);
}
function actualizarReloj() {
    document.getElementById('reloj').textContent = fechayhora();
}
setInterval(actualizarReloj, 1000);
window.onload = actualizarReloj;