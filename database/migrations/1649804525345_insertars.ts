import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Sesion from 'App/Models/Sesion'

export default class Insertars extends BaseSchema {
  protected tableName = 'insertars'

  public async up () {
    const sesion1=new Sesion()
    sesion1.sesion="Admin"
    await sesion1.save()
    const sesion2=new Sesion()
    sesion2.sesion="Usuario"
    await sesion2.save()
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
