import { SignatureType } from '../const';

export type LetterData = {
  title: string;
  image: string;
  body: string;
  signatureType: SignatureType;
  accentStyle: boolean;
  addButton: boolean;
  addSocial: boolean;
  mainButtonTitle: string;
  mainButtonUrl: string;
}

export type Scheme = {
  title: string;
  url: string;
  image: string;
  imageAccent: string;
  backgroundColor: string;
  backgroundColorAccent: string;
  buttonColor: string;
  buttonColorAccent: string;
  signatureWidth: number;
  socialText: string;
  socialUrlVK: string;
  socialUrlTelegram: string;
}
