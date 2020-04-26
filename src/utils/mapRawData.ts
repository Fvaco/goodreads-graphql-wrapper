import { camelCase } from 'lodash';
import { handleObjectField } from '~/utils/handleObjectField';

export type RawInfo = { [key: string]: string } | {};
export type MapperFn = <T>(value: any) => T | T[] | RawInfo;

export const mapRawData = <T>(rawInfo: RawInfo, customMappedFields?: { [key: string]: MapperFn }): T | RawInfo =>
    Object.entries(rawInfo).reduce<T | RawInfo>((result: T | RawInfo, [key, value]: [string, any]) => {
        const isBoolean = ['true', 'false'].includes(value);
        if (customMappedFields) {
            const isCustomMappedField = Object.keys(customMappedFields).includes(key);
            if (isCustomMappedField) return { ...result, [camelCase(key)]: customMappedFields[key](value) };
        }
        const currentValue =
            typeof value === 'object' && !!value ? handleObjectField(value) : isBoolean ? !!value : value;
        return { ...result, [camelCase(key)]: currentValue };
    }, {});
