/**
 * Represents a Developer with a first and last name
 */


export  class Developer{
    #firstName;
    #lastName;

    constructor(firstName, lastName) {
        this.#firstName = firstName?.trim() || '';
        this.#lastName = lastName?.trim() || '';
    }

    /**
     * Return a first name in
     * @returns {*}
     */

    get firstName() {
        return this.#firstName;
    }

    get lastName(){
        return this.#lastName;
    }

    get fullName(){

        return this.#lastName && this.#lastName
        ? `${this.#firstName} ${this.#lastName}` : 'Unknown';

    }

}