const {zokou}=require("../framework/zokou")







zokou({nomCom:"restart",categorie:"Mods",reaction:"📴"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("𝑇ℎ𝑖𝑠 𝑐𝑜𝑚𝑚𝑎𝑛𝑑𝑖𝑠 𝑜𝑛𝑙𝑦 𝐹𝑜𝑟 𝑀𝑎𝑟𝑖𝑠𝑒𝑙");
  }

  const {exec}=require("child_process")

    repondre("𝑩𝒖𝒈𝒂𝒕𝒕𝒊 𝒊𝒔 𝒓𝒆𝒔𝒕𝒂𝒓𝒕𝒊𝒏𝒉𝒈⏳");

  exec("pm2 restart all");
  

  



})
