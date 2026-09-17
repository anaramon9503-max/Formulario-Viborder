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

function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function openWhatsAppBusiness(message) {
  const fallbackUrl = buildWhatsAppUrl(message);
  const isAndroid = /Android/i.test(navigator.userAgent);

  // En Android intentamos abrir específicamente WhatsApp Business.
  // Si la app Business no está instalada o el navegador no admite el intent,
  // Chrome usa el enlace wa.me como respaldo.
  if (isAndroid) {
    const intentUrl =
      `intent://send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}` +
      `#Intent;scheme=whatsapp;package=com.whatsapp.w4b;` +
      `S.browser_fallback_url=${encodeURIComponent(fallbackUrl)};end`;

    window.location.href = intentUrl;
    return;
  }

  // iPhone, computadora y otros dispositivos: enlace universal oficial.
  window.location.href = fallbackUrl;
}

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

  openWhatsAppBusiness(message);
});
