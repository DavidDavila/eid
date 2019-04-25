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
export const VIDEOS:any = {
  signatureid:[
    {
      video: '/assets/signatureid/SignatureconOTPonline/signatureconotponline_01.mp4',
      poster: '/assets/signatureid/SignatureconOTPonline/signatureconotponline_01.jpg',
    },
    {
      video: '/assets/signatureid/SignatureconOTPonline/signatureconotponline_02.mp4',
      poster: '/assets/signatureid/SignatureconOTPonline/signatureconotponline_02.jpg',
    },
    { 
      video: '/assets/signatureid/SignatureconOTPonline/signatureconotponline_03.mp4',
      poster: '/assets/signatureid/SignatureconOTPonline/signatureconotponline_03.jpg',
    },
    {
      video: '/assets/signatureid/SignatureconCertIDonline/signatureconcertidonline_01.mp4',
      poster: '/assets/signatureid/SignatureconCertIDonline/signatureconcertidonline_01.jpg',
    },
    {
      video: '/assets/signatureid/SignatureconCertIDonline/signatureconcertidonline_02.mp4',
      poster: '/assets/signatureid/SignatureconCertIDonline/signatureconcertidonline_02.jpg',
    },
    {
      video: '/assets/signatureid/SignatureconCertIDonline/signatureconcertidonline_03.mp4',
      poster: '/assets/signatureid/SignatureconCertIDonline/signatureconcertidonline_03.jpg',
    },
    {
      video: '/assets/signatureid/SignatureconGRAFOenKIOSK/signaturecongrafoenkiosk_01.mp4',
      poster: '/assets/signatureid/SignatureconGRAFOenKIOSK/signaturecongrafoenkiosk_01.jpg',
    },
    {
      video: '/assets/signatureid/SignatureconGRAFOenKIOSK/signaturecongrafoenkiosk_02.mp4',
      poster: '/assets/signatureid/SignatureconGRAFOenKIOSK/signaturecongrafoenkiosk_02.jpg',
    },
    {
      video: '/assets/signatureid/SignatureconGRAFOenKIOSK/signaturecongrafoenkiosk_03.mp4',
      poster: '/assets/signatureid/SignatureconGRAFOenKIOSK/signaturecongrafoenkiosk_03.jpg',
    },
    {
      video: '/assets/signatureid/SignatureconGRAFOonline/signaturecongrafoonline_01.mp4',
      poster: '/assets/signatureid/SignatureconGRAFOonline/signaturecongrafoonline_01.jpg',
    },
    {
      video: '/assets/signatureid/SignatureconGRAFOonline/signaturecongrafoonline_02.mp4',
      poster: '/assets/signatureid/SignatureconGRAFOonline/signaturecongrafoonline_02.jpg',
    },
    {
      video: '/assets/signatureid/SignatureconGRAFOonline/signaturecongrafoonline_03.mp4',
      poster: '/assets/signatureid/SignatureconGRAFOonline/signaturecongrafoonline_03.jpg',
    },
    {
      video: '/assets/signatureid/SignatureconOTPenoficina/signatureconotpenoficina_01.mp4',
      poster: '/assets/signatureid/SignatureconOTPenoficina/signatureconotpenoficina_01.jpg',
    },
    {
      video: '/assets/signatureid/SignatureconOTPenoficina/signatureconotpenoficina_02.mp4',
      poster: '/assets/signatureid/SignatureconOTPenoficina/signatureconotpenoficina_02.jpg',
    },
    {
      video: '/assets/signatureid/SignatureconOTPenoficina/signatureconotpenoficina_03.mp4',
      poster: '/assets/signatureid/SignatureconOTPenoficina/signatureconotpenoficina_03.jpg',
    },
    {
      video: '/assets/signatureid/SignatureconSimileIDENkiosk/signatureconsimileidenkiosk_01.mp4',
      poster: '/assets/signatureid/SignatureconSimileIDENkiosk/signatureconsimileidenkiosk_01.jpg',
    },
    {
      video: '/assets/signatureid/SignatureconSimileIDENkiosk/signatureconsimileidenkiosk_02.mp4',
      poster: '/assets/signatureid/SignatureconSimileIDENkiosk/signatureconsimileidenkiosk_02.jpg',
    },
    {
      video: '/assets/signatureid/SignatureconSimileIDENkiosk/signatureconsimileidenkiosk_03.mp4',
      poster: '/assets/signatureid/SignatureconSimileIDENkiosk/signatureconsimileidenkiosk_03.jpg',
    },
    {
      video: '/assets/signatureid/SignatureconSmileIDenOFICINA/signatureconsmileidenoficina_01.mp4',
      poster: '/assets/signatureid/SignatureconSmileIDenOFICINA/signatureconsmileidenoficina_01.jpg',
    },
    {
      video: '/assets/signatureid/SignatureconSmileIDenOFICINA/signatureconsmileidenoficina_02.mp4',
      poster: '/assets/signatureid/SignatureconSmileIDenOFICINA/signatureconsmileidenoficina_02.jpg',
    },
    {
      video: '/assets/signatureid/SignatureconSmileIDenOFICINA/signatureconsmileidenoficina_03.mp4',
      poster: '/assets/signatureid/SignatureconSmileIDenOFICINA/signatureconsmileidenoficina_03.jpg',
    },
    {
      video: '/assets/signatureid/SignatureIDconOTPenKIOSK/signatureidconotpenkiosk_01.mp4',
      poster: '/assets/signatureid/SignatureIDconOTPenKIOSK/signatureidconotpenkiosk_01.jpg',
    },
    {
      video: '/assets/signatureid/SignatureIDconOTPenKIOSK/signatureidconotpenkiosk_02.mp4',
      poster: '/assets/signatureid/SignatureIDconOTPenKIOSK/signatureidconotpenkiosk_02.jpg',
    },
    {
      video: '/assets/signatureid/SignatureIDconOTPenKIOSK/signatureidconotpenkiosk_03.mp4',
      poster: '/assets/signatureid/SignatureIDconOTPenKIOSK/signatureidconotpenkiosk_03.jpg',
    },
    {
      video: '/assets/signatureid/SignatureIDeconSmileIDONLINE/signatureidconsmileidonline_01.mp4',
      poster: '/assets/signatureid/SignatureIDeconSmileIDONLINE/signatureidconsmileidonline_01.jpg',
    },
    {
      video: '/assets/signatureid/SignatureIDeconSmileIDONLINE/signatureidconsmileidonline_02.mp4',
      poster: '/assets/signatureid/SignatureIDeconSmileIDONLINE/signatureidconsmileidonline_02.jpg',
    },
    {
      video: '/assets/signatureid/SignatureIDeconSmileIDONLINE/signatureidconsmileidonline_03.mp4',
      poster: '/assets/signatureid/SignatureIDeconSmileIDONLINE/signatureidconsmileidonline_03.jpg',
    },
    {
      video: '/assets/signatureid/SignatureIDeMailOTP/signatureidemailotp_01.mp4',
      poster: '/assets/signatureid/SignatureIDeMailOTP/signatureidemailotp_01.jpg',
    },
    {
      video: '/assets/signatureid/SignatureIDeMailOTP/signatureidemailotp_02.mp4',
      poster: '/assets/signatureid/SignatureIDeMailOTP/signatureidemailotp_02.jpg',
    },
    {
      video: '/assets/signatureid/SignatureIDeMailOTP/signatureidemailotp_03.mp4',
      poster: '/assets/signatureid/SignatureIDeMailOTP/signatureidemailotp_03.jpg',
    }
  ],
  smileid:[
    {
      video: '/assets/signatureid/SignatureconOTPonline/signatureconotponline_01.mp4',
      poster: '/assets/signatureid/SignatureconOTPonline/signatureconotponline_01.jpg',
    },
    {
      video: '/assets/signatureid/SignatureconOTPonline/signatureconotponline_02.mp4',
      poster: '/assets/signatureid/SignatureconOTPonline/signatureconotponline_02.jpg',
    },
    { 
      video: '/assets/signatureid/SignatureconOTPonline/signatureconotponline_03.mp4',
      poster: '/assets/signatureid/SignatureconOTPonline/signatureconotponline_03.jpg',
    },
    {
      video: '/assets/signatureid/SignatureconCertIDonline/signatureconcertidonline_01.mp4',
      poster: '/assets/signatureid/SignatureconCertIDonline/signatureconcertidonline_01.jpg',
    },
    {
      video: '/assets/signatureid/SignatureconCertIDonline/signatureconcertidonline_02.mp4',
      poster: '/assets/signatureid/SignatureconCertIDonline/signatureconcertidonline_02.jpg',
    }
  ],
  videoid:[
    {
      video: '/assets/signatureid/SignatureconOTPonline/signatureconotponline_01.mp4',
      poster: '/assets/signatureid/SignatureconOTPonline/signatureconotponline_01.jpg',
    },
    {
      video: '/assets/signatureid/SignatureconOTPonline/signatureconotponline_02.mp4',
      poster: '/assets/signatureid/SignatureconOTPonline/signatureconotponline_02.jpg',
    },
    { 
      video: '/assets/signatureid/SignatureconOTPonline/signatureconotponline_03.mp4',
      poster: '/assets/signatureid/SignatureconOTPonline/signatureconotponline_03.jpg',
    },
    {
      video: '/assets/signatureid/SignatureconCertIDonline/signatureconcertidonline_01.mp4',
      poster: '/assets/signatureid/SignatureconCertIDonline/signatureconcertidonline_01.jpg',
    },
    {
      video: '/assets/signatureid/SignatureconCertIDonline/signatureconcertidonline_02.mp4',
      poster: '/assets/signatureid/SignatureconCertIDonline/signatureconcertidonline_02.jpg',
    }
  ]
}
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

