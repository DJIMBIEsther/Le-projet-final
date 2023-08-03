
var dict = {
    "Le berger belge malinois" : "./Races/grande_taille_poil_court/Le berger_belge_malinois.jpg",
    "Le saint-hubert" : "./Races/grande_taille_poil_court/Le chien_hubert.jpg",
    "Le beagle" : "./Races/grande_taille_poil_court/Le beagle.jpg",
    "Le berger de Beauceron" : "./Races/grande_taille_poil_court/Le berger_de_beauceron.jpg",
    "Le bullmastiff" : "./Races/grande_taille_poil_court/Le bullmastiff.jpg",
    "Le cane corso" : "./Races/grande_taille_poil_court/Le cane_corso.jpg",
    "Le chien-loup tchèque" : "./Races/grande_taille_poil_court/Le chien_loup_tcheque.jpg",
    "Le dalmatien" : "./Races/grande_taille_poil_court/Le dalmatien.jpg",
    "Le labrador" : "./Races/grande_taille_poil_court/Le labrador.jpg",
    "Le rottweiler" : "./Races/grande_taille_poil_court/Le rottweiler.jpg", 
    "Le bullmastiff" : " ./Races/grande_taille_poil_court/Le bullmastiff.jpg", 
    
    "Le lévrier écossais" : " ./Races/grande_taille_poil_long/Le lévrier écossais.jpg", 
    "Le landseer" : " ./Races/grande_taille_poil_long/Le landseer.jpg", 
    "Le komondo" : " ./Races/grande_taille_poil_long/Le komondor.jpg", 
    "Le lévrier afghan" : " ./Races/grande_taille_poil_long/Le levrier-afghan.jpg", 
    "Le berger yougoslave" : " ./Races/grande_taille_poil_long/Le berger-yougoslave.jpg", 
    "Le dogue du Tibet" : " ./Races/grande_taille_poil_long/Le dogue du tibet.jpg", 
    "Le setter gordon" : " ./Races/grande_taille_poil_long/le setter gordon.png", 
    "Le berger de Russie" : " ./Races/grande_taille_poil_long/Le berger-de-russie.jpg", 
    "Le chien de montagne portugais" : " ./Races/grande_taille_poil_long/Le chien des montagnes portugais.jpg", 
    "Le berger du Caucase" : " ./Races/grande_taille_poil_long/Le berger du caucasse.png", 
  
    "Le basset des Alpes" : "./Races/petite_taille_poil_court/Le basset des alpes.jpg",
    "Le staffordshire bull-terrier" : "./Races/petite_taille_poil_court/Le staffordshire bull-terrier.jpg",
    "Le fox-terrier" : "./Races/petite_taille_poil_court/Le fox-terrier.jpg",
    "Le bedlington terrier" : "./Races/petite_taille_poil_court/Le bedlington terrier.jpg",
    "Le petit brabançon" : "./Races/petite_taille_poil_court/Le petit brabançon.jpg",
    "Le bouledogue français" : "./Races/petite_taille_poil_court/Le bouledogue français.jpg",
    "Le griffon bruxellois" : "./Races/petite_taille_poil_court/Le griffon bruxellois.jpg",
    "Le bull terrier" : "./Races/petite_taille_poil_court/Le bull terrier.jpg",
    "L'affenpinscher" : "./Races/petite_taille_poil_court/L'affenpinscher.jpg",
    "Le corgi" : "./Races/petite_taille_poil_court/Le corgi.jpg",
    "Le Jack russell" : "./Races/petite_taille_poil_court/Le Jack russell.jpg",
  
    "Le Berger des Shetland" : "./Races/petite_taille_poil_long/Le Berger des Shetland.jpg",
    "Le Bichon maltais" : "./Races/petite_taille_poil_long/Le Bichon maltais.jpg",
    "Le Cairn terrier" : "./Races/petite_taille_poil_long/Le Cairn terrier.jpg",
    "Le Cavalier King Charles" : "./Races/petite_taille_poil_long/Le Cavalier King Charles.jpg",
    "Le Coton de Tuléar" : "./Races/petite_taille_poil_long/Le Coton de Tuléar.jpg",
    "Le Lhassa Apso" : "./Races/petite_taille_poil_long/Le Lhassa Apso.jpg",
    "Le petit chien lion" : "./Races/petite_taille_poil_long/Le petit chien lion.jpg",
    "Le Shih Tzu" : "./Races/petite_taille_poil_long/Le Shih Tzu.jpg",
    "Le Spitz nain" : "./Races/petite_taille_poil_long/Le Spitz nain.jpg",
    "Le Yorkshire terrier" : "./Races/petite_taille_poil_long/Le Yorkshire terrier.jpg",
  
}


  let race1 = document.getElementById("Race1");
  let race2 = document.getElementById("Race2");
  let race3 = document.getElementById("Race3");
  let race4 = document.getElementById("Race4");


  document.getElementById("imgTest").src = dict[race3[1].value];
  document.getElementById("dog_race_title").textContent = race3[1].value;


  race3.addEventListener("click",function(e){

    if (e.target.value != "") {
        document.getElementById("imgTest").src = dict[e.target.value];
        document.getElementById("dog_race_title").textContent =  e.target.value;
    }
    
})

race4.addEventListener("click",function(e){

    if (e.target.value != "") {
        document.getElementById("imgTest").src = dict[e.target.value];
        document.getElementById("dog_race_title").textContent =  e.target.value;
    }
    
})

race1.addEventListener("click",function(e){

    if (e.target.value != "") {
        document.getElementById("imgTest").src = dict[e.target.value];
        document.getElementById("dog_race_title").textContent =  e.target.value;
    }
        
})

race2.addEventListener("click",function(e){

    if (e.target.value != "") {
        document.getElementById("imgTest").src = dict[e.target.value];
        document.getElementById("dog_race_title").textContent =  e.target.value;
    }
    
})