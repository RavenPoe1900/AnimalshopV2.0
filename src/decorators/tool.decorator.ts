import { SetMetadata } from '@nestjs/common';

export const TOOL_KEY = 'TOOL';
export const Tool = (...tools: string[]) => SetMetadata(TOOL_KEY, tools);
