import { Request, Response } from 'express';
import Encomienda from '../models/encomienda';

export const getEncomiendas = async (req: Request, res: Response) => {
    const listEncomiendas = await Encomienda.findAll()

    res.json(listEncomiendas)
}

export const getEncomienda = async (req: Request, res: Response) => {
    const { id } = req.params;
    const encomienda = await Encomienda.findByPk(id);

    if (encomienda) {
        res.json(encomienda)
    } else {
        res.status(404).json({
            msg: `No existe una encomienda con el id ${id}`
        })
    }
}

export const deleteEncomienda = async (req: Request, res: Response) => {
    const { id } = req.params;
    const encomienda = await Encomienda.findByPk(id);

    if (!encomienda) {
        res.status(404).json({
            msg: `No existe una encomienda con el id ${id}`
        })
    } else {
        await encomienda.destroy();
        res.json({
            msg: 'La encomienda fue eliminado con exito!'
        })
    }

}

export const postEncomienda = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Encomienda.create(body);

        res.json({
            msg: `La encomienda fue agregada con exito!`
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }
}

export const updateEncomienda = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {

        const encomienda = await Encomienda.findByPk(id);

    if(encomienda) {
        await encomienda.update(body);
        res.json({
            msg: 'La encomienda fue actualziado con exito'
        })

    } else {
        res.status(404).json({
            msg: `No existe una encomienda con el id ${id}`
        })
    }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }

    
}