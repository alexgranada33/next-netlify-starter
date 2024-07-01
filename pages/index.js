<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tipificación de Contacto</title>
  <style>
    /* Estilos generales */
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
      background-color: #fff; /* Fondo inicial claro */
      color: #333; /* Texto inicial oscuro */
      transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    }

    .container {
      max-width: 800px;
      margin: auto;
      background-color: #f9f9f9;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    .card {
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 8px;
      margin-bottom: 15px;
      transition: box-shadow 0.3s ease-in-out;
      background-color: #fff;
    }

    .card:hover {
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
    }

    .card-title {
      font-size: 18px;
      margin-bottom: 10px;
    }

    .card-content {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .input-field, .input-field.full-width, input[type="text"], select {
      width: calc(50% - 5px); /* Distribución en dos columnas */
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-sizing: border-box;
      font-size: 16px;
      margin-bottom: 10px;
    }

    .input-field.full-width {
      width: 100%;
    }

    label {
      color: #555;
      font-size: 14px;
    }

    .blue-button {
      display: inline-block;
      padding: 12px 24px; /* Tamaño uniforme para los botones */
      margin-right: 10px;
      background-color: #4CAF50; /* verde */
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;
      text-decoration: none; /* Para quitar el subrayado en los enlaces */
    }

    .blue-button.blue {
      background-color: #2196F3; /* azul */
    }

    .blue-button:hover {
      background-color: #45a049; /* verde oscuro al hover */
    }

    .blue-button.blue:hover {
      background-color: #1976D2; /* azul oscuro al hover */
    }

    .output {
      margin-top: 20px;
      padding: 15px;
      border: 1px solid #ddd;
      background-color: #f9f9f9;
      border-radius: 4px;
      font-size: 16px;
      white-space: pre-wrap;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <div class="card-title">Seleccione tipo de contacto:</div>
      <div class="card-content">
        <button type="button" class="blue-button" id="con" onclick="selectRadioButton('con')">Con Contacto</button>
        <button type="button" class="blue-button" id="sin" onclick="selectRadioButton('sin')">Sin Contacto</button>
        <button type="button" class="blue-button" id="evidenciaBtn" onclick="toggleEvidencia()">Con Evidencia</button>
      </div>
    </div>

    <div class="card">
      <div class="card-title">Detalles del Contacto:</div>
      <div class="card-content">
        <div class="input-field full-width">
          <label for="llamaNumeros">Se llama a los números:</label>
          <input type="text" id="llamaNumeros" class="input-field" placeholder="Descripción" oninput="updateOutput()">
        </div>
        <div class="input-field">
          <label for="idActividad">Número de Actividad:</label>
          <input type="text" id="idActividad" class="input-field" placeholder="Número de actividad" oninput="updateOutput()">
        </div>
        <div class="input-field">
          <label for="idTicket">Número de Ticket:</label>
          <input type="text" id="idTicket" class="input-field" placeholder="Número de ticket" oninput="updateOutput()">
        </div>
        <div class="input-field full-width">
          <label for="nombreTecnico">Nombre del Técnico:</label>
          <input type="text" id="nombreTecnico" class="input-field" placeholder="Nombre del técnico" oninput="updateOutput()">
        </div>
        <div class="input-field full-width">
          <label for="observaciones">Observaciones:</label>
          <input type="text" id="observaciones" class="input-field" placeholder="Observaciones" oninput="updateOutput()">
        </div>
      </div>
    </div>

    <div class="button-row">
      <button type="button" class="blue-button" onclick="resetForm()">Reset</button>
      <button type="button" class="blue-button" onclick="copyToClipboard()">Copiar Resultado</button>
    </div>

    <div class="output" id="output"></div>

    <script src="scripts.js"></script>
  </div>
</body>
</html>
