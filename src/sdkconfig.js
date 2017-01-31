import * as paypal from 'paypal-rest-sdk';

paypal.configure({
  'mode': 'sandbox',
  'client_id': 'Abh6vkwLOugBZ-0hsrc5cdBJLsu1KDnUv33tmjTtsmUOAA_JNAzCPzuOMDRljjLMV52SDMN4ppcTC0cY',
  'client_secret': 'EG1iKM5m2BG7CXi4k84VEyu9-69v2hF5Qajysyw77fmIDKYKhWfv9tzziiJs1fNRBVG7OrWmutlMb_-C'
});

export default paypal;