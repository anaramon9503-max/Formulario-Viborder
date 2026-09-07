# Business Portrait Brief – Vercel

Proyecto estático listo para Vercel.

## Antes de subirlo
1. Abre `script.js`.
2. Cambia:
   `const WHATSAPP_NUMBER = "5210000000000";`
   por el número que recibirá las respuestas.
3. Usa código de país + número, sin `+`, espacios ni guiones.

Ejemplo México:
`526561234567`

## Publicarlo en Vercel
1. Sube estos archivos a un repositorio de GitHub.
2. En Vercel selecciona **Add New > Project**.
3. Importa el repositorio.
4. Framework Preset: **Other**.
5. Deploy.

No necesita base de datos ni servidor: al enviar, abre WhatsApp con el brief completo.

## Formato en WhatsApp
- Solo se envían los campos que fueron contestados.
- Las preguntas aparecen normales.
- Las respuestas aparecen en **negritas** para diferenciarlas.
