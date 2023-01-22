import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ example: 'New task', description: 'Task name' })
  name: string;

  @ApiProperty({ example: 'Description', description: 'Task description' })
  description: string;

  @ApiProperty({ example: 'new', description: 'Task status' })
  status: string;
}
