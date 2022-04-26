
<?php
   header("Access-Control-Allow-Origin:*");  
   header("Access-Control-Allow-Methods", "GET,HEAD,    OPTIONS,POST,PUT");
   header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            //-----------------------Démarrage de la session--------------------------------//
if(session_status()==PHP_SESSION_NONE){
    session_start();
    }
            //-----------------------Inclusion des constantes-------------------------------//
require_once dirname(dirname(__FILE__))."/config/constantes.php";
            //-----------------------Inclusion des orm-------------------------------//
require_once dirname(dirname(__FILE__))."/config/orm.php";
            //-----------------------Inclusion du validator-------------------------------//
require_once dirname(dirname(__FILE__))."/config/validator.php";

    if (isset($_SESSION[KEY_ERRORS])) { 
        $errors = $_SESSION[KEY_ERRORS];
       unset($_SESSION[KEY_ERRORS]);
}
require_once dirname(dirname(__FILE__))."/config/rooter.php";
// var_dump(file_get_contents("php://input"));die;



?>