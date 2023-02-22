import { IBaseActionType } from "../../../tools/types";


interface ILoadUserActivateActionType extends IBaseActionType {
    payload?: null | IObjectStringList;
}

interface IObjectStringList {
    [key: string]: string[];
}
interface IActivate {
    isActivated: boolean;
    errors: IObjectStringList | null;
}




export type { ILoadUserActivateActionType, IActivate, IObjectStringList };