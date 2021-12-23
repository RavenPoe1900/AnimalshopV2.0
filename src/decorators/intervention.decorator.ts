import {
  createParamDecorator,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';

export const InterventionId = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const {
      user: { extra },
    } = ctx.switchToHttp().getRequest();

    const intervention =
      extra && extra.intervention ? extra.intervention.id : null;
    if (intervention === null)
      throw new ForbiddenException(
        'El usuario no tiene ninguna intervencion asociada',
      );

    return intervention;
  },
);
