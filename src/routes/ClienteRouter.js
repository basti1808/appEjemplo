import {Router} from 'express'
import lodash from 'lodash'
const {isEqual} = lodash
const router = Router()
import ClienteService from '../services/ClienteService.js'
const Cliente = new ClienteService()

router.get('/',async(req,res) => {
    try {
        const clientes = await Cliente.obtenerClientes()
        return res.status(200).json(clientes)
    } catch (error) {
        console.log(error.message)
    }
})

router.post('/',async(req,res) => {
    try {
        const body = req.body
        console.log(body)
        const respuesta = await Cliente.registrarClientes(body)
        return res.status(200).json(respuesta)
    } catch (error) {
        console.log(error.message)
    }
})

router.get('/:id',async(req,res) => {
    try {
        const id = req.params.id
        const respuesta = await Cliente.buscarClientePorId(id)
        return res.status(200).json(respuesta)
    } catch (error) {
        console.log(error.message)
    }
})

router.put('/',async(req,res) => {
    try {
        const id = req.query.id
        const body = req.body
        const antes = await Cliente.buscarClientePorId(id)
        await Cliente.actualizarClientePorId(id,body)
        const despues = await Cliente.buscarClientePorId(id)
        return res.status(200).json(isEqual(antes,despues))
    } catch (error) {
        console.log(error.message)
    }
})

router.delete('/:id',async(req,res) => {
    try {
        const id = req.params.id
        const respuesta = await Cliente.eliminarClientePorId(id)
        return res.status(200).json(respuesta)
    } catch (error) {
        
    }
})

export default router