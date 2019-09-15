import requestHelper from './requestHelper';

describe('Request Helper', () => {
    let data = {
        grant_type: process.env.REACT_APP_API_GRANT_TYPE,
        client_id: process.env.REACT_APP_API_CLIENT_ID,
        client_secret: process.env.REACT_APP_API_CLIENT_SECRET,
        scopes: process.env.REACT_APP_API_SCOPES.replace(/ /g, '').split(','),
    }

    test('can fetch token', done => {
        requestHelper('post', '/token', data, null, null).then(function (data) {
            expect(data).not.toBeUndefined();
            expect(data.access_token).not.toBeUndefined();
            expect(data.access_token).toMatch(/\w{8}-(\w{4}-){3}\w{12}/g);
            done();
        });
    });

    test('should fail', done => {
        let wrongData = {...data, ...{client_id: 'wrong'}};

        requestHelper('post', '/token', wrongData, null, null).then(function (data) {
            expect(data).not.toBeUndefined();
            expect(data.response.status).toEqual(400);
            done();
        });
    });
});
