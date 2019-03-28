import { environment } from '../environments/environment';

export const CONFIG = setEnvironment()

function setEnvironment(){
  if( environment.production){
    return {
      API_URL: 'https://etrust-sandbox.electronicid.eu/registry/',
      VIDEO_URL: 'https://etrust-sandbox.electronicid.eu/v2/',
      SERVER_URL: 'https://etrust-sandbox.electronicid.eu/',
    }
  } else{
    return {
      API_URL: 'https://server/registry/',
      VIDEO_URL: 'https://server/v2/',
      SERVER_URL: 'https://server/',
    }
  }
}

export const numberOfStepsOnPresentation:number = 2;

export const VIDEO_TIMMINGS:any =  {
   all: [110,1275],
   standBy:[36,108],
   frontLoop:[504,544],
   backLoop:[1738,1908],
   backToFront:[2075,2509],
   smileToBack: [1910,2074],
   frontToStandBy:[2510,2769],
   frontStart:108,
   frontEnd: 453,
   backStart:758,
   backEnd: 758,
   smileStart:17.5,
   smileEnd: 26
}
export const CLIENTS: Array<string> = [
  'santander.png',
  'nationale-nederlanden.png',
  'kpmg.png',
  'self-bank.png',
  'caixa.png',
  'carrefour.png',
];
export const TESTIMONIES: Array<any> = [
  {
    background:'tania.jpg',
    text:'The technology platform of Electronic Identification and the support provided by its team have allowed Self Bank to be the first in Spain to offer a new client registration by videoconference and to reduce the onboarding time.',
    name:'Alberto Navarro',
    jobTitle:'CEO. Self Bank'
  },
  {
    background:'tania.jpg',
    text:'The technology platform of Electronic Identification and the support provided by its team have allowed Self Bank to be the first in Spain to offer a new client registration by videoconference and to reduce the onboarding time.',
    name:'Alberto Navarro',
    jobTitle:'CEO. Self Bank'
  },
  {
    background:'tania.jpg',
    text:'The technology platform of Electronic Identification and the support provided by its team have allowed Self Bank to be the first in Spain to offer a new client registration by videoconference and to reduce the onboarding time.',
    name:'Alberto Navarro',
    jobTitle:'CEO. Self Bank'
  },
  {
    background:'tania.jpg',
    text:'The technology platform of Electronic Identification and the support provided by its team have allowed Self Bank to be the first in Spain to offer a new client registration by videoconference and to reduce the onboarding time.',
    name:'Alberto Navarro',
    jobTitle:'CEO. Self Bank'
  },
  {
    background:'tania.jpg',
    text:'The technology platform of Electronic Identification and the support provided by its team have allowed Self Bank to be the first in Spain to offer a new client registration by videoconference and to reduce the onboarding time.',
    name:'Alberto Navarro',
    jobTitle:'CEO. Self Bank'
  },
  {
    background:'tania.jpg',
    text:'The technology platform of Electronic Identification and the support provided by its team have allowed Self Bank to be the first in Spain to offer a new client registration by videoconference and to reduce the onboarding time.',
    name:'Alberto Navarro',
    jobTitle:'CEO. Self Bank'
  },
  {
    background:'tania.jpg',
    text:'The technology platform of Electronic Identification and the support provided by its team have allowed Self Bank to be the first in Spain to offer a new client registration by videoconference and to reduce the onboarding time.',
    name:'Alberto Navarro',
    jobTitle:'CEO. Self Bank'
  },

];

