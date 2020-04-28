import { toJson } from 'xml2json';

type XMLtoJSONParseFn = <T>(xml: string) => T;

export const getJSONFromXML: XMLtoJSONParseFn = (xml: string) => {
    const rawAuthorInfoJSON = toJson(xml);
    return JSON.parse(rawAuthorInfoJSON);
};
