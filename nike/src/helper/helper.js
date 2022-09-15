import imagenes from "../assets/imagenes"

export const arrayItems = [

{
id: 1,
titulo: "nikeairforce white",
descripcion: "nike airforce white completamente blanca",
descLarga:'Las mejores zapatillas importadas, con tonos completamente color blanco y sombreado',
        precio:'20000$',
        foto: imagenes.Airforcewhite,
        stock:6,
        tipo:'zapatillas'  




},


{

    id: 2,
    titulo: "nikeairforce white/black",
    descripcion: "nike airforce  completamente blanca con tonos negros",
    descLarga:'Las mejores zapatillas importadas, con tonos completamente color semiblancos y sombreado color negro, pipa de nike negra',
            precio:'18000$',
            foto: imagenes.Airforce2,
            stock:5,
            tipo:'zapatillas'  
    





},


{
    id: 3,
    titulo: "nikeairforce white/blue",
    descripcion: "nike airforce completamente blanca y sombreado azul",
    descLarga:'Las mejores zapatillas importadas, con tonos completamente color blanco y sombreado color azul, pipa de nike color azul',
            precio:'16000$',
            foto: imagenes.Airforce3,
            stock:5,
            tipo:'zapatillas'  
    






},


{

    id: 4,
    titulo: "nikeairforce white/red",
    descripcion: "nike airforce completamente blanca y sombreado rojo",
    descLarga:'Las mejores zapatillas importadas, con tonos completamente color blanco y sombreado color rojo, pipa de nike color rojo',
            precio:'17000$',
            foto: imagenes.Airforce4,
            stock:5,
            tipo:'zapatillas'  
    





},


{
    id: 5,
    titulo: "nikeairforce grey/metal",
    descripcion: "nike airforce completamente blanca y sombreado metalizado",
    descLarga:'Las mejores zapatillas importadas, con tonos completamente color blanco y sombreado color metalizado y gris, pipa de nike metalizada',
            precio:'22000$',
            foto: imagenes.Airforce5,
            stock:5,
            tipo:'zapatillas'  
    




},


{
    id: 6,
    titulo: "nikeairforce black/purple",
    descripcion: "nike airforce completamente negra y sombreado violeta",
    descLarga:'Las mejores zapatillas importadas, con tonos completamente color negro y sombreado color violeta, pipa de nike color negro',
            precio:'24000$',
            foto: imagenes.Airforce6,
            stock:6,
            tipo:'zapatillas'  
    




},


{

    id: 7,
    titulo: "nike dunk orange/white",
    descripcion: "nike dunk sb completamente naranja y sombreado blanco",
    descLarga:'Las mejores zapatillas importadas, con tonos completamente color naranja y sombreado color blanco, pipa de nike color naranja',
            precio:'28000$',
            foto: imagenes.NikeDunk1,
            stock:6,
            tipo:'zapatillas'  


    
},


{

    id: 8,
    titulo: "nike dunk brown/white/vintage",
    descripcion: "nike dunk sb completamente marron y sombreado blanco",
    descLarga:'Las mejores zapatillas importadas, con tonos completamente color marron y sombreado color blanco, pipa de nike color azul',
            precio:'30000$',
            foto: imagenes.NikeDunk2,
            stock:6,
            tipo:'zapatillas'  




}





















]




export const obtenerLista = () =>{
    return new Promise ((resolve, reject)=>{

        setTimeout(() => {
            resolve( arrayItems )
            reject(err => console.log (err))
        }, 2000);


    })
}