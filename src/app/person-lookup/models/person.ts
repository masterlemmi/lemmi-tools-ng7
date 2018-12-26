import {Gender} from './gender';

export class Person {
    id: number
    gender: Gender
    profile: string
    photoUrl: string
    name: string
    nickname: string
    age: string
    birthday: Date
    parents: Person
    children: Person
    relationships: Map<string, Person[]>;
}
