import {ConflictException, Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World!';
    }
    async create(dto, validation, model) {
        try {
            if (validation) {
                validation.forEach(element => console.log(element));
            }
            const myCreate = await model.create(dto);
            return myCreate
        } catch (error) {
            return new ConflictException(error.keyValue);
        }
    }

    async findByIdAndUpdate(id, data, validation, model) {
        try {
            if (validation) {
                validation.forEach(element => console.log(element));
            }
            const myCreate = await model.findByIdAndUpdate(id, data);
            return myCreate
        } catch (error) {
            return new ConflictException(error.keyValue);
        }
    }

    async findOne(id, model) {
        const resp = await model.findOne(id);
        if (!resp) {
            throw new NotFoundException(`This id #${id} does not exist`)
        }
        return resp;
    }

    async removeOne(id: string, model): Promise<any | null> {
        try {
            model.removeOne(id);
        } catch (error) {
            return new ConflictException(error.keyValue);
        }
    }

    async removeElements(ids: string[], model) {
        for (let i = 0; i < ids.length; i++) {
            this.removeOne(ids[i], model)
        }
    }
}

