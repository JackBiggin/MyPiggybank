<?php
    $merchant = htmlspecialchars($_GET['merchant']);

    switch ($merchant) {
        case 1:
            $loc = '<iframe style="width: 100%; height: 400px;" frameborder=0 src="https://wego.here.com/search/2001 W Maple Rd, Troy, MI 48084, USA"></iframe>';
            break;
        case "Target":
            $loc = '<iframe style="width: 100%; height: 400px;" frameborder=0 src="https://wego.here.com/search/32001 John R Rd, Madison Heights, MI 48071, USA"></iframe>';
            break;
        case 3:
            $loc = "ONLINE";
            break;
        case 4:
            $loc = '<iframe style="width: 100%; height: 400px;" frameborder=0 src="https://wego.here.com/search/332289 John R Rd, Madison Heights, MI 48071, USA"></iframe>';
            break;
        case 5:
            $loc = '<iframe style="width: 100%; height: 400px;" frameborder=0 src="https://wego.here.com/search/31020 John R Rd, Madison Heights, MI 48071, USA"></iframe>';
            break;
        default:
            $loc = "UNKNOWN";
            break;
    }

    $location = array('location' => $loc);
    header('Content-Type: application/json');
    echo json_encode($location);
?>