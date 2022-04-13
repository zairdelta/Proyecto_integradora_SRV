import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import auth from './auth'

export default class Sesion extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public sesion: string
  @hasOne(() => auth, {
    foreignKey: 'sesion', // defaults to userId
  })
  public Auth: HasOne<typeof auth>
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
