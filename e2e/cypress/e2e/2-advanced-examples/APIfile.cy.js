describe('JSONPlaceholder API', () => {
    it('GET all posts', () => {
S        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length(100);
        });
    });

    it('GET a single post', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id', 1);
        });
    });

    it('GET with query parameters', () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts',
            qs: { userId: 1 },
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length(10);
        });
    });

    it('POST a new post', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
            title: 'Test title',
            body: 'Test body',
            userId: 1,
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('title', 'Test title');
        });
    });

    it('PUT update a post', () => {
        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
            id: 1,
            title: 'Updated title',
            body: 'Updated body',
            userId: 1,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('title', 'Updated title');
        });
    });

    it('DELETE a post', () => {
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1').then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('Check response header', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1').then((response) => {
            expect(response.headers).to.have.property('content-type', 'application/json; charset=utf-8');
        });
    });

    it('Send custom header', () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            headers: { 'User-Agent': 'QA-Automation' },
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('Check response time', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1').then((response) => {
            expect(response.duration).to.be.lessThan(3000);
        });
    });

    it('Validate response body structure', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1').then((response) => {
            expect(response.body).to.have.property('title');
            expect(response.body).to.have.property('body');
            expect(response.body).to.have.property('userId');
        });
    });
});