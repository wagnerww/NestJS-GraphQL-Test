import {
  Resolver,
  Query,
  Parent,
  Context,
  Info,
  Args,
  Mutation,
  Root,
} from '@nestjs/graphql';
import { Author } from '../author/author.interface';
import { AuthorService } from './author.service';
import { CreateAuthorDTO } from './dto/create-author.dto';
import { UpdateAuthorInput } from 'src/graphql';

@Resolver('Author')
export class AuthorResolver {
  constructor(private authorService: AuthorService) {}

  @Query()
  async allAuthors(): Promise<Author[]> {
    return await this.authorService.find();
  }

  @Query()
  async author(
    @Parent() parent,
    @Args('id') id,
    @Context() context,
    @Info() info,
  ): Promise<Author> {
    return await this.authorService.findOne(id);
  }

  @Mutation()
  async createAuthor(@Args('author') author: CreateAuthorDTO): Promise<Author> {
    return await this.authorService.create(author);
  }

  @Mutation()
  async deleteAuthor(@Root() root, @Args('id') id: string): Promise<string> {
    return await this.authorService.delete(id);
  }

  @Mutation()
  async updateAuthor(
    @Args('id') id: string,
    @Args('author') author: UpdateAuthorInput,
  ): Promise<Author> {
    return await this.authorService.update(id, author);
  }
}
