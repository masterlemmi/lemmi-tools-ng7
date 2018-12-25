import {Gender} from './gender';

export class Person {
    id: number
    gender: Gender
    name: string
    nickname: string
    dateOfBirth: Date
    parents: Person
    children: Person
    relationships: Map<string, Person[]>;
}
