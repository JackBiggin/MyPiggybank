<?php
    $merchant = htmlspecialchars($_GET['merchant']);

    switch ($merchant) {
        case 1:
            $loc = "2001 W Maple Rd, Troy, MI 48084, USA";
            break;
        case 2:
            $loc = "32001 John R Rd, Madison Heights, MI 48071, USA";
            break;
        case 3:
            $loc = "ONLINE";
            break;
        case 4:
            $loc = "32289 John R Rd, Madison Heights, MI 48071, USA";
            break;
        case 5:
            $loc = "31020 John R Rd, Madison Heights, MI 48071, USA";
            break;
        default:
            $loc = "UNKNOWN";
            break;
    }

    $location = array('location' => $loc);
    header('Content-Type: application/json');
    echo json_encode($location);
?>