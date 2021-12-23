import {
  createParamDecorator,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';

export const EntityId = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const {
      user: { extra },
    } = ctx.switchToHttp().getRequest();

    const entity = extra && extra.entity ? extra.entity.id : null;
    if (entity === null)
      throw new ForbiddenException(
        'El usuario no tiene asociada ninguna entidad',
      );

    return entity;
  },
);
