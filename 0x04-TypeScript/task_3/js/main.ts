/// <reference path='./crud.d.ts' />
import { RowID, RowElement } from "./interface";
import * as CRUD from './crud'
import { insertRow } from "./crud";

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};

const newRowID: RowID = insertRow(row);

const updatedRow: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23,
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);

// const obj = {firstName: "Williams", lastName: "Akanni"};
// CRUD.insertRow(obj)
// Insert row {firstName: "Guillaume", lastName: "Salva"}

// CRUD.deleteRow(125);
// Delete row id 125