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

function buildWhatsAppWebUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function buildWhatsAppAppUrl(message) {
  // No forzamos un paquete concreto.
  // Así Android puede abrir WhatsApp normal o WhatsApp Business,
  // según cuál esté instalado o cuál elija el usuario.
  return `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}

function openWhatsApp(message) {
  const webUrl = buildWhatsAppWebUrl(message);
  const appUrl = buildWhatsAppAppUrl(message);
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (!isMobile) {
    window.location.href = webUrl;
    return;
  }

  let appOpened = false;

  const markAsOpened = () => {
    if (document.hidden) {
      appOpened = true;
    }
  };

  document.addEventListener("visibilitychange", markAsOpened, { once: true });

  // Al no especificar com.whatsapp ni com.whatsapp.w4b, Android puede
  // mostrar el selector si están instalados WhatsApp normal y Business.
  window.location.href = appUrl;

  // Respaldo: si ningún WhatsApp atendió el enlace, usamos wa.me.
  setTimeout(() => {
    if (!appOpened && !document.hidden) {
      window.location.href = webUrl;
    }
  }, 1600);
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

  openWhatsApp(message);
});
