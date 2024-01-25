
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                     __                             ___       __  
  
   _____               _   _                 
  / ____|             | | (_)                
 | |  __ _ __ ___  ___| |_ _ _ __   __ _ ___ 
 | | |_ | '__/ _ \/ _ \ __| | '_ \ / _` / __|
 | |__| | | |  __/  __/ |_| | | | | (_| \__ \
  \_____|_|  \___|\___|\__|_|_| |_|\__, |___/
                                    __/ |    
                                   |___/     

`;
document.getElementById("login").innerHTML += custom_text_header
