/* eslint object-curly-newline:0 */
/* globals test */
import { expect } from 'chai';
import { cpf, cnpj, phone, cep, pis } from '.';

test('cpf should be a function', () => {
  expect(cpf).to.be.a('function');
});

test('cpf should to equal "123.456.789-00"', () => {
  expect(cpf('12345678900')).to.equal('123.456.789-00');
});

test('cnpj should be a function', () => {
  expect(cnpj).to.be.a('function');
});

test('cnpj("12345678000199") should to equal "12.345.678/0001-99"', () => {
  expect(cnpj('12345678000199')).to.equal('12.345.678/0001-99');
});

test('phone should be a function', () => {
  expect(phone).to.be.a('function');
});

test('phone("11984401122") should to equal "(11) 98440-1122"', () => {
  expect(phone('11984401122')).to.equal('(11) 98440-1122');
});

test('cep should be a function', () => {
  expect(cep).to.be.a('function');
});

test('cep("81825310") should to equal "81825-310"', () => {
  expect(cep('81825310')).to.equal('81825-310');
});

test('pis should be a function', () => {
  expect(pis).to.be.a('function');
});

test('pis("00000000000") should to equal "000.00000.00-0"', () => {
  expect(pis('00000000000')).to.equal('000.00000.00-0');
});
