=========================================================================================================================================================================
La estructura de carpetas básica 📂

Qué es y dónde vive un Middleware 🛑

Cómo manejar las Autorizaciones 🔑

=========================================================================================================================================================================
Bloque 1: Estructura de carpetas básica
En un backend moderno (usando Node.js con TypeScript o JavaScript), la mayoría del código vivo se coloca dentro de una carpeta principal llamada src/ (Source).

Para ayudarte a visualizar cómo se conecta todo, aquí tienes un mapa visual de cómo se organizan los componentes de un backend:

Dentro de src/, se suelen crear subcarpetas para separar las responsabilidades de la aplicación (un patrón muy conocido como "Arquitectura en Capas"). Aquí tienes una propuesta inicial:
==========================================================================================================================================================================
📂 src/config/: Para las variables de entorno y configuraciones de bases de datos.

📂 src/controllers/: Los encargados de recibir las peticiones del usuario y enviar las respuestas.

📂 src/routes/: Donde defines las rutas o URLs de tu aplicación (ej: /usuarios, /productos).

📂 src/middlewares/: Funciones intermedias que revisan la petición antes de que llegue al controlador.

[Cliente] ➡️ [Ruta] ➡️ [Middleware (Filtro/Guardia)] ➡️ [Controlador (Cerebro/Cocinero)] ➡️ [Respuesta]
===================================================================================================================================================================
El Controlador (controller) es el destino final de la petición. Su única responsabilidad es procesar los datos, hablar con la base de datos si es necesario y dar una respuesta (ej: enviar la lista de usuarios o guardar uno nuevo).

El Middleware es un paso intermedio. Su trabajo es filtrar, validar o preparar la petición antes de que toque al controlador.

//CODIGOS

============================================================================================================================================================================
🟢 2xx - Éxito (Todo salió bien)
200 OK: La petición fue exitosa y se devuelve la información (muy común en GET y PUT/PATCH).

201 Created: La petición fue exitosa y, como consecuencia, se creó un nuevo recurso (es el ideal para POST al crear usuarios o tareas).

204 No Content: Todo salió bien, pero no hay nada que devolver en el cuerpo de la respuesta (muy común al terminar un DELETE).

🟡 4xx - Errores del Cliente (El frontend mandó algo mal)
400 Bad Request: El servidor no entiende la petición porque faltan datos obligatorios o el formato es incorrecto (ej. contraseñas muy cortas o correos sin @).

401 Unauthorized: No has iniciado sesión o no estás autenticado. Necesitas un token válido para acceder.

403 Forbidden: El servidor entiende quién eres, pero no tienes permisos para hacer eso (ej. un usuario común intentando entrar al panel de administrador).

404 Not Found: El recurso no existe (la ruta está mal escrita o buscaste una tarea con un ID que no existe).

409 Conflict: Hay un conflicto con el estado actual del servidor (ej. intentar registrar un correo que ya está en uso).