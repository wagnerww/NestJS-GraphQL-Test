import { Resolver, Query, Parent, Context, Info, Args } from '@nestjs/graphql';
import { Author } from 'src/graphql';

@Resolver('Author')
export class AuthorResolver {
  authors: Author[] = [{ id: '1', firstName: 'wagner', lastName: 'ricardo' }];
  @Query()
  async allAuthors(): Promise<Author[]> {
    return Promise.resolve(this.authors);
  }

  @Query()
  async author(
    @Parent() parent,
    @Args('id') id,
    @Context() context,
    @Info() info,
  ): Promise<void> {
    const foundAuthor = await this.authors.find(author => author.id === id);
    if (foundAuthor) {
      Promise.resolve(foundAuthor);
    } else {
      Promise.reject('Não encontrado');
    }
  }
}
