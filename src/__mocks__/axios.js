module.exports = {
    get: jest.fn((url) => {
        if (url) {
            return Promise.resolve({
                data: [
                    {
                        "id": 1,
                        "title": "json-server",
                        "author": "typicode"
                    },
                    {
                        "Name": "Dan Brown",
                        "Email": "danbrown@gmail.com",
                        "Password": "DanBrown",
                        "id": 2
                    }
                ]
            });
        }
    }),
    post: jest.fn((url) => {
        if (url=== 'http://localhost:3000/posts') {
            return Promise.resolve({
                data: 'successfully registered'
            });
        }
        if (url=== 'http://localhost:3000/comments') {
            return Promise.resolve({
                data: 'post created'
            });
        }
    }),
    create: jest.fn(function () {
        return this;
    })
};