import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table({ tableName: 'tasks' })
export class Task extends Model<Task> {
  @ApiProperty({ example: 1, description: 'ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Name', description: 'Task name' })
  @Column({ type: DataType.STRING(255), allowNull: false })
  name: string;

  @ApiProperty({ example: 'Description', description: 'Task description' })
  @Column({ type: DataType.TEXT, allowNull: true })
  description: string;

  @ApiProperty({ example: 'Status', description: 'Status' })
  @Column({ type: DataType.STRING, allowNull: false })
  status: string;
}
