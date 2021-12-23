import { createParamDecorator, ExecutionContext, Inject } from '@nestjs/common';

export const RequestUser = (): object => {
  const req = Inject('REQUEST');
  return {};
};
