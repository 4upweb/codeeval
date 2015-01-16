<?php
$_fp = fopen("php://stdin", "r");
/* Enter your code here. Read input from STDIN. Print output to STDOUT */
while (!feof($_fp)) {
    $f = fread($_fp, 1024);
    echo $f;
}