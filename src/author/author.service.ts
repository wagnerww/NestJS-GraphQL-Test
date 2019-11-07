import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Author } from './author.interface';
import { CreateAuthorDTO } from './dto/create-author.dto';
import { UpdateAuthorInput } from 'src/graphql';

@Injectable()
export class AuthorService {
  constructor(
    @InjectModel('Author') private readonly authorModel: Model<Author>,
  ) {}

  async create(author: CreateAuthorDTO): Promise<Author> {
    return await this.authorModel.create(author);
  }

  async update(_id: string, author: UpdateAuthorInput): Promise<Author> {
    return await this.authorModel.findByIdAndUpdate({ _id }, author);
  }

  async delete(_id: string): Promise<string> {
    const results = await this.authorModel.remove({ _id });
    return `Registro ${_id} apagado`;
  }

  async find(): Promise<Author[]> {
    return await this.authorModel.find();
  }

  async findOne(id: string): Promise<Author> {
    return await this.authorModel.findById(id);
  }
}
