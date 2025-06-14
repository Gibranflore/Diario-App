


export const fileUpload = async( file ) => {

    if( !file ) return null; 
        // throw new Error("No se subio ningun archivo");

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dj0ehold6/image/upload';

    const formData = new FormData();
    formData.append( 'upload_preset', 'React-Journal' );    //* Son la llave y el valor
    formData.append( 'file', file );

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData,
        });

        if( !resp.ok ) throw new Error("No se pudo subir la imagen");
        const cloudResp = await resp.json();

        return cloudResp.secure_url;


    } catch (error) {
        // console.log(error);
        // throw new Error(error.message);
        return null;

    }
}