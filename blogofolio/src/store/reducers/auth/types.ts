interface IObjectStringList {
    [key: string]: string[];
}

interface IState {
    tokens: TokenDto | null;
    errors: IObjectStringList | null;
}

interface TokenDto {
    access: string;
    refresh: string;
}

type AuthUserActionType = {
    type: string;
    payload: TokenDto | IObjectStringList;
};

export type { IObjectStringList, IState, TokenDto, AuthUserActionType }