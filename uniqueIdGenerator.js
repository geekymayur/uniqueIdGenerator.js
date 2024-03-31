// uniqueIdGenerator.js

class UniqueIdGenerator {
    constructor() {
        this.counter = 0;
    }

    generateUniqueId(type = 'numeric', length = 10) {
        let id = '';

        // Convert the type parameter to lowercase for case-insensitive comparison
        const lowercaseType = type.toLowerCase();

        if (lowercaseType === 'num' || lowercaseType === 'numeric' || lowercaseType === '123') {
            id = this.generateNumericId(length);
        } else if (lowercaseType === 'abc123' || lowercaseType === 'alphanumeric') {
            id = this.generateAlphanumericId(length);
        } else {
            throw new Error('Invalid type specified. Use "num" or "abc123" for numeric or alphanumeric IDs respectively.');
        }

        return id;
    }

    generateNumericId(length) {
        let id = '';
        for (let i = 0; i < length; i++) {
            id += Math.floor(Math.random() * 10);
        }
        return id;
    }

    generateAlphanumericId(length) {
        let id = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            id += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return id;
    }
}

module.exports = UniqueIdGenerator;
