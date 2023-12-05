import { Request, Response } from 'express';
import Camion from '../models/camion';

export const getCamiones = async (req: Request, res: Response) => {
    const listCamiones = await Camion.findAll()

    res.json(listCamiones)
}

export const getCamion = async (req: Request, res: Response) => {
    const { id } = req.params;
    const camion = await Camion.findByPk(id);

    if (camion) {
        res.json(camion)
    } else {
        res.status(404).json({
            msg: `No existe un camion con el id ${id}`
        })
    }
}

export const deleteCamion = async (req: Request, res: Response) => {
    const { id } = req.params;
    const camion = await Camion.findByPk(id);

    if (!camion) {
        res.status(404).json({
            msg: `No existe un camion con el id ${id}`
        })
    } else {
        await camion.destroy();
        res.json({
            msg: 'El camion fue eliminado con exito!'
        })
    }

}

export const postCamion = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Camion.create(body);

        res.json({
            msg: `El camion fue agregado con exito!`
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }
}

export const updateCamion = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {

        const camion = await Camion.findByPk(id);

    if(camion) {
        await camion.update(body);
        res.json({
            msg: 'El camion fue actualziado con exito'
        })

    } else {
        res.status(404).json({
            msg: `No existe un camion con el id ${id}`
        })
    }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }

    
}