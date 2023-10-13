import { Scheme } from './types/data';

export enum SignatureType {
  Mai = 'mai.ru',
  Priem = 'priem.mai.ru',
  Pum = 'preduniversariy.mai.ru',
}

export const SignatureScheme:
{[key in SignatureType]: Scheme} = {
  [SignatureType.Mai]: {
    title: 'Московский авиационный институт',
    url: 'https://mai.ru/',
    image: 'mai-logo-grey.png',
    imageAccent: 'mai-logo-white.png',
    backgroundColor: '#F9F9F9',
    backgroundColorAccent: '#2082FF',
    buttonColor: '#2082FF',
    buttonColorAccent: '#000000',
    signatureWidth: 535,
  },
  [SignatureType.Priem]: {
    title: 'Московский авиационный институт',
    url: 'https://priem.mai.ru/',
    image: 'mai-logo-grey.png',
    imageAccent: 'mai-logo-white.png',
    backgroundColor: '#F9F9F9',
    backgroundColorAccent: '#2082FF',
    buttonColor: '#FF7020',
    buttonColorAccent: '#000000',
    signatureWidth: 493,
  },
  [SignatureType.Pum]: {
    title: 'Предуниверсарий МАИ',
    url: 'https://preduniversariy.mai.ru/',
    image: 'pum-logo-accent.png',
    imageAccent: 'pum-logo-white.png',
    backgroundColor: '#F9F9F9',
    backgroundColorAccent: '#505CFD',
    buttonColor: '#505CFD',
    buttonColorAccent: '#000000',
    signatureWidth: 429,
  },
};
