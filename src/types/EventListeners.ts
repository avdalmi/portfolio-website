import React from "react";

export type OnChangeInput = React.ChangeEvent<HTMLInputElement>;
export type OnChangeInputArea = React.ChangeEvent<HTMLTextAreaElement>;
export type OnChangeSelect = React.ChangeEvent<HTMLSelectElement>;
export type OnSubmit = React.FormEvent;
export type OnClick = React.MouseEvent<HTMLButtonElement>;
export type OnClickFormDiv = React.MouseEvent<HTMLDivElement>;
export type Keyboard = React.KeyboardEvent;
export type OnChange = OnChangeInput | OnChangeInputArea | OnChangeSelect;
