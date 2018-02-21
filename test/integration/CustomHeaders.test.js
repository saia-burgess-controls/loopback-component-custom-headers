const { expect } = require('chai');

describe('Custom Headers Integration Test', () => {
    const endPointUrl = 'http://localhost:3000/api/authors/';

    it('Expect the resopnse to have configured custom cache headers', async function() {
        const response = await this.service.api.request.get(endPointUrl);

        expect(response.status).to.equals(200);
        expect(response.headers.vary).to.equals('User-Agent');
        expect(response.headers['cache-control']).to.equals('public, max-age=86400');
    });
});
