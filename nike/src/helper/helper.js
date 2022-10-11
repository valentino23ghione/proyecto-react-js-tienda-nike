import imagenes from "../assets/imagenes"
export const arrayItems = [
    {
        id: 1 ,
        titulo: 'Zapatilla airforce white',
        descripcion: 'Zapatilla airforce white',
        descLarga:'Las mejores zapatiilas importadas de USA.',
        precio:'25.000$',
        foto: imagenes.proteinBSN,
        stock:6,
        tipo:'zapatillas'     
    },
    {
        id: 2 ,
        titulo: 'Zapatilla airforce ',
        descripcion: 'Zapatilla airforce black',
        descLarga:'Las mejores zapatiilas importadas de USA.',
        precio:'27.000$',
        foto: imagenes.trueMassBSN,
        stock:5,
        tipo:'zapatillas'    
    },
    {
        id: 3 ,
        titulo: 'Zapatilla airforce',
        descripcion: 'Zapatilla airforce red',
        descLarga:'Las mejores zapatiilas importadas de USA.',
        precio:'13500$',
        foto: imagenes.creatinaBsn,
        stock:5,
        tipo:'zapatillas'      
    },
    {
        id: 4 ,
        titulo: 'Zapatilla airforce',
        descripcion: 'Zapatilla airforce blue',
        descLarga:'Las mejores zapatiilas importadas de USA.',
        precio:'2700$',
        foto: imagenes.preworkBsn,
        stock:5,
        tipo:'zapatillas'     
    },
    {
        id: 5 ,
        titulo: 'Zapatilla airforce',
        descripcion: 'Zapatilla airforce full white',
        descLarga:'Las mejores zapatiilas importadas de USA.',
        precio:'27300$',
        foto: imagenes.aminoBsn,
        stock:5,
        tipo:'zapatillas'    
    },
    {
        id: 6 ,
        titulo: 'Zapatilla dunk sb',
        descripcion: 'Zapatilla sb dunk full white',
        descLarga:'Las mejores zapatiilas importadas de USA.',
        precio:'1700$',
        foto: imagenes.shakerBsn,
        stock:2,
        tipo:'zapatillas'     
    },
    {
        id: 7 ,
        titulo: 'Zapatilla dunk sb',
        descripcion: 'Zapatilla sb dunk full orange',
        descLarga:'Las mejores zapatiilas importadas de USA..',
        precio:'16000$',
        foto: imagenes.proteinStar,
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