//------------------Declaration de constante---------------------------------------------------
const main = document.getElementById("main");
const btn_addnote = document.getElementById("btn_addnote");
const btn_addcolone = document.getElementById("btn_addcolone");
const btn_x = document.getElementById("btn_x");
const date = document.getElementById("date");
const hdebut = document.getElementById("hdebut");
const hfin = document.getElementById("datefin");
const btn_submit = document.getElementById("btn_submit");
const textarea = document.getElementById("textarea");
const div_input = document.querySelector(".div_input");
const div_inputEl = document.getElementById("div_inputEl");
const menu_droit = document.getElementById("menu_droit");
const btn_archive = document.getElementById("btn_archive");
const btn_desarchive = document.getElementById("btn_desarchive");
const form = document.getElementById("form");
const idmenu = document.getElementById("idmenu");
const archive=document.getElementById("archive")
const ouverture=document.getElementById("ouverture");
var now=moment() 




function getData(url) {
  var api = fetch(url);
  api
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
console.log(getData("http://localhost:8082/?controller=user&action=lister"))

//----------------------------------Fonction de sauvegarde--------------------------------///

function saveData(D) {
  var fD = new FormData();
 
  fD.append("controller", "user"); 
  fD.append("action","ajoutertache")
  fD.append("data",JSON.stringify(D))
  fetch("http://localhost:8082/",{    
    method: "POST",
    body: fD})  
    .then((result) => { 
      return result.json();
    })
    
}

btn_submit.addEventListener("click",()=>{
let objet1 =
{"textarea":textarea.value,
"Date":date.value,
"heure de debut":hdebut.value,
"heure finale":hfin.value 
}
saveData(objet1)

})


//-------------------------------Fonction qui ajoute les notes à la première colone-----------------------------

ouverture.addEventListener("click",()=>{
const header=document.createElement("header")
const up=document.createElement("div")
up.setAttribute("id","up")

const div_btn1=document.createElement("div")
div_btn1.setAttribute("id","div_btn1")
const btn_addcolone=document.createElement("button")
btn_addcolone.setAttribute("id","btn_addcolone")

const span1=document.createElement("span")
span1.setAttribute("class","span")
span1.innerText="+ Colone"


const div_btn2=document.createElement("div")

const btn_addnote=document.createElement("div")
btn_addnote.setAttribute("id","btn_addnote")
const span2=document.createElement("span")



span2.innerText="+  Note"


const menu=document.createElement("div")
menu.setAttribute("id","menu")
const archive=document.createElement("button")
archive.setAttribute("id","archive")
const fa_archive=document.createElement("img")
fa_archive.setAttribute("src","archive.png")
fa_archive.setAttribute("class","archiveur")


const idmenu=document.createElement("div");
idmenu.setAttribute("id","idmenu")
const corbeille=document.createElement("h2")
corbeille.setAttribute("id","corbeille")
corbeille.innerText=`CORBEILLE`
const btnMenu=document.createElement("button")
archive.setAttribute("id","archive")
const fa_angles_left=document.createElement("i")
fa_angles_left.setAttribute("class","fa-solid fa-angles-left")
btnMenu.setAttribute("id","btnMenu")


archive.innerText=`ARCHIVER`


// header.innerHTML=`  
// <div id="up">
//    <div id="div_btn1">
//      <button id="btn_addcolone" ><span class="span">+ Colone</span> 
//      </button>
//    </div>
//    <div id="div_btn2" >
//        <button id="btn_addnote" type="button"><span>+  Note</span>
//        </button>
//    </div>
//  </div>

//  <div id="menu"> <button id="archive"><i class="fa-solid fa-box-archive"></i></button><div id="idmenu"><h2 id="corbeille">CORBEILLE</h2> </div>
//   <button id="btnMenu"> <i class="fa-solid fa-angles-left"></i></button></div>
// `

btn_addnote.appendChild(span2)

main.appendChild(header)
header.appendChild(up)
up.appendChild(div_btn1)
div_btn1.appendChild(btn_addcolone)

btn_addcolone.appendChild(span1)
div_btn2.appendChild(btn_addnote)
btn_addnote.appendChild(span2)
up.appendChild(div_btn2)
menu.appendChild(archive)
archive.appendChild(fa_archive)
menu.appendChild(idmenu)
menu.appendChild(btnMenu)

idmenu.appendChild(corbeille)


btnMenu.appendChild(fa_angles_left)
 const p_ouverture=document.getElementById("p_ouverture")
header.appendChild(menu)
hand.style.display="none"
ouverture.style.display="none"
p_ouverture.style.display="none"


btnMenu.addEventListener("click", () => {
  idmenu.classList.toggle("dash");
});











function add_note() {
  const uno = document.querySelector(".uno");
  const noteajouter = document.createElement("span");
  noteajouter.setAttribute("id", "note");

  const divnote_left = document.createElement("div");
  divnote_left.setAttribute("class", "left");
  const left = document.createElement("span");

  left.setAttribute("id", "span_left");
  left.innerHTML = "<<";

  const divnote_middle = document.createElement("div");

  const p_tache = document.createElement("p");

  p_tache.setAttribute("id", "p_tache");

  divnote_middle.appendChild(p_tache);
  p_tache.innerText = textarea.value;

  const divnote_right = document.createElement("div");
  divnote_right.setAttribute("class", "right");

  const span_right = document.createElement("span");
  span_right.setAttribute("id", "span_right");

  span_right.innerHTML = ">>";

  uno.appendChild(noteajouter);
  noteajouter.appendChild(divnote_left);
  noteajouter.appendChild(divnote_middle);
  noteajouter.appendChild(divnote_right);
  divnote_left.appendChild(left);
  divnote_right.appendChild(span_right);

  uno.appendChild(noteajouter);
  modal_container.classList.remove("show-modal");
  
  span_right.addEventListener("click", (e) => {
    const flechr =
      e.target.parentElement.parentElement.parentElement.parentElement;
    flechr.nextSibling.lastChild.appendChild(noteajouter);
    
  });
  left.addEventListener("click", (e) => {
    const flechl =
      e.target.parentElement.parentElement.parentElement.parentElement;
    flechl.previousSibling.lastChild.appendChild(noteajouter);
  });


  noteajouter.addEventListener("mouseout", (e) => { 
    p_tache.innerHTML = textarea.value; 
  });

   if(validform()){
    noteajouter.classList.add("p1_tache");
    noteajouter.addEventListener("mouseover", () => {
      p_tache.innerHTML = ` A Faire </br> le${date.value} </br> de ${hdebut.value} à ${hfin.value}`})  
    
    setTimeout(()=>{
     
      noteajouter.classList.add("p2_tache");
      noteajouter.addEventListener("mouseover", () => {
      p_tache.innerHTML = ` En cours </br> termine  à ${hfin.value}` 
        
        })
        noteajouter.classList.remove("p1_tache")
        
        setTimeout(()=>{
          noteajouter.classList.add("p3_tache");
          span_right.innerHTML = ""
          left.innerHTML = ""
          noteajouter.addEventListener("mouseover", () => {
            p_tache.innerHTML = "Terminée"
            noteajouter.classList.remove("p2_tache")})
        },  moment.duration(hfin.value)-moment.duration(hdebut.value))    
    
    },(moment(date.value).add(hdebut.value,'hours')).diff(now,"milliseconds") )
    

   }


  noteajouter.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    menu_droit.style.display = "block";
    menu_droit.style.top = `${e.clientY}px`;
    menu_droit.style.left = `${e.clientX}px`;

    btn_desarchive.addEventListener("click", function () {
      uno.appendChild(noteajouter);
    });

    btn_archive.addEventListener("click", function () {
      idmenu.appendChild(noteajouter);
    });
  });

  document.addEventListener("click", () => {
    menu_droit.style.display = "none";

    
  });
}

let i = 0;
//----------------------L'evenement qui permet d'ajouter des note-----------------------------------

btn_addcolone.addEventListener("click", () => {
  if (i < 5) {
    add_colone(i);
    i++;
  } else {
    removeEventListener;
  }
});

//----------------------------fonction pour ajouter les colones-------------------------------------
function add_colone() {
  const container = document.createElement("div");
  container.setAttribute("id", "contain");

  const divcolone = document.createElement("div");
  divcolone.setAttribute("id", "coloneTitle");
  const ix = document.createElement("i");
  const bx = document.createElement("button");

  ix.setAttribute("class", "fa-solid fa-trash-can");
  bx.setAttribute("id", "bx");

  divcolone.appendChild(bx);
  bx.appendChild(ix);
  const input = document.createElement("p");
  input.setAttribute("id", "nameColone");
  input.innerHTML = `COLONE ${i + 1}`;

  const divnote = document.createElement("div");
  divnote.setAttribute("id", "fieldNote");
  divnote.setAttribute("class", `${get_color(i)}`);

  main.appendChild(container);
  container.appendChild(divcolone);
  divcolone.appendChild(input);
  container.appendChild(divnote);

  bx.addEventListener("click", (e) => {
    const flechs = e.target.parentElement.parentElement.parentElement;
    const premierColone =
      e.target.parentElement.parentElement.nextSibling.classList;
    if (premierColone != "uno") {
      main.removeChild(flechs);
      i--;
    } else if (flechs.nextSibling === null) {
      main.removeChild(flechs);
      i--;
    }
  });
  input.addEventListener("dblclick", () => {
    input.setAttribute("contenteditable", "true");
  });
}

//---------------------------------la fonction qui change les couleur-------------------------------

function get_color(i) {
  switch (i + 1) {
    case 1:
      return "uno";
      break;
    case 2:
      return "dos";
      break;
    case 3:
      return "tres";
      break;
    case 4:
      return "quatro";
      break;
    default:
      return "cinqo";
      break;
  }
}

//----------------------------Le bouton de corbeille-----------------------------------------------


//*******************************l"evenement qui mermet d'afficher la moite modale/***********************************
btn_addnote.addEventListener("click", () => {
  if (i === 0) {
    modal_container.setAttribute("disabled", "true");
  } else modal_container.classList.add("show-modal");
});

//--------------------------------Les evenements qui permet de fermer la boite modale-----------------------------
btn_x.addEventListener("click", () =>
  modal_container.classList.remove("show-modal")
);

window.addEventListener("click", (e) =>
  e.target == modal_container
    ? modal_container.classList.remove("show-modal")
    : false
);

//-----------------------fonction qui verifie la veracité des données--------------------------------
function showSuccess(input) {
  const div_input = input.parentElement;
  div_input.className = "div_input success";
}
//----------------------------Fonction qui verifie les erreure au niveau des input------------------

function showError(input, classe = "inputEl", message) {
  const inputEl = input.parentElement;
  inputEl.className = classe + " error";
  const small = inputEl.querySelector("small");
  small.innerText = message;
}
const para = document.querySelector(".para");
const error = document.querySelector(".error");
const pp = document.querySelector(".pp");
var hd = moment.duration(hdebut.value)._milliseconds;
var hf = moment.duration(hfin.value)._milliseconds;

// --------------------------fonction de validation formulaire--------------

function validform() {
  var j = 0;

  if (textarea.value === "") {
    const small = pp.nextElementSibling;
    para.className = para + " error";
    small.innerText = "Ce champ est requis";
    textarea.style.border = "solid red 3px";
    j++;
  } else {
    para.className = "para area";
    textarea.style.border = "solid green 3px";
  }
  if (date.value === "") {
    showError(date, inputEl, "Veuillez indiquez la date");
    j++;
  } else if (moment(date.value).format("DD") < moment().format("DD")) {
    showError(date, inputEl, "Donnez une date ulterieure");
    j++;
  } else {
    showSuccess(date);
  }
  if (hdebut.value === "") {
    showError(hdebut, inputEl, "Veuillez donner l'heure de debut");
    j++;
  } else {
    showSuccess(hdebut);
  }
  if (hfin.value === "") {
    showError(hfin, inputEl, "Veuillezl'heure l'heure finale");
    j++;
  } else {
    showSuccess(hfin);
  }
  if (
    moment.duration(hfin.value)._milliseconds -
      moment.duration(hdebut.value)._milliseconds <
    0
  ) {
    alert("l'heure de debut doit etre supieur à l'heure finale").style.solid="border red 3px";
    

    showError(hfin, inputEl, "");
    showError(hdebut, inputEl, "");
    j++;
  }

  if (j == 0) {
    return true;
  } else {
    return false;
  }
}

function note_color(){



const tmp = moment(date.value).add(hdebut.value,'hours')



  
}
 
const note = document.getElementById("note");

btn_submit.addEventListener("click", (e) => {
  if (validform()) {
    add_note();
    note_color()
  } else {
  }
});

})

//-------------------------------Popup des taches--------------------------------------------------

// function rebuild() {

//   let labels = document.querySelectorAll('.lab');
//   labels.forEach((label, a) => {
//       a++
//       label.innerText = "Reponse" + a
//   });
