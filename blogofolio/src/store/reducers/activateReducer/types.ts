interface BaseActionType {
    type: string;
}

interface ILoadUserActivateActionType extends BaseActionType {
    payload?: null | IObjectStringList;
}

interface IObjectStringList {
    [key: string]: string[];
}
interface IActivate {
    isActivated: boolean;
    errors: IObjectStringList | null;
}




export type { BaseActionType, ILoadUserActivateActionType, IObjectStringList, IActivate }