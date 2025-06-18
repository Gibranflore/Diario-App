


export const getEnvironments = () => {

    import.meta.env; //* Cargar las variables de entorno

    return {
        ...import.meta.env
    }
}
