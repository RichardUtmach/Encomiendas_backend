import { Request, Response } from 'express';
import Cliente from '../models/cliente';

export const getClientes = async (req: Request, res: Response) => {
    const listClientes = await Cliente.findAll()

    res.json(listClientes)
}

export const getCliente = async (req: Request, res: Response) => {
    const { id } = req.params;
    const cliente = await Cliente.findByPk(id);

    if (cliente) {
        res.json(cliente)
    } else {
        res.status(404).json({
            msg: `No existe un cliente con el id ${id}`
        })
    }
}

export const deleteCliente = async (req: Request, res: Response) => {
    const { id } = req.params;
    const cliente = await Cliente.findByPk(id);

    if (!cliente) {
        res.status(404).json({
            msg: `No existe un cliente con el id ${id}`
        })
    } else {
        await cliente.destroy();
        res.json({
            msg: 'El cliente fue eliminado con exito!'
        })
    }

}

export const postCliente = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Cliente.create(body);

        res.json({
            msg: `El cliente fue agregado con exito!`
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }
}

export const updateCliente = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {

        const cliente = await Cliente.findByPk(id);

    if(cliente) {
        await cliente.update(body);
        res.json({
            msg: 'El cliente fue actualziado con exito'
        })

    } else {
        res.status(404).json({
            msg: `No existe un cliente con el id ${id}`
        })
    }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }

    
}