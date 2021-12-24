import {ConflictException, Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class AppService {

    getHello(): string {
        return 'Hello World!';
    }

    async create(dto, newDto, validation, model) {
        try {
            const toSave = Object.assign(newDto, dto)
            const save = await model.create(toSave);
            return save;
        } catch (error) {
            return new ConflictException(error.message);
        }

    }

    async findAll(limit, page, model) {
        try {
            const totalCount = await model.count()
            const skippedItems = (page - 1) * limit;
            const result = await model.findAll(limit, skippedItems);
            return {
                totalCount,
                page: page,
                totalPage: Math.ceil(totalCount / limit),
                limit: limit,
                data: result,
            }
        } catch (error) {
            return new ConflictException(error.message);
        }

    }

    async findByIdAndUpdate(id, data, validation, model) {
        try {
            if (validation) {
                validation.forEach(element => console.log(element));
            }
            const myCreate = await model.update(id, data);
            return myCreate
        } catch (error) {
            return new ConflictException(error.message);
        }
    }

    async findOne(id, model) {
        try {
            const resp = await model.findOne(id);
            if (!resp) {
                throw new NotFoundException(`This id #${id} does not exist`)
            }
            return resp;
        } catch (error) {
            return new ConflictException((error.message + " Possible error: The id is not of type number"));
        }
    }

    async findUserName(id, model) {
        try {
            const resp = await model.findOneUserName(id);
            if (!resp) {
                throw new NotFoundException(`This id #${id} does not exist`)
            }
            return resp;
        } catch (error) {
            return new ConflictException((error.message + " Possible error: The id is not of type number"));
        }
    }

    async update(id, dto, validation, model) {
        const toUpdate = await this.findOne(id, model);
        try {
            const toSave = Object.assign(toUpdate, dto)
            const save = await model.create(toSave);
            return save;
        } catch (error) {
            return new ConflictException(error.message);
        }

    }

    async removeOne(id, model): Promise<any | null> {
        try {
            if (!id
            ) {
                return new ConflictException("Possible error: The id is not of type number")
            }
            const remove = model.remove(id);
            return remove;
        } catch
            (error) {
            return new ConflictException(error.message);
        }
    }

    async removeElements(ids, model) {
        for (let i = 0; i < ids.length; i++) {
            await this.removeOne(ids[i], model)
        }
    }
}

