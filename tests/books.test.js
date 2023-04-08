process.env.NODE_ENV = 'test'

const request = require('supertest')
const app = require('../app')
const db = require('../db')

beforeEach(async () => {
    let result = db.query(`
    INSERT INTO books VALUES
    ('123123', 'https://amazon.com/testbook',
    )`)
})