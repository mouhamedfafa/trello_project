
<?php
//---------------------------------Traitement des Requetes GET-----------------------------------------//
if ($_SERVER['REQUEST_METHOD'] == "GET") {
        if (isset($_REQUEST['action'])) {
                if ($_REQUEST['action'] == "lister") {

                        echo   file_get_contents(PATH_DB);
                }
        }
}

$newTache=[$_POST["data"]];
    
      
// ------------------------------------Traitement des Requetes POST-----------------------------------------//
if ($_SERVER['REQUEST_METHOD'] == "POST") {
        if (isset($_REQUEST['action'])) {
                if ($_REQUEST['action'] == "ajoutertache") {

                // $content = (file_get_contents("php://input"));
                // $data = json_decode($content, true);
                //  json_encode($data);
                //  file_put_contents(PATH_DB,$_POST["data"]);
                // $textarea=$_REQUEST["textarea"];
               
                array_to_json($newTache,"tache");
               

                }
                    
        }
}

var_dump($_POST["data"]);

?>


