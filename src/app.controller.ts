import {Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import {AppService} from "./app.service";
import {AuthService} from "./auth/auth.service";
import {JwtAuthGuard} from './auth/guards/jwt-auth.guard';
import {LocalAuthGuard} from './auth/guards/local-auth.guard';
import {AuthGuard} from "@nestjs/passport";
import {Public} from "./decorators/public.decorator";

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private authService: AuthService) {
    }


    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
