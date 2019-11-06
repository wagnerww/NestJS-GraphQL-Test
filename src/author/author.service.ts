import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Author } from './author.interface';
import { CreateAuthorDTO } from './dto/create-author.dto';

@Injectable()
export class AuthorService {
  constructor(
    @InjectModel('Author') private readonly authorModel: Model<Author>,
  ) {}

  async create(author: CreateAuthorDTO): Promise<Author> {
    return await this.authorModel.create(author);
  }
  async find(): Promise<Author[]> {
    return await this.authorModel.find();
  }
}
