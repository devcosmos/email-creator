import { Scheme } from './types/data';

export enum SignatureType {
  Mai = 'mai.ru',
  Priem = 'priem.mai.ru',
  Pum = 'preduniversariy.mai.ru',
}

export enum DevicesView {
  Browser = 'browser',
  Mobile = 'mobile',
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
    signatureWidth: 528,
    socialText: 'Подпишись, чтобы быть в курсе последних новостей МАИ!',
    socialUrlVK: 'https://vk.com/maiuniversity',
    socialUrlTelegram: 'https://t.me/MAIuniversity',
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
    signatureWidth: 487,
    socialText: 'Подпишись, чтобы не пропустить новости о поступлении, обучении и мероприятиях для абитуриентов!',
    socialUrlVK: 'https://vk.com/postupi_v_mai',
    socialUrlTelegram: 'https://t.me/postupi_v_mai',
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
    signatureWidth: 419,
    socialText: 'Подпишись, чтобы не пропустить новости об обучении и мероприятиях!',
    socialUrlVK: 'https://vk.com/preduniversariymai',
    socialUrlTelegram: 'https://t.me/preduniversariymai',
  },
};
