import { Resolver, Query, Parent, Context, Info, Args } from '@nestjs/graphql';
import { Author } from '../author/author.interface';
import { AuthorService } from './author.service';

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
  ): Promise<void> {}
}
