import { initializeApp, cert, getApps, getApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import type { ServiceAccount } from 'firebase-admin';

// interface ServiceAccount {
//   type: string;
//   project_id: string;
//   private_key_id: string;
//   private_key: string; // Ensure this is a string with newlines
//   client_email: string;
//   client_id: string;
//   auth_uri: string;
//   token_uri: string;
//   auth_provider_x509_cert_url: string;
//   client_x509_cert_url: string;
// }
const serviceAccount:ServiceAccount = {
//   type: "service_account",
  projectId: "sourcehub-9d3b6", //process.env.FIREBASE_PROJECT_ID,
//   private_key_id: "4aed30c25d6c3db15283a770de495f36b45f2d58", // process.env.FIREBASE_PRIVATE_KEY_ID,
  privateKey:
    `-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC18KuyGO5Vx2Jh\nvdHDFYSxrI3Efd76dGeLrpzNCRTMEkbR+SkLrRXJDG6oUS57IPpd7jsdkint+QIL\nBfSAHvRZh0vOOVciXtCc+w+UoHty7+7fOuoD6qmngC77yC9N5AMDMTNWvvffemUq\n+WiM1rbCS3z9+Z3nfrrcat7B4eX+yU29hgem9ectFIO1eh+RUpg54kSfDs6KKDop\n8s4SnI4pI76VrcsfUss597Imn4IuB82jtxAgVL+LkTfh9fnSUo4BID32JIAzxlv4\n0m0TeayTlqTTXUo2KBtGfGTBob4EfORm+HdzC4W7o8QOQszBi+rYf75CdNAfzg1y\nJSwy14wDAgMBAAECggEACiBeyLyJ1MJn3717RbAWlku0CaIL3XAfLJodEMMW95Nz\ngk+rkNfNukaeiMXD9YciCEUF4KEjA6N0EVL/3HsHP03AKAvu+p3BCgu7PprUDtNQ\nk0zUe5VTDgdHa4IlMoukqJ0ow1pBB5zosUSiehGf/ckf0tmoMptOITiINM2y9G79\n24Dsa9zHXV4Ja5wCZduUcEuIJv6quppjPILo/0TJpRTGANLLSxJXsyo15s124nxT\njxp01Sr7uTkqEUlobvQ9nx7MVlqlrkG8UroplaRUBv/bQYrvGLj4U+hfTU1Wq/3v\nADhZJh8tBZx81iCGb1apGvhcuOen0873V4jXvl3r6QKBgQDX7/jWBrUcDy/gPi/t\nrV5qmus9Tm8q4g+8NQqc2Z4mmXXvSYGaWNDc7afoTTzkpB7WqEVxCcLCimrjLl2J\ns35h1B0ZuEc36WKkQtAvDRiL2ssmM/EpLhFI1pTyzQcIwPmiTb+lxE1zvJvgcvbM\n9FhrbN6vU4BC1GuELHmFI2ianQKBgQDXsfxGCmCd3NRrBI8i53zlIcM58wOBCbvc\n/W99l2FL/S4YpHnBtdpsPSifUWrTQTXPjn9DvN4MtfIwUND0OVtlX0GkOCJKxu7e\n9Pl+lSKqcUOswEEQDF2Vzv+GtJOxE482h/fCC7vocKqQBhCb/Tjk2+8fRF0MUH/Q\nnKjfYNIvHwKBgFkCG6ntHd4xDGT8fTkVS2PZ87lTiVM914qWuoco1J3Ih+pYfEmo\n7n8Cn0GMBNuiIuwMdINBqLwT3jdCt1+5UxD0JAKkCQcs9nIK8FFUrpeHWlGm+3Mk\nAA/sE315sbqUANI8BhFINzzLs9zyxnR5C7FMMQZH/wiNErxqsLSGgempAoGAZhfM\nvKo0yQO5V141EeRX7Wxpp4gq5GzjCtq6Zsu8NeeEZg2Tw+h7ljfsflxfH9cBzVg5\nTKqcv49vLwdRoAd2BylrPHuFX7eBYO67GPsmCV7LFX16TkpMEZiEwhG+xlXnt3vr\n/WDodEC/uqPkQLE+uLSRHk+Raz6/ANLl67U8RykCgYBvCqOiYTz6UOYLcQkRhJ45\n9Ji3I59b4hAxISjC3+LmdjbBlGA2Z8S5182IZymP0GkysZ7gUxot5qcpruWh+gv+\nnxCa8SabU7QRnjZjGNRHjamhpvQIZu398I/15qVF5KVqq3+EtJyIc92ibWpWNXf+\n8Z9Qa71frODUqS74qhWeOg==\n-----END PRIVATE KEY-----\n`.replace(
      /\\n/g,
      "\n"
    ), //process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  clientEmail:
    "firebase-adminsdk-fbsvc@sourcehub-9d3b6.iam.gserviceaccount.com", //process.env.FIREBASE_CLIENT_EMAIL,
//   clientId: "102501935227799064048", // process.env.FIREBASE_CLIENT_ID,
//   auth_uri: "https://accounts.google.com/o/oauth2/auth",
//   token_uri: "https://oauth2.googleapis.com/token",
//   auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
//   client_x509_cert_url:
    // "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40sourcehub-9d3b6.iam.gserviceaccount.com", // process.env.FIREBASE_CLIENT_CERT_URL,
};

const app =
  getApps().length === 0
    ? initializeApp({ credential: cert(serviceAccount as ServiceAccount) })
    : getApp();

const adminDb = getFirestore(app);

export { adminDb };
