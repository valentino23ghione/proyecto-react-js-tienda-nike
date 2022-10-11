import imagenes from "../assets/imagenes"
export const arrayItems = [
    {
        id: 1 ,
        titulo: 'Zapatilla airforce white',
        descripcion: 'Zapatilla airforce white',
        descLarga:'Las mejores zapatiilas importadas de USA.',
        precio:'25.000$',
        foto: imagenes.AirforceWhite,
        stock:6,
        tipo:'zapatillas'     
    },
    {
        id: 2 ,
        titulo: 'Zapatilla airforce ',
        descripcion: 'Zapatilla airforce black',
        descLarga:'Las mejores zapatiilas importadas de USA.',
        precio:'27.000$',
        foto: imagenes.Airforce6,
        stock:5,
        tipo:'zapatillas'    
    },
    {
        id: 3 ,
        titulo: 'Zapatilla airforce',
        descripcion: 'Zapatilla airforce red',
        descLarga:'Las mejores zapatiilas importadas de USA.',
        precio:'13500$',
        foto: imagenes.Airforce4,
        stock:5,
        tipo:'zapatillas'      
    },
    {
        id: 4 ,
        titulo: 'Zapatilla airforce',
        descripcion: 'Zapatilla airforce blue',
        descLarga:'Las mejores zapatiilas importadas de USA.',
        precio:'2700$',
        foto: imagenes.Airforce3,
        stock:5,
        tipo:'zapatillas'     
    },
    {
        id: 5 ,
        titulo: 'Zapatilla airforce',
        descripcion: 'Zapatilla airforce full white',
        descLarga:'Las mejores zapatiilas importadas de USA.',
        precio:'27300$',
        foto: imagenes.Airforce5,
        stock:5,
        tipo:'zapatillas'    
    },
    {
        id: 6 ,
        titulo: 'Zapatilla dunk sb',
        descripcion: 'Zapatilla sb dunk full white',
        descLarga:'Las mejores zapatiilas importadas de USA.',
        precio:'1700$',
        foto: imagenes.NikeDunk2,
        stock:2,
        tipo:'zapatillas'     
    },
    {
        id: 7 ,
        titulo: 'Zapatilla dunk sb',
        descripcion: 'Zapatilla sb dunk full orange',
        descLarga:'Las mejores zapatiilas importadas de USA..',
        precio:'16000$',
        foto: imagenes.NikeDunk1,
        stock:6,
        tipo:'zapatillas'     
    },
   
    

]

export const obtenerLista = () =>{
    return new Promise ((resolve, reject)=>{

        setTimeout(() => {
            resolve( arrayItems )
            reject(err => console.log (err))
        }, 1000);


    })
}