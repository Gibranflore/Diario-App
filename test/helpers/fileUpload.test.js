import { fileUpload } from "../../src/helpers/fileUpload"
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    'cloud_name': 'dj0ehold6',
    'api_key':    '214492944734973',
    'api_secret': '6kYZ-vlAr7ysFBYgAj9xixH09aI',
    'secure':     true,
});

describe('pruebas para fileUpLoad', () => {

    jest.setTimeout(50000);

    test('Debe de subir el archivo', async() => {
        
        const imageUrl = `https://th.bing.com/th/id/OIP.rz-moqQd9tJSWgp8XNts9gAAAA?pid=ImgDet&w=181&h=181&c=7&dpr=1.3`; //^ Aqui hacemos referencia a una imagen para descargar
        const resp = await fetch(imageUrl);         //^ hace una peticion GET para obtener la imagen desde la url
        const blob = await resp.blob();             //^ Convierte la imagen en blob, es un objeto binario que representa la imagen
        const file = new File([blob], 'foto.jpg')   //^ Crea una nuavo archivo type file blob, como si lo hubieran subido en un formulario

        const url = await fileUpload( file );       //^ Aqui es donde se encarga de subir la imagen a cloudinary el "fileUpLoad" se encarga
        expect(typeof url).toBe('string')           //^ Se espera que que la url sea una string para subir

        //console.log(url);                         //^ Imprime la url
        const segments = url.split('/');            //^ Esto borra todos los '/' y los ordena como objeto
        const imageId  = segments[segments.length - 1].replace('.jpg','');  //^ LLama el ultimo objeto y borra lo que tenga .jpg y lo remplaza por una cadena vacia, lo guarda en la variable
        await cloudinary.api.delete_resources([imageId]);
        
    });

    test('debe la imagen retornar a null', async() => {
        
        const file = new File([], 'foto.jpg')       //^ En "file[]" no hay blob es como si no se hubiera subido una imagen
        const url  = await fileUpload( file );       //^ Esto va a disparar nuestro errorr
        expect(url).toBe( null )  

    });
})