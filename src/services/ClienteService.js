import config from '../config/config.js'
import knex from 'knex'
export default class ClienteService{
    constructor(){
        this.knex = knex(config)
    }

    async obtenerClientes(){
        const clientes = await this.knex.select('*').from('clientes')
        return Object.values(JSON.parse(JSON.stringify(clientes)))
    }

    async registrarClientes(body){
        return this.knex('clientes').insert(body)
    }

    async buscarClientePorId(id){
        return this.knex('clientes').where({cliente_id:id}).select('*').first()
    }

    async actualizarClientePorId(id,body){
        return this.knex('clientes').where({cliente_id:id}).update(body)
    }

    async eliminarClientePorId(id){
        return this.knex('clientes').where({cliente_id:id}).del()
    }
    
}