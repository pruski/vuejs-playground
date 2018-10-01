import {expect} from 'chai';
import sinon from 'sinon';
import {get} from '@/app/utils/api';

describe('api', () => {
  beforeEach(() => {
    window.fetch = sinon.spy();
  });

  afterEach(() => {
    delete window.fetch;
  });

  describe('get', () => {
    it('should prepend base api url to the url', () => {
      get('/test/endpoint');
      expect((window as any).fetch.calledWithMatch('api.themoviedb.org')).to.equal(true);
    });

    it('should append api key to the url', () => {
      get('/test/endpoint');
      expect((window as any).fetch.calledWithMatch('?api_key=')).to.equal(true);
    });

    it('should append query parameters to the url', () => {
      get('/test/endpoint', {param1: 'value1', param2: 'value2'});
      expect((window as any).fetch.calledWithMatch('&param1=value1&param2=value2')).to.equal(true);
    });
  });
});
