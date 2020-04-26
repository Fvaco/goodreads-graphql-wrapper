type BooleanString = 'true' | 'false';
type HandleObjectFieldInput = {
    nil: BooleanString;
    nophoto: BooleanString;
    type: string;
    $t: string;
};
type HandleObjectFieldOutput = number | string | null;

export const handleObjectField = (objectValue: HandleObjectFieldInput): HandleObjectFieldOutput => {
    const { type, $t } = objectValue;
    if (!!$t) {
        if (!!type && type === 'integer') return +$t;
        return $t;
    }

    return null;
};
