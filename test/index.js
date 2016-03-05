/* jshint -W030 */
'use strict';

import chai from 'chai';
import task from '../src';

const expect = chai.expect;

describe('Browserify Task', () => {
  describe('#name', () => {
    it('should be a string', () => {
      expect(task.name).to.be.a('string');
    });

    it('should be `browserify`', () => {
      expect(task.name).to.equal('browserify');
    });
  });

  describe('#description', () => {
    it('should be a string', () => {
      expect(task.description).to.be.a('string');
    });
  });

  describe('#config', () => {
    it('should be an object', () => {
      expect(task.config).to.be.a('object');
    });

    it('should contain a `src` property', () => {
      expect(task.config.src).to.be.a('string');
    });

    it('should contain a `dest` property', () => {
      expect(task.config.dest).to.be.a('string');
    });

    it('should contain a `filename` property', () => {
      expect(task.config.filename).to.be.a('string');
    });

    it('should contain a `options` property', () => {
      expect(task.config.options).to.be.a('array');
    });

    it('should contain a `min` property', () => {
      expect(task.config.min).to.be.a('boolean');
      expect(task.config.min).to.be.false;
    });

    it('should contain a `sourcemap` property', () => {
      expect(task.config.sourcemap).to.be.a('boolean');
      expect(task.config.sourcemap).to.be.false;
    });

    it('should contain a `watch` property', () => {
      expect(task.config.watch).to.be.a('boolean');
      expect(task.config.watch).to.be.false;
    });

    it('should contain a `watchFiles` property', () => {
      expect(task.config.watchFiles).to.be.a('array');
    });
  });

  describe('#help', () => {
    it('should be an object', () => {
      expect(task.help).to.be.a('object');
    });

    it('should contain a `min` property', () => {
      expect(task.help.min).to.be.a('string');
    });

    it('should contain a `sourcemap` property', () => {
      expect(task.help.sourcemap).to.be.a('string');
    });

    it('should contain a `watch` property', () => {
      expect(task.help.watch).to.be.a('string');
    });
  });

  describe('#fn', () => {
    it('should be a function', () => {
      expect(task.fn).to.be.a('function');
    });
  });
});
