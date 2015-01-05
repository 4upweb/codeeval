<?php
$fp = fopen($argv[1], 'r');
$border = 6;
while (!feof($fp)) {
    $line = fgets($fp);
//    $result = preg_split('/((^\p{P}+)|(\p{P}*\s+\p{P}*)|(\p{P}+$))/', chop($line), -1, PREG_SPLIT_NO_EMPTY);
    $result = explode(" ", chop($line));
    if (count($result) > 2) {
        list($l, $d, $n) = $result;
        $bats = array();
        if ((int)$n > 0) {
            $bats = array_slice($result, 3);
        }
        sort($bats);
        $points = $bats;
        if ((int)$n == 0) {
            for($i = $border; $i <= (int)$l - $border; $i += (int)$d) {
                $points[] = $i;
            }
        } else {
            for ($i = $bats[0]; $i >= $border; $i -= (int)$d) {
                if ($i - $d >= $border) {
                    $points[] = $i - $d;
                }
            }
            if (count($bats) > 1) {
                foreach($bats as $key => $value) {
                    $v = $bats[$key] + $d;
                    $k = $bats[$key + 1] - $d;
                    while ($v <= $k) {
                        $points[] = $v;
                        $v += $d;
                    }
                }
            }
            for ($i = $bats[count($bats)-1], $borderRight = $l - $border; $i <= $borderRight; $i += (int)$d) {
                if ($i + $d <= $borderRight) {
                    $points[] = $i + $d;
                }
            }
        }
        echo count($points) - $n;
        echo PHP_EOL;
    }
}
?>
