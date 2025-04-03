<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

// Példa: Idő küldése a kliensnek
while (true) {
    echo "data: " . date("H:i:s") . "\n\n";
    ob_flush();
    flush();
    sleep(1); // 1 másodpercenként küldjön adatot
}
?>