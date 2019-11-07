
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface AuthorInput {
    firstName: string;
    lastName: string;
}

export interface UpdateAuthorInput {
    firstName?: string;
    lastName?: string;
}

export interface Author {
    id: string;
    firstName?: string;
    lastName?: string;
}

export interface IMutation {
    createAuthor(author: AuthorInput): Author | Promise<Author>;
    deleteAuthor(id: string): string | Promise<string>;
    updateAuthor(id: string, author?: UpdateAuthorInput): Author | Promise<Author>;
}

export interface IQuery {
    allAuthors(): Author[] | Promise<Author[]>;
    author(id: string): Author | Promise<Author>;
}
