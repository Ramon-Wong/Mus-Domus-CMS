<?php
header('Content-Type: application/json; charset=utf-8');

$requestPayload = file_get_contents("php://input");
$obj            = json_decode($requestPayload);

switch($obj->type){
    case "page":
        // stuff to do with a page

        $str = $obj;
        break;
    case "login":
        // login
        if($obj->email == "admin@domain.com" && $obj->pass == "admin"){
            $str = '{"key":"'.$obj->key.'","type":"login","email":"'.$obj->email.'","pass":"'.$obj->pass.'","msg": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"}';
        } else {
            $str = '{"key":"'.$obj->key.'","type":"login","email":"'.$obj->email.'","pass":"'.$obj->pass.'","msg": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}';
        }

        $obj = $str;
        break;
    case "logout":
        // logout
        break;    

    case "test":
        // stuff to do with a test
        // need this to output the test results and other shit
        break;

    case "nav":
        // stuff to do with a nav or
        // I probably would have a separate file for this named nav.php
        break;
    default:
        $str = '{"msg":"error"}';
        break;
}

    echo $obj;
?>

