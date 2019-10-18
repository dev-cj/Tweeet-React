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
        if (url === '/something') {
            return Promise.resolve({
                data: 'data'
            });
        }
        if (url === '/something2') {
            return Promise.resolve({
                data: 'data2'
            });
        }
    }),
    create: jest.fn(function () {
        return this;
    })
};