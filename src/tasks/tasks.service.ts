import { Task } from './tasks.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTaskDto } from './DTO/create-task-dto';

export class TasksService {
  constructor(@InjectModel(Task) private taskRepository: typeof Task) {}

  async createTask(dto: CreateTaskDto) {
    return await this.taskRepository.create(dto);
  }

  async getTasks() {
    return await this.taskRepository.findAll();
  }
}
