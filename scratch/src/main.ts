import { Controller, Get, Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

@Controller()
class AppController {
	@Get()
	findAll(): string {
		return 'This action returns all cats';
	}
}

@Module({
	controllers: [AppController],
})
class AppModule {}

const bootstrap = async () => {
	const app = await NestFactory.create(AppModule);
	await app.listen(8000);
};

bootstrap();
