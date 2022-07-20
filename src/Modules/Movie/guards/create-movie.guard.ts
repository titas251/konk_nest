import { Injectable, CanActivate, ExecutionContext, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { AuthorService } from 'src/Modules/Author/Author.service';

@Injectable()
export class CreateMovieGuard implements CanActivate {
  constructor(private readonly authorService: AuthorService) {}
  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const request = ctx.switchToHttp().getRequest();
    if (this.validateReq(request) === true) {
      try {
        if (request.body.author_id !== undefined) {
          const existingAuthor = await this.authorService.findOneOrFail(request.body.author_id);
          request.body.authors = [];
          request.body.authors.push(existingAuthor);
        }
      } catch (err) {
        throw new HttpException('Author not found', HttpStatus.NOT_FOUND);
      }
      return true;
    }

    return false;
  }

  private validateReq(request: any): boolean {
    if (request.headers.create_auth_token === process.env.CREATE_AUTH_TOKEN) {
      return true;
    }
    return false;
  }
}
