// WhatsApp que recibirá el brief.
// Formato: código de país + número, sin +, espacios ni guiones.
const WHATSAPP_NUMBER = "526561857602";

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

  const data = new FormData(form);
  let message = "✨ VIBORDER BRIEF ✨\n\n";

  for (const [key, value] of data.entries()) {
    const clean = String(value).trim();

    if (clean) {
      message += `${labels[key] || key}\n*${clean}*\n\n`;
    }
  }

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.location.href = url;
});
