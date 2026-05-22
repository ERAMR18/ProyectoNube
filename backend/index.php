<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$tareas = [
    ["nombre" => "Estudiar"],
    ["nombre" => "Hacer tarea"],
    ["nombre" => "Subir proyecto"]
];

echo json_encode($tareas);

?>