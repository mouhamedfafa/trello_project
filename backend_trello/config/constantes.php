<?php
// ---------------------------------Chemin du dossier racine du projet------------------------------------------//

define("ROOT",str_replace("public".DIRECTORY_SEPARATOR."index.php","",$_SERVER['SCRIPT_FILENAME']));
//----------------------------------Chemin du src (controller et models)---------------------------------------//

define("PATH_SRC",ROOT."src".DIRECTORY_SEPARATOR);


//----------------------------------Chemin du data -----------------------------------------------------------//

define("PATH_DB",ROOT."data".DIRECTORY_SEPARATOR."db.json");

//---------------------------Chemin du dossier public pour inclusion images,css et js-------------------------//

define("PATH_VIEWS",ROOT."templates".DIRECTORY_SEPARATOR);

//-----------------------------URL pour charger les images et les fichiers css--------------------------------//

define("WEB_PUBLIC",str_replace("index.php","",$_SERVER['SCRIPT_NAME']));

//--------------------------------------Clé d'erreurs---------------------------------------------------//

define("KEY_ERRORS","error");

define("WEB_ROOT","http://localhost:8082"); 




    