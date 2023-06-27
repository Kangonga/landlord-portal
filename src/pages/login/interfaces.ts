export interface formInterface {
  phone: string;
  password: string;
  keepLoggedIn: boolean;
}

export interface apiResult {
  data: {
    user: number;
    token: string;
  };
  status: number;
  statusDesc: string;
}

interface motherMeterInterface {
  [number: string]: {
    mmId: number;
    buildingNo: string;
    accNo: string;
    accName: string;
    type: string;
    regDate: string;
    sm: subMeterInterface;
  };
}
interface subMeterInterface {
  [name: string]: {
    mmId: number;
    smId: number;
    accNo: string;
    type: number;
    regDate: string;
    payments: payment[];
  };
}
interface payment {
  mmId: number;
  smId: number;
  pId: number;
  paytime: string;
  txId: string;
  phone: string | null;
  payer: string | null;
  smNo: string;
  amount: string | null;
  token: string | null;
  units: string | null;
  paybill: number;
}

export interface dashboard {
  data: {
    Names: string;
    phone1: number | null;
    phone2: number | null;
    email: string | null;
    address: string | null;
    nationalID: string | null;
    regDate: string | null;
    mm: motherMeterInterface;
  };
  status: number;
  statusDesc: string;
}
