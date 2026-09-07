// Coloca aquí el número que recibirá el brief.
// Formato: código de país + número, SIN +, espacios ni guiones.
// Ejemplo México: 526561234567
const WHATSAPP_NUMBER = "5210000000000";

const form = document.getElementById("briefForm");

const labels = {
  nombre: "Nombre",
  personalidad: "Personalidad",
  colores: "Atmósferas / estilos / colores",
  dedica: "¿A qué te dedicas?",
  vender: "¿Qué quieres vender o que te contraten?",
  beneficios: "¿Qué beneficios obtienen tus clientes?",
  valor: "¿Cuál es tu propuesta de valor o qué te hace diferente?",
  problemas: "¿Qué problemas o necesidades resuelves?",
  cliente: "Describe a tu cliente ideal",
  imagen: "¿Qué imagen quieres proyectar?",
  emociones: "¿Qué emociones quieres despertar en tus clientes?",
  redes: "Redes sociales o página web",
  referencias: "Referencias visuales"
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (WHATSAPP_NUMBER === "5210000000000") {
    alert("Antes de publicar, cambia WHATSAPP_NUMBER en script.js por tu número de WhatsApp.");
    return;
  }

  const data = new FormData(form);
  let message = "✨ BUSINESS PORTRAIT BRIEF ✨\n\n";

  for (const [key, value] of data.entries()) {
    const clean = String(value).trim();

    // Solo agrega campos que sí fueron respondidos.
    if (clean) {
      // Pregunta normal / respuesta en negritas.
      message += `${labels[key] || key}\n*${clean}*\n\n`;
    }
  }

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});
