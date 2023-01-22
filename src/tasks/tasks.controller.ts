import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './DTO/create-task-dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Task } from './tasks.model';

@ApiTags('Tasks')
@Controller('/api/tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @ApiOperation({ summary: 'Create task' })
  @ApiResponse({ status: 201, type: Task })
  @Post()
  create(@Body() taskDTO: CreateTaskDto) {
    return this.taskService.createTask(taskDTO);
  }

  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({ status: 200, type: [Task] })
  @Get()
  getAll() {
    return this.taskService.getTasks();
  }
}
