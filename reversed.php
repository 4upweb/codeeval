<?php
$fp = fopen($argv[1], 'r');
while (!feof($fp)) {
    $line = fgets($fp);
    $result = preg_split('/((^\p{P}+)|(\p{P}*\s+\p{P}*)|(\p{P}+$))/', chop($line), -1, PREG_SPLIT_NO_EMPTY);
    if (count($result) > 0) {
//v1
//        echo implode(" ", array_reverse($result)) . PHP_EOL;
//v2
        for($i = count($result) - 1; $i >= 0; $i--) {
            echo $result[$i] . " ";
        }
        echo PHP_EOL;
    }
}